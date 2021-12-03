import React from "react";
import "../styles/List.css";

const List = ({ List }) => {
  return (
    <div>
      <ul>
        {List.map((item, i) => {
          return (
            <>
              <div className="list__container" key={i}>
                <h2 className="list__title">{i}</h2>
                <li className="list__username">username:{item.username}</li>
                <li className="list__password"> password:{item.password}</li>
              </div>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
