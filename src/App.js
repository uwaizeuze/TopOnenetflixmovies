import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import Sdata from "./Sdata";
import Netflix from "./components/Netflix";
import Amazon from "./components/Amazon";
const App = () => {
  const [value, setvalue] = useState("");

  let favseries = value;

  // const Favs = () => {
  //   if (favseries === "amazon") {
  //     return <Netflix />;
  //   } else {
  //     return <Amazon />;
  //   }
  // };

  const InputEvent = (event) => {
    setvalue(event.target.value);
  };

  return (
    <>
      <div className="heading__main">
        <h1 className="heading__title">list of top Netflix series in 2021</h1>
      </div>

      <div className="input__box">
        <input
          type="text"
          value={value}
          placeholder="Search the  Movies?"
          className="input__search"
          onChange={InputEvent}
        />
      </div>
      <div className="app__container">
        {/* {Sdata.map((value) => {
          return (
            <Card
              key={value.id}
              sname={value.sname}
              imgsrc={value.imgsrc}
              title={value.title}
              links={value.links}
            />
          );
        })} */}
        {/* <Favs /> */}

        {favseries === "netflix" && <Netflix />}
        {favseries === "amazon" && <Amazon />}
      </div>
    </>
  );
};

export default App;
