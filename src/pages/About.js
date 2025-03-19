import React from "react";
import {Link} from "react-router-dom"

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>This is a simple To-Do List app built using React. </p>
      <p>For more info on routing, please see the offical docs below.</p>
      <Link to="https://reactrouter.com">ReactRouter.com</Link>
    </div>
  );
};

export default About;
