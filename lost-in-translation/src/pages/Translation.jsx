import Header from "../components/Header";
import TranslateInput from "../components/TranslateInput";
import withAuth from "../hoc/withAuth";

const Translation = () => {
    return(
        <div>
            <Header></Header>
            <TranslateInput></TranslateInput>
        </div>
    );
}

// The user can only navigate to this page if they are authenticated/logged in
export default withAuth(Translation);