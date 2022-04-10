import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const image =
  "https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const setDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    setDarkMode(true);
  };

  const setLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    setDarkMode(false);
  };

  return (
    <div className="App">
      <div>
        <input
          onChange={darkMode ? setLight : setDark}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon">{<FaMoon />}</i>
          <i className="fas fa-sun">{<FaSun />}</i>
          <div className="ball"></div>
        </label>
      </div>
      <Card className="profile__card mt-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="profile__title">Card Title</Card.Title>
          <Card.Text className="profile__text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button
            className="profile__button"
            variant={darkMode ? "outline-light" : "outline-dark"}
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
