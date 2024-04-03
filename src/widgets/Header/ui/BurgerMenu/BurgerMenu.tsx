"use client"

import { PropsWithChildren, useState } from 'react';
import styles from './BurgerMenu.module.scss';

function BurgerMenu({ children }: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.burgerMenu + (isOpen ? ` ${styles.open}` : '')}>
            <div role="button" className={styles.burgerMenuBar} onClick={toggleMenu}>
                <span className={styles.burgerMenuBarIcon} />
                <span className={styles.burgerMenuBarIcon} />
                <span className={styles.burgerMenuBarIcon} />
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