import { Link } from "gatsby"
import React from "react"
import ThemeToggle from "./themeToggle"
import { NavLink, BlobHeader } from "./atoms"
import LogoImage from "../components/logoimage"

const Header = ({ activePage }) => (
  <header className="container m-auto px-5 sm:px-12 md:px-20 max-w-screen-xl h-32 overflow-hidden">
    <nav
      className="mt-auto h-full flex space-x-6 items-center justify-center md:justify-start text-sm"
      aria-label="Main Navigation">
      <Link to="/" aria-label="Website logo, go back to homepage.">
        <LogoImage/>
      </Link>
      <span className="hidden sm:flex flex-grow items-center space-x-6">
      <LogoImage/>
        <NavLink to="/" title="Blog" selected={activePage === "/"}>
          Blog
        </NavLink>
        <NavLink to="/about" title="About" selected={activePage === "about"}>
          About
        </NavLink>
      </span>
      <ThemeToggle className="hidden sm:block hover:text-accent transition duration-150" />
    </nav>

    <div className="hidden sm:block">
      <div className="-mt-120 sm:-mt-120 ml-4">
        <BlobHeader />
      </div>
    </div>
  </header>
)

export default Header
