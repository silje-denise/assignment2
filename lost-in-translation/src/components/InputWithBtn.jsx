
const InputWithBtn = (props) => {
    const onchange = props.onchange;
    const onclick = props.onclick;

    const input = {
        padding: "5px",
        borderRadius: "10px",
        fontSize: "20px",
        border: "2px solid #ccc",
        backgroundColor: "#eee",
    }

return(
    <div>
        <input type="text" onChange={onchange} placeholder="What's your name?" style={input}/>
        <button onClick={onclick} style={input}>➡️</button>
    </div>
);
}

export default InputWithBtn;