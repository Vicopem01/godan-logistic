import { Navigate, useNavigate } from "react-router";
import Option from "../../../components/Landing/RideOption/ride";
import Map from "../../../components/Map/map";
import { useContext } from "react";
import { AppData } from "../../../context";
import { useState, useEffect } from "react";
import { createAutoLogout } from "../../../services/functions";
import GetRiders from "../../../components/Landing/GetRiders/getRiders";

const Stage3 = ({ setLoad, setOrderId, setriderId }) => {
  let navigate = useNavigate();
  let { data, setData } = useContext(AppData);
  const [stage, setStage] = useState("stage1");
  const [auth, setAuth] = useState(false);

  useEffect(async () => {
    const res = await createAutoLogout();
    setAuth(res);
  }, []);
  return (
    <>
      {stage === "stage1" && (
        <>
          <Option
            move={() => setStage("stage2")}
            setData={setData}
            data={data}
          />
          <Map />
        </>
      )}

      {stage === "stage2" && (
        <>
          {!auth ? (
            <Navigate replace to="/login?redirect=fetch-rider" />
          ) : (
            <GetRiders
              data={data}
              setStage={setStage}
              setSecondLoad={setLoad}
              setOrderId={setOrderId}
              setriderId={setriderId}
            />
          )}
          <Map />
        </>
      )}
    </>
  );
};

export default Stage3;
