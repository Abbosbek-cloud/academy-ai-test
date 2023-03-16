import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/main.css";

const Card = ({ img, name, link, info }) => {
  const navigate = useNavigate();
  return (
    <div className="card_container">
      <div className="image_wrapper">
        <img src={img} alt={name} />
      </div>
      <div className="info_card">
        <p className="name_card">{name}</p>
        <button className="navigate_button" onClick={() => navigate(link)}>
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default Card;
