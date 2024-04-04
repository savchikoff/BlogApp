"use client"

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import styles from "./StorySection.module.scss";
import { Button } from "@/shared";
import storyImg from '../assets/storyImg.webp';

export function StorySection() {
    const t = useTranslations("Home.Why")
    return (
        <section className={styles.storyWrapper}>
            <Slide>
                <div className={styles.storyImgWrapper}>
                    <Image
                        placeholder="blur"
                        className={styles.storyImg}
                        src={storyImg}
                        alt="story-img"
                    />
                </div>
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
        </section>
    )
}