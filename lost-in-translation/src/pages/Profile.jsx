import ProfileActions from "../components/ProfileActions";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTranslationHistory from "../components/ProfileTranslationHistory";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";
// import { useEffect } from "react";
// import { userById } from "../api/user";
// import { storageSave } from "../utils/storage";
// import { STORAGE_KEY_USER } from "../const/storageKeys";

const Profile = () => {

    const {user} = useUser();

    // useEffect(() => {
    //     const findUser = async () => {
    //         const [error, latestUser] = await userById(user.id);
    //         if(error === null){
    //             storageSave(STORAGE_KEY_USER, latestUser);
    //             setUser(latestUser);
    //         }
    //     }
    //     //findUser();
    // }, [setUser, user.id]);


    const main = {
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#CFB997",
        fontSize: "23px",
      };
      const wrapper = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "white",
        margin: "0 50px",
        fontSize: "23x",
        borderRadius: "15px",
      };

    return(
        <main style={main}>
        <div style={wrapper}>
            <ProfileHeader username={user.username}/>
            <ProfileTranslationHistory translations={user.translations}/>
            <ProfileActions/>
        </div>
        </main>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Profile);