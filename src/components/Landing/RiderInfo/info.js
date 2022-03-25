import classes from "./info.module.css";
import { useEffect, useState } from "react";
import { getSingleRider, getSingleOrderInfo } from "../../../services/apiCalls";
import { playSound } from "../../../services/functions";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Telephone from "../../../assets/images/landing/telephone_blue.svg";
import Share from "../../../assets/images/landing/share.svg";
import Loader from "../Loader/loader";
import CancelModal from "../CancelRider/cancel";
import Sound from "../../../assets/audio/orderAccepted.wav";
import { useNavigate, useSearchParams } from "react-router-dom";

const Info = ({ onClick }) => {
  let [param] = useSearchParams();
  const orderId = param.get("orderId");
  const riderId = param.get("_id");
  
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  const [popup, setPopup] = useState(false);
  const timer = () => {
    setInterval(function () {
      OrderInfo();
    }, 10000);
  };

  useEffect(async () => {
    try {
      const response = await getSingleRider(riderId);
      setData(response.data.data);
      timer();
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
    }
  }, []);

  useEffect(() => {
    if (orderInfo?.deliveryStatus === "Awaiting-Pickup") {
      playSound(Sound);
    }
  }, []);

  const OrderInfo = async () => {
    try {
      const res = await getSingleOrderInfo(orderId);
      if (res.data.orderHistory.deliveryStatus === "Completed") {
        navigate("/success");
      } else {
        setOrderInfo(res.data.orderHistory);
      }
    } catch (error) {
      error.response
        ? toast.error(
            <ToastMessage
              text="Error getting orders"
              message={error.response.data.message}
            />
          )
        : toast.error(
            <ToastMessage text="Error getting orders" message={error.message} />
          );
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes.main}>
        <div className={classes.cancel}>
          <img src={Cancel} alt="" onClick={() => setPopup(true)} />
        </div>
        <div className={classes.flexMain}>
          <div className={classes.container}>
            <div className={classes.imgDiv}>
              <img src={data.avatar} alt="" />
            </div>
            <div className={classes.profile}>
              <h3>{data?.fullName?.toUpperCase()}</h3>
              <p>Plate number: {data.vehiclePlateNumber}</p>
              <div>
                <p>122 completed rides</p>
                <span className={classes.star}> </span>
                <span className={classes.star}> </span>
                <span className={classes.star}> </span>
              </div>
            </div>
          </div>
          <div className={classes.loading}>
            <div>
              {orderInfo?.deliveryStatus === "Awaiting-Pickup" && (
                <>
                  <p style={{ textAlign: "center", width: "100vw" }}>
                    Order approved
                    <br />
                    Rider is on the way
                  </p>
                  {/* <div className={classes.loadingiospinnerripplefndlgyjat0w}>
                    <div className={classes.ldio0cq7zaip2ngg}>
                      <div></div>
                      <div></div>
                    </div>
                  </div> */}
                </>
              )}
              {orderInfo?.deliveryStatus !== "Awaiting-Pickup" && (
                <>
                  <p>
                    Please wait...
                    <br />
                    Awaiting rider's approval
                  </p>
                  <Loader />
                </>
              )}
            </div>
          </div>
          <span></span>
          <div className={classes.riderLocation}>
            <p>Rider Location</p>
          </div>
          <span></span>
          <div className={classes.contact}>
            <div>
              <img src={Telephone} alt="" />
              <div className={classes.number}>
                <p>Contact Rider</p>
                <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
              </div>
            </div>
            <br />
            <div className={classes.share}>
              <img src={Share} alt="" />
              <p>Share contact</p>
            </div>
          </div>
        </div>
      </div>
      {popup && (
        <CancelModal setPopup={setPopup} data={data} onClick={onClick} />
      )}
    </div>
  );
};
export default Info;
