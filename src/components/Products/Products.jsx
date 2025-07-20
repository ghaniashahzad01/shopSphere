import React, { useState } from "react";
import Slider from "react-slick";
// Women
import Img1 from "../../assets/women/Ethnic_Wear.jpg";
import Img2 from "../../assets/women/jacket.jpeg";
import Img3 from "../../assets/women/boots.jpeg";
import Img4 from "../../assets/women/handbags.jpeg";
import Img5 from "../../assets/women/sandals.jpeg";
import Img7 from "../../assets/women/T-Shirt.jpeg";
import Img8 from "../../assets/women/Saree.jpeg";
import Img9 from "../../assets/women/Women_googles.jpg";
import Img10 from "../../assets/women/Women's_Western.jpeg";
import Img11 from "../../assets/women/watch.jpeg";

// Men
import Img12 from "../../assets/Men/denimJacket.jpeg";
import Img13 from "../../assets/Men/goggles.jpeg";
import Img14 from "../../assets/Men/hoodie.jpeg";
import Img15 from "../../assets/Men/jacket.jpeg"; 
import Img16 from "../../assets/Men/kurta.jpeg";
import Img17 from "../../assets/Men/shirt.jpeg";
import Img18 from "../../assets/Men/pants.jpeg";
import Img19 from "../../assets/Men/sportswear.jpeg";
import Img20 from "../../assets/Men/watch.jpeg";

// Accessories
import Img21 from "../../assets/Accessories/airpods.jpeg";
import Img22 from "../../assets/Accessories/speaker.jpeg";
import Img23 from "../../assets/Accessories/keyboard.jpeg";
import Img24 from "../../assets/Accessories/laptopstand.jpeg";
import Img25 from "../../assets/Accessories/smartwatch.jpeg";
import Img26 from "../../assets/Accessories/ringlight.jpeg";
import Img27 from "../../assets/Accessories/smartwatch.jpeg";
import Img28 from "../../assets/Accessories/usb.jpeg";
import Img29 from "../../assets/Accessories/wirelessspeaker.jpeg";
import Img30 from "../../assets/Accessories/selfiestick.jpeg";


import { FaStar } from "react-icons/fa6";



