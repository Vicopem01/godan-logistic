import classes from "./rider.module.css";

const Rider = ({ avatar, fullName, vehiclePlateNumber, onClick, _id }) => {
  const getId = () => {
    console.log(_id);
    localStorage.setItem("_id", _id);
    onClick();
  };
  return (
    <div className={classes.flexBox} onClick={getId}>
      <div className={classes.box}>
        <img src={avatar} alt="" />
        <div className={classes.info}>
          <p>{fullName}</p>
          <span>Plate number: {vehiclePlateNumber}</span>
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
