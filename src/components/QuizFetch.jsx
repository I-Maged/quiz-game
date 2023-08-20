import { useState } from 'react';
import { fetchQuiz } from '../context/QuizActions';

const QuizFetch = () => {
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [questionsLength, setQuestionsLength] = useState(0);

	const onSubmit = (e) => {
		e.preventDefault();
		fetchQuiz('Code', 'Medium', 5);
		console.log('Form');
		console.log('category:', category);
		console.log('difficulty:', difficulty);
		console.log('questionsLength:', questionsLength);
	};

	return (
		<form
			className='form-control'
			onSubmit={onSubmit}
		>
			<h2 className='text-3xl font-bold p-6'>Choose Your Quiz</h2>
			<div className='mb-4'>
				<label
					htmlFor='category'
					className='label'
				>
					<span className='label-text'>Category</span>
				</label>
				<select
					className='select select-primary w-full max-w-xs'
					id='category'
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					<option value='linux'>Linux</option>
					<option value='bash'>Bash</option>
					<option value='docker'>Docker</option>
					<option value='sql'>SQL</option>
					<option value='cms'>CMS</option>
					<option value='code'>Code</option>
					<option value='devops'>DevOps</option>
				</select>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='difficulty'
					className='label'
				>
					<span className='label-text'>Difficulty</span>
				</label>
				<select
					className='select select-primary w-full max-w-xs'
					id='difficulty'
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}
				>
					<option value='Easy'>Easy</option>
					<option value='Medium'>Medium</option>
					<option value='Hard'>Hard</option>
				</select>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='questionsLength'
					className='label'
				>
					<span className='label-text'>Number of Questions</span>
				</label>
				<select
					className='select select-primary w-full max-w-xs'
					id='questionsLength'
					value={questionsLength}
					onChange={(e) => setQuestionsLength(e.target.value)}
				>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
					<option value='7'>7</option>
					<option value='8'>8</option>
					<option value='9'>9</option>
					<option value='10'>10</option>
					<option value='11'>11</option>
					<option value='12'>12</option>
					<option value='13'>13</option>
					<option value='14'>14</option>
					<option value='15'>15</option>
					<option value='16'>16</option>
					<option value='17'>17</option>
					<option value='18'>18</option>
					<option value='19'>19</option>
					<option value='20'>20</option>
				</select>
			</div>
			<button
				className='btn btn-neutral'
				type='submit'
			>
				Start
			</button>
		</form>
	);
};

export default QuizFetch;
