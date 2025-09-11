import { Link } from "react-router-dom";
import "./App.css";
import { LanguageContext } from "./context/LanguageContext";
import { useContext, useState } from "react";
import Chat from "./components/Chat/Chat";

function App() {
  const { lang } = useContext(LanguageContext);
  const { chat, SetChat } = useState(false);

  const toggleChat = () => {
    SetChat(!chat);
    console.log(chat);
  };

  return (
    <main className="container">
      <div className="unregistered">
        <section className="start">
          <img
            src="/public/skillMap(no text).svg"
            alt="icon"
            className="icon"
          />
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
            <img src="/Google.png" alt="google icon" />
            <img src="/Facebook.jpeg" alt="facebook icon" />
            <img src="/Instagram.jpeg" alt="instagram icon" />
          </div>
        </section>
      </div>
      <div className={`registered ${chat ? "active" : ""}`}>
        <div className="recommendations"></div>
        <div className={`AIIcon ${chat ? "active" : ""}`} onClick={toggleChat}>
          {/* <img src="/public/Google.png" alt="AI Icon" /> */}
        </div>
        {/* <Chat/> */}
      </div>
    </main>
  );
}

export default App;
