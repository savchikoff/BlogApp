import styles from "./Authors.module.scss";
import { authors } from "../consts/authors";
import Author from "./Author/Author";
export function Authors() {
    return (
        <div className={styles.authorsContainer}>
            <div className={styles.authorsWrapper}>
                <h2 className={styles.authorsHeader}>List of Authors</h2>
                <div className={styles.authors}>
                    {authors.map(({ img, alt, position, name, link }) =>
                        <Author key={link} authorName={name} img={img} alt={alt} position={position} link={link} />
                    )}
                </div>
            </div>
        </div>
    )
}