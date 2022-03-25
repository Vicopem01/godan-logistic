import Menu from "../../../components/Landing/Menu/menu";
import SideBar from "../../../components/Landing/SideBar/sidebar";
import Map from "../../../components/Map/map";
import WhereTo from "../../../components/Landing/WhereTo/whereTo";
import SlideUp from "../../../components/Landing/SlideUp/slideUp";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";
import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AppData } from "../../../context";

const Stage2 = () => {
  let {data, setData} = useContext(AppData);
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const fillAddress = (evt) => {
    // evt.preventDefault();
    if (data.startDestination === "" || data.endDestination === "") {
      toast.error(<ToastMessage text="Input Destinations" />);
    } else {
      navigate("/stage3");
    }
  };
  return (
    <>
      <Map />
      <Menu onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} cancelSidebar={() => setSideBar(false)} />
      <WhereTo onClick={() => setShow(true)} />
      <SlideUp
        show={show}
        setData={setData}
        onClick={() => setShow(false)}
        onClick2={fillAddress}
        data={data}
      />
    </>
  );
};

export default Stage2;
