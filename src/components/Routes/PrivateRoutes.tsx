import { useContext, useEffect } from "react";
import { HashRouter, Navigate, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import { firebaseContext } from "../../firebase";
import { About } from "pages";
import { Explore } from "pages";




const PrivateRoutes = () => {
  let navigate = useNavigate()
  let location = useLocation()
  // const { currentUser } = useContext(firebaseContext)
  console.log(location.pathname);
  if (location.pathname == "/login") {
    navigate("/", { replace: true })

  }

  return (
    <>

      <TopBar />
      <Sidebar />
      <Routes>
        <Route path="/">
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>

    </>
  )
}


export default PrivateRoutes