import { StaticImageData } from "next/image";

export interface IPostProps {
    img: StaticImageData;
    alt: string;
    category: string;
    header: string;
    description: string;
}