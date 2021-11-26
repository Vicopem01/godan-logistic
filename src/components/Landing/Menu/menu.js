import classes from "./menu.module.css";
const Menu = ({ onClick }) => {
  return (
    <div className={classes.menu} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default Menu;