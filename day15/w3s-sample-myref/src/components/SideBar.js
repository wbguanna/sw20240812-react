export default () => {
  return (
    <nav
      className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left"
      style={{
        display: "none",
        zIndex: "2",
        width: "40%",
        minWidth: "300px",
      }}
      id="mySidebar"
    >
      <a
        href="javascript:void(0)"
        onclick="w3_close()"
        className="w3-bar-item w3-button"
      >
        Close Menu
      </a>
      <a href="#food" onclick="w3_close()" className="w3-bar-item w3-button">
        Food
      </a>
      <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">
        About
      </a>
    </nav>
  );
};
