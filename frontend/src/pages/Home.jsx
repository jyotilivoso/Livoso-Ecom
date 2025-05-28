import React from 'react';
import { ShoppingCart, Search, Heart, User, Menu } from 'react-feather';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 79.99,
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Denim Jacket',
      price: 59.99,
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Backpack',
      price: 49.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Sunglasses',
      price: 129.99,
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', count: 120 },
    { name: 'Clothing', icon: '👕', count: 85 },
    { name: 'Footwear', icon: '👟', count: 62 },
    { name: 'Accessories', icon: '🕶️', count: 45 },
    { name: 'Home & Living', icon: '🏠', count: 93 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
     

      {/* Hero Section */}
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Summer Collection 2023
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Discover our new arrivals with up to 50% discount. Limited time offer!
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block bg-white py-3 px-8 border border-transparent rounded-md text-base font-medium text-indigo-700 hover:bg-indigo-50"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none flex items-center justify-center text-5xl">
                {category.icon}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {category.name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{category.count}+</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Featured Products</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="inline-block bg-indigo-600 py-3 px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700"
            >
              View All Products
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Stay updated with our latest products and exclusive offers.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              We care about your data. Read our{' '}
              <a href="#" className="text-white font-medium underline">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default App;