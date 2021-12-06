import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { useEffect } from "react";

const Calculator = ({ google }) => {
  const service = new google.maps.DistanceMatrixService();
  const origin1 = { lat: 55.93, lng: -3.118 };
  const origin2 = "Greenwich, England";
  const destinationA = "Stockholm, Sweden";
  const destinationB = { lat: 50.087, lng: 14.421 };
  const request = {
    origins: [origin1, origin2],
    destinations: [destinationA, destinationB],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  useEffect(async () => {
    // const  calculateDistance=()=> {
    //   // const { google } = this.props;
    //   const service = new google.maps.DistanceMatrixService();
    //  service.getDistanceMatrix(
    //   {
    //   origins: [{ lat: 55.93, lng: -3.118 }],
    //   destinations: [{ lat: 50.087, lng: 14.421 }],
    //   travelMode: "DRIVING"
    //   },
    //   (response, status) => {
    //     console.log("response", response);
    //     console.log("status", status);
    //   }
    //   );
    // }
    // calculateDistance()
    try {
      const res = await service.getDistanceMatrix(request);
      console.log(res);
      console.log("res");
    } catch (error) {
      if (error.response) {
        console.log("msg", error.response.data.message);
      } else if (error.request) {
        console.log("req", error);
      } else {
        console.log("err", error.message);
      }
    }
    console.log(google.maps);
  }, []);
  return (
    <div>
      <div>Hi</div>
    </div>
  );
};

export default GoogleApiWrapper({
  api: "AIzaSyAn3MKZaKiBWsJLIfurVvarCa-UjyOHMCo",
})(Calculator);
// export default Calculator;
