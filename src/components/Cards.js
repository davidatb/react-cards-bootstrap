import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "kawasaki",
    image:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/10/359333-kawasaki-ninja-h2r-presenta-300-cv-turbo.jpg?itok=3DkHYKVF",
    url: "https://www.kawasaki.com.mx/"
  },
  {
    id: 2,
    title: "honda",
    image: "https://img.remediosdigitales.com/72bc9f/cbr-3-2022/1366_2000.jpeg",
    url: "https://www.honda.com.mx/",
    text: "Honda cbr 2023 motorsport edition"
  },
  {
    id: 3,
    title: "yamaha",
    image: "https://i.ytimg.com/vi/rf_szSGLdI4/maxresdefault.jpg",
    url: "https://www.yamaha-motor.com.mx/",
    text: "Yamaha r1 2023 special edition"
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center" >
      <div className="row" >
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card key={card.id} title={card.title} imageSource={card.image} url={card.url} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
