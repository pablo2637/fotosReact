import { Card } from './Card'
import { useFetch } from '../hooks/useFetch'

export const Categoria = ({ id, nombre }) => {


    const { fotos, isLoading } = useFetch(nombre);

    return (
        <section className="cnt95" id={id}>

            <h2 className='mrg-top20 brd-btt2'>{nombre}</h2>
            <a href="#" className='dsp-blck txt-right'>Back to Top</a>

            {
                isLoading && (
                    <div className='cnt95 txt-center'>
                        <h3>Cargando...</h3>
                    </div>
                )
            }

            {
                fotos.length != 0 ? (

                    <div className="divCat pad15 dsp-grd">
                        {fotos.map(el => <Card key={el.id} {...el} />)}
                    </div>

                ) : (
                    !isLoading && (
                        <div className='cnt95 txt-center pad10'>
                            <h3>No hay resultados...</h3>
                        </div>
                    )
                )
            }

        </section>
    )
}
