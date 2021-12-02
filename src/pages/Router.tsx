import { useContext } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { deflateSync } from "zlib";
import TopBar from "../components/TopBar/TopBar";
import { firebaseContext } from "../firebase";
import { Login } from "./Login";




const Router = () => {

  const {currentUser} = useContext(firebaseContext)
  return (
    <>
      {currentUser ? <>
      <TopBar/>
      
      <HashRouter>

        <Routes>
          <Route path="/" element={<TopBar />}>
            <Route index element={<></>} />
            <Route path="teams" element={<></>}>
              <Route path=":teamId" element={<></>} />
            </Route>
          </Route>
        </Routes>
      </HashRouter> 
      </>: 
      <Login/>}
    </>
  )
}


export default Router