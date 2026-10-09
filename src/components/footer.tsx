import { useSafeMediaQuery } from "../util/platform"
import "./footer.css"

export default function Footer() {
    return <>{useSafeMediaQuery('(max-width: 1000px)') ? <MobileFooter/> : <DesktopFooter/>}</>
}

export function DesktopFooter() {
    return <>
        <div id="DesktopFooter">
            <div id="DesktopFooterLinks">
                <a>Projects</a>
                <a>Media</a>
                <a>Journal</a>
                <a>Linkedin</a>
                <a>GitHub</a>
                <a>Instagram</a>
            </div>
        </div>
    </>
}

export function MobileFooter() {
    return <></>
}