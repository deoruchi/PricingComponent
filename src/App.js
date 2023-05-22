import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);

  function changeTheme() {
    setTheme(!theme);
  }

  return (
    <div className={`body ${theme ? "bodyDark" : ""}`}>
      <button
        className={`shades ${theme ? "noshade" : ""}`}
        id="theme"
        onClick={changeTheme}
      ></button>

      {/* //  <!--changes the theme of the page--> */}

      {/* <!--intro heading--> */}
      <section
        className={`outside-card ${theme ? "outside-card-dark" : ""}`}
        id="outcard"
      >
        <h2 className="styleh">Simple, traffic-based pricing</h2>
        <p className="parastyle">
          <strong>Sign-up</strong> for our <strong>30-day</strong> trial.
          <br></br> No credit card required.
        </p>
      </section>
      <Card theme={theme} />
    </div>
  );
}

export default App;
