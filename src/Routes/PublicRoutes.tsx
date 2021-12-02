import { Dashboard } from "pages/Dashboard";
import { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { deflateSync } from "zlib";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import { firebaseContext } from "../firebase";
import { Login } from "../pages/Login";




const PublicRoutes = () => {

    return (
        <HashRouter>
        <Routes>
            <Route path="/" >
                <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            </Route>
                
            
        </Routes>
        </HashRouter>
    )
}


export default PublicRoutes