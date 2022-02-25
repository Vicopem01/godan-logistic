import classes from "./success.module.css";
import Logo from "../../assets/images/onboarding/logo.svg";
import SuccessImg from "../../assets/images/success/success.svg";
import { Link } from "react-router-dom";
import confetti  from "canvas-confetti";

const Error = () => {
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 10, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  return (
    <div className={classes.container}>
      <Link to="/">
        {" "}
        <img src={Logo} alt="Logo" />{" "}
      </Link>

      <div className={classes.box}>
        <div className={classes.cartoon}>
          <img src={SuccessImg} alt="Sucess" />
        </div>
        <div className={classes.flex}>
          <div className={classes.text_container}>
            <div>
              <span className={classes.span}> Hurray ,</span>
              <br />
              <span className={classes.span2}>
                Your order has been successfully completed
              </span>
              <div>
                <br />
              </div>
              <p className={classes.text1}>Want to book again? 🥺</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className={classes.btn}>
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
