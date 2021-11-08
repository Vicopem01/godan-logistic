import classes from "../auth.module.css";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import EyeShow from "../../../assets/images/authentication/eyeShow.svg";
import { useState } from "react";
import At from "../../../assets/images/authentication/at.svg";
import Padlock from "../../../assets/images/authentication/padlock.svg";
import Avatar from "../../../assets/images/authentication/avatar.svg";
import Tel from "../../../assets/images/authentication/tel.svg";
import Loader from "../../../components/UI/Loader/loader";
import Error from "../../../components/ErrorMessage/error";
import { emailCheck, phoneNumberCheck } from "../../../services/functions";
import { registerNewUser } from "../../../services/apiCalls";

const Register = ({ history }) => {
  const [password, showPassword] = useState(true);
  const [loader, showLoader] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [confirmPassword, showConfirmPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [phone, setPhone] = useState("");
  const [errormsg, setErrorMsg] = useState("");
  const signup = async (evt) => {
    evt.preventDefault();
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    if (
      name === "" ||
      email === "" ||
      pass === "" ||
      cpass === "" ||
      phone === ""
    ) {
      setShow(true);
    } else {
      if (!emailCheck(email)) {
        setShow1(true);
      } else {
        if (!phoneNumberCheck(phone)) {
          setShow2(true);
        } else {
          if (pass !== cpass) {
            setShow3(true);
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

            } catch (error) {
              showLoader(false);
              setErrorMsg(error.message);
              setShow4(true);
            }
          }
        }
      }
    }
    // history.push("/verify-mail");
  };

  return (
    <main className={classes.main}>
      <Error
        show={show}
        setShow={() => setShow(false)}
        text="Error, please fill all fields"
      />
      <Error
        show={show1}
        setShow={() => setShow1(false)}
        text="Error, invalid email address"
      />
      <Error
        show={show2}
        setShow={() => setShow2(false)}
        text="Error, invalid phone number"
      />
      <Error
        show={show3}
        setShow={() => setShow3(false)}
        text="Error, passwords do not match"
      />
      <Error
        show={show4}
        setShow={() => setShow4(false)}
        text={` Error ${errormsg}`}
      />
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
