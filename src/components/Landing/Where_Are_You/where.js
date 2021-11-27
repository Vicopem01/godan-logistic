import { LocationPin } from "../../../svgs";
import { ButtonBlue, ButtonGrey } from "../../UI/Button/button";
import classes from "./where.module.css";

const Where = ({ moveStep1, setLocation }) => {
  const getLocation = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLocation((prevState) => ({
          ...prevState,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }));
      });
      moveStep1();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.pin}>
        <LocationPin />
      </div>
      <h3 className="medium-text">Where are you?</h3>
      <p className="small-text medium-margin">
        Set your location so that we can pick you at the right spot and find
        vehincles available around you
      </p>
      <div className={classes.btn_div}>
        <ButtonBlue onClick={getLocation}>Use my location</ButtonBlue>
        <ButtonGrey onClick={moveStep1}>Input manually</ButtonGrey>
      </div>
    </div>
  );
};

export default Where;
