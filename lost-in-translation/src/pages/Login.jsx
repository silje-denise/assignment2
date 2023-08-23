import { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login = () => {

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

  //The LoginForm takes care of the login
  return (
    <div>
      <Header />
      <main style={main}>
        <div style={inputSection}>
            <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default Login;
