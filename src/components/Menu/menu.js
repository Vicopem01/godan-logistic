import Menu_Bar from "../../assets/images/landing/menu.svg";
import classes from "./menu.module.css";
const Menu = ({ onClick }) => {
  return (
    <div className={classes.menu} onClick={onClick}>
      <img src={Menu_Bar} alt="Menu" />
    </div>
  );
};
export default Menu;
