"use client";

import { MouseEvent, useRef } from 'react';
import styles from "./Modal.module.scss";

import { IModalProps } from './interfaces';

export function Modal({ isOpen, onClose, children }: IModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!isOpen) {
        return null;
    }


    return (
        <div data-cy="modal-window" className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modalContainer} ref={modalRef}>
                <div className={styles.modalHeader}>
                    <div data-cy="modal-close-btn" className={styles.closeButton} onClick={onClose}>❌</div>
                </div>
                {children}
            </div>
        </div>
    );
};