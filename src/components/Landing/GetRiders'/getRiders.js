import classes from "./getRiders.module.css";
import Rider from "../../SingleRider/rider";

const GetRiders = () => {
  return (
    <div className={classes.main}>
        <p>Listing available riders</p>
        <p>Price charge: #5000</p>
        <div>
          <Rider />
          <Rider />
          <Rider />
          <Rider />
          <Rider />
        </div>
      </div>
  );
};

export default GetRiders;
