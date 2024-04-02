"use client"

import { useTranslations } from "next-intl";
import { Zoom } from "react-awesome-reveal";
import styles from "./Authors.module.scss";
import { authors } from "@/shared/consts/authors";
import Author from "./Author/Author";
export function Authors() {
    const t = useTranslations("Author")
    return (
        <section className={styles.authorsContainer}>
            <div className={styles.authorsWrapper}>
                <Zoom>
                    <h2 className={styles.authorsHeader}>{t('heading')}</h2>
                </Zoom>
                <div className={styles.authors}>
                    <Zoom>
                        {authors.map(({ img, role, name, link }) =>
                            <Author key={link} authorName={name} img={img} alt={name} position={role} link={link} />
                        )}
                    </Zoom>
                </div>
            </div>
        </section>
    )
}