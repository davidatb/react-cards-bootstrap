import React from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    title: "kawasaki",
    image:
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2014/10/359333-kawasaki-ninja-h2r-presenta-300-cv-turbo.jpg?itok=3DkHYKVF",
    url: "https://www.kawasaki.com.mx/",
  },
  {
    id: 2,
    title: "honda",
    image: "https://img.remediosdigitales.com/72bc9f/cbr-3-2022/1366_2000.jpeg",
    url: "https://www.honda.com.mx/",
    text: "Honda cbr 2023 motorsport edition",
  },
  {
    id: 3,
    title: "yamaha",
    image: "https://i.ytimg.com/vi/rf_szSGLdI4/maxresdefault.jpg",
    url: "https://www.yamaha-motor.com.mx/",
    text: "Yamaha r1 2023 special edition",
  },
  //   Europeas
  {
    id: 4,
    title: "BMW",
    image: "https://i.ytimg.com/vi/bLupFwirDuQ/maxresdefault.jpg",
    url: "https://www.bmw.com.mx/",
    text: "BMW 1000rr 2023",
  },
  {
    id: 5,
    title: "Ducati",
    image: "https://www.webbikeworld.com/wp-content/uploads/2020/11/DUCATI_PANIGALE_V4_SP-_5__UC211439_High-scaled.jpg",
    url: "https://www.ducati.com/mx/es/home",
    text: "Ducati corse 2023",
  },
  {
    id: 6,
    title: "Mv agusta",
    image: "https://revistamoto.com/wp_rm/wp-content/uploads/2019/11/2020-MV-Agusta-Brutale-1000-RR-02-scaled.jpg",
    url: "https://www.mvagusta.com/es/",
    text: "Mv agusta 2023 brutale",
  }
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
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
