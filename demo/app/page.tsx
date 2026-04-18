import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import GreenPocket from "@/components/GreenPocket";
import GliAppartamenti from "@/components/GliAppartamenti";
import MaterialTruth from "@/components/MaterialTruth";
import Ospitalita from "@/components/Ospitalita";
import Garage from "@/components/Garage";
import BusinessFiere from "@/components/BusinessFiere";
import Recensioni from "@/components/Recensioni";
import Prenota from "@/components/Prenota";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <GreenPocket />
        <GliAppartamenti />
        <MaterialTruth />
        <Ospitalita />
        <Garage />
        <BusinessFiere />
        <Recensioni />
        <Prenota />
      </main>
      <Footer />
    </>
  );
}
