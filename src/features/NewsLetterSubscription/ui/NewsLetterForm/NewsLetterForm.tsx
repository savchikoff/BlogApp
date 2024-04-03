"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import styles from "./NewsLetterForm.module.scss";
import { Button } from "@/shared";
import { FormValues } from "./interfaces";
import { schema } from '@/features/NewsLetterSubscription/consts/schema';

function NewsLetterForm() {
    const t = useTranslations("Footer");

    const initialValues: FormValues = {
        email: ''
    }

    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string), []);

    const handleSubmit = (values: FormikValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
            emailjs
                .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE1_ID as string, {
                    to_name: "Daniil Sauchyk",
                    email: values.email
                })
                .then(
                    () => {
                        toast.success("You form was send to our edition!");
                    },
                    () => {
                        toast.error(`Something went wrong :(`);
                    },
                );
            setSubmitting(false);
            resetForm();
        }, 700);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, handleSubmit }) => (
                <form className={styles.formWrapper} onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        <Field data-cy="footer-input" placeholder={`${t("placeholder")}`} className={styles.emailInput} name="email" type="email" />
                        <ErrorMessage className={styles.error} name="email" component="div" />
                    </label>
                    <Button dataCy="subs-button" isPrimary type="submit" disabled={isSubmitting}>{t("link")}</Button>
                </form>
            )}
        </Formik>
    )
}

export default NewsLetterForm