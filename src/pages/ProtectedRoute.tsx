import {useAuth} from "../contexts/FakeAuthContext"
import { Navigate } from "react-router-dom";
function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth();
    // useEffect(() => {
    //     if(!isAuthenticated) navigate("/")
    // },[isAuthenticated,navigate]);

    return isAuthenticated ? children :  <Navigate to="/" />;
}

export default ProtectedRoute
