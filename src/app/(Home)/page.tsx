import Image from "next/image"
import ContactForm from "@/components/ContactForm"
import Link from "next/link"
import HoverButton from "@/components/HoverButton"
import Experience from "./Experience"
import Hero from "./Hero"
import Featured from "./Featured"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center mx-[4vw]">
			<Hero />
			<Experience />
			<Featured />
		</main>
	)
}
