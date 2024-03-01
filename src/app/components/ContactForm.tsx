"use client"
import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
	const [state, handleSubmit] = useForm("xvoekadb")
	if (state.succeeded) {
		return <p>Thanks for joining!</p>
	}
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<FormField name="name" label="Name" placeholder="Full Name" type="text" required />
			<FormField name="email" label="Email" placeholder="you@company.com" type="email" required />
			<ValidationError prefix="Email Addy" field="email" errors={state.errors} />
			<FormField name="website" label="Company Website" placeholder="www.company.com" type="text" />
			<div>
				<label htmlFor="message" className="mb-2 flex flex-col">
					Message
				</label>
				<textarea id="message" name="message" className="bg-transparent border-[0.1rem] border-[#303030] rounded-xl px-4 py-2 w-full" />
			</div>
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<button type="submit" disabled={state.submitting}>
				Submit
			</button>
		</form>
	)
}

function FormField({ name, label, placeholder, type, required }: { label: string; name: string; placeholder: string; type: string; required?: boolean }) {
	return (
		<div className="mb-4 flex flex-col">
			<label className="mb-2" htmlFor={name}>
				{label}
			</label>
			<input className="bg-transparent border-[0.1rem] border-[#303030] rounded-full px-6 py-4" id={name} name={name} type={type} placeholder={placeholder || label} required={required} />
		</div>
	)
}
