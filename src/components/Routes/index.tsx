import { Loader } from "components/SpinnerProgress"
import { useContext } from "react"
import { appContext } from "context"
import { BrowserRouter } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"


const Index = () => {
    const { currentUser, loading } = useContext(appContext)

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
