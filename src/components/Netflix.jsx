import React from "react";
import Card from "./Card";
import Sdata from "../Sdata";

const Netflix = () => {
  return (
    <>
      <Card
        key={Sdata[1].id}
        sname={Sdata[1].sname}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        links={Sdata[1].links}
      />
    </>
  );
};

export default Netflix;
