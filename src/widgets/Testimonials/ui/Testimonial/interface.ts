import { StaticImageData } from "next/image";

export interface ITestimonialProps {
    text: string;
    img: StaticImageData;
    author: string;
    location: string;
}