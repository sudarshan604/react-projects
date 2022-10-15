import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {show ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setShow(!show)}>
            {show ? "show less" : "show more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
