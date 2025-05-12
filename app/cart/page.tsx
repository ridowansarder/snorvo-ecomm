'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Product 1',
      price: 20,
      quantity: 2,
      image: '@/public/window.svg',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 35,
      quantity: 1,
      image: '/product2.jpg',
    },
  ]);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
          Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>Your cart is empty!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ${(item.price * item.quantity).toFixed(2)} |{' '}
                    <span className="text-gray-600 dark:text-gray-400">Quantity:</span>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="mx-3 w-16 px-2 py-1 border rounded-md text-center"
                    />
                  </p>
                </div>
                <Button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-700 text-white hover:bg-red-500 transition"
                >
                  Remove
                </Button>
              </div>
            ))}

            <div className="flex justify-between items-center bg-gray-200 dark:bg-gray-800 p-4 mt-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total</h3>
              <p className="text-xl font-bold text-gray-900 dark:text-white">${calculateTotal().toFixed(2)}</p>
            </div>

            <button className="w-full sm:w-auto mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
