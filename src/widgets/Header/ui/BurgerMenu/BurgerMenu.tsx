'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useDisableBodyScroll } from '@/shared/hooks/useDisableBodyScroll';
import styles from './BurgerMenu.module.scss';
import { IBurgerMenuProps } from './BurgerMenu.interfaces';

function BurgerMenu({ children, isModalOpen }: IBurgerMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	useDisableBodyScroll(isOpen);

	useEffect(() => {
		setIsOpen(false);
	}, [isModalOpen]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={classNames(styles.burgerMenu, { [styles.open]: isOpen })}>
			<div role="button" className={styles.burgerMenuBar} onClick={toggleMenu}>
				<span
					className={classNames(styles.burgerMenuBarIcon, {
						[styles.open]: isOpen,
					})}
				/>
				<span
					className={classNames(styles.burgerMenuBarIcon, {
						[styles.open]: isOpen,
					})}
				/>
				<span
					className={classNames(styles.burgerMenuBarIcon, {
						[styles.open]: isOpen,
					})}
				/>
			</div>
			<nav className={styles.burgerMenuNav}>
				<div className={styles.burgerMenuNavItems}>{children}</div>
			</nav>
		</div>
	);
}

export default BurgerMenu;
