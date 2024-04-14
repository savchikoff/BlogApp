import { NewsLetterSubscription } from '@/features/NewsLetterSubscription';
import { CompanyName } from '@/shared';
import { Navigation } from '@/widgets/Navigation/ui/Navigation';

import CompanyInfo from './CompanyInfo/CompanyInfo';

import styles from './Footer.module.scss';
import container from '@/shared/styles/container.module.scss';

export function Footer() {
	return (
		<footer data-cy="footer" className={styles.footer}>
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
	);
}
