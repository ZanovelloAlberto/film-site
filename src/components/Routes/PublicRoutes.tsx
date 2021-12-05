import { About, Login } from "pages";
import Dashboard from "pages/Dashboard";
import { useContext, useEffect } from "react";
import {  Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { deflateSync } from "zlib";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import { firebaseContext } from "../../firebase";




const PublicRoutes = () => {
    let navigate = useNavigate()


    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>

            </Route>
            <Route path="/login" element={<Navigate replace to="/home" />} />

            
                
            
        </Routes>
    )
}


export default PublicRoutes