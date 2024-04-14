import { useLocale, useTranslations } from 'next-intl';

import { locales } from '@/config';
import LocaleSwitcherSelect from '@/widgets/Header/ui/LocaleSwitcherSelect/LocaleSwitcherSelect';

function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	return (
		<LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
			{locales.map((lang) => (
				<option data-cy={`locale-${lang}`} key={lang} value={lang}>
					{lang}
				</option>
			))}
		</LocaleSwitcherSelect>
	);
}

export default LocaleSwitcher;
