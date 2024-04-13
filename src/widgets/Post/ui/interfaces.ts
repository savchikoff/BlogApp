import { StaticImageData } from 'next/image';

export interface IPostProps {
	id: number;
	img: StaticImageData;
	alt: string;
	category: string;
	header: string;
	description: string;
	dataCy?: string;
}
