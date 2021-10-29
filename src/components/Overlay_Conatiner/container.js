import classes from "./container.module.css";
import Where from "./Where_Are_You/where";

const Container = () => {
  return (
    <div className={classes.container}>
      <Where />
    </div>
  );
};

export default Container;
