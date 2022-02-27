import classes from "./sidebar.module.css";
import ProfilePicture from "../../../assets/images/sidebar/profilePicture.png";
import Promotion from "../../../assets/images/sidebar/promotion.svg";
import Tag from "../../../assets/images/sidebar/tag.svg";
import Cart from "../../../assets/images/sidebar/cart.svg";
import Profile from "../../../assets/images/sidebar/profile.svg";
import About from "../../../assets/images/sidebar/about.svg";
import Padlock from "../../../assets/images/sidebar/padlock.svg";
import { ButtonWhite } from "../../UI/Button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSingleUserInfo } from "../../../services/apiCalls";
import { toast } from "react-toastify";
import ToastMessage from "../../Toast/toast";
import { useNavigate } from "react-router-dom";

const SideBar = ({ sideBar, cancelSidebar }) => {
  let navigate = useNavigate();
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
                  <p onClick={() => navigate("/login")}>Sign in to continue</p>
                </div>
              )}
            </div>
          </div>
          {!authentication && (
            <div className={classes.links}>
              <div className={classes.btn}>
                <ButtonWhite onClick={() => navigate("/login")}>
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
              <Link to="#3">
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
              <Link to="/about-us">
                <img src={About} alt="" className={classes.about} />
                <p>About Us</p>
              </Link>
              <Link to="/privacy-policy">
                <img src={Padlock} alt="" />
                <p>Privacy Policy</p>
              </Link>
              <Link to="#3" className={classes.btn}>
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
export default SideBar;
