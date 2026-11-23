import Effects from "./components/Effects";
import Boot from "./components/Boot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Identity from "./components/Identity";
import MissionLog from "./components/MissionLog";
import Honors from "./components/Honors";
import Projects from "./components/Projects";
import Arsenal from "./components/Arsenal";
import Uplink from "./components/Uplink";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Boot />
      <Effects />
      <Navbar />
      <main id="top">
        <Hero />
        <Identity />
        <MissionLog />
        <Honors />
        <Projects />
        <Arsenal />
        <Uplink />
      </main>
      <Footer />
    </>
  );
}
