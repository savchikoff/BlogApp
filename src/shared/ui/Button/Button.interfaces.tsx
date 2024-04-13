import { ReactNode } from 'react';

export interface IButtonProps {
	isPrimary?: boolean;
	children: ReactNode;
	type?: 'submit' | 'reset' | 'button' | undefined;
	disabled?: boolean;
	onClick?: () => void;
	dataCy?: string;
}
