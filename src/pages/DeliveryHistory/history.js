import classes from "./history.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/loader";
import { getUserOrderHistory } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import SingleOrder from "../../components/SingleOrder/singleOrder";
import Empty from "../../components/EmptyState/empty";

const History = ({ history }) => {
  const [loader, showLoader] = useState(true);
  const [data, setData] = useState([]);
  useEffect(async () => {
    window.scrollTo(0, 0);
    try {
      const res = await getUserOrderHistory();
      console.log(res.data.orderHistory);
      setData(res.data.orderHistory);
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
    showLoader(false);
  }, [localStorage.getItem("token")]);

  return (
    <main className={classes.main}>
      {loader && <Loader />}
      <div>
        <Link to="/">
          <img src={Arrow} alt="" className={classes.backArrow} />
        </Link>
        <p className={`medium-text medium-weight ${classes.text}`}>
          Order History
        </p>
      </div>
      <div className={classes.whitebg}>
        {data.length < 1 && !loader && (
          <Empty text="You have no order, book a rider now." />
        )}
        {!loader && data?.map((item) => <SingleOrder {...item} />)}
      </div>
    </main>
  );
};
export default History;
