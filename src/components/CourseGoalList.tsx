import { type FC } from 'react';
import { CourseGoal as CGType } from '../App.tsx';
import CourseGoal from './CourseGoal.tsx';

interface CourseGoalProps {
	goals: Array<CGType>;
	onDeleteGoal: (id: string) => void;
}

const CourseGoalList: FC<CourseGoalProps> = ({ goals, onDeleteGoal }) => {
	return (
		<>
			<ul>
				{goals.map((goal) => (
					<li key={goal.id}>
						<CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
							<p>{goal.description}</p>
						</CourseGoal>
					</li>
				))}
			</ul>
		</>
	);
};

export default CourseGoalList;
