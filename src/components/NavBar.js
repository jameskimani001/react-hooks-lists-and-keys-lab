
import React from 'react';

function NavBar() {
  const links = ['home', 'about', 'projects'];

  return (
    <nav>
      {links.map(function(link, index) {
        return (
          <a key={index} href={`#${link}`}>
            {link}
          </a>
        );
      })}
    </nav>
  );
}

export default NavBar;
