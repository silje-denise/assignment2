import Header from "../components/Header";
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

    return(
        <div>
            <Header></Header>
            <ProfileHeader username={user.username}/>
            <ProfileActions/>
            <ProfileTranslationHistory translations={user.translations}/>
        </div>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Profile);