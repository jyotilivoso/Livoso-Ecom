import React, { useContext, useEffect, useRef, useState } from "react";
import fetchCategoryWiseProduct from "../helper/fetchCategoryWiseProduct";
import displayINRCurrency from "../helper/displayCurrency";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import addToCart from "../helper/addToCart";
import Context from "../context";

const HorizontalCardProduct = ({ category, heading }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingList = new Array(8).fill(null);
  const scrollElement = useRef();
  const { featchUserAddtoCart } = useContext(Context);

  // Sample hardware product images (replace with your actual images)
  const hardwareImages = [
    "https://m.media-amazon.com/images/I/61lJ3xlQX2L._AC_UF1000,1000_QL80_.jpg", // Drill
    "https://5.imimg.com/data5/SELLER/Default/2021/12/QO/YD/JA/3033603/black-decker-power-tools.jpg", // Power Tools
    "https://m.media-amazon.com/images/I/71yH7Z+-rVL._AC_UF1000,1000_QL80_.jpg", // Tool Kit
    "https://m.media-amazon.com/images/I/71Y1S1m-QAL._AC_UF1000,1000_QL80_.jpg", // Wrench Set
    "https://m.media-amazon.com/images/I/71Y1S1m-QAL._AC_UF1000,1000_QL80_.jpg", // Screwdriver Set
    "https://m.media-amazon.com/images/I/61lJ3xlQX2L._AC_UF1000,1000_QL80_.jpg", // Hammer
    "https://5.imimg.com/data5/SELLER/Default/2021/12/QO/YD/JA/3033603/black-decker-power-tools.jpg", // Saw
    "https://m.media-amazon.com/images/I/71yH7Z+-rVL._AC_UF1000,1000_QL80_.jpg"  // Measuring Tape
  ];

  const handleAddToCart = async (e, id) => {
    await addToCart(e, id);
    featchUserAddtoCart();
  };

  const fetchData = async () => {
    setLoading(true);
    const categoryProduct = await fetchCategoryWiseProduct(category);
    setData(categoryProduct?.data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const scrollRight = () => {
    scrollElement.current.scrollLeft += 300;
  };

  const scrollLeft = () => {
    scrollElement.current.scrollLeft -= 300;
  };

  return (
    <div className="container mx-auto px-4 my-8 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-600 pb-2 inline-block">
        {heading}
      </h2>

      <div className="relative">
        <button 
          className="bg-white shadow-lg rounded-full p-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-red-600 hover:bg-red-100 transition-all hidden md:block"
          onClick={scrollLeft}
        >
          <FaAngleLeft size={24} />
        </button>
        
        <div 
          className="flex items-center gap-4 overflow-x-auto scrollbar-none transition-all scroll-smooth py-2"
          ref={scrollElement}
        >
          {loading ? (
            loadingList.map((_, index) => (
              <div key={index} className="w-64 min-w-[256px] h-48 bg-white rounded-lg shadow-md flex flex-col animate-pulse">
                <div className="bg-gray-200 h-32 rounded-t-lg"></div>
                <div className="p-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            data.map((product, index) => (
              <div 
                key={product._id} 
                className="w-64 min-w-[256px] h-48 bg-white rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <Link 
                  to={`product/${product._id}`} 
                  className="h-32 bg-gray-100 rounded-t-lg flex items-center justify-center p-4"
                >
                  <img 
                    src={hardwareImages[index % hardwareImages.length]} 
                    alt={product.productName} 
                    className="h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-3 flex-grow flex flex-col">
                  <Link to={`product/${product._id}`} className="mb-1">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 hover:text-red-600">
                      {product.productName}
                    </h3>
                    <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                  </Link>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-red-600 font-bold text-sm">
                        {displayINRCurrency(product.sellingPrice)}
                      </span>
                      {product.price > product.sellingPrice && (
                        <span className="text-gray-400 text-xs line-through ml-2">
                          {displayINRCurrency(product.price)}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => handleAddToCart(e, product._id)}
                      className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 rounded-full transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <button 
          className="bg-white shadow-lg rounded-full p-2 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-red-600 hover:bg-red-100 transition-all hidden md:block"
          onClick={scrollRight}
        >
          <FaAngleRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HorizontalCardProduct;