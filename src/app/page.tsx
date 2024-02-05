import Image from "next/image"
import ContactForm from "./components/ContactForm/ContactForm"
import Link from "next/link"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center mx-[4vw]">
			<div
				className="font-anton leading-none w-full flex mt-4 mb-8
				text-[26vw] flex-col items-center 
				md:text-[18vw] md:flex-row md:place-content-between">
				<span>BRANDoN </span>
				<span>GuO</span>
			</div>
			<div className="grid auto-rows-auto md:grid-cols-2 gap-12 my-8">
				<div className="">
					<p className="">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa aspernatur unde esse, quos totam qui autem eius, dolor nostrum impedit? Error mollitia similique aperiam inventore
						laudantium ut totam quod.
					</p>
					<p className="my-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia id incidunt voluptatem doloremque recusandae facilis expedita! Pariatur similique et earum deserunt dolorem, dicta distinctio
						necessitatibus sequi qui alias harum porro?
					</p>
					<Link href="/">
						<button>View My Work</button>
					</Link>
				</div>

				<div className="px-4">
					<h5 className="uppercase font-bold mb-4">Available for:</h5>
					<ul>
						<li className="border-b border-slate-500 py-2">Front End Developement</li>
						<li className="border-b border-slate-500 py-2">Full Stack Development</li>
						<li className="border-b border-slate-500 py-2">E-Commerce Stores</li>
						<li className="border-b border-slate-500 py-2">Inventory Syncing</li>
						<li className="border-b border-slate-500 py-2">Platform Integrations</li>
					</ul>
				</div>
			</div>
		</main>
	)
}
