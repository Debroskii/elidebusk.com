import { useSafeMediaQuery } from "../../util/platform";
import "./media_section.css"
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
//@ts-ignore
import "@splidejs/splide/css"
import { check } from "astro:schema";
import Heading from "../../components/alias/heading";
import LiftedButton from "../../components/lifted_button";
import Detail from "../../components/alias/detail";

const galleryImages = import.meta.glob<{ default: ImageMetadata }>('../../assets/media/gallery_scroller/thumbnails/*.{jpeg,jpg,png,gif}', {eager: true});
const nonUsedImages: Record<any, any> = galleryImages;

export default function LandingPageMedia() {
    
    console.log(galleryImages)

    return <>
        {useSafeMediaQuery('(max-width: 1000px)') ? <MobileLandingPageMedia/> : <DesktopLandingPageMedia/>}
    </>
}

export function DesktopLandingPageMedia() {
    const splideOptions = {
        pagination: false,
        type: 'loop',
        rewind: true,
        arrows: false,
        perPage: 4,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false
        }
    };

    function getRandomImage(values: any[], checkAgainst: any[]) {
        let candidate = values[Math.floor(Math.random() * values.length)]
        if(checkAgainst.find(v => v === candidate)) candidate = getRandomImage(values, checkAgainst);
        for (const key in galleryImages) {
            if (galleryImages[key] === candidate) {
                delete galleryImages[key];
            }
        }
        values.splice(values.indexOf(candidate), 1);
        return candidate.default.src;
    }

    function getRandomImages(): string[] {
        let output: string[] = [];
        let values = Object.values(nonUsedImages);
        for(let i = 0; i < 25; i++) {
            output.push(getRandomImage(values, output))
        }
        return output;
    }

    return <>
        <div id="DesktopLandingPageMediaContainer">
            <div id="DesktopLandingPageMediaGallery">
                <div id="DesktopLandingPageMediaGallerySplides">
                    <Splide hasTrack={ false } options={{...splideOptions, direction: "ltr"}} extensions={{autoScroll: AutoScroll}}>
                        <SplideTrack>
                            {getRandomImages().map(v => {
                                return <SplideSlide>
                                    <img className="card-img" src={v}/>
                                </SplideSlide>
                            })}
                        </SplideTrack>
                    </Splide>
                    <Splide hasTrack={ false } options={{...splideOptions, direction: "rtl"}} extensions={{autoScroll: AutoScroll}}>
                        <SplideTrack>
                            {getRandomImages().map(v => {
                                return <SplideSlide>
                                    <img className="card-img" src={v}/>
                                </SplideSlide>
                            })}
                        </SplideTrack>
                    </Splide>
                    <Splide hasTrack={ false } options={{...splideOptions, direction: "ltr"}} extensions={{autoScroll: AutoScroll}}>
                        <SplideTrack>
                            {getRandomImages().map(v => {
                                return <SplideSlide>
                                    <img className="card-img" src={v}/>
                                </SplideSlide>
                            })}
                        </SplideTrack>
                    </Splide>
                    <Splide hasTrack={ false } options={{...splideOptions, direction: "rtl"}} extensions={{autoScroll: AutoScroll}}>
                        <SplideTrack>
                            {getRandomImages().map(v => {
                                return <SplideSlide>
                                    <img className="card-img" src={v}/>
                                </SplideSlide>
                            })}
                        </SplideTrack>
                    </Splide>
                </div>
                <div id="DesktopLandingPageMediaGalleryOverlay">
                    <Heading>Shot by Eli</Heading>
                    <LiftedButton href='/media' inverted><Detail>Explore Media →</Detail></LiftedButton>
                </div>
            </div>
        </div>
    </>
}

export function MobileLandingPageMedia() {
    return <>

    </>
}