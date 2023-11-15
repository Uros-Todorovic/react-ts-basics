import { type FC, type ReactNode } from 'react';
import { CourseGoal as CGType } from '../App.tsx';
import CourseGoal from './CourseGoal.tsx';
import InfoBox from './InfoBox.tsx';

interface CourseGoalProps {
	goals: Array<CGType>;
	onDeleteGoal: (id: string) => void;
}

const CourseGoalList: FC<CourseGoalProps> = ({ goals, onDeleteGoal }) => {
	if (goals.length === 0) {
		return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>;
	}

	let warningBox: ReactNode;
	if (goals.length >= 4) {
		warningBox = (
			<InfoBox mode="warning" severity="high">
				You are collecting too many goals. Don't put too much on your plate.
			</InfoBox>
		);
	}
	return (
		<>
			{warningBox}
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
