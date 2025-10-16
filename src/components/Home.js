import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../headers_footer/navbar";
import Header from "../headers_footer/header";
import BottomFavcomp from "../componentsBoot/bottomFavcomp";
// import SlidCakeImg from "../Slider/CakeSlide.jpg";
import Namasyaa from "../Slider/namasyaa.jpeg";
import Contactus from "./Contactus";
import Slider from "../slider";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./ProductListmodule.css";
import "./Home.css";
import Pickles from "../Products/Pickle";
import Topnav from "../headers_footer/Topnav";
import VideoSliderComponent from "../videoslider";
// import TestimonialSlider from "./Testimonial";
// import CategoryMangoes from "../Products/CategoryMangoes";
// import DeliveryBanner from "../OtherImages/DeliveryBanner.jpg";
// import CategoryChilli from "../Products/CategoryChilli";
// import CategoryMixed from "../Products/CategoryMixed";
// import Message from "./Message";


const Home = () => {

const [showFilters, setShowFilters] = useState(false);

const [formData, setFormData] = useState({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});

const [successMessage, setSuccessMessage] = useState("");

const sendEmail = (e) => {
e.preventDefault();

const emailData = {
to_email: formData.recipientEmail,
name: formData.email,
email: formData.email,
message: formData.message,
to_name: formData.email,
reply_to: formData.email,
};

emailjs
.send(
process.env.REACT_APP_EMAILJS_SERVICE_ID,
process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
emailData,
process.env.REACT_APP_EMAILJS_USER_ID
)
.then(
(response) => {
console.log(
"You have successfully subscribe !",
response.status,
response.text
);
setFormData({
email: "",
recipientEmail: "nitiarya655@gmail.com",
message: "",
});
setSuccessMessage("Message sent successfully!");
},
(err) => {
console.error("Failed to send email. Error:", err);
setSuccessMessage("Failed to send message. Please try again.");
}
);
};

const naviGateProductsAll = useNavigate()
const seeAllProducts = () => {
naviGateProductsAll('/ProductList')
}


return (

<div>

<Helmet>
<title>Buy Best Homemade Pickles Online | Pickles & More</title>
<meta
name="description"
content="Explore 100+ delicious homemade pickles including mango, garlic, carrot & more. Fast delivery across India."
/>
<meta
name="keywords"
content="Pickles, Homemade Achaar, Mango Pickle, Buy Pickles Online, Indian Pickles"
/>
<link rel="canonical" href="https://yourdomain.com" />
<meta property="og:title" content="Pickles & More - Authentic Homemade Pickles" />
<meta property="og:description" content="Discover tasty and hygienically packed pickles. Subscribe for updates and offers." />
<meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="robots" content="index, follow" />
</Helmet>

<Topnav></Topnav>
<Navbar />

<div className="Catelog_Items">

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5734247_png/mesmera-bangle--mixed-cuts--white--rose-gold-tone-plated-swarovski-5734247.png" 
loading="lazy"
alt="Desi Ghee"></img>
<h4>Cutomized</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_2000/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_2000/5734244_png/magic-bracelet--snowflake--blue--rhodium-plated-swarovski-5734244.png" 
loading="lazy"
alt="Garlic"></img>
<h4>Combos</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5733116_png/una-angelic-pendant--round-cut--double-sided-motifs--white--rhodium-plated-swarovski-5733116.png" 
loading="lazy"
alt="Ginger"></img>
<h4>Fresh Arrivals</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5733474_png/mesmera-bangle--heart--white--gold-tone-plated-swarovski-5733474.png" 
loading="lazy"
alt="Radish"></img>
<h4>Shaps</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_2000/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_2000/5734243_png/magic-set--snowflake--blue--rhodium-plated-swarovski-5734243.png" 
loading="lazy"
alt="Jackfruit"></img>
<h4>Gifts</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5734250_png/stilla-attract-stud-earrings--round-cut--blue--rhodium-plated-swarovski-5734250.png" 
loading="lazy"
alt="Banana"></img>
<h4>Under 6K</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5733808_png/mesmera-set--pear-cut--round-cut--white--rose-gold-tone-plated-swarovski-5733808.png" 
loading="lazy"
alt="Bitter"></img>
<h4>Premium</h4>
</div>

<div>
<img src="https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_675/5733475_png/mesmera-necklace--heart--white--gold-tone-plated-swarovski-5733475.png" 
loading="lazy"
alt="Sudh Ghee"></img>
<h4>Special</h4>
</div>
</div>


<Slider />

<div className="Catelog_Items">
  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5723387_ms1/swan-pendant--swan--white--rhodium-plated-swarovski-5723387.jpg" loading="lazy" alt="Doctor" />
    <h4>Swan pendant</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5723411_ms1/swan-pendant-and-brooch--swan--white--ruthenium-plated-swarovski-5723411.jpg" loading="lazy" alt="Engineer" />
    <h4>Swan pendant and brooch</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5469989_ms1/swan-necklace--swan--pink--rose-gold-tone-plated-swarovski-5469989.jpg" loading="lazy" alt="Entrepreneur" />
    <h4>Swan necklace</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5518865_ms1/hyperbola-necklace--infinity-and-heart--white--mixed-metal-finish-swarovski-5518865.jpg" loading="lazy" alt="Blogger" />
    <h4>Hyperbola necklace</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5722472_ms1/constella-necklace--round-cut--white--rhodium-plated-swarovski-5722472.jpg" loading="lazy" alt="Teacher" />
    <h4>Constella necklace</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5580952_ms1/hyperbola-ring--mixed-cuts--white--rhodium-plated-swarovski-5580952.jpg" loading="lazy" alt="Makeup" />
    <h4>Hyperbola ring</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5735223_ms1/sublima-pendant--white--rhodium-plated-swarovski-5735223.jpg" loading="lazy" alt="Soldier" />
    <h4>Sublima pendant</h4>
  </div>

  <div>
    <img src="https://asset.swarovski.com/images/$size_1450/t_swa002/c_scale,dpr_2.0,f_auto,w_675/5709272_ms1/the-vienna-collection-open-ring--feather--white--ruthenium-plated-swarovski-5709272.jpg" loading="lazy" alt="Traveller" />
    <h4>The Vienna Collection open ring</h4>
  </div>
</div>


<VideoSliderComponent></VideoSliderComponent>


<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={10}></Pickles>
</div>

{/*  */}


{/*  */}

<button onClick={seeAllProducts} className="seeLLProducts">View All</button>

<div id="bottomFav_comp">
<BottomFavcomp />
</div>

{/*  */}

<div className="tshirt_Left">
<Pickles showFilters={showFilters} limit={5}></Pickles>
</div>

<button onClick={seeAllProducts} 
className="seeLLProducts">View All</button>

{/*  */}

<Contactus></Contactus>

<a
href='https://api.whatsapp.com/send/?phone=%2B919821187225&text&type=phone_number&app_absent=0'
target="_blank"
rel="noopener noreferrer"
>
    
<img
className="whatsapp_message"
src="https://cdn-icons-png.freepik.com/256/3983/3983877.png?semt=ais_hybrid"
alt=""
loading="lazy"
></img>

</a>

{/*  */}

<div className="Secure_ordering">
<h2>Antara – Har Har Gahne Mein Ek Kahani
</h2>
<p>At Antara, every piece of jewellery is 
crafted with love and precision to celebrate 
the beauty, strength, and grace of every woman. 
Each design tells a story — timeless, elegant, and 
made to make your special moments unforgettable.
</p>

<img src={Namasyaa}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img>


</div>

{/* <img src={SlidCakeImg}
loading="lazy"
alt="Variety of Homemade Pickles"
className="DlvyImg"
></img> */}


{/* SlidCakeImg */}

<div className="subscribe_kk">

<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

</form>

</div>

<VideoSliderComponent></VideoSliderComponent>

<div className="subscribe_k">

<div className="subscribe_flx">

<img src="https://www.flavoursguru.com/catalog/view/theme/default/image/Home/new-images/email-icon.svg" 
alt="" loading="lazy" />

<div>
<h2>Let's Stay Connected</h2>
<p>Subscribe here</p>
</div>

</div>


<form onSubmit={sendEmail}>

{successMessage && (
<p className="success_message">{successMessage}</p>

)}

<div className="subscribe_flx">

<input
type="email"
name="email"
placeholder="Enter your email here..."
value={formData.email}
onChange={(e) =>
setFormData({
...formData,
email: e.target.value,
message: e.target.value,
})
} required />
<button type="submit">Subscribe</button>

</div>

</form>

</div>

<Header />

</div>

);

};

export default Home;
