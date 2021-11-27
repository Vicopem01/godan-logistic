import classes from "./forgot.module.css";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { useState, useEffect } from "react";
import { Avatar, Mail, Tel, Padlock } from "../../../constant";
import Loader from "../../../components/UI/Loader/loader";
import { emailCheck, phoneNumberCheck } from "../../../services/functions";
import { registerNewUser } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";

const Register = ({ history }) => {
  const [loader, showLoader] = useState(false);
  const [focus, setFocus] = useState(0);
  const [email, setEmail] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const signup = async (evt) => {
    evt.preventDefault();
    if (email === "") {
      toast.error(
        <ToastMessage
          text="Error"
          message="Please input account email address"
        />
      );
    } else if (!emailCheck(email)) {
      toast.error(
        <ToastMessage text="Error" message="Invalid Email Address" />
      );
    } else {
      showLoader(true);
      try {
        // const res = await registerNewUser(data);
        // console.log(res);
        toast.success("Password reset link sent, Check your inbox");
        history.push("/login");
      } catch (error) {
        showLoader(false);
        toast.error(<ToastMessage text="Error" message={error.message} />);
      }
    }
  };

  return (
    <main className={classes.main}>
      <div>
        <p className="medium-text medium-weight">Reset Password</p>
      </div>
      <form>
        <label
          htmlFor="email"
          className={`${classes.label} ${focus === 2 ? classes.show : ""}`}
        >
          <div>
            <Mail stroke="#9DA8B6" />
          </div>
          <input
            placeholder="user@email.com"
            id="email"
            onFocus={() => setFocus(2)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <p className="small-text left-text ">
          <Link to="/login"> Return to Login</Link>
        </p>

        <ButtonBlue onClick={signup}>
          Reset Password
          {loader && (
            <div>
              <Loader />
            </div>
          )}
        </ButtonBlue>
        {/* <div className={classes.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div> */}
      </form>
      {/* <button className={classes.google}>Sign up with Google</button> */}
    </main>
  );
};
export default Register;
