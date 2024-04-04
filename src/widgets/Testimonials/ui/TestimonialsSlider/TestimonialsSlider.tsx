"use client"

import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";

import { testimonials } from "@/shared/consts/testimonials"

import leftArrow from '@/widgets/Testimonials/assets/icons/leftArrow.svg';
import rightArrow from '@/widgets/Testimonials/assets/icons/rightArrow.svg';
import styles from "./TestimonialsSlider.module.scss"

export function TestimonialsSlider() {
    const [activeSlide, setActiveSlide] = useState(0)

    const handleNext = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setActiveSlide(
            (prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length,
        )
    }
    const currentTransform = -activeSlide * 100

    return (
        <div className={styles.sliderWrapper}>
            <div
                className={styles.sliderItems}
                style={{ transform: `translateX(${currentTransform}%)` }}
            >
                {testimonials.map(({ author, location, img, text, id }, index) => (
                    <div
                        key={id}
                        className={classNames(styles.sliderItem, { [styles.active]: index === activeSlide })}
                    >
                        <p className={styles.sliderItemText}>{text}</p>
                        <div className={styles.authorInfo}>
                            <Image src={img} alt={author} width={48} height={48} />
                            <div>
                                <p className={styles.authorName}>{author}</p>
                                <p className={styles.authorLocation}>{location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.testimonialsSliderWrapper}>
                <div role='button' className={styles.testimonialsSlider} onClick={handlePrev} >
                    <Image src={leftArrow} alt="leftArrow" />
                </div>
                <div role='button' className={styles.testimonialsSlider} onClick={handleNext}>
                    <Image src={rightArrow} alt="rightArrow" />
                </div>
            </div>
        </div>
    )
}