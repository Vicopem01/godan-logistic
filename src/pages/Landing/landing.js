import classes from "./landing.module.css";
import Map from "../../components/Map/map";
import Menu from "../../components/Menu/menu";
import Container from "../../components/Overlay_Conatiner/container";
import SideBar from "../../components/SideBar/sidebar";
import { useState } from "react";
const Landing = () => {
  const [sideBar, setSideBar] = useState(false);

  return (
    <div>
      <Menu onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} />
      <Map />
      <Container />
    </div>
  );
};
export default Landing;
