import classes from "./landing.module.css";
import Map from "../../components/Map/map";
import Menu from "../../components/Menu/menu";
import Container from "../../components/Overlay_Conatiner/container";

const Landing = () => {
  return (
    <div>
      <Menu />
      <Map />
      <Container />
    </div>
  );
};
export default Landing;
