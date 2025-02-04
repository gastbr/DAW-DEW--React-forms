import FormularioPregunta from './components/formularioPregunta'
import './App.css'
import QuestionsProvider from './providers/QuestionsProvider';
import PreguntasCreadas from './components/preguntasCreadas';

function App() {
  // const [preguntas, setPreguntas] = useState([]);

  // const addQuestion = (nueva) => {
  //   nueva.id = preguntas.length + 1;
  //   setPreguntas([...preguntas, nueva]);
  // }

  // const deleteQuestion = (id) => {
  //   setPreguntas(preguntas.filter(p => p.id !== id));
  // }

  return (
    <QuestionsProvider>
      <FormularioPregunta />
      <PreguntasCreadas />
    </QuestionsProvider>
  )
}

export default App