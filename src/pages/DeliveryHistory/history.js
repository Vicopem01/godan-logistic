import classes from "./history.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/UI/Loader/loader";
import { getUserOrderHistory } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import SingleOrder from "../../components/SingleOrder/singleOrder";

const History = ({ history }) => {
  const [loader, showLoader] = useState(false);

  const [data, setData] = useState({});
  useEffect(async () => {
    window.scrollTo(0, 0);
    try {
      const res = await getUserOrderHistory();
      console.log(res);
      //   setData(res.data.data);
    } catch (error) {
      toast.error(
        <ToastMessage text="Error geting information" message={error.message} />
      );
    }
  }, [localStorage.getItem("token")]);

  return (
    <main className={classes.main}>
      <div>
        <Link to="/">
          <img src={Arrow} alt="" />
        </Link>
        <p className="medium-text medium-weight">Order History</p>
      </div>
      <div className={classes.whitebg}>
        <SingleOrder />
      </div>
    </main>
  );
};
export default History;
