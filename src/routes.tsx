import { Route, Routes } from "react-router";
import Home from "./pages/home";
import PageNotFound from "./pages/page_not_found";
import Admin from "./admin/admin_page";

export default function SiteRoutes() {
    return <>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    </>
}