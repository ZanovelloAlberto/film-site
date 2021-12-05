import { useContext, useEffect } from "react";
import { HashRouter, Navigate, Route, Router, Routes, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import { firebaseContext } from "../../firebase";




const PrivateRoutes = () => {
  let navigate = useNavigate()
  const { currentUser } = useContext(firebaseContext)
  useEffect(() => {
    navigate("/",{replace:true})
  }, [])
  return (

    // <Router location={"/"} navigator={}>
      
      <Routes>
        <Route path="/" element={<><TopBar /><Sidebar /></>}>
        </Route>
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}

      </Routes>

    // </Router>
  )
}


export default PrivateRoutes