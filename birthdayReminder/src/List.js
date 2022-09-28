import React from "react";

const List = ({ data }) => {
  console.log(data);
  return (
    <>
      <section className="person">
        <img src={data.image} alt={data.name} />
        <div>
          <h4>{data.name}</h4>
          <h5>{data.age}</h5>
        </div>
      </section>
    </>
  );
};

export default List;
