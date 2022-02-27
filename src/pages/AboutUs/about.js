import classes from "./about.module.css";
import Logo from "../../assets/images/authentication/godan_logo.svg";
import Cover from "../../assets/images/onboarding/rider.webp";
import Bike from "../../assets/images/aboutUs/bike.svg";
import Car from "../../assets/images/aboutUs/car.svg";
import Truck from "../../assets/images/aboutUs/truck.svg";
import Plus from "../../assets/images/aboutUs/plus.svg";
import Minus from "../../assets/images/aboutUs/minus.svg";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Instagram from "../../assets/images/aboutUs/instagram.svg";
import Mail from "../../assets/images/aboutUs/mail.svg";
import Location from "../../assets/images/aboutUs/location.svg";
import Facebook from "../../assets/images/aboutUs/facebook.svg";
import Phone from "../../assets/images/aboutUs/phone.svg";
import Menu from "../../components/Landing/Menu/menu";
import SideBar from "../../components/Landing/SideBar/sidebar";

const Policy = () => {
  const [sideBar, setSideBar] = useState(false);
  const [text1, showText1] = useState(false);
  const [text2, showText2] = useState(false);
  const [text3, showText3] = useState(false);
  const [text4, showText4] = useState(false);
  const [text5, showText5] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={classes.main}>
      <Menu onClick={() => setSideBar(true)} />
      <SideBar sideBar={sideBar} cancelSidebar={() => setSideBar(false)} />
      <div className={classes.topSection}>
        <br />
        <br />
        <header>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </header>
        <br />
        <div>
          <p>Hello there 😉</p>
          <h2>
            About <br />
            Godan Logistics
          </h2>
          <p>
            We're happy to have you,
            <br /> learn more about us below
          </p>
        </div>
      </div>

      <h3>We're a logistics company</h3>
      <div className={classes.img}>
        <img src={Cover} alt="Cover" />
      </div>
      <p className={classes.about}>
        Godan Logistics is a logistics company that handles delivery of goods
        and services from clients to their customers.
        <br />
        We liase with Small and Medium business owners by employing learned and
        experienced riders of motorcycles and cars to efficiently deliver and
        pick up at very affordable and cost efficient prices.
      </p>
      <div>
        <h3>Our Logistics Means</h3>
        <p className={classes.about}>
          We handle goods and services in three major ways and they are as
          follows :
        </p>
        <br />
        <div className={classes.box}>
          <div>
            <img src={Bike} alt="Bike" />
          </div>
          <h4>Motorbike Deliveries</h4>
          <p>
            Logistics through motorbikes is our simplest and most affordable
            means of transportation. It covers intra-locality regions and is the
            fatest means for reaching customers within your locality.
          </p>
        </div>
        <br />
        <div className={classes.box}>
          <div>
            <img src={Car} alt="Car" />
          </div>
          <h4>Car Deliveries</h4>
          <p>
            Logistics through cars is most convenient when you want to reach
            customers within your locality when your goods are heavier than what
            can be carried by a motorbike or your goods needs someone to tag
            along to the point of delivery.
          </p>
        </div>
        <br />
        <div className={classes.box}>
          <div>
            <img src={Truck} alt="Truck" />
          </div>
          <h4>Truck Deliveries</h4>
          <p>
            Logistics through trucks is reserved for companies that requires
            heavy lifting. This method can not be booked opn the website but can
            only be requested for. After receiving a request, we will meet and
            agree on prices depending on the weight and distance to be
            travelled.
          </p>
        </div>
      </div>
      <div>
        <h3>Some commonly asked questions</h3>
        <p className={classes.about}>
          Everything you need to know about our company.
        </p>
        <div className={classes.expand}>
          <h5 onClick={() => showText1(!text1)}>
            How reliable are you?
            {!text1 && <img src={Plus} alt="expand" />}
            {text1 && <img src={Minus} alt="expand" />}
          </h5>
          {text1 && (
            <p>
              With a thousand plus satisfied customer, we can guarantee our
              expertise and professionalism in handling goods with care and
              delivering on time.
            </p>
          )}
        </div>
        <span className={classes.line}></span>
        <div className={classes.expand}>
          <h5 onClick={() => showText2(!text2)}>
            Can I track my delivery status?
            {!text2 && <img src={Plus} alt="expand" />}
            {text2 && <img src={Minus} alt="expand" />}
          </h5>
          {text2 && (
            <p>
              You'll be able to view your status from your customer dashboard,
              and also check your previous orders from your history page.
            </p>
          )}
        </div>
        <span className={classes.line}></span>
        <div className={classes.expand}>
          <h5 onClick={() => showText3(!text3)}>
            How do I get a rider or driver?
            {!text3 && <img src={Plus} alt="expand" />}
            {text3 && <img src={Minus} alt="expand" />}
          </h5>
          {text3 && (
            <p>
              We use advanced matchmaking systems to get you across to the rider
              closest to you at the best and affordable fee that wont break the
              bank. Making deliveries a breeze
            </p>
          )}
        </div>
        <span className={classes.line}></span>
        <div className={classes.expand}>
          <h5 onClick={() => showText4(!text4)}>
            How safe and reliable are you?
            {!text4 && <img src={Plus} alt="expand" />}
            {text4 && <img src={Minus} alt="expand" />}
          </h5>
          {text4 && (
            <p>
              We have been handling logistics and working with customers for a
              long time and we have just the reliabiity and speed you need. No
              hidden charges and no extra cost, easy as pie, smooth and
              stress-free.
            </p>
          )}
        </div>
      </div>

      {/* <div>
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
          <br /> */}
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
      {/* </p>
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
      </div>*/}
      <h3>Still got questions?</h3>
      <p className={classes.about}>Get in touch with us!</p>

      <div className={classes.socialDiv}>
        <a href="tel:+2349033339578" className={classes.social}>
          <img src={Phone} alt="Phone" />
          <p>09033339578</p>
        </a>

        <a href="mailto:info@godanlogistics.com" className={classes.social}>
          <img src={Mail} alt="Mail" />
          <p>info@godanlogistics.com</p>
        </a>
      </div>
      <div className={classes.socialDiv}>
        <a
          href="https://instagram.com/godan_logistics"
          className={classes.social}
          target="_blank"
        >
          <img src={Instagram} alt="Instagram" />
          <p>@ godan_logistics</p>
        </a>

        <a
          href="https://facebook.com/godan_logistics"
          className={classes.social}
          target="_blank"
        >
          <img src={Facebook} alt="Facebook" />
          <p>@ godan_logistics</p>
        </a>
      </div>
      <div className={classes.socialDiv}>
        <div className={classes.social}>
          <img src={Location} alt="Location" />
          <p>10 Temitope house, Ogunyanwo street Sagamu, Ogun state</p>
        </div>
      </div>
      <footer className={classes.footer}>
        Godan Logistics © copyright2022
      </footer>
    </main>
  );
};
export default Policy;
