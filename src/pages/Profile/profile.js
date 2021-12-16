import classes from "./profile.module.css";
import { ButtonBlue } from "../../components/UI/Button/button";
import { Link } from "react-router-dom";
import EyeShow from "../../assets/images/authentication/eyeShow.svg";
import { useState, useEffect } from "react";
import { Avatar, Mail, Tel, Padlock } from "../../constant";
import Loader from "../../components/UI/Loader/loader";
import { emailCheck, phoneNumberCheck } from "../../services/functions";
import { getSingleUserInfo, registerNewUser } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";

const Register = ({ history }) => {
  const [loader, showLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const res = await getSingleUserInfo();
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
    }
  }, [localStorage.getItem("token")]);
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <main className={classes.main}>
      <div>
        <Link to="/">
          <img src={Arrow} alt="" />
        </Link>
        <p className="medium-text medium-weight">Account information</p>
      </div>
      <div className={classes.whitebg}>
        <label
          htmlFor="fullname"
          className={`${classes.label} ${classes.show2}`}
        >
          <div>
            <Avatar />
          </div>
          <span>{data.fullName}</span>
        </label>

        <label htmlFor="email" className={`${classes.label} ${classes.show}`}>
          <div>
            <Mail stroke="#9DA8B6" />
          </div>
          <span value>{data.email}</span>
        </label>

        <label
          htmlFor="telephone"
          className={`${classes.label} ${classes.show2}`}
        >
          <div>
            <Tel />
          </div>
          <span>{data.phoneNumber} </span>
        </label>

        <ButtonBlue onClick={handleLogout}>
          {loader ? (
            <div>
              <div>
                <Loader color="#ffffff" />
              </div>
            </div>
          ) : (
            "Logout"
          )}
        </ButtonBlue>
        {/* <div className={classes.line}>
          <span></span>
          <p>or</p>
          <span></span>
        </div> */}
      </div>
    </main>
  );
};
export default Register;
