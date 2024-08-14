import "./w3.css";
import "./font.css";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

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
        <div className="w3-container w3-padding-32 w3-center">
          <h3>About Me, The Food Man</h3>
          <br />
          <img
            src="https://www.w3schools.com/w3images/chef.jpg"
            alt="Me"
            className="w3-image"
            style={{ display: "block", margin: "auto" }}
            width="800"
            height="533"
          />
          <div className="w3-padding-32">
            <h4>
              <b>I am Who I Am!</b>
            </h4>
            <h6>
              <i>With Passion For Real, Good Food</i>
            </h6>
            <p>
              Just me, myself and I, exploring the universe of unknownment. I
              have a heart of love and an interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you. Praesent
              tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta
              lectus vitae, ultricies congue gravida diam non fringilla.
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
        <hr />

        {/* Footer.js */}
        {/*<!-- Footer -->*/}
        <footer className="w3-row-padding w3-padding-32">
          <div className="w3-third">
            <h3>FOOTER</h3>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <p>
              Powered by
              <a
                href="https://www.w3schools.com/w3css/default.asp"
                target="_blank"
              >
                w3.css
              </a>
            </p>
          </div>

          <div className="w3-third">
            <h3>BLOG POSTS</h3>
            <ul className="w3-ul w3-hoverable">
              <li className="w3-padding-16">
                <img
                  src="https://www.w3schools.com/w3images/workshop.jpg"
                  className="w3-left w3-margin-right"
                  style={{ width: "50px" }}
                />
                <span className="w3-large">Lorem</span>
                <br />
                <span>Sed mattis nunc</span>
              </li>
              <li className="w3-padding-16">
                <img
                  src="https://www.w3schools.com/w3images/gondol.jpg"
                  className="w3-left w3-margin-right"
                  style={{ width: "50px" }}
                />
                <span className="w3-large">Ipsum</span>
                <br />
                <span>Praes tinci sed</span>
              </li>
            </ul>
          </div>

          <div className="w3-third w3-serif">
            <h3>POPULAR TAGS</h3>
            <p>
              <span className="w3-tag w3-black w3-margin-bottom">Travel</span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                New York
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Dinner
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Salmon
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                France
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Drinks
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Ideas
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Flavors
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Cuisine
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Chicken
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Dressing
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Fried
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Fish
              </span>
              <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
                Duck
              </span>
            </p>
          </div>
        </footer>

        {/*<!-- End page content -->*/}
      </div>
    </div>
  );
}

export default App;
