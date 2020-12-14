import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      Shows Available:
      <Link to="/shows/6771/the-powerpuff-girls">The Powerpuff girls</Link>
    </div>
  );
};

export default HomePage;
