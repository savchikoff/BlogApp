import Image from 'next/image';
import styles from './Partners.module.scss';
import { partners } from '../consts/partners';
import Link from 'next/link';

export function Partners() {
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.partnersWrapper}>
                <div className={styles.partnersTextContent}>
                    <div className={styles.partnersSubHeader}>We are</div>
                    <h6 className={styles.partnersHeader}>Featured in</h6>
                </div>
                {partners.map(({ alt, img }) => <Link href=""><Image className={styles.partnerImg} src={img} alt={alt} /></Link>)}
            </div>
        </div>
    )
}