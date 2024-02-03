import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header/header"

const inter = Inter({ subsets: ["latin"] })

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
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
