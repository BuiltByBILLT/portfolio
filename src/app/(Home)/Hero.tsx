import Link from "next/link"
import HoverButton from "@/components/HoverButton"

export default function Hero() {
	return (
		<section className="min-h-[90vh] mb-32 flex flex-col justify-around">
			<div
				className="font-anton leading-none w-full flex my-8
				text-[26vw] flex-col items-center 
				md:text-[18vw] md:flex-row md:place-content-between">
				<span>BRANDoN </span>
				<span>GuO</span>
			</div>
			<section className="grid auto-rows-auto md:grid-cols-2 gap-12 my-8 grow md:grow-0 scroll-m-28" id="about">
				<div className="flex flex-col justify-around">
					<p className="">
						Step into the realm of digital transformation with a Full Stack Developer who turns concepts into captivating online experiences! I specialize in architecting dynamic solutions that
						redefine the way users engage with digital platforms.
					</p>
					<p className="my-8">
						My expertise extends beyond the screen, I&apos;m here to redefine your online narrative. Let&apos;s embark on a journey where your digital presence isn&apos;t just a platform, it&apos;s a
						strategic advantage, driving engagement, conversions, and success.
					</p>
					<Link href="/#projects" className="self-start">
						<HoverButton>View Work</HoverButton>
					</Link>
				</div>

				<div className="px-4">
					<h5 className="uppercase font-extrabold mb-3">Available for:</h5>
					<ul>
						<li className="border-b border-slate-500 py-2">Front End & Full Stack Development</li>
						<li className="border-b border-slate-500 py-2">Turn-Key E-Commerce Stores</li>
						<li className="border-b border-slate-500 py-2">Inventory Syncing</li>
						<li className="border-b border-slate-500 py-2">Workflow Automation</li>
						<li className="border-b border-slate-500 py-2">Platform Integrations</li>
					</ul>
				</div>
			</section>
		</section>
	)
}
