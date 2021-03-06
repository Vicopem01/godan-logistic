import classes from "./success.module.css";
import Mail from "../../../assets/images/authentication/mailsuccess.svg";
import { ButtonBlue } from "../../UI/Button/button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  let navigate = useNavigate();
  return (
    <div className={classes.container}>
      <div>
        <img src={Mail} alt="Mail" />
        <h2>Verify Email!</h2>
        <p>
          Thank you for signing up on Godan, kindly check your email inbox to
          verify your account. See you on the inside 🤭
        </p>
        <ButtonBlue onClick={() => navigate("/login")}>Go to login</ButtonBlue>
      </div>
    </div>
  );
};

export default Success;
