"use client"

import { Slide, Zoom } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "./CompanyValues.module.scss";
import overview from '@/widgets/AboutUs/assets/overview.jpg';

function CompanyValues() {
    const t = useTranslations("AboutUs.CompanyValues");
    return (
        <div className={styles.valuesWrapper}>
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutUsWrapper}>
                    <Zoom>
                        <div className={styles.aboutUsHeader}>
                            <div className={styles.aboutUsSubHeading}>
                                {t("subHeading")}
                            </div>
                            <h1 className={styles.aboutUsHeading}>
                                {t("heading")}
                            </h1>
                        </div>
                    </Zoom>
                    <Slide direction="right">
                        <div className={styles.aboutUsDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </Slide>
                </div>
            </div>
            <Zoom>
                <div className={styles.imgWrapper}>
                    <Image
                        layout="responsive"
                        src={overview} alt="overview" />
                    <div className={styles.companyStatsContainer}>
                        <div className={styles.companyStatsWrapper}>
                            <div className={styles.companyNumberWrapper}>
                                <div className={styles.companyNumberValue}>12+</div>
                                <div className={styles.companyNumberDescription}>{t("blogsSubHeading")}</div>
                            </div>
                            <div className={styles.companyNumberWrapper}>
                                <div className={styles.companyNumberValue}>18K+</div>
                                <div className={styles.companyNumberDescription}>{t("viewsSubHeading")}</div>
                            </div>
                            <div className={styles.companyNumberWrapper}>
                                <div className={styles.companyNumberValue}>30K+</div>
                                <div className={styles.companyNumberDescription}>{t("usersSubHeading")}</div>
                            </div>
                        </div>
                        <div className={styles.lines}>
                            <div className={styles.purpleLine}></div>
                            <div className={styles.yellowLine}></div>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Slide>
                <div className={styles.keyValuesContainer}>
                    <div className={styles.keyValuesWrapper}>
                        <div className={styles.keyValueWrapper}>
                            <div className={styles.keyValueSubheader}>{t("missionSubHeading")}</div>
                            <h4 className={styles.keyValueHeader}>{t("missionHeading")}</h4>
                            <div className={styles.keyValueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>
                        </div>
                        <div className={styles.keyValueWrapper}>
                            <div className={styles.keyValueSubheader}>{t("visionSubHeading")}</div>
                            <h4 className={styles.keyValueHeader}>{t("visionHeading")}</h4>
                            <div className={styles.keyValueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>
                        </div>
                    </div>
                </div>
            </Slide>
        </div >
    )
}

export default CompanyValues