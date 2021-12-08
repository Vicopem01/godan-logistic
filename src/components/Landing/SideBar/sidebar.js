import classes from "./sidebar.module.css";
import ProfilePicture from "../../../assets/images/sidebar/profilePicture.png";
import Promotion from "../../../assets/images/sidebar/promotion.svg";
import Tag from "../../../assets/images/sidebar/tag.svg";
import Cart from "../../../assets/images/sidebar/cart.svg";
import Profile from "../../../assets/images/sidebar/profile.svg";
import Tour from "../../../assets/images/sidebar/tour.svg";
import Padlock from "../../../assets/images/sidebar/padlock.svg";
import { ButtonWhite } from "../../UI/Button/button";
import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleUserInfo } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";

const SideBar = ({ sideBar, cancelSidebar, history }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    if (localStorage.getItem("token")) {
      try {
        const res = await getSingleUserInfo();
        setData(res.data.data);
      } catch (error) {
        toast.error(
          <ToastMessage
            text="Error geting information"
            message={error.message}
          />
        );
      }
    }
  }, []);
  const authentication = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className={`${classes.container} ${sideBar && classes.visible}`}>
      <div className={classes.main}>
        <div className={classes.subMain}>
          {/* <img src={Cancel} alt="" /> */}
          <div className={classes.profile}>
            <div>
              <img src={ProfilePicture} alt="" />
              {authentication && (
                <div className={classes.profileInfo}>
                  <h4>{data?.fullName}</h4>
                  <p>{data?.email}</p>
                </div>
              )}
              {!authentication && (
                <div>
                  <h4>User</h4>
                  <p onClick={() => history.push("/login")}>
                    Sign in to continue
                  </p>
                </div>
              )}
            </div>
          </div>
          {!authentication && (
            <div className={classes.links}>
              <div className={classes.btn}>
                <ButtonWhite onClick={() => history.push("/login")}>
                  Sign in to continue
                </ButtonWhite>
              </div>
            </div>
          )}
          {authentication && (
            <div className={classes.links}>
              <Link to="/profile">
                <img src={Profile} alt="" />
                <p>Profile</p>
              </Link>
              <Link>
                <img src={Cart} alt="" />
                <p>Payments</p>
              </Link>
              <Link to="/history">
                <img src={Tag} alt="" />
                <p>Delivery History</p>
              </Link>
              <div>
                <img src={Promotion} alt="" />
                <p>Promotions</p>
                <span>(coming soon)</span>
              </div>
              <Link>
                <img src={Tour} alt="" />
                <p>Site Map</p>
              </Link>
              <Link to="/privacy-policy">
                <img src={Padlock} alt="" />
                <p>Privacy Policy</p>
              </Link>
              <Link className={classes.btn}>
                <ButtonWhite onClick={handlelogout}>Log Out</ButtonWhite>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div onClick={cancelSidebar}></div>
    </div>
  );
};
export default withRouter(SideBar);
