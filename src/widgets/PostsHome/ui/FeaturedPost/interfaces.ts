import { StaticImageData } from 'next/image';

export interface IFeaturedPostProps {
	id: number;
	authorName: string;
	createdAt: string;
	title: string;
	text: string;
	img: StaticImageData;
}
