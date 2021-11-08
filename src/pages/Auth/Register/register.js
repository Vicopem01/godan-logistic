import classes from "../auth.module.css";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { useState, useEffect } from "react";
import At from "../../../assets/images/authentication/at.svg";
import Padlock from "../../../assets/images/authentication/padlock.svg";
import Avatar from "../../../assets/images/authentication/avatar.svg";
import Tel from "../../../assets/images/authentication/tel.svg";
import Loader from "../../../components/UI/Loader/loader";
import { emailCheck, phoneNumberCheck } from "../../../services/functions";
import { registerNewUser } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";

const Register = ({ history }) => {
  const [password, showPassword] = useState(true);
  const [loader, showLoader] = useState(false);
  const [confirmPassword, showConfirmPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const signup = async (evt) => {
    evt.preventDefault();
    if (
      name === "" ||
      email === "" ||
      pass === "" ||
      cpass === "" ||
      phone === ""
    ) {
      toast.error(
        <ToastMessage text="Error" message="Please fill all fields" />
      );
    } else {
      if (!emailCheck(email)) {
        toast.error(
          <ToastMessage text="Error" message="Invalid Email Address" />
        );
      } else {
        if (!phoneNumberCheck(phone)) {
          toast.error(
            <ToastMessage text="Error" message="Invalid Phone Number" />
          );
        } else {
          if (pass.length < 6) {
            toast.error(
              <ToastMessage
                text="Error"
                message="Password should be at least 6 characters"
              />
            );
          } else {
            if (pass !== cpass) {
              toast.error(
                <ToastMessage text="Error" message="Passwords do not match" />
              );
            } else {
              showLoader(true);
              let data = {
                fullName: name,
                email: email,
                password: pass,
                confirm_password: cpass,
                phoneNumber: phone,
              };
              try {
                const res = await registerNewUser(data);
                console.log(res);
                toast.success(
                  "Account created sucessfully, check your mail for verification"
                  );
                  history.push("/login");
              } catch (error) {
                showLoader(false);
                toast.error(
                  <ToastMessage text="Error" message={error.message} />
                );
              }
            }
          }
        }
      }
    }
  };

  return (
    <main className={classes.main}>
      <div>
        <p className="medium-text medium-margin medium-weight">
          Create an Account
        </p>
      </div>
      <form>
        <label htmlFor="fullname">Full Name</label>
        <div className={classes.password}>
          <img src={Avatar} alt="" className={classes.imgStart} />
          <input
            placeholder="Firstname Lastname"
            id="fullname"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <label htmlFor="email">Email Address </label>
        <div className={classes.password}>
          <img src={At} alt="" className={classes.imgStart} />
          <input
            placeholder="user@email.com"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label htmlFor="telephone">Phone Number </label>
        <div className={classes.password}>
          <img src={Tel} alt="" className={classes.imgStart} />
          <input
            placeholder="0901 222 3333"
            text="tel"
            id="telephone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <label htmlFor="password">Password </label>
        <div className={classes.password}>
          <img src={Padlock} alt="" className={classes.imgStart} />
          <input
            placeholder="• • • • • • • •"
            type={password ? "password" : "text"}
            id="password"
            onChange={(e) => setPass(e.target.value)}
          />
          <img
            className={classes.imgEnd}
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
            onChange={(e) => setCpass(e.target.value)}
          />
          <img
            className={classes.imgEnd}
            src={EyeShow}
            alt="Password"
            onClick={() => showConfirmPassword(!confirmPassword)}
          />
        </div>
        <ButtonBlue onClick={signup}>
          Register
          {loader && (
            <div>
              <Loader />
            </div>
          )}
        </ButtonBlue>
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
