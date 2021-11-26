import { useState } from "react";
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

const Landing = () => {
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

  const getRider = async () => {
    console.log(data);
    try {
      const res = await createNewOrder(data);
      console.log(res);
      setStage("stage4");
    } catch (error) {
      toast.error(
        <ToastMessage text="Error processing" message={error.message} />
      );
    }
  };
  return (
    <div>
      {stage === "stage1" && (
        <>
          <Menu onClick={() => setSideBar(true)} />
          <SideBar sideBar={sideBar} cancelSidebar={() => setSideBar(false)} />
          <Map />
          <Where moveStep1={() => setStage("stage2")} />
        </>
      )}

      {stage === "stage2" && (
        <>
          <Menu onClick={() => setSideBar(true)} />
          <SideBar sideBar={sideBar} cancelSidebar={() => setSideBar(false)} />
          <Map />
          <WhereTo onClick={() => setShow(true)} />
          <SlideUp
            show={show}
            setData={setData}
            onClick={() => setShow(false)}
            onClick2={() => setStage("stage3")}
          />
        </>
      )}
      {stage === "stage3" && (
        <>
          <Option onClick={getRider} setData={setData} />
          <Map />
        </>
      )}
      {stage === "stage4" && (
        <>
          <GetRiders />
          <Map />
        </>
      )}
    </div>
  );
};
export default Landing;
