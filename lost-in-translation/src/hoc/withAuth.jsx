// Hoc or higher order functions uses camelCase in file names

import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

//This component will protect our pages and routes
//Only logged in users can navigate to certain pages

const withAuth = Component => props => {
    const {user} = useUser();

    if(user !== null){
        return <Component {...props}/>
    }else{
        return <Navigate to="/"/>
    }
}
export default withAuth;