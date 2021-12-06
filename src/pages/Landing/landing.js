import { useState, useEffect } from "react";
// import classes from "./landing.module.css";
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

const Landing = ({ history }) => {
  const [sideBar, setSideBar] = useState(false);
  const [stage, setStage] = useState("stage1");
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
  const fillAddress = () => {
    if (data.startDestination === "" || data.endDestination === null) {
      toast.error("Input locations");
    } else {
      setStage("stage3");
    }
  };
  const createBooking = async () => {
    console.log(data);
    try {
      const res = await createNewBooking(data);
      setBookingId(res.data.booking._id);
      console.log(res.data.booking._id);
      setStage("stage4");
    } catch (error) {
      toast.error(
        <ToastMessage text="Error processing" message={error.message} />
      );
    }
  };

  const goToLogin = () => {
    console.log("111");
    toast.error(<ToastMessage text="Please login to continue" />);
    console.log("222");
    history.push("/login");
    console.log("333");
  };
  return (
    <>
      {load && <Loader />}
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
              goToLogin()
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
            <GetRiders price={data} setStage={setStage} bookingId={bookingId}
            setSecondLoad={setLoad} />
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
