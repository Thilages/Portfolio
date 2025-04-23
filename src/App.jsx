import React, { useEffect, useState } from "react";
// Correctly imported GIF
import Home from "./components/Home";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a loading delay for at least 1 second
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="fixed inset-0 flex items-center justify-center bg-[#f1f1f1]">
          <iframe className="w-[20vw] h-[20vw]" src="https://lottie.host/embed/08522a9e-1476-43ee-8a32-42478f9c0e25/GkqEYsaQUD.lottie"></iframe>
        </div>
      ) : (
        <div className="relative overflow-x-hidden touch-pan-y max-sm:snap-none overscroll-contain w-screen h-screen snap-y snap-mandatory">
          <Home />
          <Hero />
          <Services />
          <Works />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
