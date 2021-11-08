import classes from "./sidebar.module.css";
import ProfilePicture from "../../assets/images/sidebar/profilePicture.png";
import Caution from "../../assets/images/sidebar/caution.jpg";
import DeliveryBike from "../../assets/images/sidebar/delivery-bike.jpg";
import Tag from "../../assets/images/sidebar/tag.jpg";
import Wallet from "../../assets/images/sidebar/wallet.jpg";
import Cancel from "../../assets/images/sidebar/cancel.svg";
import { ButtonBlue } from "../UI/Button/button";
import { Link, withRouter } from "react-router-dom";

const SideBar = ({ sideBar, cancelSidebar, history }) => {
  const authentication = localStorage.getItem("token");
  const handlelogout = () => {
    localStorage.removeItem("token");
    window.location.reload()
  };
  return (
    <div className={`${classes.container} ${sideBar && classes.visible}`}>
      <div className={classes.main}>
        <div className={classes.subMain}>
          <img src={Cancel} alt="" onClick={cancelSidebar} />
          <div className={classes.profile}>
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
                <Link to="/register">Sign in to continue</Link>
              </div>
            )}
          </div>
          <span></span>
          {authentication && (
            <div className={classes.links}>
              <div>
                <img src={Wallet} alt="" />
                <p>Payment</p>
              </div>
              <div>
                <img src={Tag} alt="" />
                <p>Promotions</p>
              </div>
              <div>
                <img src={DeliveryBike} alt="" />
                <p>Delivery History</p>
              </div>
              <div>
                <img src={Caution} alt="" />
                <p>About Us</p>
              </div>
            </div>
          )}
          <div className={classes.btn}>
            {authentication && (
              <ButtonBlue onClick={handlelogout}>Log Out</ButtonBlue>
            )}
            {!authentication && (
              <ButtonBlue onClick={() => history.push("/login")}>
                Sign in to continue
              </ButtonBlue>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SideBar);
