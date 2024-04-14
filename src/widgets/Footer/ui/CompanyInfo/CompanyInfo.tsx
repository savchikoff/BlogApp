import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@/shared/consts/socials';

import styles from './CompanyInfo.module.scss';

function CompanyInfo() {
	return (
		<div className={styles.companyInfoWrapper}>
			<div className={styles.companyContactInfo}>
				<div>Finstreet 118 2561 Fintown</div>
				<div>Hello@finsweet.com 020 7993 2905</div>
			</div>
			<ul className={styles.socialsLinks}>
				{socials.map(({ image, name, href }) => (
					<li key={name}>
						<Link href={href}>
							<Image src={image} alt={name} />
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CompanyInfo;
