'use client';

import { ChangeEvent, useTransition } from 'react';
import { useParams } from 'next/navigation';

import { usePathname, useRouter } from '@/shared/hooks/useNavigation';

import { ILocaleSwitcherSelectProps } from './LocaleSwitcherSelect.interfaces';

import styles from './LocaleSwitcherSelect.module.scss';

export default function LocaleSwitcherSelect({
	children,
	defaultValue,
}: ILocaleSwitcherSelectProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				{ pathname, params },
				{ locale: nextLocale }
			);
		});
	}

	return (
		<div className={styles.localeSwitcher}>
			<select
				data-cy="locale-switcher"
				defaultValue={defaultValue}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{children}
			</select>
		</div>
	);
}
