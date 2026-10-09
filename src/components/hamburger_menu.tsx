import { useState, type ReactNode } from "react"
import "./hamburger_menu.css"
import { AnimatePresence, motion } from "motion/react"

export type HamburgerMenuProps = {
    size?: number,
    children?: ReactNode
}

export default function HamburgerMenu({size, children}: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    const style = {} as any;
    if(size) {
        style.width = `${size}rem`
        style.height = `${size}rem`
        style.fontSize =`${size}rem`
    }

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return <>
        <AnimatePresence>
            {isOpen && <HamburgerMenuDisplay>{children}</HamburgerMenuDisplay>}
        </AnimatePresence>
        <button style={style} className="HamburgerMenuButton" onClick={toggleMenu}>
            <span className="material-symbols-outlined">
                {isOpen ? "close" : "list_2"}
            </span>
        </button>
    </>
}

export function HamburgerMenuDisplay({children}: {children?: ReactNode}) {
    return <>
        <motion.div className="HamburgerMenuDisplayContainer" initial={{
            translate: "-50% -100%"
        }} animate={{
            translate: "-50% 0%",
            transition: {
                duration: 0.1
            }
        }} exit={{translate: "-50% -100%", transition: {duration: 0.1}}}>
            {children}
        </motion.div>
    </>
}