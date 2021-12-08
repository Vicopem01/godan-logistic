import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Map from "../../components/Map/map";
import Menu from "../../components/Landing/Menu/menu";
import SideBar from "../../components/Landing/SideBar/sidebar";
import Where from "../../components/Landing/Where_Are_You/where";
import WhereTo from "../../components/Landing/WhereTo/whereTo";
import SlideUp from "../../components/Landing/SlideUp/slideUp";
import Option from "../../components/Landing/RideOption/ride";
import GetRiders from "../../components/Landing/GetRiders'/getRiders";
import { createNewBooking } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import RiderInfo from "../../components/Landing/RiderInfo/info";
import { createAutoLogout } from "../../services/functions";
import Loader from "../../components/Loader/loader";
import Onboarding from "../../components/Landing/Onboarding/onboarding";

const Landing = ({ history }) => {
  const [sideBar, setSideBar] = useState(false);
  const [stage, setStage] = useState("stage0");
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [data, setData] = useState({
    startDestination: "",
    endDestination: "",
    distance: undefined,
    paymentMethod: "",
    vehicleCategory: "",
  });
  const [auth, setAuth] = useState(false);
  const [location, setLocation] = useState({
    lat: "",
    long: "",
  });
  useEffect(async () => {
    const res = await createAutoLogout();
    setAuth(res);
  }, []);
  const fillAddress = (evt) => {
    evt.preventDefault();
    console.log(data);
    if (data.startDestination === "" || data.endDestination === "") {
      toast.error(<ToastMessage text="Input Destinations" />);
    } else {
      setStage("stage3");
    }
  };
  const createBooking = async () => {
    setLoad(true);
    console.log(data);
    try {
      const res = await createNewBooking(data);
      setBookingId(res.data.booking._id);
      console.log(res.data.booking._id);
      setStage("stage4");
      setLoad(false);
    } catch (error) {
      toast.error(
        <ToastMessage text="Error processing" message={error.message} />
      );
      setLoad(false);
    }
  };

  return (
    <>
      {load && <Loader />}
      {stage === "stage0" && <Onboarding onClick={() => setStage("stage1")} />}
      <Map />
      <div>
        {stage === "stage1" && (
          <>
            <Menu onClick={() => setSideBar(true)} />
            <SideBar
              sideBar={sideBar}
              cancelSidebar={() => setSideBar(false)}
            />
            <Where
              moveStep1={() => setStage("stage2")}
              setLocation={setLocation}
              setLoad={setLoad}
            />
          </>
        )}

        {stage === "stage2" && (
          <>
            <Menu onClick={() => setSideBar(true)} />
            <SideBar
              sideBar={sideBar}
              cancelSidebar={() => setSideBar(false)}
            />
            <WhereTo onClick={() => setShow(true)} />
            <SlideUp
              show={show}
              setData={setData}
              onClick={() => setShow(false)}
              onClick2={fillAddress}
              location={location}
              place={data.startDestination}
            />
          </>
        )}
        {stage === "stage3" && (
          <>
            {!auth ? (
              <Redirect push to="/login?redirect=fetch-rider" />
            ) : (
              <Option
                onClick={createBooking}
                setData={setData}
                data={data}
                setLoad={setLoad}
              />
            )}
          </>
        )}
        {stage === "stage4" && (
          <>
            <GetRiders
              price={data}
              setStage={setStage}
              bookingId={bookingId}
              setSecondLoad={setLoad}
            />
          </>
        )}
        {stage === "stage5" && (
          <>
            <Menu onClick={() => setSideBar(true)} />
            <SideBar
              sideBar={sideBar}
              cancelSidebar={() => setSideBar(false)}
            />
            <RiderInfo onClick={() => setStage("stage4")} />
          </>
        )}
      </div>
    </>
  );
};
export default Landing;
