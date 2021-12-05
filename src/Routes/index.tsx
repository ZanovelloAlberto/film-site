import { firebaseContext } from "firebase"
import { useContext } from "react"
import { BrowserRouter } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"


const Index = () => {
    const { currentUser } = useContext(firebaseContext)

    return (
        <BrowserRouter>
            {currentUser ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    )
}

export default Index
