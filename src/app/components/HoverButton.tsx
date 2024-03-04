import React from "react"

function HoverButton({ children }: { children: React.ReactNode }) {
	return (
		<button className="hover-button bg-[#303030] text-white py-2 rounded-full flex justify-center items-center place-center gap-2 w-36">
			<span>{children}</span>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				style={{
					transform: "translate(0px, 0px)",
					opacity: 1,
					visibility: "inherit",
				}}>
				<path
					d="M2.43868 8.46013L13.4919 8.60368M8.61741 14.6389L12.7925 10.4638C13.8116 9.44471 13.7898 7.77067 12.7439 6.72474L8.45898 2.43982"
					stroke="white"
					strokeWidth="2.50939"
					strokeLinecap="round"
					strokeLinejoin="round"></path>
			</svg>
		</button>
	)
}

export default HoverButton
