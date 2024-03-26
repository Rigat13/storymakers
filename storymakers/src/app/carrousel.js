'use client';
import React, {useEffect, useRef} from 'react';

let isCooldown = false;
let autoCarrouselDelay = 3000;
let elems;

async function autoCarrousel() {
    while (true) {
        if (!isCooldown) {
            const next = elems.find((elem) => elem.dataset.pos == 1);
            next.click();
            isCooldown = true;
            await new Promise(resolve => setTimeout(resolve, autoCarrouselDelay)); // Wait for 2 secondss
            isCooldown = false;
        }
        await new Promise(resolve => setTimeout(resolve, 0));
    }
}

export default function Carrousel() {
    let carouselListRef = useRef(null);
    let carouselItemsRefs = Array.from({length: 5}, () => useRef(null));

    useEffect(() => {
        function setupCarrousel() {
            const carouselList = carouselListRef.current;
            const carouselItems = carouselItemsRefs.map(ref => ref.current);

            if (!carouselList) return; // Ensure the carousel list is defined

            carouselList.addEventListener('click', function (event) {
                var newActive = event.target;
                var isItem = newActive.closest('.carousel__item');

                if (!isItem || newActive.classList.contains('carousel__item_active')) {
                    return;
                }
                update(newActive);
            });

            elems = carouselItems;

            const update = function (newActive) {
                const newActivePos = newActive.dataset.pos;

                const current = elems.find((elem) => elem.dataset.pos == 0);
                const prev = elems.find((elem) => elem.dataset.pos == -1);
                const next = elems.find((elem) => elem.dataset.pos == 1);
                const first = elems.find((elem) => elem.dataset.pos == -2);
                const last = elems.find((elem) => elem.dataset.pos == 2);

                current.classList.remove('carousel__item_active');

                [current, prev, next, first, last].forEach(item => {
                    var itemPos = item.dataset.pos;

                    item.dataset.pos = getPos(itemPos, newActivePos);
                });
            };

            const getPos = function (current, active) {
                const diff = current - active;

                if (Math.abs(current - active) > 2) {
                    return -current;
                }

                return diff;
            };
        }
        setupCarrousel();
        autoCarrousel();
    }, []);

    return (
        <div className="carousel" ref={carouselListRef}>
            <ul className="carousel__list">
                {carouselItemsRefs.map((ref, index) => (
                    <li key={index} ref={ref} className="carousel__item" data-pos={index - 2}>
                        {index + 3}
                    </li>
                ))}
            </ul>
        </div>
    );
}
