import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" })

export const metadata: Metadata = {
	title: "Built By BILLT",
	description: "Portfolio page for Built By BILLT",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${inter.variable} ${anton.variable}`}>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
