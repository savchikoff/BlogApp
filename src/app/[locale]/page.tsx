"use client"

import { Hero } from '@/widgets/Hero';
import container from "@/styles/container.module.scss";
import { componentsToRender } from '@/shared/consts/componentsToRender';

export default function Home() {

	return (
		<>
			<Hero />
			<div className={container.container}>
				{componentsToRender.map(({ id, component: Component }) => {
					return <Component key={id} />;
				})}
			</div >
		</>
	);
}
