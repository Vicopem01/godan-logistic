import classes from "./about.module.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import { useEffect } from "react";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={classes.main}>
      <div>
        <Link to="/">
          <img src={Arrow} alt="" />
        </Link>

        <p className="medium-text medium-weight">GoDan Privacy Policy</p>
      </div>
      <div className={classes.whitebg}>
        <h2>About Us</h2>
        <p>
          -Stress free Delivery
          <br />
          -Fast and prompt <br />
          -Our riders are just a tap away from you
          <br />
          -Safe and affordable <br /> Experience luxurious rides with less{" "}
          <br />
          User friendly webapp for easy access and convenience Register as a
          rider,be your own boss////....(link) # Doorstep pickup/Delivery We
          pick up parcels from clients with our dispatch bikes or truck and
          deliver to locations within Remo, Ogun state Nigeria. # Request a ride
          Request a car ride through our user-friendly webapp. #Car Hire We
          offer car hire services for interstate travels or for special events
          #Track your ride/order Track the progress of rides and track parcels
          sent out at every point in transit #subscription package/storage
          facility We provide storage facilities to our clients on subscription
          packages for their bulk deliveries. (Contact details) Fb/IG:
          godan_logistics Mail: info@godanlogistics.com Address: 10 Temitope
          house, ogunyanwo street Sagamu, Ogun state ☎️: 09033339578 Webapp:
        </p>
      </div>
    </main>
  );
};
export default Policy;
