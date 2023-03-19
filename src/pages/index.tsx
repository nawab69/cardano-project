import Header from "../Components/Header";
import Footer from "../Components/Footer";

import Card from "react-bootstrap/Card";

import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import Tweet from "../Components/Tweet";

import React, { useState, useEffect } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

function Home() {
  const viewport = useWindowSize()
  const viewportWidth = viewport?.width

  return (
    <div>
      <main id="main">
        <Header />
        <section className="portfolio section-bg zero-bottom-padding">
          {viewportWidth > 800 ? (
            // display this HTML above 800px
            <React.Fragment></React.Fragment>
          ) : (
            // display this HTML below 800px
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active .status-tag">
                All(31)
              </li>
              <li data-filter=".filter-app status-tag">Live(5)</li>
              <li data-filter=".filter-card .status-tag">Ongoing(2)</li>
              <li data-filter=".filter-web .status-tag">Ended(24)</li>
            </ul>
          )}
        </section>

        <section id="portfolio" className="portfolio section-bg zero-top-padding">
          <div className="container section-container">
            <div className="section-title">
              <h2>Featured Tweets</h2>
            </div>

            <div className="row portfolio-container" id="featured-tweets-contianer">
              <Tweet
                title="Dummy"
                text="Look at this cool NFT"
                winner="24"
                amount="45000"
                hour="12"
                min="24"
                sec="25"
                id="1"
              />

              <Tweet
                title="Dummy"
                text="Look at this cool NFT"
                winner="24"
                amount="45000"
                hour="12"
                min="24"
                sec="25"
                id="2"
              />
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Other Tweets</h2>
            </div>

            <div className="row portfolio-container" style={{ width: "100%" }}>
              <Tweet
                title="Dummy"
                text="Look at this cool NFT"
                winner="24"
                amount="45000"
                hour="12"
                min="24"
                sec="25"
                id="3"
              />

              <Tweet
                title="Dummy"
                text="Look at this cool NFT"
                winner="24"
                amount="45000"
                hour="12"
                min="24"
                sec="25"
                id="4"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
