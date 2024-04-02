import Link from "next/link";
import { routes } from "../../../shared/consts/routes";
import { useTranslations } from "next-intl";
import styles from "./Navigation.module.scss";
import { INavigationProps } from "./interfaces";

export function Navigation({ isWithPrivacy = false }: INavigationProps) {
    const t = useTranslations("Navigation");

    const navigationRoutes = isWithPrivacy ?
        routes :
        Object.fromEntries(Object.entries(routes).filter(route => route[0] !== "Privacy"));


    return (
        <nav data-cy='navigation'>
            <ul className={styles.linksContainer}>
                {Object.entries(navigationRoutes).map((route) => (
                    <li key={route[0]}>
                        <Link data-cy={`route-${route[0]}`} href={route[1]}>{t(route[0])}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}