import Link from "next/link"
import HoverButton from "../components/HoverButton"

export default function Hero() {
	return (
		<section className="min-h-[90vh] flex justify-around flex-col">
			<div
				className="font-anton leading-none w-full flex my-8
				text-[26vw] flex-col items-center 
				md:text-[18vw] md:flex-row md:place-content-between">
				<span>BRANDoN </span>
				<span>GuO</span>
			</div>
			<div className="grid auto-rows-auto md:grid-cols-2 gap-12 my-8 grow md:grow-0">
				<div className="flex flex-col justify-around">
					<p className="">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa aspernatur unde esse, quos totam qui autem eius, dolor nostrum impedit? Error mollitia similique aperiam inventore
						laudantium ut totam quod.
					</p>
					<p className="my-8">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia id incidunt voluptatem doloremque recusandae facilis expedita! Pariatur similique et earum deserunt dolorem, dicta distinctio
						necessitatibus sequi qui alias harum porro?
					</p>
					<Link href="/">
						<HoverButton>View My Work</HoverButton>
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
		</section>
	)
}
