import classes from "../auth.module.css";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { useState } from "react";

const Register = () => {
  const [password, showPassword] = useState(true);
  const [confirmPassword, showConfirmPassword] = useState(true);
  return (
    <main className={classes.main}>
      <div>
        <p className="medium-text medium-margin medium-weight">Create an Account</p>
      </div>
      <form>
        <label htmlFor="fullname">Full Name</label>
        <input placeholder="FirstName LastName" id="fullname" />
        <label htmlFor="email">Email Address </label>
        <input placeholder="user@email.com" id="email" />
        <label htmlFor="telephone">Phone Number </label>
        <input placeholder="(+234)" text="tel" id="telephone" />
        <label htmlFor="password">Password </label>
        <div className={classes.password}>
          <input
            placeholder="• • • • • • • •"
            type={password ? "password" : "text"}
            id="password"
          />
          <img
            src={EyeShow}
            alt="Password"
            onClick={() => showPassword(!password)}
          />
        </div>
        <label htmlFor="confirmPassword">Confirm Password </label>
        <div className={classes.password}>
          <input
            placeholder="• • • • • • • •"
            type={confirmPassword ? "password" : "text"}
            id="confirmPassword"
          />
          <img
            src={EyeShow}
            alt="Password"
            onClick={() => showConfirmPassword(!confirmPassword)}
          />
        </div>
        <ButtonBlue>Register</ButtonBlue>
        <div className={classes.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div>
      </form>
      <button className={classes.google}>Sign up with Google</button>
      <p className="small-text center-text medium-margin">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </main>
  );
};
export default Register;
