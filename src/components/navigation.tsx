import { useState } from "react";
import { checkMediaQuery } from "../main";
import {Spiral as Hamburger} from "hamburger-react";
import { motion } from "motion/react";
import SearchBar from "./searchbar";

export const mainPages = [
    {name: "Item 1", link: "blog"},
    {name: "Item 2", link: "media"},
    {name: "Item 3", link: "projects"},
    {name: "Item 4", link: "projects"},
    {name: "Item 5", link: "projects"},
]

export default function NavigationBar() {
    return <>
        <div id="navigationBar">
            <a href="/" className="accentHoverable" style={{fontSize: "2rem", fontWeight: "500"}}>elidebusk.com</a>
            {checkMediaQuery("(min-width: 750px)") ? <DesktopNavigation/> : <MobileNavigation/>}
        </div>
    </>
}

export function DesktopNavigation() {
    return <>
        <div id="desktopNavigation">
            {mainPages.map((page) => {
                return <a href={page.link} className="accentHoverable">{page.name}</a>
            })}
            <a href="contact" id="navigationContactButton">Contact</a>
        </div>
    </>
}

export function MobileNavigation() {
    const [isOpen, setOpen] = useState(false);

    return <>
        <div id="mobileNavigation">
            <div id="mobileMenu" className="closed">
                {isOpen && <MobileHamburgerMenu/>}
                <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="var(--accent-color)" onToggle={() => {
                    if(isOpen) {
                        document.getElementById("mobileMenu")?.classList.add("closed")
                    } else {
                        document.getElementById("mobileMenu")?.classList.remove("closed")
                    }
                }}/>
            </div>
        </div>
    </>
}

export function MobileHamburgerMenu() {
    return <>
        <motion.div id="mobileHamburgerMenu">
            <SearchBar/>
            {mainPages.map((page) => {
                return <motion.a href={page.link} className="accentHoverable" initial={{
                    translate: "0 -100%",
                    opacity: 0
                }} animate={{
                    translate: "0 0%",
                    opacity: 1,
                    transition: {
                        duration: 0.05,
                        delay: 0.02 + 0.02 * mainPages.indexOf(page)
                    }
                }}>{page.name}</motion.a>
            })}
        </motion.div>
    </>
}