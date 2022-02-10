import React from "react";
import "../styles/Greeting.css";

const Greeting = () => {
  let currentDate = new Date(2021, 12, 21, 15);
  currentDate = currentDate.getHours();
  let ChangingValue = " ";
  const cssStyle = {};
  if (currentDate >= 1 && currentDate < 12) {
    ChangingValue = "Good Morning";
    cssStyle.color = "green";
  } else if (currentDate >= 12 && currentDate < 19) {
    ChangingValue = "Good Afternoon";
    cssStyle.color = "blue";
  } else {
    ChangingValue = "Good Night";
    cssStyle.color = "blue";
  }
  return (
    <section className="section--container">
      <h1 className="section--title">
        <span style={cssStyle}>{ChangingValue}</span>
        Owais_Ibn_khursheed
      </h1>
    </section>
  );
};

export default Greeting;
