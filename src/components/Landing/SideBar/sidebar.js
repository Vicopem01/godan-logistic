import classes from "./sidebar.module.css";
import ProfilePicture from "../../../assets/images/sidebar/profilePicture.png";
import Promotion from "../../../assets/images/sidebar/promotion.svg";
import Tag from "../../../assets/images/sidebar/tag.svg";
import Cart from "../../../assets/images/sidebar/cart.svg";
import Profile from "../../../assets/images/sidebar/profile.svg";
import Tour from "../../../assets/images/sidebar/tour.svg";
import Padlock from "../../../assets/images/sidebar/padlock.svg";
// import Cancel from "../../../assets/images/sidebar/cancel.svg";
import { ButtonWhite } from "../../UI/Button/button";
import { Link, withRouter } from "react-router-dom";

const SideBar = ({ sideBar, cancelSidebar, history }) => {
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
                <div>
                  <h4>Ogunjobi Victor</h4>
                  <p>View Profile</p>
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
              <div>
                <img src={Profile} alt="" />
                <p>Profile</p>
              </div>
              <div>
                <img src={Cart} alt="" />
                <p>Payments</p>
              </div>
              <div>
                <img src={Tag} alt="" />
                <p>Delivery History</p>
              </div>
              <div>
                <img src={Promotion} alt="" />
                <p>Promotions</p>
              </div>
              <div>
                <img src={Tour} alt="" />
                <p>Tour</p>
              </div>
              <div>
                <img src={Padlock} alt="" />
                <p>Privacy Policy</p>
              </div>
              <div className={classes.btn}>
                <ButtonWhite onClick={handlelogout}>Log Out</ButtonWhite>
              </div>
            </div>
          )}
        </div>
      </div>
      <div onClick={cancelSidebar}></div>
    </div>
  );
};
export default withRouter(SideBar);
