import Image from "next/image";

import styles from "./CompanyValues.module.scss";
import overview from '@/widgets/AboutUs/assets/overview.jpg';

function CompanyValues() {
    return (
        <div className={styles.valuesWrapper}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutUsWrapper}>
                    <div className={styles.aboutUsHeader}>
                        <div className={styles.aboutUsSubHeading}>
                            ABOUT US
                        </div>
                        <h1 className={styles.aboutUsHeading}>
                            We are a team of content writers who share their learnings
                        </h1>
                    </div>
                    <div className={styles.aboutUsDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
            <div className={styles.imgWrapper}>
                <Image
                    layout="responsive"
                    src={overview} alt="overview" />
                <div className={styles.companyStatsContainer}>
                    <div className={styles.companyStatsWrapper}>
                        <div className={styles.companyNumberWrapper}>
                            <div className={styles.companyNumberValue}>12+</div>
                            <div className={styles.companyNumberDescription}>Blogs Published</div>
                        </div>
                        <div className={styles.companyNumberWrapper}>
                            <div className={styles.companyNumberValue}>18K+</div>
                            <div className={styles.companyNumberDescription}>Views on Finsweet</div>
                        </div>
                        <div className={styles.companyNumberWrapper}>
                            <div className={styles.companyNumberValue}>30K+</div>
                            <div className={styles.companyNumberDescription}>Total active Users</div>
                        </div>
                    </div>
                    <div className={styles.lines}>
                        <div className={styles.purpleLine}></div>
                        <div className={styles.yellowLine}></div>
                    </div>
                </div>
            </div>
            <div className={styles.keyValuesContainer}>
                <div className={styles.keyValuesWrapper}>
                    <div className={styles.keyValueWrapper}>
                        <div className={styles.keyValueSubheader}>Our mision</div>
                        <h4 className={styles.keyValueHeader}>Creating valuable content for creatives all around the world</h4>
                        <div className={styles.keyValueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>
                    </div>
                    <div className={styles.keyValueWrapper}>
                        <div className={styles.keyValueSubheader}>Our Vision</div>
                        <h4 className={styles.keyValueHeader}>A platform that empowers individuals to improve</h4>
                        <div className={styles.keyValueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default CompanyValues