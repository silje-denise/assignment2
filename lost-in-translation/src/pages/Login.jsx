import { useState } from "react";
import Header from "../components/Header";
import InputWithBtn from "../components/InputWithBtn";

const Login = () => {
  /*
        TODO: 
            - Connect to API
            - Add a CreateUser function
            - Add a GetUser function
            - Redirect user to /translation page after being logged in
    */

  const [username, setUsername] = useState("");

  const handleOnclick = () => {
    alert(username);
    getUser();
    // if(){
    // createUser();
    // }

    //TODO: redirect user to /translations
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  //Create user---------------------------------
  //Async-await & try-catch?
  const apiURL = "https://zenith-oil-snake.glitch.me/";
  const apiKey = process.env.REACT_APP_API_KEY;

  const getUser = () => {
    fetch(`${apiURL}/translations?username=${username}`)
      .then((response) => {
         response.json();
       })
      .then((results) => {
        results.map((r) => {
          console.log(r);
          return r;
        });

        return results;
        // results will be an array of users that match the username
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = () => {
    fetch(`${apiURL}/translations`, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: { username },
        translations: [],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not create new user");
        }
        return response.json();
      })
      .then((newUser) => {
        // newUser is the new user with an id
        console.log(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Styling
  const main = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "lightpink",
    fontSize: "30px",
  };
  const inputSection = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "20px",
    backgroundColor: "white",
    margin: "0 50px",
    fontSize: "23x",
    borderRadius: "15px",
  };

  return (
    <div>
      <Header />
      <main style={main}>
        <div style={inputSection}>
          <label>Let's get started! Type in a username:</label>
          <InputWithBtn onchange={handleChange} onclick={handleOnclick} />
        </div>
      </main>
    </div>
  );
};

export default Login;
