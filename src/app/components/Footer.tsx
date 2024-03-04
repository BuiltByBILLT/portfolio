import { FaLinkedin } from "react-icons/fa"
import { RiLinkedinBoxLine } from "react-icons/ri"

function Footer() {
	return (
		<footer
			className="bg-black px-[4vw] py-4  flex items-center 
       flex-col text-center gap-4
        md:flex-row md:text-left md:justify-between">
			<div className="order-2 md:flex md:gap-2">
				<div>Copyright &copy; 2024 Brandon Guo.</div> <div>All Rights Reserved.</div>
			</div>
			<a href="https://www.linkedin.com/in/brandon-guo-396aa22a7/" target="_blank" className="text-6xl md:text-4xl md:order-2">
				<RiLinkedinBoxLine />
			</a>
		</footer>
	)
}

export default Footer
