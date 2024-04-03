"use client"

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.scss';
import { FormValues } from './interfaces';
import { schema } from "../consts/schema";
import { Button } from '@/shared';

export function ContactForm() {

    const t = useTranslations("ContactUs.ContactForm");

    const initialValues: FormValues = {
        userName: '',
        email: '',
        query: '',
        message: ''
    }

    useEffect(() => emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string), []);

    const handleSubmit = (values: FormikValues,
        { resetForm, setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
            emailjs
                .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE2_ID as string, {
                    to_name: "Daniil Sauchyk",
                    user_name: values.userName,
                    user_email: values.email,
                    query: values.query,
                    message: values.message
                })
                .then(
                    () => {
                        toast.success("You were successfully subscribed!");
                    },
                    () => {
                        toast.error(`Something went wrong :(`);
                    },
                );
            setSubmitting(false);
            resetForm();
        }, 700);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, handleSubmit }) => (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label htmlFor="userName">
                        <Field data-cy="name-input" placeholder={`${t("fullName")}`} name="userName" type="text" />
                        <ErrorMessage className={styles.error} name="userName" component="div" />
                    </label>
                    <label htmlFor="email">
                        <Field data-cy="email-input" placeholder={`${t("email")}`} name="email" type="email" />
                        <ErrorMessage className={styles.error} name="email" component="div" />
                    </label>
                    <label htmlFor="query">
                        <Field data-cy="query-select" name="query" as="select">
                            <option value="Business">Business</option>
                            <option value="Startup">Startup</option>
                            <option value="Economy">Economy</option>
                            <option value="Technologies">Technologies</option>
                        </Field>
                        <ErrorMessage className={styles.error} name="query" component="div" />
                    </label>
                    <label htmlFor="message">
                        <Field data-cy="text-area" placeholder={`${t("message")}`} name="message" as="textarea" />
                        <ErrorMessage className={styles.error} name="message" component="div" />
                    </label>
                    <Button dataCy='contact-button' isPrimary type='submit' disabled={isSubmitting}>{t("label")}</Button>
                </form>
            )}
        </Formik>
    )
}