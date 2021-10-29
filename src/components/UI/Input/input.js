import classes from "./input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className={classes.input} />
    </>
  );
};
