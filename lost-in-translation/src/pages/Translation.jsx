import Header from "../components/Header";
import withAuth from "../hoc/withAuth";
import TranslationForm from "../components/TranslationForm";
import TranslateInput from "../components/TranslateOutput";
import { useState } from "react";

const Translation = () => {

    const [outputState, setOutputState] = useState()

    const handleTranslationClicked = input => {
        setOutputState(TranslateInput(input))

        }

    return(
        <>
            <div>
                <Header></Header>
            </div>
            <div>
                <TranslationForm onTranslate={handleTranslationClicked}/>
                {outputState}
            </div>
        </>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translation);
