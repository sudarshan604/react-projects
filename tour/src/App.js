import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTourData = tours.filter((data) => data.id !== id);
    setTours(newTourData);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tourinfo = await response.json();
      setLoading(false);
      setTours(tourinfo);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tour left</h2>
          <buton className="btn" onClick={fetchTours}>
            refresh
          </buton>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
