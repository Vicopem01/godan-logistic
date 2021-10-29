import { LocationPin } from "../../../svgs";
import { ButtonBlue, ButtonGrey } from "../../UI/Button/button";
import classes from "./where.module.css";

const Where = ({ moveStep1 }) => {
  return (
    <div className={classes.main}>
      <div className={classes.pin}>
        <LocationPin />
      </div>
      <h3>Where are you?</h3>
      <p>
        Set your location so that we can pick you at the right spot and find
        vehincles available around you
      </p>
      <div className={classes.btn_div}>
        <ButtonBlue onClick={moveStep1}>Set Automatically</ButtonBlue>
        <ButtonGrey onClick={moveStep1}>Set Later</ButtonGrey>
      </div>
    </div>
  );
};

export default Where;
