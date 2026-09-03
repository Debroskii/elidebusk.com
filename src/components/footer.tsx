import { mainPages } from "./navigation";

export default function Footer() {
    return <>
        <div id="footer">
            <div id="footerLinks">
                {mainPages.map(page => <a href={page.link} className="footerLink">{page.name}</a>)}
            </div>
            <div id="footerContact">

            </div>
        </div>
    </>
}