import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Hero2 from "./pages/Hero/Hero2";
import Phone1 from "./assets/Phone1.jpg";
import Phone2 from "./assets/Phone2.jpg";
import Phone3 from "./assets/Phone3.jpg";
import Bottom from "./pages/Bottom/Bottom";
import Footer from "./pages/Footer/Footer";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero
        text="Create an account"
        title="Create/login to an existing account to get started"
        subtitle="An account is created with your email and a desired password"
        img={Phone1}
      />
      <Hero2
        text="Explore varieties"
        title="Shop for your favorites
        meal as e dey hot."
        subtitle="Shop for your favorite meals or drinks and enjoy while doing it."
        img={Phone2}
      />
      <Hero
        text="Chekout"
        title="When you done check out and get it delivered."
        subtitle="When you done check out and get it delivered with ease."
        img={Phone3}
      />
      <Bottom />
      <Footer />
      <ScrollUpButton style={{ backgroundColor: "#fa4a0c", color: "#fff" }} />
    </div>
  );
}

export default App;
