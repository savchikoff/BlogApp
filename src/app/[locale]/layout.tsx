import { Metadata } from "next";
import { Sen } from "next/font/google";
import '@/styles/globals.scss';

import { Header, Footer } from "@/widgets";

const sen = Sen({ subsets: ['latin'], weight: ["400", "500", "700"] });

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
	return (
		<html lang={locale}>
			<body className={sen.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
