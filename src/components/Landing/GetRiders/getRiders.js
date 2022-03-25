import classes from "./getRiders.module.css";
import Rider from "../../SingleRider/rider";
import {
  getAllAvailableRiders,
  bookARider,
  createNewBooking,
  getSingleRider,
} from "../../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import Loader from "../../Loader/loader";
import { useNavigate } from "react-router-dom";

const GetRiders = ({ data }) => {
  let navigate = useNavigate();

  const [arr, setArr] = useState([]);
  const [bookingId, setBookingId] = useState("");
  const [load1, setLoad1] = useState(true);
  const [load2, setLoad2] = useState(true);
  useEffect(async () => {
    try {
      const res = await createNewBooking(data);
      setBookingId(res.data.booking._id);
      setLoad1(false);
      try {
        const res = await getAllAvailableRiders();
        setArr(res.data.data);
      } catch (error) {
        if (error.response) {
          toast.error(
            <ToastMessage text="Error" message={error.response.data.message} />
          );
        } else {
          toast.error(<ToastMessage text="Error" message={error.message} />);
        }
      }
      setLoad2(false);
    } catch (error) {
      toast.error(
        <ToastMessage text="Error processing" message={error.message} />
      );
      setLoad1(false);
    }
  }, []);
  const onClick = async (riderId) => {
    try {
      const res = await bookARider(riderId, bookingId);
      navigate(`/stage4/?_id=${riderId}&orderId=${res.data.order._id}`);
    } catch (error) {
      if (error.response) {
        toast.error(
          <ToastMessage text="Error" message={error.response.data.message} />
        );
      } else {
        toast.error(<ToastMessage text="Error" message={error.message} />);
      }
    }
  };
  return (
    <div className={classes.main}>
      {load1 && <Loader />}
      <span className={classes.lineSpan}></span>

      <p>Price charge: ₦ {data.amount.toLocaleString()}</p>
      <div>
        {arr?.map((item, index) => (
          <Rider {...item} onClick={onClick} index={index} />
        ))}
        {load2 && (
          <div className={classes.loader}>
            <p>Listing available riders</p>
            <div className={classes.ldsellipsis}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetRiders;
