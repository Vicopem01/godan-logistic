import { LocationPin } from "../../../svgs";
import { ButtonBlue, ButtonGrey } from "../../UI/Button/button";
import classes from "./where.module.css";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import geolocation from "geolocation";
import Geocode from "react-geocode";

const Where = ({ moveStep1, setLoad, setData, data, locationArr }) => {
  const place = [];
  Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("ng");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  const getCoords = () => {
    return new Promise((resolve, reject) => {
      geolocation.getCurrentPosition(function (err, position) {
        if (err) {
          setLoad(false);
          toast.error(<ToastMessage text="Error" message={err.message} />);
        }
        Geocode.fromLatLng(
          position.coords.latitude,
          position.coords.longitude
        ).then(
          (response) => {
            const address = response.results[0].formatted_address;
            setData(prevState => ({
              ...prevState,
              startDestination: address,
            }));
            resolve(response);
          },
          (error) => {
            console.error("error");
            reject(error);
          }
        );
      });
    });
  };

  const getLocation = async () => {
    setLoad(true);
    const res = await getCoords();
    setLoad(false);
    moveStep1();
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
