import Link from 'next/link';
import Image from 'next/image';
import styles from './Category.module.scss';
import { ICategoryProps } from './interfaces';

function Category({ category, img, link = "", dataCy }: ICategoryProps) {
    return (
        <Link data-cy={dataCy} href={link}>
            <article className={styles.categoryContainer}>
                <Image src={img} alt={`${category}-icon`} />
                <div className={styles.textContent}>
                    <h4 className={styles.categoryHeader}>{category}</h4>
                    <p className={styles.categoryDescription}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </div>
            </article>
        </Link>
    )
}

export default Category