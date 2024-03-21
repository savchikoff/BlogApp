import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";
import LocaleSwitcherSelect from "@/ui/LocaleSwitcherSelect";

const LocaleSwitcher = () => {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();

    return (
        <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
            {locales.map((lang) => (
                <option key={lang} value={lang}>
                    {lang}
                </option>
            ))}
        </LocaleSwitcherSelect >
    )
}

export default LocaleSwitcher;