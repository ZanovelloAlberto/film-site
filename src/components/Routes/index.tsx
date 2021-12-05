import { Loader } from "components/SpinnerProgress"
import { firebaseContext } from "firebase"
import { useContext, useEffect } from "react"
import { BrowserRouter, useNavigate } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"


const Index = () => {
    const { currentUser, loading } = useContext(firebaseContext)

    return (
        <>
            {loading ?
                <Loader />
                :
                <BrowserRouter>
                    {currentUser ? <PrivateRoutes /> : <PublicRoutes />}
                </BrowserRouter>
            }
        </>


    )
}

export default Index
