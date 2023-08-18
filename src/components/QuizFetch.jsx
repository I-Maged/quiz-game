import { fetchQuiz } from '../context/QuizActions';

const QuizFetch = () => {
	fetchQuiz('SQL', 'Easy', 5);

	return (
		<form className='form-control'>
			<h2 className='text-3xl font-bold p-6'>Choose Your Quiz</h2>
			<div className='mb-4'>
				<label className='label'>
					<span className='label-text'>Category</span>
				</label>
				<select className='select select-primary w-full max-w-xs'>
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
				<label className='label'>
					<span className='label-text'>Difficulty</span>
				</label>
				<select className='select select-primary w-full max-w-xs'>
					<option value='Easy'>Easy</option>
					<option value='Medium'>Medium</option>
					<option value='Hard'>Hard</option>
				</select>
			</div>
			<div className='mb-3'>
				<label className='label'>
					<span className='label-text'>Number of questions</span>
				</label>
				<select className='select select-primary w-full max-w-xs'>
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
		</form>
	);
};

export default QuizFetch;
