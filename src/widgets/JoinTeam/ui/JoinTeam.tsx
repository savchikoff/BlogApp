import { Button } from '@/shared';
import styles from './JoinTeam.module.scss';
import Link from 'next/link';
import { routes } from '@/shared/consts/routes';

export function JoinTeam() {
    return (
        <div className={styles.joinTeamContainer}>
            <div className={styles.joinTeamWrapper}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.joinHeader}>Join our team to be a part of our story</h3>
                    <p className={styles.joinDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <Button isPrimary><Link href={routes.Contacts}>Join Now</Link></Button>
            </div>
        </div>
    )
}