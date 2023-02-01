import React from "react";

const Jokes = () => {
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generator</h2>
        <div className="--line"></div>
        <h4>Joke id: 001</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
          hic!
        </p>
        <br />
        <button className="--btn --btn-primary">Generate Joke</button>
      </div>
    </section>
  );
};

export default Jokes;
