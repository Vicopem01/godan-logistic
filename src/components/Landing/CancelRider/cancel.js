import classes from "./cancel.module.css";
import { ButtonRed, ButtonGreen } from "../../UI/Button/button";

const Cancel = ({ setPopup, data, onClick }) => {
  return (
    <div className={classes.bg}>
      <div className={classes.sub}>
        <div>
          <p>Cancel ride with {data?.fullName.split(" ")[0]}?</p>
          <span>You might have to wait longer if you cancel</span>
          <div className={classes.btn}>
            <ButtonRed onClick={onClick}>Cancel Rider</ButtonRed>
            <ButtonGreen onClick={() => setPopup(false)}>Go back</ButtonGreen>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cancel;
