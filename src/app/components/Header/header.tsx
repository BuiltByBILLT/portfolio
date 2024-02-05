"use client"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa" // Importing hamburger icon from react-icons
import { IoLogoNpm } from "react-icons/io5"

const Header = () => {
	const [isOpen, setIsOpen] = useState(true) // State to handle mobile menu
	function onToggleMenu(e: React.MouseEvent) {
		setIsOpen(!isOpen)
	}
	return (
		<header className="">
			<nav className="flex justify-end items-center px-[4vw] py-6">
				<Link href="/" className="hidden sm:block mr-auto z-20 ">
					<span className="text-white">BUILT BY BILLT</span>
					<i>👋🏽</i>
				</Link>
				<div
					className={`bg-[#111] fixed top-0 left-0 w-full overflow-hidden transition-all duration-500 ${isOpen ? "h-[100vh]" : "h-[0]"} z-0
				md:relative md:h-auto md:bg-transparent md:w-auto md:ml-auto`}>
					<ul className="mt-32 px-[4vw] flex flex-col gap-[10vh] md:flex-row md:mt-0 md:gap-9 md:px-9">
						<Link href="/" className="text-[15vw] uppercase tracking-tighter font-semibold overline md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							About
						</Link>
						<Link href="/" className="text-[15vw] uppercase tracking-tighter font-semibold overline md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							Experience
						</Link>
						<Link href="/" className="text-[15vw] uppercase tracking-tighter font-semibold overline md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							Projects
						</Link>
					</ul>
				</div>
				<div className="flex items-center gap-6 z-20">
					<button className="bg-[#303030] text-white px-5 py-2 rounded-full ">Contact Me</button>
					<FaBars onClick={e => onToggleMenu(e)} className="text-3xl cursor-pointer md:hidden"></FaBars>
				</div>
			</nav>
		</header>
	)
}

export default Header
