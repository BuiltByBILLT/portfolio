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
			<h1 className="font-anton text-[18vw] md:text-[10vw] text-right leading-[0.8]">EXPeRIENCe</h1>
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
		<div
			onClick={() => setActive(company)}
			className="border-b-2 py-6 cursor-pointer
						md:flex md:justify-between md:gap-12">
			<div className="md:basis-[300px]">
				<div className={`flex`}>
					<h6 className="text-xl font-bold">{company}</h6>
					<span className="ml-2 align-self-start">{startEnd}</span>
				</div>
				<p className="hidden md:block">{companyBio}</p>
			</div>
			<div className="hidden md:block md:grow md:shrink"></div>
			<div
				className={`flex flex-col justify-around overflow-hidden transition-all duration-500
							${isActive ? "h-[270px]" : "h-[0px] opacity-0"}
							md:justify-start md:h-auto md:opacity-100 md:basis-[500px] md:grow`}>
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
				<div
					className="flex gap-[5vw] items-end px-grow1
								md:hidden">
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
