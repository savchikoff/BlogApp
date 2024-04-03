"use client"

import { useState } from 'react';
import Image from 'next/image';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialsSlider.module.scss';
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import { testimonials } from '@/shared/consts/testimonials';

function TestimonialsSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    const handleClickNext = () => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
    };

    const handleClickPrev = () => {
        setActiveSlide(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };


    return (
        <div className={styles.testimonialsContainer}>
            <div
                className={styles.testimonialsWrapper}
                style={{ transform: `translateX(-${activeSlide * 464}px)`, width: `${464 * testimonials.length}px` }}
            >
                {testimonials.map(({ text, img, author, location, id }) => (
                    <Testimonial
                        text={text}
                        img={img}
                        author={author}
                        location={location}
                        key={id}
                    />
                ))}
            </div>
            <div className={styles.testimonialsSliderWrapper}>
                <div role='button' className={styles.testimonialsSlider} onClick={handleClickPrev} >
                    <Image src={leftArrow} alt="leftArrow" />
                </div>
                <div role='button' className={styles.testimonialsSlider} onClick={handleClickNext}>
                    <Image src={rightArrow} alt="rightArrow" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSlider;