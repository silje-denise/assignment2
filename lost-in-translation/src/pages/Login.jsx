import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
    /*
        TODO: 
            - Connect to API
            - Add a CreateUser function
            - Add a GetUser function
            - Redirect user to /translation page after being logged in
    */

    const [username, setUsername ] = useState(""); 

    const handleOnclick = () => {
        alert(username);
    }
    const handleChange = (event) => {
        setUsername(event.target.value);
    }
  

    return(
        <div>
            <Header/>
            <main>
                <div>
                    <input type="text" onChange={handleChange}/>
                    <button onClick={handleOnclick}>➡️</button>
                </div>
            </main>
        </div>
    );
}

export default Login;