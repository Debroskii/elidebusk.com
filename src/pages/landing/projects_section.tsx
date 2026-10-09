import Detail from "../../components/alias/detail";
import Heading from "../../components/alias/heading";
import LiftedButton from "../../components/lifted_button";
import { useSafeMediaQuery } from "../../util/platform"
import "./projects_section.css"

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
//@ts-ignore
import "@splidejs/splide/css"

export default function LandingPageProjectSection() {
    return <>{useSafeMediaQuery('(max-width: 1000px)') ? <MobileLandingPageProjectSection/> : <DesktopLandingPageProjectSection/>}</>
}

export function DesktopLandingPageProjectSection() {
    const splideOptions = {
        pagination: true,
        type: 'loop',
        rewind: true,
        arrows: true,
        perPage: 3
    };

    return <>
        <div id="DesktopLandingPageProjectsContainer">
            <div id="DesktopLandingPageProjectsGrid">
                <div id="DesktopLandingPageProjectsDescriptionBox">
                    <div id="DesktopLandingPageProjectsDescriptionContent">
                        <Heading>Projects</Heading>
                        <p>A description of the projects section goes here.</p>
                        <LiftedButton href="/projects" inverted><Detail>Explore Projects →</Detail></LiftedButton>
                    </div>
                </div>
                <div id="DesktopLandingPageProjectsStatsBox">
                     <div id="DesktopLandingPageProjectsLanguages">
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-java-plain"></i>
                            <Detail>Java</Detail>
                        </div>
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-python-plain"></i>
                            <Detail>Python</Detail>
                        </div>
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-react-plain"></i>
                            <Detail>React</Detail>
                        </div>
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-typescript-plain"></i>
                            <Detail>Typescript</Detail>
                        </div>
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-c-plain"></i>
                            <Detail>C</Detail>
                        </div>
                        <div className="DesktopLandingPageProjectsLanguageItem">
                             <i className="devicon-dart-plain"></i>
                            <Detail>dart</Detail>
                        </div>
                     </div>
                     <div id="DesktopLandingPageProjectsStatistics">
                        <div id="crHoursContainer">
                            <Heading>400+</Heading>
                            <Detail>logged hours</Detail>
                        </div>
                        <div id="crProjectsContainer">
                            <Heading>30+</Heading>
                            <Detail>projects</Detail>
                        </div>
                        <div id="crContributionsContainer">
                            <Heading>450+</Heading>
                            <Detail>contributions</Detail>
                        </div>
                     </div>
                </div>
                <Splide id="DesktopLandingPageProjectsSplide" hasTrack={ false } options={splideOptions}>
                    <SplideTrack>
                        
                    </SplideTrack>
                </Splide>
            </div>
        </div>
    </>
}

export function MobileLandingPageProjectSection() {
    return <>

    </>
}

export type LandingPageProjectCardProps = {
    href: string,
    imgUrl: string,
    logoUrl: string,
    quip: string
}

export function LandingPageProjectCard({href, imgUrl, logoUrl, quip}: LandingPageProjectCardProps) {
    let style = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    } as React.CSSProperties

    return <>
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div style={style} className="LandingPageProjectCard">
                <img className="LandingPageProjectCardLogo" src={logoUrl} alt="Project Logo"></img>
                <Detail>{quip}</Detail>
            </div>
        </a>
    </>
}