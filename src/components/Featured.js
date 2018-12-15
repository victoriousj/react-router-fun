import React from "react";

const Featured = ({ match }) => {
  const { name, lName, topic } = match.params;
  const fullName = `${name} ${lName}`.toUpperCase();

  return (
    <div className="main-content">
      <h2>Featured: {fullName} </h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
