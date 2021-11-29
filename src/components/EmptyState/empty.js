import EmptyImage from "../../assets/images/emptyState/empty.svg";
import classes from "./empty.module.css";

const Empty = ({ text }) => {
  return (
    <div className={classes.main}>
      <div>
        <img src={EmptyImage} alt="No data" />
      </div>
      <p>{text}</p>
    </div>
  );
};
export default Empty;
