//takes the input, makes it into an Array and mapps over. 
//If input only has letters from a-z, it gets the image for that latter
//if input is space, it get space and else the user will be alerted that they have an invalid input
const TranslateInput = (input) => {
    let input_text = Array.from(input).map(letter => letter.toLowerCase())
    for (let x = 0; x < input_text.length; x++) {
         if (/^[a-z]$/.test(input_text[x])) {
            input_text[x] = <img src={`img/${input_text[x]}.png`} key={x} alt={`The letter ${input_text[x]}`} />
         } else if (input_text[x] === " ") { 
            input_text[x] =<div key={" "}/>
         } else{
             return alert("Invalid input");
       }
    }
    return input_text
}
export default TranslateInput;