import classes from "./rider.module.css";

const Rider = ({ avatar, fullName, vehiclePlateNumber, onClick, _id }) => {
  return (
    <div className={classes.flexBox} onClick={() => onClick(_id)}>
      <div className={classes.box}>
        <img src={avatar} alt="" />
        <div className={classes.info}>
          <p>{fullName}</p>
          <span className={classes.info_span}>
            Plate number: {vehiclePlateNumber}
          </span>
          <div>
            <span className={classes.star}> </span>
            <span className={classes.star}> </span>
            <span className={classes.star}> </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rider;
