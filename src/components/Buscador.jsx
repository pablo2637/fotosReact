import { useForm } from "../hooks/useForm"

export const Buscador = ({ agregarCategoria }) => {

    const {
        formulario,
        handlerChange,
        handlerSubmit,
        input } = useForm('')

    return (
        <>
            <div>
                {/* <p>
                    {JSON.stringify(formulario, null, 2)}
                </p> */}

                <p className="txt-center tit-h4 pad20">Buscador de Fotos - Galería</p>

                <div className="divBusc cnt90 txt-center">
                    <form onSubmit={(ev) => handlerSubmit(ev, agregarCategoria)}>
                        <input
                            className="mrg5 pad5 wdt150"
                            autoComplete="off"
                            type="text"
                            name="categoria"
                            id="categoria"
                            placeholder="Buscar..."
                            value={input}
                            onChange={handlerChange}
                        />

                        <button
                            className="mrg5 pad5 wdt80 crs-pntr"
                            type="submit"
                        >Añadir Categoría</button>

                    </form>

                </div>

            </div>
        </>
    )
}
