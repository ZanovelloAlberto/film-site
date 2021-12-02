import App from "App";
import { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import { firebaseContext } from "../firebase";




const PrivateRoutes = () => {

  const { currentUser } = useContext(firebaseContext)
  return (

    <HashRouter>
      
      <Routes>
        <Route path="/" element={<><TopBar /><Sidebar /></>}>
          <Route index element={<App />} />
        </Route>
      </Routes>

    </HashRouter>
  )
}


export default PrivateRoutes