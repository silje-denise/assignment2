import { useState } from "react";

const Translate = () => {
    const [word, setWord] = useState({ value: ""})

    const handleWordChange = event => {
        setWord({value: event.target.value})
    }

    return(
        <fieldset>
            <input type="text" value={word.value} onChange={handleWordChange} />
            <button type="submit">Translate</button>
        </fieldset>
    );
}

export default Translate;