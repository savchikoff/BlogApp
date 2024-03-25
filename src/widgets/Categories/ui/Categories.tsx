import styles from "./Categories.module.scss";
import Category from "./Category/Category";
import { categories } from "../consts/categories";
import { useTranslations } from "next-intl";

export function Categories() {
    const t = useTranslations("Categories");
    return (
        <div className={styles.categoriesContainer}>
            <h2 className={styles.categoriesHeader}>Choose A Category</h2>
            <div className={styles.categoriesWrapper}>
                {Object.entries(categories).map(item => {
                    const categoryName = item[0];
                    const { img, link } = item[1];
                    return (
                        <Category category={t(categoryName)} img={img} link={link} />
                    )
                })}
            </div>
        </div>
    )
}
