import ProfileActions from "../components/Profile/ProfileActions";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";

const Profile = () => {
    const {user} = useUser();

    //Style
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