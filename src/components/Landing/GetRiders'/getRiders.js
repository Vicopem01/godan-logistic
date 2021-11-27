import classes from "./getRiders.module.css";
import Rider from "../../SingleRider/rider";
import { getAllAvailableRiders } from "../../../services/apiCalls";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const GetRiders = ({ onClick }) => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(async () => {
    try {
      const res = await getAllAvailableRiders();
      console.log(res.data.data);
      setData(res.data.data);
      setLoad(false);
    } catch (error) {
      toast.error(
        <ToastMessage text="Error in request" message={error.message} />
      );
      setLoad(false);
    }
  }, []);
  return (
    <div className={classes.main}>
      <p>Price charge: #5000</p>
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
