"use client"

import { useTranslations } from 'next-intl';
import classNames from 'classnames';
import styles from './AllTags.module.scss';
import { tags } from '@/shared/consts/tags';
import { IAllTagsProps } from './interfaces';

function AllTags({ selectedTags, setSelectedTags }: IAllTagsProps) {
    const t = useTranslations("Category.Tags");

    const handleTagsChange = (tagName: string, selected: boolean) => () => {
        const nextSelectedTags = selected ?
            [...selectedTags, tagName] :
            selectedTags?.filter(tag => tag !== tagName);
        setSelectedTags(nextSelectedTags);
    }

    const handleTagsClear = () => {
        setSelectedTags([]);
    }


    return (
        <section className={styles.allTagsWrapper}>
            <h2 className={styles.allTagsHeader}>{t("tagsHeader")}</h2>
            <div className={styles.allTags}>
                <ul className={styles.categoriesWrapper}>
                    {tags.map(tag => (
                        <li
                            key={tag}
                            className={classNames(styles.categoryButton, selectedTags?.includes(tag) &&
                                styles.categoryButtonActive)}
                            onClick={handleTagsChange(tag, !selectedTags?.includes(tag))}
                            data-cy={`tag-${tag}`}
                        >
                            {t(tag)}
                        </li>
                    ))}
                    <li
                        onClick={handleTagsClear}
                        key="clearAll"
                        className={styles.categoryButton}>
                        {t("clearLabel")}
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default AllTags