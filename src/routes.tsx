import { Route, Routes } from "react-router";
import Home from "./pages/home";
import PageNotFound from "./pages/page_not_found";

export default function SiteRoutes() {
    return <>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
}