import classes from "./slideUp.module.css";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Distance from "../../../assets/images/landing/destinationImg.svg";
import { ButtonBlue } from "../../UI/Button/button";
import { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import { geocodeByLatLng } from "react-google-places-autocomplete";
import Loader from "../../Loader/loader";

const SlideUp = ({ show, onClick, onClick2, setData, location }) => {
  const [start, setStart] = useState(undefined);
  const [end, setEnd] = useState("");
  const [load, setLoad] = useState(true);
  const [input, setInput] = useState(true);
  useEffect(async () => {
    try {
      const results = await geocodeByLatLng({
        lat: location.lat,
        lng: location.long,
      });
      console.log(results[0].formatted_address);
      setStart(results[0].formatted_address);
      setData((prevState) => ({
        ...prevState,
        startDestination: results[0].formatted_address,
      }));
      console.log(start);
      setLoad(false);
    } catch (error) {
      console.error(error);
      setLoad(false);
    }
    // .then((results) => {
    //   console.log(results[0].formatted_address);
    //   setStart(results[0].formatted_address);
    //   setData((prevState) => ({
    //     ...prevState,
    //     startDestination: results[0].formatted_address,
    //   }));
    //   console.log(start);
    //   start === "" ? setInput(true) : setInput(false);
    //   setLoad(false);
    // })
    // .catch((error) => {
    //   console.error(error);
    //   setLoad(false);
    // });
  }, []);
  useEffect(() => {
    end === ""
      ? setData((prevState) => ({
          ...prevState,
          endDestination: "",
        }))
      : setData((prevState) => ({
          ...prevState,
          endDestination: end.label,
        }));
  }, [end]);
  return (
    <div className={`${classes.main} ${show ? classes.show : ""}`}>
      {load && <Loader />}
      <div className={classes.sub}>
        <div className={classes.top}>
          <img src={Cancel} alt="Cancel" onClick={onClick} />
          <p>Select destination</p>
        </div>
        <div className={classes.formDiv}>
          <img src={Distance} alt="" />
          <form>
            <div className={classes.googlePlaces}>
              {/* {input && <div onClick={() => setInput(false)}>{start}</div>} */}
              {/* {!input && ( */}
              <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_MAP_API_KEY}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                selectProps={{
                  defaultInputValue: start,
                  start,
                  value: start,
                  onChange: setStart,
                  placeholder: "Start Destination",
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
              {/* )}  */}
            </div>
            <span className={classes.formDiv_span}></span>

            <div className={classes.googlePlaces}>
              <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_MAP_API_KEY}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                selectProps={{
                  defaultInputValue: end,
                  onChange: setEnd,
                  placeholder: "End Destination",
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
