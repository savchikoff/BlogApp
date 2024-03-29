import classNames from 'classnames';
import styles from './AllTags.module.scss';
import { tags } from '@/shared/consts/tags';
import { IAllTagsProps } from './interfaces';

function AllTags({ selectedTags, setSelectedTags }: IAllTagsProps) {
    const handleTagsChange = (tagName: string, selected: boolean) => () => {
        const nextSelectedTags = selected ?
            [...selectedTags, tagName] :
            selectedTags?.filter(tag => tag != tagName);
        console.log(nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    }

    const handleTagsClear = () => {
        setSelectedTags([]);
    }


    return (
        <div className={styles.allTagsWrapper}>
            <h2 className={styles.allTagsHeader}>All Tags</h2>
            <div className={styles.allTags}>
                <ul className={styles.categoriesWrapper}>
                    {tags.map(tag => (
                        <li
                            key={tag}
                            className={classNames(styles.categoryButton, selectedTags?.includes(tag) &&
                                styles.categoryButtonActive)}
                            onClick={handleTagsChange(tag, !selectedTags?.includes(tag))}
                        >
                            {tag}
                        </li>
                    ))}
                    <li
                        onClick={handleTagsClear}
                        key="clearAll"
                        className={styles.categoryButton}>
                        Clear All
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default AllTags