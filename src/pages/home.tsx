import { useScramble } from "use-scramble"
import Footer from "../components/footer"
import NavigationBar from "../components/navigation"

export default function Home() {
    const { ref } = useScramble({
        text: "Home pages are lame anyways",
        speed: 0.75,
        overdrive: true
    })

    return <>
        <NavigationBar/>
        <div id="homeContainer">
            <h1 ref={ref}></h1>
        </div>
        <Footer/>
    </>
}