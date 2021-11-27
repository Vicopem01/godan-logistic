import classes from "./info.module.css";
import { useEffect, useState } from "react";
import { getSingleRider } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import Cancel from "../../../assets/images/landing/blueCancel.svg";
import Telephone from "../../../assets/images/landing/telephone_blue.svg";
import Share from "../../../assets/images/landing/share.svg";
import Loader from "../Loader/loader";
import CancelModal from "../CancelRider/cancel";

const Info = ({ onClick }) => {
  const [data, setData] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(async () => {
    try {
      const res = await getSingleRider(localStorage.getItem("_id"));
      console.log(res.data.data);
      setData(res.data.data);
    } catch (error) {
      toast.error(
        <ToastMessage text="Error getting details" message={error.message} />
      );
    }
  }, []);

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
            <div>
              <p>{data?.fullName?.toUpperCase()}</p>
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
              <p>
                Please wait...
                <br />
                Rider is being notified
              </p>
              <Loader />
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
