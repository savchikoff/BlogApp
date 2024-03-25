import styles from "./Hero.module.scss";
import container from "@/styles/container.module.scss";
import Link from "next/link";
import { Button } from "@/shared";
import { routes } from "@/shared/consts/routes";

export function Hero() {
    return (
        <div className={styles.headerContainer}>
            <div className={container.container}>
                <div className={styles.contentWrapper}>
                    <div className={styles.infoWrapper}>
                        <p className={styles.subHeader}>
                            Posted on <strong>startup</strong>
                        </p>
                        <h1 className={styles.mainHeader}>
                            Step-by-step guide to choosing great font pairs
                        </h1>
                        <div className={styles.articleInfo}>
                            By <span className={styles.authorInfo}>James West</span>  |  May 23, 2022
                        </div>
                        <p className={styles.description}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                    <Button isPrimary><Link href={routes.Blog}>Read More &gt;</Link></Button>
                </div>
            </div>
        </div>
    )
}