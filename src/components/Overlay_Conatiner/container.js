import classes from "./container.module.css";
import Where from "./Where_Are_You/where";
import Destination from "./Destination/destination";
import { useState } from "react";

const Container = () => {
  const [where, setWhere] = useState(true);
  const [destination, setDestination] = useState(false);
  const moveStep1 = () => {
    setWhere(false);
    setDestination(true);
  };
  return (
    <div className={classes.container}>
      {where && <Where moveStep1={moveStep1} />}
      {destination && <Destination />}
    </div>
  );
};

export default Container;
