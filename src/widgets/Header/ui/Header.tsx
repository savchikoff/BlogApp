'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Header.module.scss';
import container from '@/shared/styles/container.module.scss';
import { Navigation } from '../../Navigation/ui/Navigation';
import { useDisableBodyScroll } from '@/shared/hooks/useDisableBodyScroll';
import LocaleSwitcher from './LocaleSwitcher';
import { Button, Modal, CompanyName } from '@/shared';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export function Header() {
	const t = useTranslations('VideoButton');

	const [isModalOpen, setIsModalOpen] = useState(false);

	useDisableBodyScroll(isModalOpen);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<header data-cy="header" className={styles.header}>
			<div className={container.container}>
				<div className={styles.headerWrapper}>
					<CompanyName />
					<div className={styles.actionsWrapper}>
						<Navigation />
						<Button dataCy="modal-btn" onClick={handleModalOpen}>
							{t('label')}
						</Button>
						<LocaleSwitcher />
					</div>
					<BurgerMenu isModalOpen={isModalOpen}>
						<Navigation />
						<Button isPrimary dataCy="modal-btn" onClick={handleModalOpen}>
							{t('label')}
						</Button>
						<LocaleSwitcher />
					</BurgerMenu>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={handleModalClose}>
				<iframe
					className={styles.iFrameContainer}
					title="video"
					allowFullScreen
					frameBorder="0"
					src="https://www.youtube.com/embed/zRp4NS_eeGc"
				/>
			</Modal>
		</header>
	);
}
