import { GoogleApiWrapper } from "google-maps-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../Toast/toast";
import Loader from "../Loader/loader";

const Calculator = ({ google, data, setValue }) => {
  const [load, setLoad] = useState(true);
  const service = new google.maps.DistanceMatrixService();

  const request = {
    origins: [data.startDestination],
    destinations: [data.endDestination],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };
  useEffect(async () => {
    try {
      const res = await service.getDistanceMatrix(request);
      console.log(res);
      setValue(res.rows[0].elements[0].distance.value);
      console.log(res.rows[0].elements[0].distance.value);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting distance"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage
              text="Error getting distance"
              message={error.message}
            />
          );
    }
  }, []);
  return <div>{load && <Loader />}</div>;
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY,
})(Calculator);
// export default Calculator;
