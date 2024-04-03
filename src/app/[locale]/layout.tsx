import { Metadata } from "next";
import { Sen } from "next/font/google";
import { useMessages, NextIntlClientProvider } from "next-intl";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/shared/styles/globals.scss';

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";


const sen = Sen({ subsets: ['latin'], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
	title: "Blog App",
	description: "Blog App built with the use of NextJS"
}


export default function RootLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<body className={sen.className}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
				<ToastContainer />
			</body>
		</html>
	);
}
