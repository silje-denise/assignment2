import { Link } from "react-router-dom";
import { storageDelete } from "../utils/storage";
import { useUser } from "../context/UserContext";
import { STORAGE_KEY_USER } from "../const/storageKeys";

// The actions to be done at the profile page
const ProfileActions = ({}) => {

    const {setUser} = useUser();

    const handleLogoutClick = () => {
        if(window.confirm("Are you sure you want to log out?")){
            storageDelete(STORAGE_KEY_USER);
            setUser(null); //Clear the login/session data
        }
    }

    return(
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    );
}
export default ProfileActions;

//TODO: Clear history