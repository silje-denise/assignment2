import Header from "../components/Header";
//import TranslateInput from "../components/TranslateInput";
import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/TranslationForm";
//import { useState } from "react";
import TranslateInput from "../components/TranslateOutput";

const Translation = () => {

    //const [setFormtData] = useState(null);

    const handleTranslationClicked = input => {
        console.log(TranslateInput(input))
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

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translation);
