import "./App.css";
import Banner from "./components/Banner";
import header from "./assets/logo.png";
function App() {
  return (
    <>
      {/* Header Image added */}
      <img src={header} className="w-[30%] mx-auto" alt="" />

      {/* Banner Section Added */}
      <Banner />
      <h1>This is new Web Site</h1>
    </>
  );
}

export default App;
