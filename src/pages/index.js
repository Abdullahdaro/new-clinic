import Image from "next/image";
import Header from "../components/Header";
import FirstPage from "../components/main-page/firstpage";
import Teeth from "../components/main-page/Teeth";
import Footer from "../components/Footer";
import Value from "../components/main-page/Value";
import Reviews from "../components/main-page/Reviews";
import HowItWorks from "../components/main-page/HowItWorks";
import Doctors from "../components/main-page/Doctors";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <Teeth />
      <Value />
      <Reviews />
      <HowItWorks />
      <Doctors />
      <Footer />
    </div>
  );
}
