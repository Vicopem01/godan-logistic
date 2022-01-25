import classes from "./whereTo.module.css";
import Search from "../../../assets/images/landing/search.svg";
import { useEffect } from "react";

const Destination = ({ onClick }) => {
  return (
    <div className={classes.destination}>
      <span></span>
      <div className={classes.main} onClick={onClick}>
        <img src={Search} alt="progress" />
        <span>Where to?</span>
      </div>
    </div>
  );
};

export default Destination;
