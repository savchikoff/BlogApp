import { StaticImageData } from "next/image";

export interface IAuthorProps {
    authorName: string;
    img: StaticImageData;
    alt: string;
    position: string;
    link: string;
}