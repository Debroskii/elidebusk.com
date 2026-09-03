import Footer from "../components/footer";
import NavigationBar from "../components/navigation";

export default function PageNotFound() {
    return <>
        <NavigationBar/>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 10rem - 5rem)",
            width: "100vw",
            fontSize: "5rem",
            fontWeight: "bold",
            flexDirection: "column",
        }}>
            <h1 style={{color: "var(--accent-color)"}}>Oopsie Daisy</h1>
            <p className="detailText">404: Not Found</p>
        </div>
        <Footer/>
    </>
}