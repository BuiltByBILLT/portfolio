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
	const [active, setActive] = useState("Bulk2Save")

	return (
		<section className="w-full mb-80 scroll-m-28" id="experience">
			<h1 className="font-anton text-[18vw] lg:text-[10vw] text-right leading-[0.8]">EXPeRIENCe</h1>
			<div
				className="grid px-[4vw] pt-6 bg-white text-slate-600 rounded-lg 
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
		<div onClick={() => setActive(company)} className="border-b-2 py-6 cursor-pointer group lg:flex">
			{/* Logo Section */}
			<div
				className="opacity-0 self-center w-0 h-0 shrink-0
				flex justify-center items-center rounded-full bg-slate-100
				lg:group-hover:w-[9vw] lg:group-hover:h-[9vw]
				lg:group-hover:opacity-100 lg:group-hover:mr-4
				transition-all duration-500">
				<img src={logoSrc} alt="logo" style={{ width: "7vw", height: "auto" }} />
			</div>

			{/* Company Info Section - Desktop*/}
			<div className="lg:basis-[16rem] lg:shrink-0">
				<div className={`flex`}>
					<h6 className="text-xl font-bold">{company}</h6>
					<span className="ml-2 align-self-start">{startEnd}</span>
				</div>
				{/* Company Bio - Desktop*/}
				<p className="hidden lg:block">{companyBio}</p>
			</div>

			{/* Spacer - Desktop */}
			<div
				className="lg:w-[9vw] lg:mr-4 shrink-0 lg:min-h-[9vw] 
			lg:group-hover:w-0 lg:group-hover:mr-0 
			transition-all duration-500"></div>

			{/* Description Section */}
			<div
				className={`flex flex-col justify-around lg:max-w-prose lg:ml-auto overflow-clip
							${isActive ? "h-[270px]" : "h-[0px] opacity-0"}
							lg:justify-start lg:h-auto lg:opacity-100  lg:pl-4
							transition-all duration-500`}>
				<h6 className="font-bold -order-2">{role}</h6>
				<p>{description}</p>
				{stack.length > 0 && (
					<div className="flex gap-2 lg:mt-4 -order-1 lg:order-1">
						{stack.map(tech =>
							tech === "Vercel" ? (
								<SiVercel key={tech} className="w-8 h-8" />
							) : tech === "Paypal" ? (
								<FaCcPaypal key={tech} className="w-8 h-8" />
							) : tech === "Googlemaps" ? (
								<SiGooglemaps key={tech} className="w-8 h-8" />
							) : tech === "Agora" ? (
								<SiAgora key={tech} className="w-8 h-8" />
							) : tech === "Ups" ? (
								<SiUps key={tech} className="w-8 h-8" />
							) : tech === "Clover" ? (
								<TbClover key={tech} className="w-8 h-8" />
							) : tech === "Webflow" ? (
								<SiWebflow key={tech} className="w-8 h-8" />
							) : tech === "Puppeteer" ? (
								<SiPuppeteer key={tech} className="w-8 h-8" />
							) : (
								<StackIcon key={tech} name={tech} className="w-8 h-8" />
							)
						)}
					</div>
				)}

				{/* Company Bio - Mobile*/}
				<div
					className="flex gap-[5vw] items-center px-grow1
								lg:hidden">
					<img src={logoSrc} alt="logo" className="w-32 h-auto" />
					<div className="flex flex-col shrink ">
						<h6 className="font-bold">Company Bio:</h6>
						<p>{companyBio}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
