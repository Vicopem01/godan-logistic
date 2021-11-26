import classes from "./whereTo.module.css";
import Geocode from "react-geocode";
import Search from "../../../assets/images/landing/search.svg";
import { useEffect, useState } from "react";
import AutoComplete from "../../PlacesAutoComplete/autocomplete";

// import GooglePlacesAutocomplete, {
//   geocodeByLatLng,
// } from "react-google-places-autocomplete";

const Destination = ({ onClick }) => {
  // const [inputValue, setInputValue] = useState("");
  // useEffect(async () => {
  //   const lat = localStorage.getItem("latitude");
  //   const lng = localStorage.getItem("longitude");
  //   Geocode.setApiKey(process.env.REACT_APP_MAP_API_KEY);
  //   Geocode.setLanguage("en");
  //   Geocode.setRegion("ng");
  //   // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
  //   // Geocode.setLocationType("ROOFTOP");
  //   Geocode.enableDebug();
  //   await Geocode.fromLatLng(lat, lng).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       setInputValue(address);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, [localStorage.getItem("longitude")]);
  return (
    <div className={classes.destination}>
      <span></span>
      <div className={classes.main} onClick={onClick}>
        <img src={Search} alt="progress" />
        <span>Where to?</span>
      </div>
    </div>
  );
};

export default Destination;