const generateProducts = () => {
  
  const ProductsData = [
    { id: 1, img: Img1, title: "Women's Ethnic Wear", rating: 4.9, color: "Beige", price: "1099", description: "Traditional attire perfect for festive occasions." },
    { id: 2, img: Img10, title: "Women's Western Dress", rating: 4.6, color: "Blue", price: "899", description: "Stylish and modern western dress." },
    { id: 3, img: Img9, title: "Stylish Goggles", rating: 4.7, color: "Golden", price: "599", description: "UV-protected goggles for daily use." },
    { id: 4, img: Img7, title: "Floral T-Shirt", rating: 4.5, color: "White", price: "499", description: "Comfortable t-shirt with floral print." },
    { id: 5, img: Img4, title: "Women's Handbag", rating: 4.8, color: "Brown", price: "1399", description: "Elegant handbag for daily carry." },
    { id: 6, img: Img3, title: "Ankle Boots", rating: 4.6, color: "Black", price: "1799", description: "Trendy ankle boots for all outfits." },
    { id: 7, img: Img2, title: "Women’s Jacket", rating: 4.4, color: "Brown", price: "2299", description: "Warm and stylish jacket." },
    { id: 8, img: Img11, title: "Women’s Watch", rating: 4.7, color: "Golden", price: "1499", description: "Elegant analog wristwatch." },
    { id: 9, img: Img8, title: "Chiffon Saree", rating: 4.9, color: "Blue", price: "1199", description: "Lightweight saree for casual wear." },
    { id: 10, img: Img5, title: "Women’s Sandals", rating: 4.3, color: "Black", price: "799", description: "Comfortable daily wear sandals." },
  
    { id: 11, img: Img17, title: "Men’s Casual Shirt", rating: 4.6, color: "Grey", price: "899", description: "Smart fit shirt for everyday use." },
    { id: 12, img: Img18, title: "Men’s Jeans", rating: 4.8, color: "Blue", price: "1299", description: "Classic denim jeans with stretch." },
    { id: 13, img: Img12, title: "Men’s Leather Jacket", rating: 4.5, color: "Black", price: "2499", description: "Bold look with leather styling." },
    { id: 14, img: Img14, title: "Printed Hoodie", rating: 4.4, color: "Skin", price: "1599", description: "Warm and trendy printed hoodie." },
    { id: 16, img: Img13, title: "Men’s Sunglasses", rating: 4.5, color: "Black", price: "899", description: "Polarized UV sunglasses." },
    { id: 17, img: Img20, title: "Men’s Watch", rating: 4.6, color: "Silver", price: "1699", description: "Elegant dial with metal strap." },
    { id: 18, img: Img16, title: "Men’s Kurta", rating: 4.3, color: "White", price: "999", description: "Festive ethnic wear." },
    { id: 19, img: Img19, title: "Men’s Sportswear", rating: 4.7, color: "Black", price: "1399", description: "Activewear for workouts." },
    { id: 20, img: Img15, title: "Denim Jacket", rating: 4.4, color: "Black", price: "2099", description: "Trendy outerwear for men." },
  
    { id: 21, img: Img21, title: "Bluetooth Earbuds", rating: 4.8, color: "Black", price: "2999", description: "High-quality wireless earbuds." },
    { id: 22, img: Img25, title: "Smartwatch", rating: 4.7, color: "Grey", price: "3999", description: "Track your fitness and stay updated." },
    { id: 23, img: Img22, title: "Gaming Mouse", rating: 4.5, color: "Black", price: "1099", description: "RGB lighting and responsive DPI." },
    { id: 24, img: Img23, title: "Mechanical Keyboard", rating: 4.6, color: "White", price: "2499", description: "Clicky mechanical keys with LED." },
    { id: 25, img: Img29, title: "Wireless Speaker", rating: 4.7, color: "Red", price: "1599", description: "Portable sound with deep bass." },
    { id: 26, img: Img24, title: "Laptop Stand", rating: 4.4, color: "Silver", price: "799", description: "Ergonomic and foldable stand." },
    { id: 27, img: Img28, title: "USB-C Hub", rating: 4.3, color: "Grey", price: "1299", description: "Multi-port adapter for USB-C devices." },
    { id: 28, img: Img26, title: "Ring Light", rating: 4.6, color: "White", price: "1199", description: "Perfect lighting for video calls." },
    { id: 29, img: Img30, title: "Tripod Stand", rating: 4.5, color: "Black", price: "899", description: "Stable stand for camera or phone." },
    { id: 30, img: Img27, title: "Wireless Charger", rating: 4.7, color: "Black", price: "1399", description: "Fast charging pad for phones." }
  ];
  

  return ProductsData;
};

const ProductsData = generateProducts();

const Products = () => {
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  };

  return (
    <div id="products" className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Discover trending fashion and electronics in one place.
          </p>
        </div>

        <Slider {...settings}>
          {ProductsData.map((item) => (
            <div key={item.id} className="p-4">
              <div
                onClick={() => {
                  setSelected(item);
                  setQuantity(1);
                }}
                className="space-y-3 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[220px] w-[150px] object-cover rounded-md mx-auto"
                />
                <div className="text-center">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <div className="flex justify-center items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white dark:bg-slate-800 text-black dark:text-white p-6 rounded-lg w-full max-w-lg">
              <button
                onClick={() => setSelected(null)}
                className="text-red-500 font-bold float-right"
              >
                ✕
              </button>
              <div className="flex gap-4 mt-4">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-40 h-40 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-bold mb-2">{selected.title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {selected.description}
                  </p>
                  <p className="font-semibold text-lg text-primary mb-2">
                    ₹{selected.price}
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <span>Qty:</span>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2 bg-gray-300 rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        const newItem = { ...selected, quantity };
                        console.log("🛒 Added to Cart:", newItem);
                        alert("Added to cart successfully!");
                      }}
                      className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => {
                        alert(`Proceeding to buy: ${selected.title} x ${quantity}`);
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded hover:opacity-90"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;

