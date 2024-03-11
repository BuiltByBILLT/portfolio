import { FaLinkedin } from "react-icons/fa"
import { RiLinkedinBoxLine } from "react-icons/ri"
import StackIcon from "tech-stack-icons"

function Footer() {
	return (
		<footer>
			<section
				className="px-[4vw] py-4  flex items-center 
       flex-col text-center gap-4
        md:flex-row md:text-left md:justify-between">
				<div className="order-2 md:flex md:gap-2">
					<div>Copyright &copy; 2024 Brandon Guo.</div> <div>All Rights Reserved.</div>
				</div>
				<a href="https://www.linkedin.com/in/brandon-guo-396aa22a7/" target="_blank" className="text-6xl md:text-4xl md:order-2">
					<RiLinkedinBoxLine />
				</a>
			</section>
			<section>
				<div className="bg-black flex items-center justify-center gap-4 py-4">
					Built with
					<StackIcon name="nextjs2" className="w-8 md:w-6" />
					<StackIcon name="typescript" className="w-8 md:w-6" />
					<StackIcon name="tailwindcss" className="w-8 md:w-6" />
				</div>
			</section>
		</footer>
	)
}

export default Footer
