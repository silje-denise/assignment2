

const TranslateInput = (input) => {
    let input_text = Array.from(input).map(letter => letter.toLowerCase())
    for (let x = 0; x < input_text.length; x++) {
         if (/^[a-z]$/.test(input_text[x])) {
            input_text[x] = <img src={`/img/${input_text[x]}.png`} key={x} alt={"Letters"} />
         } else{
             return alert("Invalid input");
       }
    }
    return input_text
}

export default TranslateInput;