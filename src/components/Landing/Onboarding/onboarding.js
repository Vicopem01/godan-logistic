import classes from "./onboarding.module.css";
import Logo from "../../../assets/images/onboarding/logo.svg";
import Arrow from "../../../assets/images/onboarding/arrow.svg";
import Rider from "../../../assets/images/onboarding/rider.webp";
import Typed from "react-typed";

const Onboarding = ({ onClick }) => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={classes.typing}>
        <Typed
          strings={[
            "<span class='first'>Book a rider from </span>  <span class='second'>anyhwere in Sagamu, Ogun State.</span>",
            "<span class='first'>Deliver your packages to your customers </span>  <span class='second'>without stress and delays</span>",
            "<span class='first'>Run your business smoothly,</span>  <span class='second'>leave deliveries to us.</span>",
          ]}
          typeSpeed={40}
          loop
        />
      </div>
      <div className={classes.rider}>
        <img src={Rider} alt="" />
      </div>
      <button onClick={onClick}>
        REQUEST FOR A RIDER HERE <img src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Onboarding;
