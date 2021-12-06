import classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={classes.main}>
      <div>
        <div className={classes.ldshourglass}></div>
      </div>
    </div>
  );
};
export default Loader;
