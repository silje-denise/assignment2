import { Link } from "react-router-dom";

// The actions to be done at the profile page
const ProfileActions = () => {
    return(
        <ul>
            <li><Link to="/translations">Translations</Link></li>
            <li><button>Clear history</button></li>
            <li><button>Logout</button></li>
        </ul>
    );
}
export default ProfileActions;

//logout, redirect etc.