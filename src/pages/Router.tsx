import { HashRouter, Route, Routes } from "react-router-dom";



export default function RedirectRouter() {

  return (
    <>
    </>
  )
}

const Logged = () => {


  return (

      <HashRouter>

        <Routes>
          <Route path="/" element={<></>}>
            <Route index element={<></>} />
            <Route path="teams" element={<></>}>
              <Route path=":teamId" element={<></>} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
  )
}