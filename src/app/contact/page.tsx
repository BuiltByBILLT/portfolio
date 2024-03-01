import React from "react"
import ContactForm from "@/components/ContactForm"

function ContactPage() {
	return (
		<div className="grid grid-cols-2 mx-[4vw] mb-16 gap-8">
			<section>
				<h1>Contact</h1>
				<p>Get in touch with me</p>
			</section>
			<section className="text-xl max-w-xl">
				<ContactForm />
			</section>
		</div>
	)
}

export default ContactPage
