import Link from "next/link"
import React from "react"

function ContactButton() {
	return (
		<section className="w-full my-16">
			<Link href="/contact">
				<div
					className="glow-button text-[8vw] font-semibold flex justify-center gap-[2vw] items-center rounded-full py-24
                ">
					<span>Contact </span>
					<span className="hidden md:inline">Me</span>
					<svg
						width="1em"
						height="1em"
						viewBox="0 0 18 18"
						fill="none"
						style={{
							transform: "translate(0px, 0px)",
							opacity: 1,
							visibility: "inherit",
						}}>
						<path
							className="stroke-current text-[#6c6c6c] "
							d="M2.43868 8.46013L13.4919 8.60368M8.61741 14.6389L12.7925 10.4638C13.8116 9.44471 13.7898 7.77067 12.7439 6.72474L8.45898 2.43982"
							strokeWidth="2.50939"
							strokeLinecap="round"
							strokeLinejoin="round"></path>
					</svg>
				</div>
			</Link>
		</section>
	)
}

export default ContactButton
