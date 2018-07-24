import React from "react";
import { Link } from "react-router-dom";

import Layout from "../Layout/index";

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack! Hot Reloaded! A new start!</p>
      <p>
        <Link to="/dynamic">Navigate to Dynamic Page</Link>
      </p>
    </Layout>
  );
};

export default Home;
