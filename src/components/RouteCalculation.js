import { useState } from "react";

export default function RouteCalculation(props) {
  const [rate, setRate] = useState(1);

  const updateOriginData = (event) => {
    setRate(event.target.value);
  };

  const pricePerDay = 1000;
  const priceMultiplier = 1.1;
  const allowedDistancePerDay = 800;
  let distance = Math.round(props.distance / 1000)
  let checkHowManyDays = props.distance / 1000;
  let neededDays = () => {
    var days = 0;
    for (let i = 0; checkHowManyDays > 0; i++) {
        checkHowManyDays = checkHowManyDays - allowedDistancePerDay;
      days = days + 1;
    }
    return days;
  };
  const price = distance * priceMultiplier * rate + neededDays()*pricePerDay
  /*Przy zalozeniu, ze 110% jest liczone bez placenia za liczbe dni*/ 
  return (
    <div>
      <label htmlFor="rate">Change your price per KM:</label>
      <input
        type="number"
        id="rate"
        value={rate}
        onChange={updateOriginData}
      ></input>
      <div>Price: {Math.round(price)} (Distance*Rate*110%)</div>

    </div>
  );
}
