import { pexels } from "../api/pexels";

export const fetchCategoria = async (categoria) => {

    const { photos } = await pexels(categoria);

    const fotos = photos.map(img => ({
        id: img.id,
        photographer: img.photographer,
        photographer_url: img.photographer_url,
        src: img.src.medium,
        alt: img.alt
    }));

    return fotos;

}