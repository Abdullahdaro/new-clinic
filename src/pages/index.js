import Image from "next/image";
import Header from "../components/Header";
import FirstPage from "../components/main-page/firstpage";
import Teeth from "../components/main-page/Teeth";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <FirstPage />
      <Teeth />
      <Footer />
    </div>
  );
}
