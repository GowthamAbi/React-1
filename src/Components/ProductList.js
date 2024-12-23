import React from 'react';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded shadow p-4 flex flex-col items-center"
        >
          <img src={product.image} alt={product.title} className="h-40 object-cover" />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
