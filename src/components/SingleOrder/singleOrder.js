import classes from "./singleOrder.module.css";
import { Distance } from "../../constant";

const NewOrder = () => {
  return (
    <div className={classes.box}>
      <div className={classes.subContainer}>
        <Distance />
        <div>
          <div className={classes.places}>
            <p className="small-text">Mowe Sagamu, Ogun state</p>
            <p>No 4, ijebu ode starttet</p>
          </div>
          <p className={classes.description}>from</p>
        </div>
        <div>
          <div className={classes.places}>
            <p className="small-text">Mowe Sagamu, Ogun state</p>
            <p>No 4, ijebu ode starttet</p>
          </div>
          <p className={classes.description}>to</p>
        </div>
        <div className={classes.price}>
          <p>Delivered</p>
          <p>#5000</p>
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
