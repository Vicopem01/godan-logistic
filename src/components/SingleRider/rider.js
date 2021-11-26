import classes from "./rider.module.css";
import RiderImg from "../../assets/images/landing/rider.jpg";

const Rider = () => {
  return (
    <div className={classes.flexBox}>
      <div className={classes.box}>
        <img src={RiderImg} alt="" />
        <div className={classes.info}>
          <p>Ajao Afeez Borris</p>
          <span>Plate number: gyfiy3e</span>
        </div>
      </div>
      <div>
        <span className={classes.star}> </span>
        <span className={classes.star}> </span>
        <span className={classes.star}> </span>
      </div>
    </div>
  );
};
export default Rider;
