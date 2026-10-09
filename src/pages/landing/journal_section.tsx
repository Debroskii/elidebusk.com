import "./journal_section.css"
import { useSafeMediaQuery } from "../../util/platform";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
//@ts-ignore
import "@splidejs/splide/css"
import Heading from "../../components/alias/heading";
import Detail from "../../components/alias/detail";
import LiftedButton from "../../components/lifted_button";

export default function LandingPageJournal() {
    return <>
        {useSafeMediaQuery('(max-width: 1000px)') ? <MobileLandingPageJournal/> : <DesktopLandingPageJournal/>}
    </>
}

export function DesktopLandingPageJournal() {
    const splideOptions = {
        pagination: true,
        autoplay: true,
        interval: 5000,
        type: 'fade',
        rewind: true,
        arrows: false
    };

    return <>
        <div id="DesktopLandingPageJournalContainer">
            <div id="DesktopLandingPageFeaturedJournalPost">
                <Splide hasTrack={ false } options={splideOptions}>
                    <ul className="splide__pagination" id="DesktopLandingPageFeaturedJournalPostPagination"/>
                    <SplideTrack>
                        <SplideSlide>
                            <h1>Test test test</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Test test test 2</h1>
                        </SplideSlide>
                        <SplideSlide>
                            <h1>Test test test 3</h1>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
            <div id="LandingPageExploreJournalPost">
                <div>
                    <Heading>"Expression is the only means by which we can know our own minds."</Heading>
                    <Detail>Charles Horton Cooley</Detail>
                </div>
                <LiftedButton href="/journal" inverted><Detail>Explore Journal →</Detail></LiftedButton>
            </div>
        </div>
    </>
}

export function MobileLandingPageJournal() {
    return <>

    </>
}