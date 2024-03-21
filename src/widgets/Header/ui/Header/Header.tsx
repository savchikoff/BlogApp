import styles from './Header.module.scss';
import container from '@/styles/container.module.scss';
import { Navigation } from '../../../Navigation/ui/Navigation';
import LocaleSwitcher from '../LocaleSwitcher';
import { Button } from '@/shared';
import { CompanyName } from '@/shared';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={container.container}>
                <div className={styles.headerWrapper}>
                    <CompanyName />
                    <div className={styles.actionsWrapper}>
                        <Navigation />
                        <Button>
                            Video about us
                        </Button>
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </header>
    )
}
