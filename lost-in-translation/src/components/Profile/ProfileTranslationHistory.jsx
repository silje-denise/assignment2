import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

// The function returns all the translations of the logged in user
const ProfileTranslationHistory = (props) => {

    //TODO: display only the last 10 translations
    const translationList = props.translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={index + '-' + translation} translation={translation}/>)

    return(
        <section>
            <div>Your translation history:</div>
            { props.translation !== null ? <ul>{translationList}</ul> : <ul>No translation yet</ul>}
        </section>
    );
}
export default ProfileTranslationHistory;