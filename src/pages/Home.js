import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <Navbar />
      <div className="left">
        <img
          src="https://i.ibb.co/BghNjVh/flowers-Border.png"
          alt="flowers"
          className="flower-border-img"
          usemap="#image-map"
        />
      </div>

      <div className="middle">
        {/* <div className="growth">
          Witness
          <br />
          my
          <br />
          GROWTH...
        </div> */}
         <img
          src="https://i.ibb.co/n0jnPH1/seedlings.png"
          alt="seedlings"
          className="seedling-img"
        />
      </div>

      <div className="right">
        <img
          src="https://i.ibb.co/H20Bv0t/sunshine.png"
          alt="sunshine"
          className="sunshine-img"
        />
      </div>
    </section>
  );
};

export default Home;
