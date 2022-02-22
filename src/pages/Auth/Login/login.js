import classes from "./login.module.css";
import { ButtonWhite } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { emailCheck } from "../../../services/functions";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";
import Loader from "../../../components/UI/Loader/loader";
import { login } from "../../../services/apiCalls";
import Logo from "../../../assets/images/authentication/godan_logo.svg";
import { Mail, Padlock } from "../../../constant";

const Login = ({ history, location }) => {
  const [password, showPassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.search === "?redirect=fetch-rider") {
      toast.error(<ToastMessage text="Please login to continue" />);
    }
  }, []);
  const handleLogin = async (evt) => {
    evt.preventDefault();
    if (mail === "" || pass === "") {
      toast.error(
        <ToastMessage
          text="Error"
          message="Email Address and Password required"
        />
      );
    } else {
      if (!emailCheck(mail)) {
        toast.error(
          <ToastMessage text="Error" message="Invalid Email Address" />
        );
      } else {
        if (pass.length < 6) {
          toast.error(
            <ToastMessage text="Error" message="6 charater password mininum" />
          );
        } else {
          let data = {
            email: mail,
            password: pass,
          };
          try {
            setLoader(true);
            const res = await login(data);
            localStorage.setItem("token", res.data.data.token);
            history.push("/");
          } catch (error) {
            setLoader(false);
            if (error.response) {
              toast.error(
                <ToastMessage
                  text="Error"
                  message={error.response.data.message}
                />
              );
            } else {
              toast.error(
                <ToastMessage text="Error" message={error.message} />
              );
            }
          }
        }
      }
    }
  };
  return (
    <main className={classes.main}>
      <div>
        <Link className="medium-padding center-flex" to="/">
          <img className="" src={Logo} alt="Logo" />
        </Link>
        <div className="small-margin">
          <p className="medium-text  medium-weight center-text">Welcome Back</p>
          <p className="medium-text center-text">Login your Godan account</p>
        </div>
        <form className="medium-padding">
          <label htmlFor="email" className={classes.flexLabel}>
            <Mail stroke="#ffffff" />
            <span></span>
            <input
              type="email"
              placeholder="E-Mail"
              id="email"
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <br/>
          <label htmlFor="password" className={classes.flexLabel}>
            <Padlock stroke="#ffffff" />
            <span></span>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <br />
          <Link to="/forgot-password">Forgot Password?</Link>
          <ButtonWhite onClick={handleLogin} className="center-flex">
            {loader ? (
              <div>
                <div>
                  <Loader color="#407bff" />
                </div>
              </div>
            ) : (
              "Login"
            )}
          </ButtonWhite>
          {/* <div className={classes.line}>
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <button className={classes.google}>Sign up with Google</button> */}
          <p className="medium-text center-text medium-margin">
            Don't have an account? <Link to="/register">Create Account</Link>
          </p>
        </form>
      </div>
    </main>
  );
};
export default Login;
