import "./w3.css";
import "./font.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import IntroduceSection from "./components/IntroduceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* SideBar.js */}
      <SideBar />
      {/* Header.js */}

      <Header />
      {/*<!-- Top menu -->*/}

      {/* PageContent.js */}
      {/*<!-- !PAGE CONTENT! -->*/}
      <div
        className="w3-main w3-content w3-padding"
        style={{ maxWidth: "1200px", marginTop: "100px" }}
      >
        {/* PhotoGrid.js */}

        {/*<!-- Pagination -->*/}
        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              «
            </a>
            <a href="#" className="w3-bar-item w3-black w3-button">
              1
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              2
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              3
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              4
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              »
            </a>
          </div>
        </div>

        <hr id="about" />

        {/* introduceSection.js */}
        {/*<!-- About Section -->*/}
        <IntroduceSection />
        <hr />
        {/* Footer.js */}
        {/*<!-- Footer -->*/}
        <Footer />

        {/*<!-- End page content -->*/}
      </div>
    </div>
  );
}

export default App;
