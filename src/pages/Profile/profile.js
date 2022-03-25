import classes from "./profile.module.css";
import { ButtonBlue } from "../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Avatar, Mail, Tel } from "../../constant";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Register = () => {
  let navigate = useNavigate();
  let { data } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
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

        <ButtonBlue onClick={handleLogout}>Logout</ButtonBlue>
      </div>
    </main>
  );
};
export default Register;
