import Header from "../components/Header";
//import TranslateInput from "../components/TranslateInput";
import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/TranslationForm";



//const apiURL = process.env.REACT_APP_API_URL;
//const apiKey = process.env.REACT_APP_API_KEY;

const Translation = () => {


    const handleTranslationClicked = notes => {
        console.log(notes)
    }

    return(
        <>
            <div>
                <Header></Header>
            </div>
            <div id="TranslateInput">
                <TranslationForm onOrder={handleTranslationClicked}/>
            </div>
        </>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translation);
