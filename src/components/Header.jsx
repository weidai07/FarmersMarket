import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmer's Market</h1>
      <Link to="/">Home</Link> | <Link to="/newmarketscheduleform">Create Ticket</Link>
    </div>
  );
}

export default Header;