import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import NewGoal from './components/NewGoal.tsx';

export interface CourseGoal {
	title: string;
	description: string;
	id: string;
}

export default function App() {
	const [goals, setGoals] = useState<Array<CourseGoal>>([]);

	const AddGoalHandler = (title: string, description: string) => {
		const uniqueId = () => {
			const dateString = Date.now().toString(36);
			const randomness = Math.random().toString(36).substring(2);
			return dateString + randomness;
		};
		setGoals((prevGoals) => {
			const newGoal: CourseGoal = {
				id: uniqueId(),
				title,
				description,
			};
			return [...prevGoals, newGoal];
		});
	};

	const DeleteGoalHandler = (id: string) => {
		setGoals((prevGoals) => {
			return prevGoals.filter((goal) => goal.id !== id);
		});
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: 'A list of goals' }}>
				<h1>Your Course Goals</h1>
			</Header>
			<NewGoal onAddGoal={AddGoalHandler} />
			<CourseGoalList goals={goals} onDeleteGoal={DeleteGoalHandler} />
		</main>
	);
}
