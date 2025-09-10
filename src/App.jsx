import { Link } from "react-router-dom";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import { useContext } from "react";

function App() {
  const { lang } = useContext(LanguageContext);
  return (
    <main className="container">
      <div className="testBox">
        AAA
      </div>
      <section className="start">
        <img src="/public/skillMap(no text).svg" alt="icon" className="icon" />
        <div className="cards">
          <h2 className="title">
            Find your{" "}
            <span style={{ color: "var(--acent-color)" }}>skills</span>,
            <br /> build your{" "}
            <span style={{ color: "var(--acent-color)" }}>path</span>.
          </h2>
          <br />
          <p>
            Aq ragaca info unda iyos didi albatobit chven shesaxeb. Didad mec
            arvici ras weren xolme aq mara;)
          </p>
          <div className="buttonWrapper">
            <Link to="/login">
              <button className="loginButton">
                {lang === "EN" ? "Log In" : "შესვლა"}
              </button>
            </Link>
            <Link to="/registration">
              <button className="registButton">
                <span>{lang === "EN" ? "Sing Up" : "დარეგისტრირება"}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="sponsors">
        <h1>Our Partniors</h1>
        <div className="sponsorLogos">
          <img src="/public/Google.png" alt="google icon" />
          <img src="/public/Facebook.jpeg" alt="facebook icon" />
          <img src="/public/Instagram.jpeg" alt="instagram icon" />
        </div>
      </section>
    </main>
  );
}

export default App;
