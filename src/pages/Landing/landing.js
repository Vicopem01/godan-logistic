import { useState, useEffect } from "react";
import Map from "../../components/Map/map";
import Menu from "../../components/Landing/Menu/menu";
import SideBar from "../../components/Landing/SideBar/sidebar";
import Where from "../../components/Landing/Where_Are_You/where";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Loader from "../../components/Loader/loader";
import Onboarding from "../../components/Landing/Onboarding/onboarding";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const [stage, setStage] = useState("stage0");

  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    startDestination: "",
    endDestination: "",
    distance: undefined,
    paymentMethod: "",
    vehicleCategory: "",
    amount: undefined,
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setStage("stage1");
    }
  }, []);
  const fillAddress = (evt) => {
    // evt.preventDefault();
    console.log(data);
    if (data.startDestination === "" || data.endDestination === "") {
      toast.error(<ToastMessage text="Input Destinations" />);
    } else {
      setStage("stage3");
    }
  };

  return (
    <>
      {load && <Loader />}
      {stage === "stage0" && <Onboarding onClick={() => setStage("stage1")} />}
      <div>
        {stage === "stage1" && (
          <>
            <Map />
            <Menu onClick={() => setSideBar(true)} />
            <SideBar
              sideBar={sideBar}
              cancelSidebar={() => setSideBar(false)}
            />
            <Where
              setLoad={setLoad}
              data={data}
              setData={setData}
              moveStep1={() => navigate("/stage2")}
            />
          </>
        )}
      </div>
    </>
  );
};
export default Landing;
