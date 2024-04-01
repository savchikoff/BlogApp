"use client"

import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import styles from "./StorySection.module.scss";
import storyImg from '../assets/storyImg.jpg';
import { Button } from "@/shared";
import { useTranslations } from "next-intl";

export function StorySection() {
    const t = useTranslations("Home.Why")
    return (
        <div className={styles.storyWrapper}>
            <Slide>
                <Image
                    className={styles.storyImg}
                    src={storyImg}
                    alt="story-img"
                />
            </Slide>
            <div className={styles.storyContentWrapper}>
                <Slide direction="right">
                    <div className={styles.storySubHeader}>
                        {t("subHeading")}
                    </div>
                    <div className={styles.storyInfoWrapper}>
                        <h2 className={styles.storyHeader}>
                            {t("heading")}
                        </h2>
                        <p className={styles.storyDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                    <Button isPrimary>{t("link")} &gt;</Button>
                </Slide>
            </div>
        </div>
    )
}