import LoginForm from "../components/LoginForm";

const Login = () => {

  //Styling
  const main = {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#CFB997",
    fontSize: "23px",
  };
  const wrapper = {
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
      <main style={main}>
        <div style={wrapper}>
            <LoginForm />
        </div>
      </main>
  );
};

export default Login;
