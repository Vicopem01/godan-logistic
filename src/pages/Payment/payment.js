import classes from "./payment.module.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useMemo, useEffect, useContext, useState } from "react";
import { ButtonBlue } from "../../components/UI/Button/button";
import { payForOrder } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import { PaymentContext, UserContext } from "../../context";
import Logo from "../../assets/images/authentication/godan_logo.svg";
import Loader from "../../components/Loader/loader";

const Payment = () => {
  const { unpaid } = useContext(PaymentContext);
  const [load, setLoad] = useState(false);
  let { user } = useContext(UserContext);
  const config = useMemo(() => {
    const config = {
      public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
      tx_ref: Date.now(),
      amount: unpaid[0]?.amount,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      customer: {
        email: user?.email,
        name: user?.fullName,
      },
      customizations: {
        title: "GoDan Logistics",
        description: "GoDan Payment Page",
        logo: "https://res.cloudinary.com/drsimple/image/upload/v1647445832/Untitled_design_1_jmt3bg.svg",
      },
    };

    return config;
  }, [user, unpaid]);

  const handleFlutterPayment = useFlutterwave(config);

  const handleSuccess = async (response) => {
    setLoad(true);
    try {
      const body = {
        userId: user._id,
        riderId: unpaid[0].riderDetails._id,
        orderId: unpaid[0]._id,
        status: "success",
        flw_ref: response.flw_ref,
        tx_ref: response.tx_ref,
        transaction_id: response.transaction_id,
        email: user.email,
        amount: unpaid[0].amount,
      };
      await payForOrder(body);
      setLoad(false);
      window.location.reload();
    } catch (error) {
      setLoad(false);
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
    <div className={classes.main}>
      {load && <Loader />}
      {!load && (
        <div>
          <div className={classes.sub}>
            <img src={Logo} alt="Godan Logo" className={classes.logo} />
            <h2>Pending order payment</h2>
            <div>
              <p className={classes.info}>
                From: {unpaid[0]?.bookingId.startDestination}{" "}
              </p>
              <p className={classes.info}>
                To: {unpaid[0]?.bookingId.endDestination}
              </p>
              <br />
              <p className={classes.info}>Amount:</p>
              <p className={classes.amount}>₦ {unpaid[0]?.amount}</p>
            </div>
            <ButtonBlue
              onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    closePaymentModal();
                    console.log(response);
                    handleSuccess(response);
                  },
                });
              }}
            >
              Make payment
            </ButtonBlue>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
