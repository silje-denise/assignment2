import {useForm} from "react-hook-form";

const inputStyle = {
    backgroundColor: "white", 
    padding: "9px", 
    borderRadius: "10px"
};

const frameStyle = {
    backgroundColor: "darkred", 
    padding: "30px", 
    borderStyle: "none"
}

const translateButtonStyle = {
    padding: "9px", 
    borderRadius: "10px", 
    margin: "2px"
}

const TranslationForm = ({onOrder}) => {

    const{ register, handleSubmit} = useForm()

    const onSubmit = ({TranslationInput}) => { onOrder(TranslationInput)}

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset style={frameStyle}>
                <label htmlFor="TranslationInput"></label>
                <input style={translateButtonStyle} type="text" {...register("TranslationInput")} placeholder="Write here"/>
                <button style={inputStyle} type="submit">Translate</button>
            </fieldset>
        </form>
    )
}

export default TranslationForm;