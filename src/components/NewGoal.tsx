import { useRef, type FormEvent, type FC } from 'react';

type NewGoalProps = {
	onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
	const goal = useRef<HTMLInputElement>(null);
	const summary = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredGoal = goal.current!.value;
		const enteredSummary = goal.current!.value;

		event.currentTarget.reset();

		onAddGoal(enteredGoal, enteredSummary);

		// new FormData(event.currentTarget)
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your goal</label>
				<input id="goal " type="text" ref={goal} />
			</p>
			<p>
				<label htmlFor="summary">Short summary</label>
				<input id="summary " type="text" ref={summary} />
			</p>
			<p>
				<button>Add goal</button>
			</p>
		</form>
	);
};

export default NewGoal;
