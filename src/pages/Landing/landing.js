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
import { createNewOrder } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import RiderInfo from "../../components/Landing/RiderInfo/info";
import { createAutoLogout } from "../../services/functions";

const Landing = ({ history }) => {
  const [sideBar, setSideBar] = useState(false);
  const [stage, setStage] = useState("stage1");
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    startDestination: "",
    endDestination: "",
    distance: "20km",
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
    // if (data.startDestination === "" || data.endDestination === "") {
    //   toast.error("Input locations");
    // } else {
      setStage("stage3");
    // }
  };
  const getRider = async () => {
    console.log(data);
    try {
      // const res = await createNewOrder(data);
      // console.log(res);
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
  // alert(err.name); // ReferenceError
  // alert(err.message); // lalala is not defined
  // alert(err.stack);
  return (
    <>
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
              <Option onClick={getRider} setData={setData} />
            )}
            {/* <Menu onClick={() => setSideBar(true)} />
            <SideBar
              sideBar={sideBar}
              cancelSidebar={() => setSideBar(false)}
            /> */}
          </>
        )}
        {stage === "stage4" && (
          <>
            <GetRiders
              onClick={() =>
                // console.log("yesss")
                setStage("stage5")
              }
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
