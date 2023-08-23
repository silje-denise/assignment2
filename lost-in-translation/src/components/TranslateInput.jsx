import { useState } from "react";

const inputStyle = {
    backgroundColor: "white", 
    padding: "10px", 
    borderRadius: "10px"
};

const frameStyle = {
    backgroundColor: "darkred", 
    padding: "30px", 
    borderStyle: "none"
}

const translateButtonStyle = {
    padding: "8px", 
    borderRadius: "10px", 
    margin: "2px"
}


const TranslateInput = () => {
    const [word, setWord] = useState({ value: ""})

    const handleWordChange = event => {
        setWord({value: event.target.value})
    }

    return(
        <fieldset style={frameStyle}>
            <input style={inputStyle} type="text" value={word.value} onChange={handleWordChange} />
            <button style={translateButtonStyle} type="submit">Translate</button>
        </fieldset>
    );
}

export default TranslateInput;
