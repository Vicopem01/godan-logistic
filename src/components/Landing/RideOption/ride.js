import classes from "./ride.module.css";
import { Car, Truck, Bike } from "../../../constant";
import Card from "../../../assets/images/rideOption/card.svg";
import Arrow from "../../../assets/images/rideOption/arrowForward.svg";
import { useState, useEffect } from "react";
import { ButtonGrey, ButtonBlue } from "../../UI/Button/button";
import Payment from "../PaymentOption/payment";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import { getDistanceBetweenLocations } from "../../../services/apiCalls";

const Ride = ({ onClick, setData, data, setLoad }) => {
  const [bg, setBg] = useState(0);
  const [payment, setPayment] = useState(false);
  const [option, setOption] = useState("");
  const [select, setSelect] = useState(0);

  useEffect(async () => {
    setLoad(true);
    console.log(data);
    try {
      console.log(
        encodeURI(data.startDestination),
        encodeURI(data.endDestination)
      );
      const res = await getDistanceBetweenLocations(
        encodeURI(data.startDestination),
        encodeURI(data.endDestination)
      );
      console.log(res.data.rows[0].elements[0].distance.value);
      setData((prevState) => ({
        ...prevState,
        distance: res.data.rows[0].elements[0].distance.value,
      }));
      setLoad(false);
    } catch (error) {
      setLoad(false)
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting distance"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage
              text="Error getting distance"
              message={error.message}
            />
          );
    }
  }, []);

  const bike = () => {
    setBg(1);
    setData((prevState) => ({
      ...prevState,
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

  return (
    <div className={classes.destination}>
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
          <p>₦ {data.distance / 10}</p>
        </div>
        <div
          className={`${classes.options} ${bg === 2 ? classes.bg : ""}`}
          // onClick={car}
        >
          <div>
            <Car />
            <p>GoDan Car</p>
          </div>
          <span>coming soon</span>
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
          onClick={() => setPayment(false)}
          setOption={setOption}
          setData={setData}
          setSelect={setSelect}
          select={select}
        />
      )}
      {option === "" || bg == 0 ? <ButtonGrey>Confirm options</ButtonGrey> : ""}
      {bg > 0 && option !== "" && (
        <ButtonBlue onClick={onClick}>Confirm options</ButtonBlue>
      )}
    </div>
  );
};

export default Ride;
