import styles from './Search.module.scss';

function Search() {
    return (
        <div className={styles.searchWrapper}>
            <input className={styles.searchInput} placeholder='Search for tag...' type="text" />
            <button className={styles.searchButton}> Search</button>
        </div >
    )
}

export default Search