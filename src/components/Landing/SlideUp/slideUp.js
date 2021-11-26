import classes from "./slideUp.module.css";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Distance from "../../../assets/images/landing/destinationImg.svg";
import { ButtonBlue } from "../../UI/Button/button";

const SlideUp = ({ show, onClick, onClick2, setData }) => {
  return (
    <div className={`${classes.main} ${show ? classes.show : ""}`}>
      <div className={classes.sub}>
        <div className={classes.top}>
          <img src={Cancel} alt="Cancel" onClick={onClick} />
          <p>Select destination</p>
        </div>
        <div className={classes.formDiv}>
          <img src={Distance} alt="" />
          <form>
            <input
              type="text"
              placeholder="Pick up point"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  startDestination: e.target.value,
                }))
              }
            />
            <span></span>
            <input
              type="text"
              placeholder="Delivery point"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  endDestination: e.target.value,
                }))
              }
            />
          </form>
        </div>
        <ButtonBlue onClick={onClick2}>Continue</ButtonBlue>
      </div>
    </div>
  );
};
export default SlideUp;
