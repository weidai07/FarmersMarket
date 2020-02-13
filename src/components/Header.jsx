import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var style = {
    margin: '0',
    padding: '0'
  };
  return (
    <div>
      <h1 style={style}>Farmer's Market</h1>
      <Link to="/">Home</Link> | <Link to="/newmarketscheduleform">Create Ticket</Link>
    </div>
  );
}

export default Header;