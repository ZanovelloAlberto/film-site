import { Login } from "pages";
import Dashboard from "pages/Dashboard";
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { deflateSync } from "zlib";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import { firebaseContext } from "../firebase";




const PublicRoutes = () => {

    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            </Route>
                
            
        </Routes>
    )
}


export default PublicRoutes