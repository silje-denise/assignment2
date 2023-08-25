import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/Translations/TranslationForm";
import TranslateInput from "../components/Translations/TranslateOutput";
import { useState } from "react";
import { translationAdd } from "../api/translations";

const Translations = () => {

    const [outputState, setOutputState] = useState()

    //
    const handleTranslationClicked =  input => {
        setOutputState(TranslateInput(input))
        translationAdd(input)
    }

    return(
        <>
            <div>
                <TranslationForm onTranslate={handleTranslationClicked}/>
                {outputState}
            </div>
        </>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translations);
