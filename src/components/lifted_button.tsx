import type { ReactNode } from "react"
import "./lifted_button.css"

export type LiftedButtonProps = {
    href: string,
    children?: ReactNode,
    inverted?: boolean
}

export default function LiftedButton({href, children, inverted}: LiftedButtonProps) {
    return<>
        <a href={href} className={`LiftedButton ${inverted ? "InvertedColors" : ""}`}>
            {children}
        </a>
    </>
}