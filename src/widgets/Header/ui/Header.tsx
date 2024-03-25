"use client"

import { useState } from 'react';
import styles from './Header.module.scss';
import container from '@/styles/container.module.scss';
import { Navigation } from '../../Navigation/ui/Navigation';
import LocaleSwitcher from './LocaleSwitcher';
import { Button } from '@/shared';
import { CompanyName } from '@/shared';
import { Modal } from '@/shared';

export function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={container.container}>
                <div className={styles.headerWrapper}>
                    <CompanyName />
                    <div className={styles.actionsWrapper}>
                        <Navigation />
                        <Button onClick={handleModalOpen}>
                            Video about us
                        </Button>
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <iframe width="600" height="315"
                    allowFullScreen
                    frameBorder="0"
                    src="https://www.youtube.com/embed/z3PepN_qRA0">
                </iframe>
            </Modal>
        </header>
    )
}
