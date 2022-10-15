import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [users, setData] = useState(data);
  console.log(users);

  return (
    <main>
      <section className="container ">
        <h2>{users.length} birthdays today</h2>

        {users.map((user) => {
          return <List key={user.id} data={user} />;
        })}
        <button className="btn" onClick={() => setData([])}>
          clear all
        </button>
      </section>
    </main>
  );
}
export default App;
