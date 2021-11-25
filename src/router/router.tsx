import { Button } from "@mui/material";
import { getAuth } from "firebase/auth";
import { HashRouter, Link, Route, Router, Routes } from "react-router-dom";
import { isAuth } from "../firebase/static";
import About from "../pages/about";
import { Login } from "../pages/login";







export default function uno() {

  console.log(isAuth());

  return (
    <>
      <Login />
    </>
  )
}

const Logged = () => {


  return (
    <>
      <Button
        onClick={() => {
          getAuth().signOut()
          console.log(getAuth());
          
        }}
        type="submit"

        variant="contained"
        color="primary"
      >
        Sign Out
      </Button>

      <HashRouter>

        <Routes>
          <Route path="/" element={<About />}>
            <Route index element={<></>} />
            <Route path="teams" element={<></>}>
              <Route path=":teamId" element={<></>} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}