import React from "react"
import ContactForm from "@/components/ContactForm"

function ContactPage() {
	return (
		<div className="grid grid-cols-2 mx-[4vw] mb-16 gap-8">
			<section>
				<div className="font-anton text-[15vw] leading-none">
					<h1>WORK</h1>
					<h1>WITH</h1>
					<h1>ME</h1>
				</div>
				<div>
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
