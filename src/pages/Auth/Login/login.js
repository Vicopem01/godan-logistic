import classes from "../auth.module.css";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { emailCheck } from "../../../services/functions";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";
import Loader from "../../../components/UI/Loader/loader";
import { login } from "../../../services/apiCalls";

const Login = ({ history }) => {
  const [password, showPassword] = useState(true);
  const [loader, setLoader] = useState(false);
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
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
            const res  = await login(data);
            console.log(res);
            localStorage.setItem('token', res.data.data.token);
            history.push("/");
          } catch (error) {
            setLoader(false);
            toast.error(<ToastMessage text="Error" message={error.message} />);
          }
        }
      }
    }
  };
  return (
    <main className={classes.main}>
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
        <ButtonBlue onClick={handleLogin}>
          Login
          {loader && (
            <div>
              <Loader />
            </div>
          )}
        </ButtonBlue>
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
