import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setText([]);

    let amount = parseInt(count);
    if (count > data.length) {
      amount = data.length;
    }
    if (count < 0) {
      amount = 1;
    }

    setText(data.slice(0, amount));

    // for (let i = 0; i < count; i++) {
    //   setText((prev) => [...prev, data[i]]);
    // }
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handlesubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          tupe="number"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          id="amount"
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
