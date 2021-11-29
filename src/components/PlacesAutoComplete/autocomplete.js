import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
const Component = () => {
  const [address, setaddress] = useState("");
  return (
    <div>

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
          />
    </div>
  );
};
export default Component;
