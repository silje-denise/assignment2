import {useForm} from "react-hook-form";

const inputStyle = {
    backgroundColor: "white", 
    padding: "9px", 
    borderRadius: "10px",

};

const frameStyle = {
    backgroundColor: "darkred", 
    padding: "30px", 
    borderStyle: "none"
}

const translateButtonStyle = {
    padding: "10px", 
    borderRadius: "10px", 
    margin: "2px"
}

//Requirements for the input to be valid
const translationConfig = {
    required: true,
    maxLength: 40,
    pattern: /^[A-Za-z ]+$/
}

const TranslationForm = ({onTranslate}) => {
    //Event handler
    const{ register, handleSubmit} = useForm()
    const onSubmit = async ({TranslationInput}) => {onTranslate(TranslationInput);}

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset style={frameStyle}>
                <input style={translateButtonStyle} type="text" {...register("TranslationInput", translationConfig)} placeholder="Write here"/>
                <button style={inputStyle} type="submit">Translate</button>
            </fieldset>
        </form>
    )
}

export default TranslationForm;
