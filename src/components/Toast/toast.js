import classes from "./toast.module.css";

const ToastMessage = ({ text, message }) => (
  <div className={classes.toast}>
    <p>{text}</p>
    <p> {message}</p>
  </div>
);

export default ToastMessage;
