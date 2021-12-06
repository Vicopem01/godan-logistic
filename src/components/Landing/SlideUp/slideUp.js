import classes from "./slideUp.module.css";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Distance from "../../../assets/images/landing/destinationImg.svg";
import { ButtonBlue } from "../../UI/Button/button";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import { geocodeByLatLng } from "react-google-places-autocomplete";

const SlideUp = ({ place, show, onClick, onClick2, setData, location }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    geocodeByLatLng({ lat: location.lat, lng: location.long })
      .then((results) => {
        console.log(results[0].formatted_address);
        setData((prevState) => ({
          ...prevState,
          startDestination: results[0].formatted_address,
        }));
      })
      .catch((error) => console.error(error));
    console.log(value);
  }, [location]);
  useEffect(() => {
    if (value !== null) {
      setData((prevState) => ({
        ...prevState,
        endDestination: value.label,
      }));
    }
  }, [value]);
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
            <span className={classes.formDiv_span}></span>

            <div className={classes.googlePlaces}>
              <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_MAP_API_KEY}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                // initialValue={address}
                selectProps={{
                  value,
                  onChange: setValue,
                  placeholder: "Search Location",
                  styles: {
                    input: (provided) => ({
                      ...provided,
                      color: "#222222",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "#222222",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "#222222",
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
            {show && (
              <div className={classes.btn}>
                <ButtonBlue onClick={onClick2}>Continue</ButtonBlue>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SlideUp;
