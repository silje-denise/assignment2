import { Link } from "react-router-dom";
import { storageDelete, storageSave } from "../utils/storage";
import { useUser } from "../context/UserContext";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { translationClearHistory } from "../api/translations";

// The actions to be done at the profile page
const ProfileActions = () => {

    const {user, setUser} = useUser();

    const handleLogoutClick = () => {
        if(window.confirm("Are you sure you want to log out?")){
            storageDelete(STORAGE_KEY_USER);
            setUser(null); //Clear the login/session data
        }
    }
    //Clear history by setting the translations to an empty array
    const handleClearHistoryClick = async () => {
        if(!window.confirm("Are you sure?\nThis can not be undone!")){
            return
        }
        const [clearError] = await translationClearHistory(user.id);

        if(clearError !== null){
            return
        }

        const updatedUser = {...user, translations:[]}

        storageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
    }
    //Style
    const logoutBtn = {
        all: "unset",
        fontSize: "16px",
        backgroundColor: "darkred",
        padding: "5px 15px",
        borderRadius: "50px",
        fontWeight: "bold",
        cursor: "pointer",
        color:"white"
      };

      const clearBtn = {
        all: "unset",
        fontSize: "16px",
        color: "darkred",
        padding: "5px 15px",
        fontWeight: "bold",
        cursor: "pointer"
      };

      const wrapper = {display: "flex", justifyContent: "space-between"}

    return(
        <div style={wrapper}>
            <button onClick={handleClearHistoryClick} style={clearBtn}>Clear history</button>
            <button onClick={handleLogoutClick} style={logoutBtn}>Logout</button>
        </div>
    );
}
export default ProfileActions;