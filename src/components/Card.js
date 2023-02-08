import React from "react";
import PropTypes from "prop-types";
import "./cards.css";

function Card({ title, imageSource, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp mx-2 my-2">
      <div className="overflow">
        <img src={imageSource} className="card-img-top " alt="" height="200px"/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text ? text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."}
        </p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-0">
          Go to this website
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
};
export default Card;
