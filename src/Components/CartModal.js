import React from 'react';

function CartModal({ cartItems, onClose, onRemoveFromCart }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-11/12 sm:w-2/3 lg:w-1/2 rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <button
          className="absolute top-4 right-4 text-gray-600 text-lg"
          onClick={onClose}
        >
          ✖
        </button>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center my-2">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CartModal;
