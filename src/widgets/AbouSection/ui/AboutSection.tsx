import Link from "next/link";
import styles from "./AboutSection.module.scss";

export function AboutSection() {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.lines}>
                <div className={styles.yellowLine}></div>
                <div className={styles.purpleLine}></div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.aboutUsWrapper}>
                    <div className={styles.subHeader}>
                        ABOUT US
                    </div>
                    <div className={styles.contentWrapper}>
                        <h2 className={styles.aboutHeader}>
                            We are a community of content writers who share their learnings
                        </h2>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link href='/about-us'><span className={styles.aboutUsLink}>Read More &gt;</span></Link>
                    </div>
                </div>
                <div className={styles.missionWrapper}>
                    <div className={styles.subHeader}>
                        OUR MISSION
                    </div>
                    <div className={styles.contentWrapper}>
                        <h3 className={styles.missionHeader}>
                            Creating valuable content for creatives all around the world                        </h3>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
