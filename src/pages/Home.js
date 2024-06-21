import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to CARDINAL</h1>
      <Link to="/journal">Start Journaling</Link>
    </div>
  );
};

export default Home;
