import React from "react";
import "../styles/Card.css";

const Card = (props) => {
  return (
    <section className="section__container">
      <div className="card__container">
        <div className="card__image">
          <img src={props.imgsrc} alt="Dark" className="img" />
        </div>
        <div className="card__summary__box">
          <span className="card__summary__title">{props.title}</span>
          <h1 className="card__summary_heading">{props.sname}</h1>
          <a href={props.links} target="__blank">
            <button className="card__button">watch now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
