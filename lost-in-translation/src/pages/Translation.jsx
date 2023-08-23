import Header from "../components/Header";
import TranslationForm from "../components/TranslationForm";
import {useState} from "react";



//const apiURL = process.env.REACT_APP_API_URL;
//const apiKey = process.env.REACT_APP_API_KEY;

const SignLanguage = [
    {
        id:"a",
        name: "a",
        image: "img/a.png"

    },

    {
        id:"b",
        name: "b",
        image: "img/b.png"

    },

    {
        id:"c",
        name: "c",
        image: "img/c.png"

    }

]


const Translation = () => {

    const [sign, setSign ] = useState(null)

    const handleSign =  (signId) => {
        setSign(SignLanguage.find(sign => sign.id === signId))
    }


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


export default Translation;