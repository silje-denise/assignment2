import Header from "../components/Header";
import TranslationForm from "../components/TranslationForm";



//const apiURL = process.env.REACT_APP_API_URL;
//const apiKey = process.env.REACT_APP_API_KEY;

const Translation = () => {


    const handleTranslationClicked = translation => {
        console.log(translation)
        return translation
    }

    return(
        <>
            <div>
                <Header></Header>
            </div>
            <div id="TranslateInput">
                <TranslationForm onTranslate={handleTranslationClicked}/>
            </div>
        </>
    );
}


export default Translation;