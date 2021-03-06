import classes from "./slideUp.module.css";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Distance from "../../../assets/images/landing/destinationImg.svg";
import { ButtonBlue } from "../../UI/Button/button";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const SlideUp = ({ show, onClick, onClick2, setData, data }) => {
  const move = (evt) => {
    evt.preventDefault();
    onClick2();
  };

  const setEnd = (e) => {
    localStorage.setItem("endDestination", e.label);
    setData((prevState) => ({
      ...prevState,
      endDestination: e.label,
    }));
  };
  const addStart = (e) => {
    localStorage.setItem("startDestination", e.label);
    setData((prevState) => ({
      ...prevState,
      startDestination: e.label,
    }));
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
            <div className={classes.googlePlaces}>
              <GooglePlacesAutocomplete
                apiKey={process.env.REACT_APP_MAP_API_KEY}
                autocompletionRequest={{
                  componentRestrictions: {
                    country: ["ng"],
                  },
                }}
                selectProps={{
                  defaultInputValue: data.startDestination,
                  onChange: addStart,
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
                  defaultInputValue: data.endDestination,
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
                <ButtonBlue onClick={move}>Continue</ButtonBlue>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default SlideUp;
