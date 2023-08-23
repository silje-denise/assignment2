import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

// The function returns all the translations of the logged in user
const ProfileTranslationHistory = (props) => {

    const translationList = props.translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation}/>)
    return(
        <section>
            <h4>Your translation history</h4>
            <ul>{translationList}</ul>
        </section>
    );
}
export default ProfileTranslationHistory;