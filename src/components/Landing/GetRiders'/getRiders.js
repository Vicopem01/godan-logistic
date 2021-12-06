import classes from "./getRiders.module.css";
import Rider from "../../SingleRider/rider";
import { getAllAvailableRiders, bookARider } from "../../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const GetRiders = ({ setStage, price, bookingId, setSecondLoad }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(async () => {
    try {
      const res = await getAllAvailableRiders();
      setData(res.data.data);
      setLoad(false);
    } catch (error) {
      if (error.response) {
        toast.error(
          <ToastMessage text="Error" message={error.response.data.message} />
        );
      } else {
        toast.error(<ToastMessage text="Error" message={error.message} />);
      }
      setLoad(false);
    }
  }, []);
  const onClick = async (_id) => {
    setSecondLoad(true);
    try {
      const res = await bookARider(_id, bookingId);
      console.log(res);
      setStage("stage5");
      setSecondLoad(false);
    } catch (error) {
      setSecondLoad(false);
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
      <span className={classes.lineSpan}></span>

      <p>Price charge: ₦ {price.distance / 10}</p>
      <div>
        {data?.map((item) => (
          <Rider {...item} onClick={onClick} />
        ))}
        {load && (
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
