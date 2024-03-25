import Link from 'next/link';
import Image from 'next/image';
import styles from './Category.module.scss';
import { ICategoryProps } from './interfaces';

function Category({ category, img, link = "" }: ICategoryProps) {
    return (
        <Link href={link}>
            <div className={styles.categoryContainer}>
                <Image src={img} alt={`${category}-icon`} />
                <div className={styles.textContent}>
                    <h4 className={styles.categoryHeader}>{category}</h4>
                    <p className={styles.categoryDescription}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Category