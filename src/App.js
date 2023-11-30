import React from "react";
import Cards from "./components/Cards";
import "./App.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="app">
      <h1 className="text-uppercase text-center font-weight-bold display-1 text-light ">
        <strong>SuperBikes</strong>
      </h1>
      <Cards />
      <div style={{ width: "70vw", margin: "32px auto"}}>
      <ImageGallery items={images} showBullets={true} autoPlay={true} thumbnailPosition="left" slideInterval={2000} slideDuration={1000} />
    </div>
    </div>
  );
}

export default App;
