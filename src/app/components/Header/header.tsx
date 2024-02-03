"use client"
import React, { useState } from "react"
import { FaBars } from "react-icons/fa" // Importing hamburger icon from react-icons
import { IoLogoNpm } from "react-icons/io5"

const Header = () => {
	const [isOpen, setIsOpen] = useState(false) // State to handle mobile menu
	function onToggleMenu(e: React.MouseEvent) {
		setIsOpen(!isOpen)
	}
	return (
		<header className="">
			<nav className="flex justify-between items-center w-[92%]  mx-auto">
				<div>
					<IoLogoNpm className="text-3xl text-white"></IoLogoNpm>
				</div>
				<div className="flex items-center px-5">
					<ul className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[4vw] ">
						<li>
							<a href="#">Products</a>
						</li>
						<li>
							<a href="#">Solution</a>
						</li>
						<li>
							<a href="#">Resource</a>
						</li>
						<li>
							<a href="#">Developers</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
					</ul>
				</div>
				<div className="flex items-center gap-6">
					<button className="bg-[#303030] text-white px-5 py-2 rounded-full ">Sign in</button>
					<FaBars onClick={e => onToggleMenu(e)} className="text-3xl cursor-pointer md:hidden"></FaBars>
				</div>
			</nav>
		</header>
	)
}

export default Header
