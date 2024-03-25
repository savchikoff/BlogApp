import styles from "./Footer.module.scss";
import container from "@/styles/container.module.scss";
import { Navigation } from "@/widgets/Navigation/ui/Navigation";
import { CompanyName } from "@/shared";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import { NewsLetterSubscription } from "@/features/NewsLetterSubscription";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={container.container}>
                <div className={styles.footerWrapper}>
                    <div className={styles.navigationWrapper}>
                        <CompanyName />
                        <Navigation isWithPrivacy />
                    </div>
                    <NewsLetterSubscription />
                    <CompanyInfo />
                </div>
            </div>
        </footer>
    )
}
