import classes from "../auth.module.css";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Error from "../../../components/ErrorMessage/error";
import { emailCheck } from "../../../services/functions";

const Login = () => {
  const [password, showPassword] = useState(true);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleLogin = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    if (mail === "" || pass === "") {
      setShow1(true);
    } else {
      if (!emailCheck(mail)) {
        setShow2(true);
      }else{
        let data={
          
        }
      }
    }
  };
  return (
    <main className={classes.main}>
      <Error
        show={show1}
        setShow={() => setShow1(false)}
        text="Error, please fill all fields"
      />
      <Error
        show={show2}
        setShow={() => setShow2(false)}
        text="Error, invalid email address"
      />
      <Error
        show={show2}
        setShow={() => setShow2(false)}
        text="Error, invalid email address"
      />
      <div>
        <p className="medium-text medium-margin medium-weight">Welcome Back</p>
        <p className="medium-text">Login your Godan account</p>
      </div>
      <form>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="password">Password </label>
        <div className={classes.password}>
          <input
            placeholder="• • • • • • • •"
            type={password ? "password" : "text"}
            id="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <img
            src={EyeShow}
            alt=""
            onClick={() => showPassword(!password)}
            className={classes.imgEnd}
          />
        </div>
        <ButtonBlue onClick={handleLogin}>Login</ButtonBlue>
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
