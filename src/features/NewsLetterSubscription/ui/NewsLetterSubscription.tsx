"use client"

import { useTranslations } from "next-intl";
import styles from "./NewsLetterSubscription.module.scss";
import NewsLetterForm from "./NewsLetterForm/NewsLetterForm";

export function NewsLetterSubscription() {
    const t = useTranslations("Footer")
    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.footerFormHeader}>
                {t("formHeading")}
            </h3>
            <NewsLetterForm />
        </div>
    )
}