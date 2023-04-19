import { useEffect, useState } from "react";
import { fetchCategoria } from "../helpers/fetchCategoria";

export const useFetch = (categoria) => {

    const [fotos, setFotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const NewPhotos = await fetchCategoria(categoria);

        setFotos(NewPhotos);

        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])


    return {
        fotos,
        isLoading
    }

};
