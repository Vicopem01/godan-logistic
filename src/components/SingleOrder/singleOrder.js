import classes from "./singleOrder.module.css";
import { Distance } from "../../constant";
import { Link } from "react-router-dom";

const NewOrder = ({ bookingId, deliveryStatus, createdAt, id }) => {
  return (
    <Link className={classes.box} to={`/order-info/${id}`}>
      <div className={classes.subContainer}>
        <Distance />
        <div>
          <div className={classes.places}>
            <p className="small-text">{bookingId?.startDestination}</p>
            <p>
              {new Date(createdAt).toLocaleString("en-US", {
                day: "2-digit",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
          <p className={classes.description}>from</p>
        </div>
        <div>
          <div className={classes.places}>
            <p className="small-text">{bookingId?.endDestination}</p>
            <p>No 4, ijebu ode starttet</p>
          </div>
          <p className={classes.description}>to</p>
        </div>
        <div className={classes.price}>
          <p>
            <strong>Status:</strong> {deliveryStatus}
          </p>
          <p>₦ {bookingId.distance / 10}</p>
        </div>
      </div>
    </Link>
  );
};
export default NewOrder;
