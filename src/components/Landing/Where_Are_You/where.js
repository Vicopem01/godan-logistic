import { LocationPin } from "../../../svgs";
import { ButtonBlue, ButtonGrey } from "../../UI/Button/button";
import classes from "./where.module.css";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const Where = ({ moveStep1, setLocation, setLoad }) => {
  const getLocation = async () => {
    setLoad(true);
    try {
      await navigator.geolocation.getCurrentPosition(function (position) {
        setLocation((prevState) => ({
          ...prevState,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }));
      });
      moveStep1();
      setLoad(false);
    } catch (error) {
      setLoad(false);
      toast.error(<ToastMessage text="Error" message={error.message} />);
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
