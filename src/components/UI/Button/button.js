import classes from "./button.module.css";

export const ButtonBlue = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${classes.btn_blue} ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonGrey = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${classes.btn_grey} ${className}`}
    >
      {children}
    </button>
  );
};
export const ButtonWhite = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.btn} ${classes.btn_white} ${className}`}
    >
      {children}
    </button>
  );
};
