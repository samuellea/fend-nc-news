import React from 'react';
import { Link } from "@reach/router";


const Header = () => {
  return (
    <header className='header'>
      <Link to={`/`} style={{ textDecoration: 'none', color: '#242424' }}>
    <h1><span style={{color: 'darkred'}}>Ṋ</span>ORTHCODERS 🏠<br/><span style={{paddingLeft: '7%'}}><span style={{color: 'darkred'}}>&lt;</span>NEWS<span style={{color: 'darkred'}}>/&gt;</span></span></h1>
      </Link>
  </header>
  );
};

export default Header;