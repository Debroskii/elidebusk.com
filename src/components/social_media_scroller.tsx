import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
//@ts-ignore
import "@splidejs/splide/css"
import "./social_media_scroller.css"
import type { ReactNode } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';

type SocialMediaScrollerProps = {
    handles?: ReactNode[],
    height: number | string
}

export default function SocialMediaScroller(
    {handles = [
        <SocialMediaLink link="https://www.instagram.com/elidebusk08" name="elidebusk08" icon={<InstagramIcon/>}/>,
        <SocialMediaLink link="https://www.youtube.com/@elidebusk" name="elidebusk" icon={<YoutubeIcon/>}/>
    ], height}: SocialMediaScrollerProps) {
    const splideOptions = {
        pagination: false,
        type: 'loop',
        rewind: true,
        arrows: false,
        perPage: 4,
        autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            speed: 0.3
        }
    }

    const computedStyle = {
        height: typeof height === "string" ? height : `${height}rem`
    }

    return <>
        <div className="SocialMediaScrollerContainer" style={computedStyle}>
            <Splide hasTrack={ false } extensions={{autoScroll: AutoScroll}} options={splideOptions}>
                <SplideTrack>
                    {handles.map(value => {
                        return <SplideSlide>
                            {value}
                        </SplideSlide>
                    })}
                </SplideTrack>
            </Splide>
            <div className="SocialMediaScrollerContainerOverlay"></div>
        </div>
    </>
}

export function SocialMediaLink({icon, name, link}: {icon: ReactNode, name: string, link: string}) {
    return <>
        <a className="SocialMediaLinkContainer" href={link}>
            {icon}
            <h1 className="SocialMediaHandleLink">{name}</h1>
        </a>
    </>
}