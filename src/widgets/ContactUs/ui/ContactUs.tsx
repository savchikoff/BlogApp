"use client"

import { Slide } from "react-awesome-reveal";
import styles from "./ContactUs.module.scss";
import { ContactForm } from "@/features/ContactForm";
import ContactUsHeader from "./ContactUsHeader/ContactUsHeader";
import ContactInfo from "./ContactInfo/ContactInfo";

export function ContactUs() {
    return (
        <div className={styles.contactUsContainer}>
            <div className={styles.contactUsWrapper}>
                <ContactUsHeader />
                <div className={styles.contactUsFormWrapper}>
                    <Slide>
                        <ContactInfo />
                    </Slide>
                    <Slide direction="right">
                        < ContactForm />
                    </Slide>
                </div>
            </div>
        </div>
    )
}
