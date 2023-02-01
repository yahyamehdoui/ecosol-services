import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
const services = () => {
  return (
    <>
      <Head>
        <title>ECOSOLUTIONS | Services</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <main style={{ display: "center", flexDirection: "row" }}>
        <div
          style={{
            display: "center",
            marginLeft: "20px",
            width: "50%",
            padding: "6%",
            float: "left",
          }}
        >
          <div>
            <h1>We make even challenging projects a success!</h1>
            <div>
              <p
                style={{
                  fontfamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  fontsize: "50px",
                  marginLeft: "5%",
                }}
              >
                Astrasun covers every part of the value chain in the market of
                solar energy:
                <br /> the core elements of its activity today are the design,
                construction,
                <br /> operation, maintenance, investment and development of
                solar PV and
                <br /> hybrid power plants.
                <br />
                Project development plays a major part in the company’s life.
                Our firm is
                <br /> proud to react quickly to market changes and
                international market
                <br /> movements, faster than its competitors. The company has
                references in the <br />
                field of development, investment, financing and operation of
                solar PV plants
                <br /> and hybrid systems.
                <br />
                Combining a modern startup approach with an established
                corporate
                <br /> culture allows Astrasun to make even challenging projects
                a success.
                <br />
                As an investor, Astrasun is interested in greenfield,
                ready-to-build and <br />
                turnkey renewable energy projects. We are willing to consider
                all
                <br /> opportunities. As business mediator, through our
                extensive partnerships, we <br />
                can help to find the ideal investor.
                <br />
                The nature of our land investments is real estate development,
                <br /> environmental rehabilitation and the enrichment of
                biodiversity. In some of
                <br /> our solar parks, we use an agrivoltaic model and we are
                preparing to <br />
                implement further demonstration projects in this field.
              </p>
            </div>
          </div>
        </div>
        <div style={{ float: "left", marginTop: "100px" }}>
          <div>
            <img
              src="/1.jpg"
              alt="image1"
              style={{
                border: "5px solid gray",
                position: "relative",
                width: "400px",
                height: "200px",
              }}
            />
          </div>
          <div>
            <img
              src="/2.jpg"
              alt="image2"
              style={{
                border: "5px solid gray",
                position: "relative",
                width: "400px",
                height: "200px",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default services;
