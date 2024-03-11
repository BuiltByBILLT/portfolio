"use client"
import React, { useState } from "react"
import { infoArr } from "./infoArr"
import StackIcon from "tech-stack-icons"
import { SiVercel } from "react-icons/si"
import { FaCcPaypal } from "react-icons/fa6"
import { SiGooglemaps } from "react-icons/si"
import { SiAgora } from "react-icons/si"
import { SiUps } from "react-icons/si"
import { TbClover } from "react-icons/tb"
import { SiWebflow } from "react-icons/si"
import { SiPuppeteer } from "react-icons/si"

function Experience() {
	const [active, setActive] = useState("PiggyVest")

	return (
		<section className="w-full mb-80 scroll-m-28" id="experience">
			<h1 className="font-anton text-[18vw] lg:text-[10vw] text-right leading-[0.8]">EXPeRIENCe</h1>
			<div
				className="grid px-[4vw] pt-12 bg-white text-slate-600 rounded-lg 
                            grid-cols-auto">
				{infoArr.map(info => (
					<RoleSection key={info.company} info={info} isActive={active === info.company} setActive={setActive} />
				))}
			</div>
		</section>
	)
}
export default Experience

interface RoleSectionProps {
	info: {
		company: string
		role: string
		startEnd: string
		description: string
		companyBio: string
		logoSrc: string
		stack: string[]
		url: string
	}
	isActive: boolean
	setActive: (company: string) => void
}

function RoleSection({ info, isActive, setActive }: RoleSectionProps) {
	const { company, role, startEnd, description, companyBio, logoSrc, stack } = info

	return (
		<div onClick={() => setActive(company)} className="border-b-2 py-6 cursor-pointer group lg:flex lg:min-h-[9vw]">
			{/* Logo Section */}
			<div
				className="opacity-0 self-center w-0 h-0 shrink-0
				 flex justify-center items-center rounded-full bg-slate-100
			group-hover:opacity-100 group-hover:w-[9vw] group-hover:h-[9vw]  group-hover:mr-4
			transition-all duration-500">
				<img src={logoSrc} alt="logo" style={{ width: "7vw", height: "auto" }} />
			</div>

			{/* Company Info Section - Desktop*/}
			<div className="lg:basis-[250px] lg:shrink-0">
				<div className={`flex`}>
					<h6 className="text-xl font-bold">{company}</h6>
					<span className="ml-2 align-self-start">{startEnd}</span>
				</div>
				<p className="hidden lg:block">{companyBio}</p>
			</div>

			{/* Spacer */}
			<div
				className="lg:w-[9vw] lg:mr-4 shrink-0 
			group-hover:w-0 group-hover:mr-0 
			transition-all duration-500"></div>

			{/* Description Section */}
			<div
				className={`flex flex-col justify-around overflow-hidden transition-all duration-500 max-w-prose ml-auto
							${isActive ? "h-[270px]" : "h-[0px] opacity-0"}
							lg:justify-start lg:h-auto lg:opacity-100 lg:basis-[600px] lg:pl-4`}>
				<h6 className="font-bold">{role}</h6>
				<p>{description}</p>
				<div className="flex gap-2 mt-2">
					{stack.map(tech =>
						tech === "Vercel" ? (
							<SiVercel key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Paypal" ? (
							<FaCcPaypal key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Googlemaps" ? (
							<SiGooglemaps key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Agora" ? (
							<SiAgora key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Ups" ? (
							<SiUps key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Clover" ? (
							<TbClover key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Webflow" ? (
							<SiWebflow key={tech} style={{ width: "30px", height: "30px" }} />
						) : tech === "Puppeteer" ? (
							<SiPuppeteer key={tech} style={{ width: "30px", height: "30px" }} />
						) : (
							<StackIcon key={tech} name={tech} style={{ width: "30px" }} />
						)
					)}
				</div>

				{/* Company Info Section - Mobile*/}
				<div
					className="flex gap-[5vw] items-end px-grow1
								lg:hidden">
					<img src={logoSrc} alt="logo" className="" />
					<div className="flex flex-col shrink ">
						<h6 className="font-bold">Company Bio:</h6>
						<p>{companyBio}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
