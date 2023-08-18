import Header from './components/Header';
import QuizFetch from './components/QuizFetch';

const App = () => {
	return (
		<div className='flex flex-col items-center'>
			<Header />
			<QuizFetch />
		</div>
	);
};

export default App;
