import { Categoria } from './Categoria'
import { Buscador } from './Buscador'
import { useState } from 'react';

export const Galeria = () => {

    const [categorias, setCategorias] = useState([]);

    const agregarCategoria = catNueva => {

        const existe = categorias.find(cat => cat.toLowerCase() == catNueva.toLowerCase());

        if (!existe) setCategorias([catNueva, ...categorias]);
    }


    return (
        <>
            <Buscador agregarCategoria={agregarCategoria} />

            {
                categorias.length > 0 && (
                    <div className='cnt95'>

                        <p className='mrg-top20 pad5'><strong>Categorias buscadas:</strong></p>

                        {categorias.map(cat =>
                            <a className='url pad5' key={`a${cat}`} href={`#${cat}`}> {cat} </a>)
                        }

                    </div>)
            }


            <div className="divGal">
                {
                    categorias.map(cat =>
                        <Categoria nombre={cat} key={cat} id={cat} />
                    )
                }

            </div>
        </>
    )
}
