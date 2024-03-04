import React from "react"
import ContactForm from "@/components/ContactForm"

function ContactPage() {
	return (
		<div
			className="grid mx-[4vw] my-8 gap-8
		md:grid-cols-2">
			<section>
				<div
					className="font-anton text-center text-[30vw] leading-none
				md:text-left md:text-[12vw]">
					<h1>WORK</h1>
					<h1>WITH</h1>
					<h1>ME</h1>
				</div>
				<div className="text-center md:text-left my-6 flex flex-col gap-1">
					<p>Are you ready to supercharge your business with visually stunning content?</p>
					<p>Fill out this form for a free website consultation!</p>
					<p>
						or email me at{" "}
						<a className="underline" href="mailto:brandon@builtbybillt.com">
							brandon@builtbybillt.com
						</a>
					</p>
				</div>
			</section>
			<section className="text-xl max-w-xl">
				<ContactForm />
			</section>
		</div>
	)
}

export default ContactPage
