import Menu_Bar from "../../assets/images/landing/menu.svg";
import classes from "./menu.module.css";
const Menu = () => {
  return (
    <div className={classes.menu}>
      <img src={Menu_Bar} alt="Menu" />
    </div>
  );
};
export default Menu;
