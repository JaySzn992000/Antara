import React from "react";
import { Helmet } from "react-helmet";
import cake1 from "./Slider/image1.jpg";
import cake2 from "./Slider/image2.jpg";
import cake3 from "./Slider/image3.jpg";
import cake4 from "./Slider/image4.jpg";
import "./videoslider.css";

const ImageSliderComponent = () => {
  
  const images = [cake1, cake2, cake3, cake4];

  return (
    <div>
      <Helmet>
        <title>What Our Fans Say - Image Gallery</title>
        <meta
          name="description"
          content="See what our fans love about our cakes through these beautiful gallery images."
        />
        <meta property="og:title" content="What Our Fans Say - Image Gallery" />
        <meta
          property="og:description"
          content="See what our fans love about our cakes through these beautiful gallery images."
        />
        <meta property="og:type" content="image.gallery" />
        <meta
          property="og:url"
          content="https://yourwebsite.com/what-our-fans-say"
        />
      </Helmet>

      <div className="video_container">
        <h2>NEW ARRIVALS - Jwelleries</h2>
        <section className="video_section_flex">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Cake ${index + 1}`} loading="lazy" />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ImageSliderComponent;
