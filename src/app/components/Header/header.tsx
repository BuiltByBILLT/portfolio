"use client"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // Importing hamburger icon from react-icons
import { IoLogoNpm } from "react-icons/io5"

const Header = () => {
	const [isOpen, setIsOpen] = useState(true) // State to handle mobile menu
	function onToggleMenu(e: React.MouseEvent) {
		setIsOpen(!isOpen)
	}
	return (
		<header className="sticky top-0 md:relative">
			<nav className="bg-[--bg-start] flex justify-end items-center px-[4vw] py-3 md:py-6 ">
				<Link href="/" className="hidden sm:block mr-auto z-20 ">
					<span className="text-white">BUILT BY BILLT</span>
					<i>👋🏽</i>
				</Link>
				<div
					className={`bg-[#111] fixed top-0 left-0 w-full overflow-hidden z-0
					md:relative md:h-auto md:bg-transparent md:w-auto md:ml-auto
					${isOpen ? "h-[100vh]" : "h-[0]"} transition-all duration-500`}>
					<ul
						className="mt-28 px-[4vmin] flex flex-col gap-[10vh] font-anton
						md:flex-row md:mt-0 md:gap-9 md:px-9 md:font-inter">
						<Link
							href="/"
							className="text-[15vmin] uppercase tracking-wider font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							About
						</Link>
						<Link
							href="/"
							className="text-[15vmin] uppercase tracking-wide font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							Experience
						</Link>
						<Link
							href="/"
							className="text-[15vmin] uppercase tracking-wider font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							Projects
						</Link>
					</ul>
				</div>
				<div className="flex items-center gap-6 z-20 place-content-between w-full sm:w-auto">
					<button className="bg-[#303030] text-white px-5 py-2 rounded-full order-last sm:order-first">Contact Me</button>
					{isOpen ? (
						<FaTimes onClick={e => onToggleMenu(e)} className="text-3xl cursor-pointer  md:hidden"></FaTimes>
					) : (
						<FaBars onClick={e => onToggleMenu(e)} className="text-3xl cursor-pointer  md:hidden"></FaBars>
					)}
				</div>
			</nav>
		</header>
	)
}

export default Header
