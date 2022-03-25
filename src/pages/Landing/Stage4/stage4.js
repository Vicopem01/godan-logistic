import Menu from "../../../components/Landing/Menu/menu";
import SideBar from "../../../components/Landing/SideBar/sidebar";
import RiderInfo from "../../../components/Landing/RiderInfo/info";
import Map from "../../../components/Map/map";
import { useNavigate } from "react-router";
import { useState } from "react";

const Stage4 = () => {
  const [sideBar, setSideBar] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <Menu onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} cancelSidebar={() => setSideBar(false)} />
      <RiderInfo
        onClick={() => navigate("/stage4")}
      />
      <Map />
    </>
  );
};

export default Stage4;
