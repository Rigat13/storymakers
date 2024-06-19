"use client";

import React, {useEffect, useRef, useState} from 'react';


let isCooldown = false;
let autoCarrouselDelay = 3500;
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

export  function Carrousel({reelsInput}) {
    let carouselListRef = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let carouselItemsRefs = Array.from({length: 5}, () => useRef(null));
    type reels = {url:string}
    let reelsData:reels[] = reelsInput;
    
   
   
   
    useEffect(() => {
       
        function setupCarrousel() {
            const carouselList:any = carouselListRef.current;
            const carouselItems = carouselItemsRefs.map(ref => ref.current);
            

            if (!carouselList ) return; // Ensure the carousel list is defined
                carouselList.addEventListener('click', function (event) {
                var newActive = event.target;
                var isItem = newActive.closest('.carousel-item');

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

                [current, prev, next, first, last].forEach(item=> {
                    var itemPos = item.dataset.pos;
                    item.dataset.pos = getPos(itemPos, newActivePos);                   
                    
                })
               
                
                ;
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
    });

    function result(){
        if(reelsData ){
            if(reelsData.length>0){
               
                    return( 
                    
                    <div className="carousel" ref={carouselListRef}>
                    <ul className="carousel-list" >
                    
                    {
                    carouselItemsRefs.map((ref, index) => (             
                        <>  
                      
                        <li className={`carousel-item`} style={{backgroundImage:`url('./${reelsData[index]['url']}')`}}  key={index} ref={ref} data-pos={index - 2}>    
                           
                        {index + 3}
                        
                            </li>         
                        
                           
                                          
                        
                        </>
                        ))

                    
                    }
                    
                    </ul>
                </div>
            )
        }
    }
}    
    

    return (result());


}

export default function  CarrouselData(){

    var [reels,setReels] = useState([]);

    useEffect(() => {
       
        fetch('./data/reels.json'
         ,{
             headers : { 
               'Content-Type': 'application/json',
               'Accept': 'application/json'
              }
           }
 
        ).then((res) => res.json())
        .then((json) => {
        setReels(json.reels);
        
       })
     
     })
     return(

       <Carrousel reelsInput={reels}/>

     )

     /*return(

        reels.map( (reel,i) => (
            <div className="carousel" >
                
            <ul className="carousel__list">
                <li key={i} >
                    <img src={reel.url} />
                </li>
            </ul>    
            </div>

        )
        )

     )*/


}




