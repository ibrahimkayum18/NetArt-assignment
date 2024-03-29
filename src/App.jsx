import "./App.css";
import Banner from "./components/Banner";
import header from "./assets/logo.png";
import Service from "./components/Service";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-200">
      {/* Header Image added */}
      <img src={header} className="w-[70%] lg:w-[30%] mx-auto" alt="" />

      {/* Banner Section Added */}
      <Banner />

      {/* Service Section */}
      <Service />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
