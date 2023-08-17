import { createContext, useReducer } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
	const initialState = {
		questionss: [],
		score: 0,
		loading: false,
	};

	const [state, dispatch] = useReducer(QuizReducer, initialState);

	return (
		<QuizContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};

export default GithubContext;
