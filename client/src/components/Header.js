import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#024731',
    color: 'white',
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const rightItemsStyle = {
    display: 'flex',
    gap: '20px',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
          Golf Scramble
        </a>
      </div>

      <nav>
        <ul style={navStyle}>
          <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</a></li>
          <li><a href="/players" style={{ color: 'white', textDecoration: 'none' }}>Players</a></li>
          <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>

      <div style={rightItemsStyle}>
        <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
        <a href="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</a>
      </div>
    </header>
  );
};

export default Header;
