import React from 'react';

function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="navbar bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">React Store</h1>
      <button
        className="bg-blue-600 px-4 py-2 rounded text-white"
        onClick={onCartClick}
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}

export default Navbar;
