import classes from "./background.module.css";
import Logo from "../../../assets/images/landing/godan_logo.svg";

const Background = () => {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.imgDiv}>
          <img src={Logo} alt="Logo" />
        </div>
        <p>Delivery like you've never seen before.</p>
      </div>
    </div>
  );
};
export default Background;
