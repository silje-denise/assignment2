import Header from "../components/Header";
import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/TranslationForm";
import TranslateInput from "../components/TranslateOutput";
import { useState } from "react";
//import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/translate";

const Translations = () => {

    const [outputState, setOutputState] = useState()

    const handleTranslationClicked =  input => {
        setOutputState(TranslateInput(input))
        return
    }

   // const [error, result] = translationAdd(outputState())

   // console.log("Error", error);
   // console.log("Result", result);

    return(
        <>
            <div>
                <Header></Header>
                <TranslationForm onTranslate={handleTranslationClicked}/>
                {outputState}
            </div>
        </>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translations);
