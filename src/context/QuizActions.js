import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchQuiz = async (category, difficulty, limit) => {
	const response = await axios.get(
		`http://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=${category}&difficulty=${difficulty}&limit=${limit}`
	);

	// const response =
	// 	await axios.get(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=Code&difficulty=Medium&limit=8
	// `);

	console.log(response.data);
};
