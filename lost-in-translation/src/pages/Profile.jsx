import Header from "../components/Header";
import ProfileActions from "../components/ProfileActions";
import ProfileHeader from "../components/ProfileHeader";
import ProfileTranslationHistory from "../components/ProfileTranslationHistory";
import withAuth from "../hoc/withAuth";
import { useUser } from "../context/UserContext";

const Profile = () => {

    const {user} = useUser();

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