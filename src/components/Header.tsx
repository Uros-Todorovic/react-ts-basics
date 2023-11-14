import { type FC, type ReactNode } from 'react';

interface Image {
	image: {
		src: string;
		alt: string;
	};
}

interface HeaderProps extends Image {
	children: ReactNode;
}

const Header: FC<HeaderProps> = ({ image, children }) => {
	return (
		<header>
			<img {...image} />
			{children}
		</header>
	);
};

export default Header;
