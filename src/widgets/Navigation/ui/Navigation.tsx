'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import classNames from 'classnames';
import { routes } from '../../../shared/consts/routes';
import styles from './Navigation.module.scss';
import { INavigationProps } from './Navigation.interfaces';

export function Navigation({ isWithPrivacy = false }: INavigationProps) {
	const t = useTranslations('Navigation');
	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathName = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

	const navigationRoutes = isWithPrivacy
		? routes
		: Object.fromEntries(
			Object.entries(routes).filter((route) => route[0] !== 'Privacy')
		);

	return (
		<nav data-cy="navigation">
			<ul
				className={classNames(styles.linksContainer, {
					[styles.linksContainerFooter]: isWithPrivacy,
				})}
			>
				{Object.entries(navigationRoutes).map((route) => {
					const isActive = pathName === route[1];
					return (
						<li key={route[0]}>
							<Link
								data-cy={`route-${route[0]}`}
								href={route[1]}
								className={classNames({
									[styles.linkActive]: isActive,
								})}
							>
								{t(route[0])}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
