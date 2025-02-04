/* eslint-disable react/prop-types */
import Pregunta from './pregunta'
import { useQuestions } from '../providers/QuestionsProvider'

export default function PreguntasCreadas() {
    const { preguntas } = useQuestions();
    return (
        <div>
            <ul className="list-group">
                {
                    preguntas.map(p => {
                        return (<Pregunta key={p.id} pregunta={p} />)
                    })
                }
            </ul>
        </div>
    )

}