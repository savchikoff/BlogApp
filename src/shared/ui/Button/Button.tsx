import { IButtonProps } from './Button.interfaces';

import styles from './Button.module.scss';

export function Button({
	isPrimary = false,
	children,
	type = 'button',
	disabled = false,
	dataCy,
	onClick,
}: IButtonProps) {
	return (
		<button
			data-cy={dataCy}
			className={isPrimary ? styles.buttonPrimary : styles.buttonSecondary}
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
