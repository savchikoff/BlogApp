import Link from "next/link";
import styles from "./CompanyName.module.scss";

export function CompanyName() {
    return (
        <Link href="/" className={styles.companyName}>
            Modsen Client Blog
        </Link>
    )
}
