import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem";

// The function returns all the translations of the logged in user
const ProfileTranslationHistory = (props) => {
  const translationList = props.translations
    .map((translation, index) => (
      <ProfileTranslationHistoryItem
        key={index + "-" + translation}
        translation={translation}
      />
    ))
    .reverse() //Prints the translations in the reverse order, the newest translations first
    .slice(-10); //Prints out only the last 10 translations
    

  return (
    <section>
      <div>Your translation history:</div>
      {props.translation !== null ? (
        <ul>{translationList}</ul>
      ) : (
        <ul>No translation yet</ul>
      )}
    </section>
  );
};
export default ProfileTranslationHistory;
