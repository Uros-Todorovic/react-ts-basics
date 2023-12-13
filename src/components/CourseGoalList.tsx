import { CourseGoal as CGType } from '../App.tsx';
import { type FC, type ReactNode } from 'react';
import CourseGoal from './CourseGoal.tsx';

/* 

import InfoBox from './InfoBox.tsx';
 */

type CourseGoalListProps = {
	goals: Array<CGType>;
	children?: ReactNode;
	onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
	return (
		<>
			<ul>
				{goals.map(({ id, title, description }) => {
					return (
						<li key={id}>
							<CourseGoal title={title} onDelete={onDeleteGoal} id={id}>
								<p>{description}</p>
							</CourseGoal>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default CourseGoalList;
