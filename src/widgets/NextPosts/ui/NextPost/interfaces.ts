import { StaticImageData } from "next/image";

export interface INextPostProps {
    id: number;
    img: StaticImageData;
    author: string,
    createdAt: string,
    title: string,
    text: string;
}