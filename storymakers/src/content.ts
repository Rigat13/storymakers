export const lang = ["ca", "es", "en"];
export const defaultLang = "es";

interface DictionaryEntry {
    // GENERAL
    btn_tedx_challenge: string;
    btn_im_brand: string;
    btn_about_us: string;
    title_challenges: string;
    title_brands: string;
    know_us: string;
    next_brand: string;
    more_info: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
    ca: {
        btn_tedx_challenge: "Repte TEDx",
        btn_im_brand: "Soc marca",
        btn_about_us: "Sobre nosaltres",
        title_challenges: "↓ He assistit ↓",
        title_brands: "Marques",
        know_us: "↓ Coneix-nos ↓",
        next_brand: "→ Vols ser la següent? ←",
        more_info: "Si t'has quedat amb ganes de saber-ne més, segueix-nos a "
    },
    es: {
        btn_tedx_challenge: "Reto TEDx",
        btn_im_brand: "Soy marca",
        btn_about_us: "Sobre nosotros",
        title_challenges: "↓ He asistido ↓",
        title_brands: "Marcas",
        know_us: "↓ Conócenos ↓",
        next_brand: " ¿Quieres ser la siguiente? ",
        more_info: "Si te has quedado con ganas de saber más, síguenos en "
    },
    en: {
        btn_tedx_challenge: "TEDx Challenge",
        btn_im_brand: "I'm brand",
        btn_about_us: "About us",
        title_challenges: "↓ I've attended ↓",
        title_brands: "Brands",
        know_us: "↓ About us ↓",
        next_brand: "→ Want to be the next one? ←",
        more_info: "If you want to know more, follow us on "
    },
}