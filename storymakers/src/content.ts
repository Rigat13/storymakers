export const lang = ["ca", "es", "en"];
export const defaultLang = "es";

interface DictionaryEntry {
    // GENERAL
    btn_tedx_challenge: string;
    btn_im_brand: string;
    btn_about_us: string;
    title_challenges: string;
    title_brands: string;
}

export const dictionary: Record<string, DictionaryEntry> = {
    ca: {
        btn_tedx_challenge: "Repte TEDx",
        btn_im_brand: "Soc marca",
        btn_about_us: "Sobre nosaltres",
        title_challenges: "Repte",
        title_brands: "Marques",
    },
    es: {
        btn_tedx_challenge: "Reto TEDx",
        btn_im_brand: "Soy marca",
        btn_about_us: "Sobre nosotros",
        title_challenges: "Reto",
        title_brands: "Marcas",
    },
    en: {
        btn_tedx_challenge: "TEDx Challenge",
        btn_im_brand: "I'm brand",
        btn_about_us: "About us",
        title_challenges: "Challenge",
        title_brands: "Brands",
    },
}