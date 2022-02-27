import classes from "./verify.module.css";
import { ButtonBlue } from "../../../components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Avatar, Mail, Tel, Padlock } from "../../../constant";
import { emailCheck, phoneNumberCheck } from "../../../services/functions";
import { getSingleUserInfo, registerNewUser } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../../components/Toast/toast";
import { useLocation } from "react-router-dom";
import { verifyUserEmail } from "../../../services/apiCalls";
import { useNavigate } from "react-router-dom";

const VerifyMail = ({ history }) => {
  let navigate = useNavigate();
  const [loader, showLoader] = useState(false);
  const { search } = useLocation();
  const token = search.substring(7);
  useEffect(async () => {
    try {
      await verifyUserEmail(token);
      toast.success("Email verification successful");
      navigate("/login");
    } catch (error) {
      if (!error.response) {
        toast.error(
          <ToastMessage text="Error verifying email" message={error.message} />
        );
      } else {
        toast.error(
          <ToastMessage
            text="Error verifying email"
            message={error.response.data.message}
          />
        );
      }
    }
  }, []);

  return (
    <main className={classes.main}>
      <div>
        <p className="medium-text medium-weight">Verifying email adress</p>
      </div>
      <div className={classes.whitebg}>
        <div>
          <div className={classes.loadingiospinnerdualball57vzzdcl2y}>
            <div className={classes.ldioazhasaecoa5}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default VerifyMail;
