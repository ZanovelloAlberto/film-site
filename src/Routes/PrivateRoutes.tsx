import { useContext } from "react";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import { firebaseContext } from "../firebase";




const PrivateRoutes = () => {

  const { currentUser } = useContext(firebaseContext)
  return (

    // <Router location={"/"} navigator={}>
      
      <Routes>
        <Route path="/" element={<><TopBar /><Sidebar /></>}>
        </Route>
      </Routes>

    // </Router>
  )
}


export default PrivateRoutes