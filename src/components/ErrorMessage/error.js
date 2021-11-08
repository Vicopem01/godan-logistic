import classes from "./error.module.css";
const Error = ({ show, setShow, text }) => {
  return (
    <div
      className={classes.main}
      style={
        show
          ? { visibility: "visible", opacity: "1" }
          : { visibility: "hidden", opacity: "0" }
      }
    >
      <p>{text}</p>
      <span onClick={setShow}>X</span>
    </div>
  );
};
export default Error;
