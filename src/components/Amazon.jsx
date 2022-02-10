import React from "react";
import Card from "./Card";
import Sdata from "../Sdata";

const Amazon = () => {
  return (
    <>
      <Card
        key={Sdata[3].id}
        sname={Sdata[3].sname}
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        links={Sdata[3].links}
      />
    </>
  );
};

export default Amazon;
