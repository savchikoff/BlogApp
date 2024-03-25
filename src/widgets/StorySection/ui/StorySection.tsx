import Image from "next/image";
import styles from "./StorySection.module.scss";
import storyImg from '../assets/storyImg.jpg';
import { Button } from "@/shared";

export function StorySection() {
    return (
        <div className={styles.storyWrapper}>
            <Image
                className={styles.storyImg}
                src={storyImg}// You should set the height as well for better responsiveness
                alt="story-img"
            />
            <div className={styles.storyContentWrapper}>
                <div className={styles.storySubHeader}>
                    Why we started
                </div>
                <div className={styles.storyInfoWrapper}>
                    <h2 className={styles.storyHeader}>
                        It started out as a simple idea and evolved into our passion
                    </h2>
                    <p className={styles.storyDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                </div>
                <Button isPrimary>Discover our story &gt;</Button>
            </div>
        </div>
    )
}