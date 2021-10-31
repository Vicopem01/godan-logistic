import classes from "./input.module.css";

const Input = ({ placeholder, value }) => {
  return (
    <>
      <input type="text" placeholder={placeholder} className={classes.input} defaultValue={value} />
    </>
  );
};
export default Input;
