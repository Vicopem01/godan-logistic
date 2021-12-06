import classes from "./register.module.css";
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
import Arrow from "../../../assets/images/authentication/arrowLeft.svg";
import Success from "../../../components/Auth/RegisterSuccess/success";

const Register = ({ history }) => {
  const [success, showSuccess] = useState(true);
  const [password, showPassword] = useState(true);
  const [loader, showLoader] = useState(false);
  const [focus, setFocus] = useState(0);
  const [confirmPassword, showConfirmPassword] = useState(true);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm_password: "",
    phoneNumber: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const signup = async (evt) => {
    evt.preventDefault();
    if (
      data.fullName === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirm_password === "" ||
      data.phoneNumber === ""
    ) {
      toast.error(
        <ToastMessage text="Error" message="Please fill all fields" />
      );
    } else if (!emailCheck(data.email)) {
      toast.error(
        <ToastMessage text="Error" message="Invalid Email Address" />
      );
    } else if (!phoneNumberCheck(data.phoneNumber)) {
      toast.error(<ToastMessage text="Error" message="Invalid Phone Number" />);
    } else if (data.password.length < 6) {
      toast.error(
        <ToastMessage
          text="Error"
          message="Password should be at least 6 characters"
        />
      );
    } else if (data.password !== data.confirm_password) {
      toast.error(
        <ToastMessage text="Error" message="Passwords do not match" />
      );
    } else {
      showLoader(true);
      try {
        const res = await registerNewUser(data);
        console.log(res);
        toast.success(
          "Account created sucessfully, check your mail for verification"
        );
        showSuccess(true);
      } catch (error) {
        showLoader(false);
        if (error.response) {
          toast.error(
            <ToastMessage text="Error" message={error.response.data.message} />
          );
        } else {
          toast.error(<ToastMessage text="Error" message={error.message} />);
        }
      }
    }
  };

  return (
    <main className={classes.main}>
      {success && <Success />}
      <div>
        <Link to="/login">
          <img src={Arrow} alt="" className={classes.image} />
        </Link>
        <p className={`medium-text medium-weight ${classes.ptext}`}>
          Create your account
        </p>
      </div>
      <form>
        <label
          htmlFor="fullname"
          className={`${classes.label} ${focus === 1 ? classes.show2 : ""}`}
        >
          <div>
            <Avatar />
          </div>
          <input
            placeholder="Firstname Lastname"
            id="fullname"
            onFocus={() => setFocus(1)}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                fullName: e.target.value,
              }))
            }
          />
        </label>

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
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
        </label>

        <label
          htmlFor="telephone"
          className={`${classes.label} ${focus === 3 ? classes.show2 : ""}`}
        >
          <div>
            <Tel />
          </div>
          <input
            placeholder="0901 222 3333"
            text="tel"
            id="telephone"
            onFocus={() => setFocus(3)}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                phoneNumber: e.target.value,
              }))
            }
          />
        </label>

        <label
          htmlFor="password"
          className={`${classes.label} ${focus === 4 ? classes.show : ""}`}
        >
          <div>
            <Padlock stroke="#9DA8B6" />
          </div>
          <input
            placeholder="• • • • • • • •"
            type={password ? "password" : "text"}
            id="password"
            onFocus={() => setFocus(4)}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
          <img
            className={classes.imgEnd}
            src={EyeShow}
            alt="Password"
            onClick={() => showPassword(!password)}
          />
        </label>

        <label
          htmlFor="confirmPassword"
          className={`${classes.label} ${focus === 5 ? classes.show : ""}`}
        >
          <div>
            <Padlock stroke="#9DA8B6" />
          </div>
          <input
            placeholder="• • • • • • • •"
            type={confirmPassword ? "password" : "text"}
            id="confirmPassword"
            onFocus={() => setFocus(5)}
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                confirm_password: e.target.value,
              }))
            }
          />
          <img
            className={classes.imgEnd}
            src={EyeShow}
            alt="Password"
            onClick={() => showConfirmPassword(!confirmPassword)}
          />
        </label>
        {!success && (
          <ButtonBlue onClick={signup}>
            {loader ? (
              <div>
                <div>
                  <Loader color="#ffffff" />
                </div>
              </div>
            ) : (
              "Register"
            )}
          </ButtonBlue>
        )}
        {/* <div className={classes.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div> */}
        <p className="small-text center-text medium-margin">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      {/* <button className={classes.google}>Sign up with Google</button> */}
    </main>
  );
};
export default Register;
