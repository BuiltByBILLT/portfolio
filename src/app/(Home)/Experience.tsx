"use client"
import React, { useState } from "react"
import { infoArr } from "./infoArr"

function Experience() {
	const [active, setActive] = useState("PiggyVest")

	return (
		<section className="w-full my-8 mb-32">
			<h1 className="font-anton text-3xl text-right">Experience</h1>
			<div
				className="grid px-[4vw] pt-12 bg-white text-slate-600 rounded-lg 
                            grid-cols-auto
                            md:grid-cols-2 md:grid-rows-5">
				{infoArr.map(info => (
					<RoleSection info={info} isActive={active === info.company} setActive={setActive} />
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
	}
	isActive: boolean
	setActive: (company: string) => void
}

function RoleSection({ info, isActive, setActive }: RoleSectionProps) {
	const { company, role, startEnd, description, companyBio, logoSrc } = info

	return (
		<div onClick={() => setActive(company)} className="border-b-2 pt-6 cursor-pointer">
			<div className={`flex ${isActive ? "pb-0" : "pb-6"}  transition-all ease-linear`}>
				<h6 className="text-xl font-bold">{company}</h6>
				<span className="ml-2 align-self-start">{startEnd}</span>
			</div>

			<div
				className={`flex flex-col justify-around overflow-hidden transition-all duration-500
							${isActive ? "h-[270px] pb-6" : "h-[0px] opacity-0"}`}>
				<h6 className="font-bold">{role}</h6>
				<p>{description}</p>
				<div className="flex gap-[5vw] items-end px-grow1">
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
