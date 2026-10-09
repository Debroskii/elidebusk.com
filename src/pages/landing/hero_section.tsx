import "./hero_section.css"
import Heading from "../../components/alias/heading";
import Detail from "../../components/alias/detail";
import LiftedButton from "../../components/lifted_button";
import { useSafeMediaQuery } from "../../util/platform";

export default function LandingPageHeroSection() {
    return <>
        {useSafeMediaQuery('(max-width: 1000px)') ? <MobileLandingPageHeroSection/> : <DesktopLandingPageHeroSection/>}
    </>
}

export function DesktopLandingPageHeroSection() {
    return <>
        <div id="DesktopLandingPageHeroContainer">
            <div id="DesktopLandingPageHero">
                <Heading>
                    Hi! I'm Elijah!
                </Heading>
                <Detail>
                    STUDENT, PHOTOGRAPHER, PROGRAMMER
                </Detail>
            </div>
        </div>
    </>
}

export function MobileLandingPageHeroSection() {
    return <>

    </>
}