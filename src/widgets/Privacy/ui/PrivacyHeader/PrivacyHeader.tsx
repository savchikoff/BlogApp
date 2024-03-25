import styles from './PrivacyHeader.module.scss';

function PrivacyHeader() {
    return (
        <div className={styles.privacyHeaderContainer}>
            <div className={styles.privacyHeaderWrapper}>
                <h2 className={styles.privacyHeading}>Privacy Policy</h2>
                <p className={styles.updateTime}>Last Updated  on 27th January 2024</p>
            </div>
        </div>
    )
}

export default PrivacyHeader