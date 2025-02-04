/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, createContext, useContext } from "react";
import QuestionsReducer from "./QuestionsReducer";

const QuestionsContext = createContext();

export const useQuestions = () => useContext(QuestionsContext);

export default function QuestionsProvider({ children }) {
    const [state, dispatch] = useReducer(QuestionsReducer, { questions: [], nextId: 1 });

    const addQuestion = (nueva) => dispatch({ type: 'ADD_QUESTION', payload: nueva });
    const deleteQuestion = (id) => dispatch({ type: 'DELETE_QUESTION', payload: id });

    return (
        <QuestionsContext.Provider value={{ preguntas: state.questions, addQuestion, deleteQuestion }}>
            {children}
        </QuestionsContext.Provider>
    )
}