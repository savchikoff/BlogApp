"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Testimonial from '../Testimonial/Testimonial';
import styles from './TestimonialsSlider.module.scss';
import jonathan from "../../assets/Jonathan.png";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";

export const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: jonathan,
        author: "Jonathan Vallem",
        location: 'New york, USA'
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: jonathan,
        author: "Danik Sauchyk",
        location: 'Minsk, Belarus'
    },
];

function TestimonialsSlider() {
    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className={styles.testimonialsContainer}>
            <div className={styles.testimonialsWrapper}>
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
                <div className={styles.testimonialsSlider} >
                    <Image src={leftArrow} alt="leftArrow" />
                </div>
                <div className={styles.testimonialsSlider}>
                    <Image src={rightArrow} alt="rightArrow" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialsSlider;