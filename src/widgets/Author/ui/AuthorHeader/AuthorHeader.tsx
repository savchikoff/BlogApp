'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classNames from 'classnames';

import { socials } from '@/shared/consts/socials';

import { IAuthorHeaderProps } from './AuthorHeader.interface';

import styles from './AuthorHeader.module.scss';
import container from '@/shared/styles/container.module.scss';

function AuthorHeader({ img, name }: IAuthorHeaderProps) {
	const t = useTranslations('AuthorPage');
	return (
		<section className={styles.authorHeaderContainer}>
			<div
				className={classNames(container.container, styles.authorHeaderWrapper)}
			>
				<div className={styles.authorInfoWrapper}>
					<Image
						placeholder="blur"
						width={200}
						height={200}
						src={img}
						alt={name}
					/>
					<div className={styles.authorTextInfoWrapper}>
						<h1 className={styles.authorWelcomeMessage}>
							{t('authorHeading', { name })}
						</h1>
						<p className={styles.authorDescription}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
							blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
							At risus viverra adipiscing at in tellus.
						</p>
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
				</div>
				<div className={styles.authorHeaderLines}>
					<div className={styles.authorHeaderYellowLine} />
					<div className={styles.authorHeaderPurpleLine} />
				</div>
			</div>
		</section>
	);
}

export default AuthorHeader;
