import { HashRouter, Navigate, Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";
import { About } from "pages";
import { Explore } from "pages";
import AddMovie from "pages/AddMovie";
import { Box } from "@mui/material";




const PrivateRoutes = () => {
  let navigate = useNavigate()
  let location = useLocation()
  console.log(location.pathname);
  if (location.pathname == "/login") {
    navigate("/", { replace: true })

  }

  return (
     <Box sx={{ display: 'flex' }}>

      <TopBar />
      <Sidebar />
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      <Routes>
        <Route path="/">
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/" />}
        />

      </Routes>
      </Box>

    </Box>
  )
}


export default PrivateRoutes