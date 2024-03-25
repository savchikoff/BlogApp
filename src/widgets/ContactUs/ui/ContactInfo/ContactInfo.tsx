import styles from './ContactInfo.module.scss';

function ContactInfo() {
    return (
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfoWrapper}>
                <div className={styles.contactInfoSection}>
                    <div className={styles.contactInfoHeading}>Working hours</div>
                    <div className={styles.line}></div>
                    <div className={styles.contactInfoDataWrapper}>
                        <p className={styles.contactInfoData}>Monday To Friday</p>
                        <p className={styles.contactInfoData}>9:00 AM to 8:00 PM </p>
                        <p className={styles.contactInfoMessage}>Our Support Team is available 24/7</p>
                    </div>
                </div>
                <div className={styles.contactInfoSection}>
                    <div className={styles.contactInfoHeading}>Contact Us</div>
                    <div className={styles.line}></div>
                    <div className={styles.contactInfoDataWrapper}>
                        <p className={styles.contactInfoData}>
                            <a href="callto: 020 7993 2905">020 7993 2905</a>
                        </p>
                        <p className={styles.contactInfoMessage}>
                            <a href="mailto: hello@finsweet.com">hello@finsweet.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo