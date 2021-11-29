import classes from "./slideUp.module.css";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Distance from "../../../assets/images/landing/destinationImg.svg";
import { ButtonBlue } from "../../UI/Button/button";
import Geocode from "react-geocode";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
const SlideUp = ({ place, show, onClick, onClick2, setData, location }) => {
  const [address, setaddress] = useState("");
  useEffect(() => {
    Geocode.setApiKey("AIzaSyBpybr8fIeirph4O7kfGlrekKnkIZhOJ5A");
    Geocode.setLanguage("en");
    Geocode.setRegion("ng");

    // set location_type filter . Its optional.
    // google geocoder returns more that one address for given lat/lng.
    // In some case we need one address as response for which google itself provides a location_type filter.
    // So we can easily parse the result for fetching address components
    // ROOFTOP, RANGE_INTERPOLATED, GEOMETRIC_CENTER, APPROXIMATE are the accepted values.
    // And according to the below google docs in description, ROOFTOP param returns the most accurate result.
    Geocode.setLocationType("ROOFTOP");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get address from latitude & longitude.
    Geocode.fromLatLng(location.lat, location.long).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log("address1", address);
        setData((prevState) => ({
          ...prevState,
          startDestination: address,
        }));
      },
      (error) => {
        console.error(error);
      }
    );

    // Get formatted address, city, state, country from latitude & longitude when
    // Geocode.setLocationType("ROOFTOP") enabled
    // the below parser will work for most of the countries
    Geocode.fromLatLng(location.lat, location.long).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        console.log(city, state, country);
        console.log("address2", address);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [location]);
  const onSuggestionSelected = () => {
    // Add your business logic here. In this case we just log...
    console.log("Selected suggestion:");
  };
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
              value={place}
              placeholder="Pick up point"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  startDestination: e.target.value,
                }))
              }
            />
            <span></span>

            <div className={classes.googlePlaces}>
              <GooglePlacesAutocomplete
                apiKey="AIzaSyDrGNEbrjgK-a0HhOmQpveIOc-2S0GJhSs"
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                initialValue={address}
                selectProps={{
                  address,
                  onChange: setaddress,
                  placeholder: "Search Location",
                  styles: {
                    input: (provided) => ({
                      ...provided,
                      color: "#12082D",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "#12082D",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "#12082D",
                    }),
                  },
                }}
                onLoadFailed={(error) => {
                  toast.error(
                    <ToastMessage
                      text="Error fetching places"
                      message={error.message}
                    />
                  );
                }}
              />
            </div>
            {/* <input
              type="text"
              placeholder="Delivery point"
              onChange={(e) =>
                setData((prevState) => ({
                  ...prevState,
                  endDestination: e.target.value,
                }))
              }
            /> */}
            <div className={classes.btn}>
              <ButtonBlue onClick={onClick2}>Continue</ButtonBlue>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SlideUp;
