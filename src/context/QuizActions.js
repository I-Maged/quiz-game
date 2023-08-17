import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const fetchQuiz = async () => {
	const response = await axios.get(
		`http://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&difficulty=Easy&limit=5`
	);

	console.log(response.data);
};
