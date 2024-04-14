import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@/shared/consts/socials';

import { IAuthorProps } from './Author.interfaces';

import styles from './Author.module.scss';

function Author({ authorName, position, img, alt, link }: IAuthorProps) {
	return (
		<article className={styles.authorWrapper}>
			<Image placeholder="blur" src={img} alt={alt} />
			<div className={styles.textContent}>
				<Link href={link}>
					<h3 className={styles.authorName}>{authorName}</h3>
				</Link>
				<div className={styles.position}>{position}</div>
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
		</article>
	);
}

export default Author;
