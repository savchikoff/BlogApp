"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import styles from "./NewsLetterForm.module.scss";
import { Button } from "@/shared";
import emailjs from '@emailjs/browser';

function NewsLetterForm() {
    const t = useTranslations("Footer");

    const emailInput = useRef<HTMLInputElement>(null);

    useEffect(() => emailjs.init("priXHB1AcvH4UCtfU"), []);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        if (emailInput.current) {
            e.preventDefault();

            emailjs
                .send('service_4k0wryn', 'template_bt9ysdk', {
                    to_name: "Daniil Sauchyk",
                    email: emailInput.current.value
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    };

    return (
        <form className={styles.formWrapper} onSubmit={sendEmail}>
            <input ref={emailInput} placeholder={`${t("placeholder")}`} className={styles.emailInput} type="email" />
            <Button isPrimary type="submit">{t("link")}</Button>
        </form>
    )
}

export default NewsLetterForm