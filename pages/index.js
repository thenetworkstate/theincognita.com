// index.js
import Head from "next/head";

import React, { useState, useEffect } from "react";
import CTAButton from "../components/CTAButton";
import TableHomepageDesktop from "../components/TableHomepageDesktop";
import TableHomepageMobile from "../components/TableHomepageMobile";
import BlobShape from "../src/img/blob-shape-2.png";
import Arrow from "../src/img/arrow-11.png";
import NewsItemYellow from "../components/NewsItemYellow";
import NewsItemGreen from "../components/NewsItemGreen";
import PopupForm from "../components/PopupForm"; // Import the PopupForm component
import { fetchTableNames } from "../utils/fetchAirtableData"; // Import fetchTableNames

const Home = () => {
  // State to manage if the PopupForm is open or not
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [nodeCount, setNodeCount] = useState(0);

  // Function to open the PopupForm
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  // Function to close the PopupForm
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Fetch node count on component mount
  useEffect(() => {
    const fetchNodeCount = async () => {
      const data = await fetchTableNames();
      setNodeCount(data.length);
    };
    fetchNodeCount();
  }, []);

  return (
    <div>
      <Head>
        <title>
          The Incognita | - Open source dashboard for Network States
        </title>
      </Head>
      <main>
        <div className="upper-col">
          <div className="upper-left-col">
            <h1 class="text-4xl md:text-6xl lg:text-8xl">
              OPEN SOURCE DASHBOARD FOR ASPIRING NETWORK STATES
            </h1>
            <div className="cta-btns">
              <CTAButton onClick={handleOpenPopup}>
                <h2 className="text-white">Get listed</h2>
              </CTAButton>
              <a
                href="https://discord.gg/EyvF2fEqWT"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CTAButton bgColor="var(--color-white)">
                  <h2>Join Our Discord</h2>
                </CTAButton>
              </a>
            </div>
            <div className="arrow">
              <img
                src={Arrow.src}
                alt="Hand drawn arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="upper-right-col">
            <div className="blobShape hidden md:block">
              <img
                src={BlobShape.src}
                alt="Blob-shape"
                width={234}
                height={257}
              />
            </div>
          </div>
        </div>
        <div className="lower-col">
          <div className="lower-left-col flex items-center justify-center">
            <p>
              The Incognita DAO are building an open source database for web3
              communities. Search and find your future Network state or join the
              DAO to help us scale the concept.
              <br />
              <br />
              We are currently mapping {nodeCount} nodes.
              <a href="https://x.com/incognitaeth"> Subscribe</a> for updates or{" "}
              <a href="https://discord.gg/EyvF2fEqWT"> apply </a> to get listed.
            </p>
          </div>
          <div className="lower-middle-col hidden sm:block"></div>
          <div className="lower-right-col">
            <NewsItemYellow />
            <NewsItemGreen />
          </div>
        </div>
        <TableHomepageDesktop />
        <TableHomepageMobile />
      </main>
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Home;
