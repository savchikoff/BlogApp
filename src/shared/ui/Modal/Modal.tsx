'use client';

import { MouseEvent, useRef } from 'react';
import { useDisableBodyScroll } from '@/shared/hooks/useDisableBodyScroll';
import styles from './Modal.module.scss';

import { IModalProps } from './Modal.interfaces';

export function Modal({ isOpen, onClose, children }: IModalProps) {
	const modalRef = useRef<HTMLDivElement>(null);

	useDisableBodyScroll(isOpen);

	const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			onClose();
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div
			role="dialog"
			data-cy="modal-window"
			className={styles.modalOverlay}
			onClick={handleOverlayClick}
		>
			<div className={styles.modalContainer} ref={modalRef}>
				<div className={styles.modalHeader}>
					<div
						role="button"
						data-cy="modal-close-btn"
						className={styles.closeButton}
						onClick={onClose}
					>
						❌
					</div>
				</div>
				{children}
			</div>
		</div>
	);
}
