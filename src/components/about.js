import React from "react";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import AboutPickle from "../Slider/AboutPickle.png";
import { Helmet } from "react-helmet";
import "./about.css";

const Aboutus = () => {

return (

<div>

<Helmet>
<title>About Us | Pickle - Authentic Handcrafted Pickles</title>
<meta
name="description"
content="Discover the story behind Pickle - your go-to destination for handcrafted, traditional Indian pickles made with fresh ingredients and no preservatives."
/>
<meta
name="keywords"
content="Handmade Pickles, Traditional Indian Pickles, Desi Achar, Homemade Pickle, Authentic Pickles, Mango Pickle, Lemon Pickle"
/>
</Helmet>

{/*  */}

<Navbar></Navbar>

<main className="about_flex_">

<img 
loading="lazy"
className="imgAbout" 
alt="Traditional Indian pickle jar with spices"
src={AboutPickle}></img>

<section>

<h1>Fall Jewelry Trends & Autumn Color Palettes</h1>
<h2>Antara – Celebrating The Woman In You!</h2>
<p>
{" "}
At Antara, we believe that every woman deserves to shine in her 
own unique way. Our passion lies in crafting exquisite jewelry that 
celebrates grace, confidence, and individuality. Each piece is 
designed to complement your charm and elevate your everyday elegance.
Our vision is to bring you premium-quality jewelry at the best value,
blending timeless artistry with modern design. From delicate earrings 
to statement necklaces, from everyday wear to bridal exclusives — 
Antara offers a wide collection that suits every occasion and mood.
Just like the changing hues of autumn, our latest collection embraces 
warm golds, rich ambers, and deep jewel tones, reflecting the season’s 
elegance and depth. Every creation is thoughtfully designed to make you
feel special, confident, and radiant.
</p>
</section>

</main>


{/*  */}

<div className="header-ad">
<Header></Header>
</div>

</div>

);

};

export default Aboutus;
