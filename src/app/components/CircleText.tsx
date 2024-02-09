"use client"
import React from "react"
import ReactCurvedText from "react-curved-text"
import { FaArrowUp } from "react-icons/fa"

const CircleText = () => {
	return (
		<div className="circle bg-white w-[80px] h-[80px] rounded-full relative">
			<ReactCurvedText
				width={80}
				height={80}
				cx={40}
				cy={40}
				rx={24}
				ry={24}
				startOffset={0}
				reversed={true}
				text="visit live site"
				textProps={{ style: { fontSize: 10 } }}
				textPathProps={{ fill: "#000000" }}
				ellipseProps={{ style: "fill: #ffffff" } as any}
				svgProps={{ className: "rotating-curved-text" }}
			/>
			<ReactCurvedText
				width={80}
				height={80}
				cx={40}
				cy={40}
				rx={24}
				ry={24}
				startOffset={0}
				reversed={true}
				text="visit live site"
				textProps={{ style: { fontSize: 10 } }}
				textPathProps={{ fill: "#000000" }}
				ellipseProps={{ style: "fill: #ffffff" } as any}
				svgProps={{ className: "rotating-curved-text mirror" }}
			/>
			<FaArrowUp className="circle-arrow" color="black" />
		</div>
	)
}

export default CircleText
