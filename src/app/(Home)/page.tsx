import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"
import HoverButton from "@/components/HoverButton"
import Experience from "./Experience"
import Hero from "./Hero"
import Featured from "./Featured"
import ContactButton from "./ContactButton"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center px-[4vw] mb-16 max-w-[1920px] mx-auto">
			<Hero />
			<Experience />
			<Featured />
			<ContactButton />
		</main>
	)
}
