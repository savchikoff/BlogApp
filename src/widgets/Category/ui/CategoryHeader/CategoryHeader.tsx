import Link from 'next/link';
import container from '@/styles/container.module.scss';
import styles from './CategoryHeader.module.scss';
import { ICategoryHeaderProps } from './interfaces';
import { routes } from '@/shared/consts/routes';

function CategoryHeader({ categoryName }: ICategoryHeaderProps) {
    return (
        <div className={styles.categoryHeaderContainer}>
            <div className={container.container}>
                <div className={styles.categoryHeaderWrapper}>
                    <h1 className={styles.categoryHeaderHeading}>
                        {categoryName}
                    </h1>
                    <p className={styles.categoryHeaderDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <span className={styles.categoryHeaderBreadCrumbs}>
                        <Link href={routes.Blog}>Blog</Link> &gt; {categoryName}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CategoryHeader