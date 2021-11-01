import classes from "./destination.module.css";
import Geocode from "react-geocode";
import Input from "../../UI/Input/input";
import progressLine from "../../../assets/images/destination/progressLine.svg";
import { useEffect, useState } from "react";
import AutoComplete from "../../PlacesAutoComplete/autocomplete";

// import GooglePlacesAutocomplete, {
//   geocodeByLatLng,
// } from "react-google-places-autocomplete";

const Destination = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(async () => {
    const lat = localStorage.getItem("latitude");
    const lng = localStorage.getItem("longitude");
    Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("ng");
    // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
    // Geocode.setLocationType("ROOFTOP");
    Geocode.enableDebug();
    await Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        setInputValue(address);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [localStorage.getItem("longitude")]);
  return (
    <div className={classes.destination}>
      <span></span>

      <div className={classes.main}>
        <h3 className="medium-text medium-margin">Select destination</h3>
        <img src={progressLine} alt="progress" />
        <Input placeholder="START" value={inputValue} />
        <br />
        <AutoComplete />
        <Input placeholder="END" />
      </div>
    </div>
  );
};

export default Destination;
