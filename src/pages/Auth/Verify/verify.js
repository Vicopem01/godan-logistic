import classes from "../auth.module.css";
import Mail from "../../../assets/images/authentication/mail.svg";
import { ButtonBlue } from "../../../components/UI/Button/button";

const Verify = ({ history }) => {
  const login = () => {
    history.push("/login");
  };
  return (
    <main className={classes.main}>
      <div className={classes.center}>
        <div className="center-flex">
          <img src={Mail} alt="" />
        </div>
        <p className="center-text small-text medium-margin">
          Account created successfully.
          <br />
          Check your mail inbox or spam to verify your account.
        </p>
        <ButtonBlue onClick={login}>Continue to Login</ButtonBlue>
      </div>
    </main>
  );
};

export default Verify;
