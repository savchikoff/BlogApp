"use client"

import { useEffect, useRef, useState } from 'react';
import { Hero } from '@/widgets/Hero';
import container from "@/shared/styles/container.module.scss";
import { componentsToRender } from '@/shared/consts/componentsToRender';

export default function Home() {
	const [showItems, setShowItems] = useState(1);
	const observedElement = useRef(null);


	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setShowItems((prev) => prev + 1)
				}
			},
			{ threshold: 1 },
		)

		const target = observedElement.current
		if (target) {
			observer.observe(target)
		}

		return () => {
			if (target) {
				observer.unobserve(target)
			}
		}
	}, [])

	return (
		<>
			<Hero />
			<div className={container.container}>
				{componentsToRender.slice(0, showItems).map(({ id, component: Component }) => {
					return <Component key={id} />;
				})}
				<div ref={observedElement} />
			</div >
		</>
	);
}
