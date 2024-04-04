"use client"

import { PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';

function BurgerMenu({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(styles.burgerMenu, { [styles.open]: isOpen })}>
            <div role="button" className={styles.burgerMenuBar} onClick={toggleMenu}>
                <span className={classNames(styles.burgerMenuBarIcon, { [styles.open]: isOpen })} />
                <span className={classNames(styles.burgerMenuBarIcon, { [styles.open]: isOpen })} />
                <span className={classNames(styles.burgerMenuBarIcon, { [styles.open]: isOpen })} />
            </div>
            <nav className={styles.burgerMenuNav}>
                <div className={styles.burgerMenuNavItems}>
                    {children}
                </div>
            </nav>
        </div>
    );
}

export default BurgerMenu