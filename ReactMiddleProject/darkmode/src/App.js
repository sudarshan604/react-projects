import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center"></div>
        <h1>overreacted</h1>
        <button className="btn" onClick={toggleTheme}>
          toggle
        </button>
      </nav>

      <sectin className="article">
        {data.map((dat) => {
          return <Article key={dat.id} {...dat}></Article>;
        })}
      </sectin>
    </main>
  );
}

export default App;
