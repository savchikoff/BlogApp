import styles from './Button.module.scss';
import { IButtonProps } from './interfaces';

export function Button({ isPrimary = false, children }: IButtonProps) {
    return (
        <button
            className={isPrimary ? styles.buttonPrimary : styles.buttonSecondary}
        >
            {children}
        </button>
    )
}
