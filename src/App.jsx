import React, { useEffect } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Lenis from 'lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  


  return (
    <>
      <div className="main relative w-full bg-[#e4e3e0] p-4">
        <Page1 />
        <Page2 />
        <Page3 />
        <div className="page4 relative w-full h-screen transition-all duration-500"></div>
      </div>
    </>
  );
};

export default App;
