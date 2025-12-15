import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Monitor, 
  ShoppingCart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Dell2Image from '@/assets/images/Dell2.jpg'; // Importing local asset

const TechProducts = () => {
  const [activeCategory, setActiveCategory] = useState('Computers');

  const productCategories = [
    {
      icon: Laptop,
      name: 'Computers',
      products: [
        { 
          name: 'DELL 2-IN-1 LATITUDE', 
          price: '459.000, 00 AOA', 
          description: 'Core i5, 10th Generation, SSD 256GB, RAM 8GB, Processor 1.70 - 2.21GHz',
          image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
          name: 'HP ELITEBOOK G6', 
          price: '$379.000, 00 AOA', 
          description: 'Core i5, 8th Generation, RAM 8GB, Processor 2.0GHz',
          image: 'src/assets/images/HP1.jpg'
        },
        { 
          name: 'Hp Pavilion Gaming Ryzen 5', 
          price: '$729.000, 00 AOA', 
          description: 'AMD Ryzen 5 4600H = Core i7 10th i7-10750H, NVIDIA GeForce GTX 1650Ti 4GB, SSD NVMe 512GB',
          image:'src/assets/images/gammer.jpg'
        }
      ]
    },
    {
      icon: Smartphone,
      name: 'Smartphones',
      products: [
        { 
          name: 'iPhone X', 
          price: '190.000, 00 AOA', 
          description: '128GB, Face Id, Cameras ON, True tone, version IOS 17',
          image: 'src/assets/images/iX.jpg'
        },
        { 
          name: 'iPhone 11', 
          price: '275.000, 00 AOA', 
          description: '128GB, Face Id, Cameras ON, True tone, version IOS 26',
          image: 'src/assets/images/i11.jpg'
        },
        { 
          name: 'iPhone 12', 
          price: '320.000, 00 AOA', 
          description: '128GB, Face Id, Cameras ON, True tone, version IOS 26',
          image: 'src/assets/images/i12.jpg'
        }
      ]
    },
    /*{ 
      icon: Monitor,
      name: 'Business & Office Tech',
      products: [
        { 
          name: '4K Professional Monitor', 
          price: '$599', 
          description: 'Ultra-high resolution display',
          image: 'https://images.unsplash.com/photo-1615228402326-7adf9a257f2b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
          name: 'Wireless Presentation Hub', 
          price: '$349', 
          description: 'Seamless collaboration tool',
          image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        { 
          name: 'Ergonomic Desk Setup', 
          price: '$799', 
          description: 'Complete workstation solution',
          image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ]
    }*/
  ];

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto pt-24 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#2980B9]">
          Optimized Tech for Daily Use
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Carefully curated technology solutions designed to enhance productivity, creativity, and lifestyle.
        </p>
      </section>

      {/* Product Categories */}
      <section className="container mx-auto py-16">
        <div className="flex justify-center space-x-8 mb-12">
          {productCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                ${activeCategory === category.name 
                  ? 'bg-[#2980B9] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }
              `}
            >
              <category.icon size={24} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {productCategories
            .find(cat => cat.name === activeCategory)
            ?.products.map((product) => (
              <div 
                key={product.name} 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute top-4 right-4 bg-[#2980B9] text-white p-2 rounded-full">
                    <ShoppingCart size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#2980B9]">
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-3xl font-bold mb-6 text-white">
                    {product.price}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#2980B9] text-[#2980B9] hover:bg-[#2980B9] hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechProducts;