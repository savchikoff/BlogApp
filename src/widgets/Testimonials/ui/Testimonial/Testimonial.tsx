import Image from "next/image";
import { ITestimonialProps } from "./interface";
import styles from "./Testimonial.module.scss";

function Testimonial({ text, img, author, location }: ITestimonialProps) {

    return (
        <div className={styles.testimonialWrapper}>
            <p className={styles.testimonialText}>
                {text}
            </p>
            <div className={styles.testimonialAuthor}>
                <Image src={img} alt={author} />
                <div className={styles.testimonialsInfo}>
                    <h4 className={styles.testimonialAuthorName}>{author}</h4>
                    <div className={styles.testimonialAuthorLocation}>{location}</div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial