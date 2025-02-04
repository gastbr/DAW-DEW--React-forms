export default function QuestionsReducer(state, action) {
    switch (action.type) {
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: [...state.questions, { ...action.payload, id: state.nextId }],
                nextId: state.nextId + 1,
            };
        case 'DELETE_QUESTION':
            return {
                ...state,
                questions: state.questions.filter(p => p.id !== action.payload)
            }
        default:
            return state
    }
}