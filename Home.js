import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link className="lista" to="/lista">
        <h2>Cryptos</h2>
        <p>Todas elas</p>
      </Link>
      <Link className="charts" to="/charts">
        <h2>graficos</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          delectus veniam incidunt odio voluptatum esse reiciendis, in ut optio
          beatae libero. Officiis velit maxime soluta, sint magni explicabo
          quibusdam quos?
        </p>
      </Link>
    </div>
  );
};

export default Home;