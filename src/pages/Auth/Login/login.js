import classes from "../auth.module.css";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [password, showPassword] = useState(true);

  return (
    <main className={classes.main}>
      <div>
        <p className="medium-text small-margin medium-weight">Welcome Back</p>
        <p className="medium-text">Login your Godan account</p>
      </div>
      <form>
        <label htmlFor="telephone">Phone number</label>
        <input type="tel" id="telephone" />
        <label htmlFor="password">Password</label>
        <div className={classes.password}>
          <input
            placeholder="• • • • • • • •"
            type={password ? "password" : "text"}
            id="password"
          />
          <img src={EyeShow} alt="" onClick={() => showPassword(!password)} />
        </div>
        <ButtonBlue>Login</ButtonBlue>
        <br />
        <div className={classes.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <button className={classes.google}>Sign up with Google</button>
        <p className="small-text center-text medium-margin">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </form>
    </main>
  );
};
export default Login;
