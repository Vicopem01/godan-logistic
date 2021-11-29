import classes from "./policy.module.css";
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
        <h2>Privacy policy and legal terms</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          dignissim leo sed nisl maximus, eu rutrum mauris placerat. Cras ipsum
          justo, malesuada et tortor vitae, sagittis iaculis arcu. Sed rutrum
          egestas sapien, eu scelerisque eros ornare sit amet. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nullam accumsan ut ex non rhoncus. Aliquam erat volutpat. In
          ultrices lectus ac auctor pulvinar. Donec blandit, mi a tempor
          finibus, mauris nisl tincidunt purus, sit amet gravida felis sem at
          justo. Curabitur elit orci, tristique blandit dapibus non, venenatis
          eget enim. Pellentesque dapibus, erat aliquet imperdiet finibus,
          tellus diam ullamcorper felis, ullamcorper mollis velit nisl ac arcu.
          Nam fringilla risus vel sem elementum, sed condimentum nibh tincidunt.
          Phasellus turpis mi, ullamcorper id eleifend non, convallis commodo
          metus. Vivamus suscipit metus ante. Phasellus vel neque volutpat,
          eleifend odio nec, porta nibh. Fusce sed arcu non risus elementum
          pretium vel in urna. Fusce elementum turpis enim, vitae dapibus felis
          rhoncus eget. Proin vulputate ultricies tristique. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse magna leo, molestie vitae
          tincidunt quis, ultricies in nunc. Sed vel nibh malesuada, tempor nisl
          ut, scelerisque nulla. Vestibulum gravida urna sed purus bibendum
          faucibus. Curabitur tristique metus sit amet nulla fermentum, ac
          sagittis purus finibus. Aliquam interdum, ipsum a auctor gravida,
          risus mi egestas nulla, nec pretium tortor nisi a lacus. Duis et
          faucibus metus. Vivamus nisl nunc, pharetra sit amet risus nec,
          accumsan tincidunt lectus. Donec at eros pellentesque, vestibulum dui
          ac, porttitor ante. Nunc faucibus justo ac sapien gravida, in aliquet
          metus dictum. Proin aliquet purus nisl, tristique mollis sem rhoncus
          eu. Quisque non nunc a ante consequat pellentesque nec sit amet eros.
          Pellentesque molestie massa sit amet faucibus tincidunt. Aenean eu
          quam finibus, vestibulum ex vel, efficitur orci. Mauris vel aliquam
          velit, at ullamcorper est. Vivamus ultrices lobortis nisl eget ornare.
          Sed leo enim, lacinia a turpis sit amet, tincidunt pretium nunc. Duis
          justo nibh, hendrerit quis dapibus vitae, suscipit sit amet enim.
          Morbi pulvinar ut mi ut hendrerit. Aenean tincidunt suscipit neque. Ut
          egestas dolor nunc, eu porttitor dui posuere a. Pellentesque molestie
          augue purus, eget suscipit velit mattis quis. Integer hendrerit vel
          dolor et tempor. Aliquam vulputate laoreet nisl, eget lobortis ligula
          varius quis. Suspendisse et nisi vel erat hendrerit consectetur a
          facilisis nibh. Suspendisse blandit ornare justo, at cursus magna
          pharetra nec. Nullam tincidunt tincidunt porta. Nunc nec ex lacus.
          Nulla finibus tincidunt turpis nec vestibulum. Curabitur ac erat vitae
          libero volutpat vehicula. Suspendisse lacinia interdum maximus. Proin
          nec purus quam. Sed hendrerit, lectus a cursus gravida, metus tortor
          ornare urna, vel volutpat sem purus eget purus. Suspendisse in massa
          vehicula, auctor quam a, facilisis velit. Curabitur laoreet ex in nisi
          ultrices iaculis. Sed vestibulum vitae metus nec feugiat. Donec
          iaculis condimentum purus in auctor.
        </p>
      </div>
    </main>
  );
};
export default Policy;
