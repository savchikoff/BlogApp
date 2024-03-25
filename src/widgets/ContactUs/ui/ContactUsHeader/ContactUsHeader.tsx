import styles from './ContactUsHeader.module.scss';

function ContactUsHeader() {
    return (
        <div className={styles.contactUsHeaderContainer}>
            <div className={styles.contactUsHeaderWrapper}>
                <div className={styles.contactUsSubheading}>
                    Contact us
                </div>
                <h1 className={styles.contactUsHeading}>
                    Let’s Start a Conversation
                </h1>
                <p className={styles.contactUsDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
            </div>
        </div>
    )
}

export default ContactUsHeader