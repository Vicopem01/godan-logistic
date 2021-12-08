import classes from "./error.module.css";
import Logo from "../../assets/images/onboarding/logo.svg";
import Avatar from "../../assets/images/error/avatar.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className={classes.container}>
      <Link to="/">
        {" "}
        <img src={Logo} alt="Logo" />{" "}
      </Link>

      <div className={classes.box}>
        <div className={classes.flex}>
          <div className={classes.text_container}>
            <div>
              <span className={classes.span}> 404 ,</span>
              <br />
              <span className={classes.span2}>You have hit an error.</span>
              <div>
                <br />
              </div>
              <p className={classes.text1}>Want to book a rider?.</p>
            </div>
          </div>
        </div>
        <div className={classes.cartoon}>
          <img src={Avatar} alt="Error" />
        </div>
      </div>
      <Link to="/" className={classes.btn}>
        Go to Home{" "}
      </Link>
    </div>
  );
};

export default Error;
