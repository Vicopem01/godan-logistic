import classes from "./about.module.css";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/authentication/arrowLeft.svg";
import { useEffect } from "react";
import Instagram from "../../assets/images/aboutUs/instagram.svg";
import Mail from "../../assets/images/aboutUs/mail.svg";
import Location from "../../assets/images/aboutUs/location.svg";
import Facebook from "../../assets/images/aboutUs/facebook.svg";
import Phone from "../../assets/images/aboutUs/phone.svg";

const Policy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={classes.main}>
      <div>
        <Link to="/">
          <img src={Arrow} alt="" className={classes.arrow} />
        </Link>

        <p className="medium-text medium-weight">GoDan Privacy Policy</p>
      </div>
      <div className={classes.whitebg}>
        <h2>About Us</h2>
        <h4>Taking deliveries a step further...</h4>
        <p>
          Godan Logistics is a logistics company that handles deliveries and
          pick-ups of goods and services of Small and Medium Businesses by
          employing learned and experienced riders of motorcycles and cars to
          efficiently deliver and pick up at very affordable and cost efficient
          prices.
          <br />
          <br />
          -Stress free Delivery
          <br />
          <br />
          -Fast and prompt
          <br />
          <br />
          -Safe and affordable
          <br />
          <br />
          -Experience luxurious rides with less
          <br />
          <br />
          -Our riders are just a tap away from you
          <br />
          {/* User friendly webapp for easy access and convenience Register as a
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
          house, ogunyanwo street Sagamu, Ogun state ☎️: 09033339578 Webapp: */}
        </p>
        <div className={classes.socials}>
          <div>
            <img src={Phone} alt="" />
            <span>
              <a href="tel:+2349033339578">+2349033339578</a>
            </span>
          </div>
          <div>
            <img src={Facebook} alt="" />
            <span>
              <a href="https://facebook.com/godan_logistics">godan_logistics</a>
            </span>
          </div>
          <div>
            <img src={Instagram} alt="" />
            <span>
              <a href="https://instagram.com/godan_logistics">
                godan_logistics
              </a>
            </span>
          </div>
          <div>
            <img src={Mail} alt="" />
            <span>
              <a href="mailto:info@godanlogistics.com">
                info@godanlogistics.com
              </a>
            </span>
          </div>
          <div className={classes.location}>
            <img src={Location} alt="" />
            <span>10 Temitope house, Ogunyanwo street Sagamu, Ogun state</span>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>Godan Logistics © copyright2022</footer>
    </main>
  );
};
export default Policy;
