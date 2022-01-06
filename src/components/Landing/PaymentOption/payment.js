import classes from "./payment.module.css";
import Card from "../../../assets/images/rideOption/card.svg";
import Cash from "../../../assets/images/rideOption/cash.svg";
import { ButtonGrey, ButtonBlue } from "../../UI/Button/button";
import { useState } from "react";

const Payment = ({ setPayment, setOption, setData, setSelect, select }) => {
  const card = () => {
    setOption("Card");
    setSelect(1);
    setData((prevState) => ({
      ...prevState,
      paymentMethod: "Card",
    }));
  };
  const cash = () => {
    setSelect(2);
    setOption("Cash");
    setData((prevState) => ({
      ...prevState,
      paymentMethod: "Cash",
    }));
  };
  return (
    <div className={classes.main}>
      <div className={classes.sub}>
        <p>Choose your payment option</p>
        <div className={classes.payment} onClick={card}>
          <div>
            <img src={Card} alt="" />
            <p>Pay with card/ Bank account</p>
          </div>
          <span
            className={`${classes.span} ${select === 1 ? classes.span2 : ""}`}
          ></span>
        </div>
        <div className={classes.payment} onClick={cash}>
          <div>
            <img src={Cash} alt="" />
            <p>Pay with cash</p>
          </div>
          <span
            className={`${classes.span} ${select === 2 ? classes.span2 : ""}`}
          ></span>
        </div>
        {select === 0 && <ButtonGrey>Continue</ButtonGrey>}
        {select > 0 && <ButtonBlue onClick={setPayment}>Continue</ButtonBlue>}
      </div>
    </div>
  );
};
export default Payment;
