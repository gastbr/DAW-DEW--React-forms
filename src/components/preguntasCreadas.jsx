/* eslint-disable react/prop-types */
import Pregunta from './pregunta'

export default function PreguntasCreadas({ preguntas, borrarPregunta }) {
    return (
        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        return (<Pregunta key={p.id} pregunta={p} borrarPregunta={borrarPregunta} />)
                    })
                }
            </ul>
        </div>
    )

}