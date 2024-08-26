
"use client";
import React from "react";
import { ContainerScroll } from './components/ui/container-scroll-animation'
//import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Includes Popper.js
import Navbar from './components/Navbar'; // Import the Navbar component
import 'jquery';


export function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden">
      <Navbar /> {/* Include the Navbar component */}
      <ContainerScroll
        titleComponent={
          <>
          <p>GROW YOUR BUSINESS ONLINE MORE CUSTOMERS, MORE REVENUE</p>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Boost Your Business with a <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Professional Website
              </span>
            </h1>
            <p>We create custom websites and landing pages to help small businesses and <br />startups attract more clients and enhance their online presence.</p>
          </>
        }>
        <img
          src={`src/image/iphone.png`}
          alt="hero"
          height={1420}
          width={1150}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>)
  );
}
