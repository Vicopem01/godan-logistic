import classes from "./button.module.css";

export const ButtonBlue = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes.btn_blue}`}>
      {children}
    </button>
  );
};

export const ButtonGrey = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes.btn_grey}`}>
      {children}
    </button>
  );
};
