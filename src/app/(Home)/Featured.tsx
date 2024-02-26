import CircleText from "@/components/CircleText"

export default function Featured() {
	return (
		<section className="w-full mb-64">
			<div
				className="font-anton leading-none w-full flex my-8
				text-[18vw] flex-col 
				md:text-[10vw] md:flex-row md:place-content-between">
				<span>FEATUReD </span>
				<span className="self-end">PRoJECTS</span>
			</div>

			<div className="px-1 pt-8 border-2 rounded-3xl mb-24">
				<div className="overflow-hidden">
					<video autoPlay muted loop className="w-full">
						<source src="/videos/maxie-mobile.webm" type="video/webm" media="(max-width: 767px)" />
						<source src="/videos/maxie-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
						<source src="/videos/maxie-loop.webm" type="video/webm" media="(min-width: 768px)" />
						<source src="/videos/maxie-loop.mp4" type="video/mp4" media="(min-width: 768px)" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="relative">
					<h3 className="font-anton text-3xl py-8 px-4">Maxie Paper</h3>
					<div className="absolute top-0 right-4 -translate-y-1/2">
						<CircleText text="visit live site" />
					</div>
				</div>
			</div>

			<div className="px-1 pt-8 border-2 rounded-3xl mb-24">
				<div className="overflow-hidden">
					<video autoPlay muted loop className="w-full">
						<source src="/videos/dirt-e-bike-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
						<source src="/videos/dirt-e-bike-loop.mp4" type="video/mp4" media="(min-width: 768px)" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="relative">
					<h3 className="font-anton text-3xl py-8 px-4">Dirt E-Bike</h3>
					<div className="absolute top-0 right-4 -translate-y-1/2">
						<CircleText text="visit live site" />
					</div>
				</div>
			</div>
			<div className="px-1 pt-8 border-2 rounded-3xl mb-24">
				<div className="overflow-hidden">
					<video autoPlay muted loop className="w-full">
						<source src="/videos/bulk-to-save-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
						<source src="/videos/bulk-to-save-loop.mp4" type="video/mp4" media="(min-width: 768px)" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="relative">
					<h3 className="font-anton text-3xl py-8 px-4">Bulk 2 Save</h3>
					<div className="absolute top-0 right-4 -translate-y-1/2">
						<CircleText text="visit live site" />
					</div>
				</div>
			</div>
		</section>
	)
}
