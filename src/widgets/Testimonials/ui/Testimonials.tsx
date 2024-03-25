import styles from './Testimonials.module.scss';
import TestimonialsSlider from './TestimonialsSlider/TestimonialsSlider';

export function Testimonials() {
    return (
        <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialsWrapper}>
                <div className={styles.testimonialsInfo}>
                    <div className={styles.testimonialsSubheader}>TESTIMONIALS</div>
                    <h2 className={styles.testimonialsHeader}>What people say about our blog</h2>
                    <p className={styles.testimonialsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>
                <div className={styles.line}>
                </div>
                <TestimonialsSlider />
            </div>
        </div>
    )
}