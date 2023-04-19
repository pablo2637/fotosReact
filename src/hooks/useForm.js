import { useState } from "react";

export const useForm = (estadoInicial) => {

    const [formulario, setFormulario] = useState(estadoInicial);

    const [input, setInput] = useState('');

    const serializarFormulario = (form) => {

        const data = [];

        const formData = new FormData(form);

        for (let [key, value] of formData) {
            data[key] = value.trim();
        }

        return data;
    }

    const handlerSubmit = (ev, agregarCategoria) => {
        ev.preventDefault();        

        const data = serializarFormulario(ev.target);
        
        if (data.categoria.length <= 1) return

        agregarCategoria(data.categoria);
        setFormulario(data);

        setInput('');
    }

    const handlerChange = ({ target }) => {

        setFormulario({
            ...formulario,
            [target.name]: target.value
        });

        setInput(target.value);

    }


    return {
        formulario,
        handlerSubmit,
        handlerChange,
        input
    }
}
