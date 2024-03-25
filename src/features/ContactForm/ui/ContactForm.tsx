"use client"

import { useEffect } from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers } from 'formik';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.scss';
import { FormValues } from './interfaces';
import { schema } from "../consts/schema";
import { Button } from '@/shared';

export function ContactForm() {

    const initialValues: FormValues = {
        userName: '',
        email: '',
        query: '',
        message: ''
    }

    useEffect(() => emailjs.init("priXHB1AcvH4UCtfU"), []);

    const handleSubmit = (values: FormikValues,
        { setSubmitting }: FormikHelpers<FormValues>) => {
        setTimeout(() => {
            console.log(values);
            emailjs
                .send('service_4k0wryn', 'template_goymrwf', {
                    to_name: "Daniil Sauchyk",
                    user_name: values.userName,
                    user_email: values.email,
                    query: values.query,
                    message: values.message
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
            setSubmitting(false);
        }, 500);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, errors, handleSubmit }) => (
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <label htmlFor="userName">
                        <Field placeholder="Full Name" name="userName" type="text" />
                        <ErrorMessage className={styles.error} name="userName" component="div" />
                    </label>
                    <label htmlFor="email">
                        <Field placeholder="Email" name="email" type="email" />
                        <ErrorMessage className={styles.error} name="email" component="div" />
                    </label>
                    <label htmlFor="query">
                        <Field name="query" as="select">
                            <option value="Business">Business</option>
                            <option value="Startup">Startup</option>
                            <option value="Economy">Economy</option>
                            <option value="Technologies">Technologies</option>
                        </Field>
                        <ErrorMessage className={styles.error} name="query" component="div" />
                    </label>
                    <label htmlFor="message">
                        <Field placeholder="Message" name="message" as="textarea" />
                        <ErrorMessage className={styles.error} name="message" component="div" />
                    </label>
                    <Button isPrimary type='submit' disabled={isSubmitting}>Submit</Button>
                </form>
            )}
        </Formik>
    )
}