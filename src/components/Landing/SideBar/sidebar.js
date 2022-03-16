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
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context";

const SideBar = ({ sideBar, cancelSidebar }) => {
  let navigate = useNavigate();
  let data = useContext(UserContext);

  const authentication = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.clear();
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
