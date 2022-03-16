import classes from "./payment.module.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useMemo, useEffect, useContext, useState } from "react";
import { ButtonBlue } from "../../components/UI/Button/button";
import { checkOrders } from "../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../components/Toast/toast";
import { PaymentContext, UserContext } from "../../context";
import Logo from "../../assets/images/authentication/godan_logo.svg";

const Payment = () => {
  const { unpaid } = useContext(PaymentContext);

  console.log(unpaid);
  let user = useContext(UserContext);

  const config = useMemo(() => {
    const config = {
      public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
      tx_ref: Date.now(),
      amount: unpaid[0]?.amount,
      currency: "NGN",
      payment_options: "card, banktransfer, ussd",
      customer: {
        email: user.email,
        name: user.fullName,
      },
      customizations: {
        title: "GoDan Logistics",
        description: "GoDan Payment Page",
        logo: "https://res.cloudinary.com/drsimple/image/upload/v1647445832/Untitled_design_1_jmt3bg.svg",
      },
    };

    return config;
  }, [unpaid]);

  const handleFlutterPayment = useFlutterwave(config);

  const handleSuccess = async (response) => {
    const data = {
      user: user._id,
      //   listingId: listing._id,
      bookingId: data[0].bookingId._id,
      paymentStatus: "success",
      //   transRef: tx_ref,
      //   flwRef: flw_ref,
      //   flwtransId: transaction_id,
      amount: data[0].amount,
      email: user.email,
    };
  };
  return (
    <div className={classes.main}>
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
                  // handleSuccess(response);
                },
              });
            }}
          >
            Make payment
          </ButtonBlue>
        </div>
      </div>
    </div>
  );
};

export default Payment;
