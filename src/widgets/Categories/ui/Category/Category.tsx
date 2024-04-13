import Link from 'next/link';
import Image from 'next/image';
import styles from './Category.module.scss';
import { ICategoryProps } from './Category.interfaces';

function Category({ category, img, link = '', dataCy }: ICategoryProps) {
	return (
		<Link data-cy={dataCy} href={link}>
			<article className={styles.categoryContainer}>
				<Image width={48} height={48} src={img} alt={`${category}-icon`} />
				<div className={styles.textContent}>
					<h3 className={styles.categoryHeader}>{category}</h3>
					<p className={styles.categoryDescription}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
					</p>
				</div>
			</article>
		</Link>
	);
}

export default Category;
