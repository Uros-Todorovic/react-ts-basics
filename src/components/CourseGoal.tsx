import { /* type PropsWithChildren */ type FC, type ReactNode } from 'react';

interface CourseGoalProps {
	id: string;
	title: string;
	children: ReactNode;
	onDelete: (id: string) => void;
}

// type CourseGoalProps = PropsWithChildren<{title: string}>

const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, onDelete }) => {
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button onClick={() => onDelete(id)}>Delete</button>
		</article>
	);
};

export default CourseGoal;
