import classes from "./ride.module.css";
import { Car, Truck, Bike } from "../../../constant";
import Card from "../../../assets/images/rideOption/card.svg";
import Arrow from "../../../assets/images/rideOption/arrowForward.svg";
import { useState } from "react";
import { ButtonGrey, ButtonBlue } from "../../UI/Button/button";
import Payment from "../PaymentOption/payment";
import Calculator from "../../DistanceCalculator/calculator";

const Option = ({ move, setData, data }) => {
  const [bg, setBg] = useState(0);
  const [payment, setPayment] = useState(false);
  const [option, setOption] = useState("");
  const [select, setSelect] = useState(0);
  const [value, setValue] = useState(null);

  const bike = (evt) => {
    evt.stopPropagation();
    setBg(1);
    setData((prevState) => ({
      ...prevState,
      amount: "",
      vehicleCategory: "Bike",
    }));
  };
  const car = () => {
    setBg(2);
    setData((prevState) => ({
      ...prevState,
      vehicleCategory: "Car",
    }));
  };
  const truck = () => {
    setBg(3);
    setData((prevState) => ({
      ...prevState,
      vehicleCategory: "Truck",
    }));
  };
  const oncclick = () => {
    setData((prevState) => ({
      ...prevState,
      distance: value,
    }));
    data.vehicleCategory === "Bike" &&
      setData((prevState) => ({
        ...prevState,
        amount: value / 10,
      }));
    data.vehicleCategory === "Car" &&
      setData((prevState) => ({
        ...prevState,
        amount: value / 7.5,
      }));
    // data.vehicleCategory === "Truck" &&
    console.log(data);
    move();
  };
  return (
    <>
      <div className={classes.container}>
        <div className={classes.destination}>
          <Calculator data={data} setValue={setValue} />
          <span></span>
          <p>Choose your preferred ride option</p>
          <div className={classes.main}>
            <div
              className={`${classes.options} ${bg === 1 ? classes.bg : ""}`}
              onClick={bike}
            >
              <div>
                <Bike />
                <p>GoDan Bike</p>
              </div>
              <p>₦ {(value / 10)?.toLocaleString()}</p>
              {/* <p>₦ {(data?.distance / 10)?.toLocaleString()}</p> */}
            </div>
            <div
              className={`${classes.options} ${bg === 2 ? classes.bg : ""}`}
              onClick={car}
            >
              <div>
                <Car />
                <p>GoDan Car</p>
              </div>
              <span>₦ {(value / 7.5)?.toLocaleString()}</span>
            </div>
            <div
              className={`${classes.options} ${bg === 3 ? classes.bg : ""}`}
              // onClick={truck}
            >
              <div>
                <Truck />
                <p>GoDan Truck</p>
              </div>
              <span>coming soon</span>
            </div>
          </div>
          <span className={classes.line}></span>
          <div className={classes.sub}>
            <div className={classes.payment} onClick={() => setPayment(true)}>
              <div>
                <img src={Card} alt="" />
                <p>Choose payment method</p>
              </div>
              {option === "" && <img src={Arrow} alt="" />}
              {option === "Cash" && <p>Cash</p>}
              {option === "Card" && <p>Card</p>}
            </div>
          </div>
          {payment && (
            <Payment
              setPayment={() => setPayment(false)}
              setOption={setOption}
              setData={setData}
              setSelect={setSelect}
              select={select}
            />
          )}
          {option === "" || bg == 0 ? (
            <ButtonGrey>Confirm options</ButtonGrey>
          ) : (
            ""
          )}
          {bg > 0 && option !== "" && (
            <ButtonBlue onClick={oncclick}>Confirm options</ButtonBlue>
          )}
        </div>
      </div>
    </>
  );
};

export default Option;
