import FormularioPregunta from './components/formularioPregunta'
import './App.css'
import { useState } from 'react'

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = preguntas.length + 1;
    setPreguntas([...preguntas, nueva]);
  }

  const deleteQuestion = (id) => {
    setPreguntas(preguntas.filter(p => p.id !== id));
  }

  return (
    <FormularioPregunta aniadePregunta={addQuestion} preguntas={preguntas} borrarPregunta={deleteQuestion} />
  )
}

export default App