import { Text } from '../text';

import styles from './Button.module.scss';

type ButtonVariant = 'apply' | 'clear' | 'default';

export const Button = ({
	title,
	onClick,
	type = 'default',
	htmlType = 'button',
}: {
	title: string;
	onClick?: () => void;
	type?: ButtonVariant;
	htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	const buttonClass = `${styles.button} ${styles[type] || ''}`.trim();

	return (
		<button className={buttonClass} type={htmlType} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
