import "./App.css";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import { HowItWorks } from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

import * as Sentry from "@sentry/react";

const App = () => {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
    <main className='bg-black'>
      {/* Navbar */}
      <Navbar />

      {/* Hero */}

      <Hero />
      {/* Highlights */}

      <Highlights />

      {/* Model */}
      <Model />

      {/* Features */}
      <Features />

      {/* How it Works */}
      <HowItWorks />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
