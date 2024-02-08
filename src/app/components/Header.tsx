"use client"
import Link from "next/link"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // Importing hamburger icon from react-icons
import HoverButton from "./HoverButton"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false) // State to handle mobile menu
	function onToggleMenu(e: React.MouseEvent) {
		setIsOpen(!isOpen)
	}
	return (
		<header className="sticky top-0 md:relative">
			<nav className="bg-[--bg-start] flex justify-end items-center px-[4vw] py-3 md:py-6 ">
				<Link href="/" className="hidden sm:block mr-auto z-20 ">
					<span className="text-white">BUILT BY BILLT</span>
					<i className="wave">👋🏽</i>
				</Link>
				<div
					className={`bg-[#111] fixed top-0 left-0 w-full overflow-hidden z-0
					md:relative md:h-auto md:bg-transparent md:w-auto md:ml-auto
					${isOpen ? "h-[100vh]" : "h-[0]"} transition-all duration-500`}>
					<ul
						className="flex 
						flex-col gap-[10vh] mt-28 px-[4vmin] font-anton
						md:flex-row md:gap-9 md:mt-0 md:px-8 md:font-inter">
						<Link
							href="/"
							onClick={() => setIsOpen(false)}
							className="text-[15vmin] uppercase tracking-wider font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							<span>About</span>
						</Link>
						<Link
							href="/"
							onClick={() => setIsOpen(false)}
							className="text-[15vmin] uppercase tracking-wide font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							<span>Experience</span>
						</Link>
						<Link
							href="/"
							onClick={() => setIsOpen(false)}
							className="text-[15vmin] uppercase tracking-wider font-semibold overline 
							md:text-base md:normal-case md:tracking-normal md:font-normal md:no-underline">
							<span>Projects</span>
						</Link>
					</ul>
				</div>
				<div className="flex items-center gap-6 z-20 place-content-between w-full sm:w-auto">
					<div className="order-last sm:order-first">
						<HoverButton>Contact Me</HoverButton>
					</div>
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
