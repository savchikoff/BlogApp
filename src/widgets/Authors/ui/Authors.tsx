"use client"

import { useTranslations } from "next-intl";
import styles from "./Authors.module.scss";
import { authors } from "@/shared/consts/authors";
import Author from "./Author/Author";
export function Authors() {
    const t = useTranslations("Author")
    return (
        <div className={styles.authorsContainer}>
            <div className={styles.authorsWrapper}>
                <h2 className={styles.authorsHeader}>{t('heading')}</h2>
                <div className={styles.authors}>
                    {authors.map(({ img, role, name, link }) =>
                        <Author key={link} authorName={name} img={img} alt={name} position={role} link={link} />
                    )}
                </div>
            </div>
        </div>
    )
}