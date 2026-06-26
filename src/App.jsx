import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Api from "./components/Api";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ width: "100%" }}>
        <Header />
        <Hero/>
        {/* <Api/> */}
      </div>
    </div>
  );
}

export default App;