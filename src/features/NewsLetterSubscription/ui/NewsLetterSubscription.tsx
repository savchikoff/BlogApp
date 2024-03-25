import styles from "./NewsLetterSubscription.module.scss";
import NewsLetterForm from "./NewsLetterForm/NewsLetterForm";

export function NewsLetterSubscription() {
    return (
        <div className={styles.formWrapper}>
            <h3 className={styles.footerFormHeader}>
                Subscribe to our news letter to get latest updates and news
            </h3>
            <NewsLetterForm />
        </div>
    )
}