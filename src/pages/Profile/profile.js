import classes from "./profile.module.css";
import BackArrow from "../../assets/images/profile/backArrow.svg";
import EditButton from "../../assets/images/profile/editButton.svg";
import { ButtonBlue } from "../../components/UI/Button/button";
const Register = ({history}) => {
  return (
    <main className={classes.main}>
      <div className={classes.topDiv}>
        <img src={BackArrow} alt="Back" onClick={()=>history.goBack()}/>
        <p className="medium-text">Profile</p>
        <img src={EditButton} alt="Edit" />
      </div>
      <span className={`small-margin ${classes.borderBottom}`}></span>
      <form className={classes.form}>
        <div className={classes.telephone}>
          <label>+234</label>
          <input type="tel" placeholder="Phone number" />
        </div>
        <span className={`small-margin ${classes.borderBottom}`}></span>
        <div className={classes.names}>
          <input type="text" placeholder="First name" />
          <div></div>
          <input type="text" placeholder="Surname" />
        </div>
        <span className={`small-margin ${classes.borderBottom}`}></span>
        <input type="email" placeholder="Email address" />
        <span className={`small-margin ${classes.borderBottom}`}></span>
        <ButtonBlue>Register</ButtonBlue>
      </form>
    </main>
  );
};
export default Register;
