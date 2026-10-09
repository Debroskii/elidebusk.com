import { useEffect, useState } from "react";
import { useSafeMediaQuery } from "../util/platform"
import "./navigation_bar.css"
import Wordmark from "./wordmark"
import HamburgerMenu from "./hamburger_menu";
import Icon from "@mdi/react";
import { mdiInstagram } from "@mdi/js";

export default function NavigationBar() {
    return <>
        <div id="NavigationBarContainer">
            <Wordmark size={1.75} linkToHome/>
            {useSafeMediaQuery('(max-width: 1000px)') ? <MobileNavigationBar/> : <DesktopNavigationBar/>}
        </div>
    </>
}

export function DesktopNavigationBar() {
    return <>
        <div id="DesktopNavigationPages">
            <a>Media</a>
            <a>Projects</a>
            <a>Journal</a>
        </div>
    </>
}

export function MobileNavigationBar() {
    return <>
        <div>
            <HamburgerMenu size={3}>
                <a className="HamburgerMenuDisplayLink">Blog</a>
                <a className="HamburgerMenuDisplayLink">Projects</a>
                <a className="HamburgerMenuDisplayLink">Media</a>
                <div className="HamburgerMenuDisplayCTAs">
                    <a className="HamburgerMenuDisplayIconCTA"></a>
                    <a className="HamburgerMenuDisplayCTA">Contact</a>
                    <a className="HamburgerMenuDisplayIconCTA"></a>
                </div>
            </HamburgerMenu>
        </div>  
    </>
}

export function InstagramIcon() {
    return (
        <Icon path={mdiInstagram} size={1}/>
    )
}