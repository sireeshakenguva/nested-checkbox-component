import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('500g');

  const images = [
    'https://images.pexels.com/photos/7078044/pexels-photo-7078044.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4109744/pexels-photo-4109744.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/5946075/pexels-photo-5946075.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6824464/pexels-photo-6824464.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const sizes = [
    { size: '250g', price: 24.99, originalPrice: 29.99 },
    { size: '500g', price: 45.99, originalPrice: 55.99 },
    { size: '1kg', price: 89.99, originalPrice: 109.99 }
  ];

  const relatedProducts = [
    {
      id: 1,
      name: 'Royal Jelly Capsules',
      price: 34.99,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Propolis Extract',
      price: 28.99,
      image: 'https://images.pexels.com/photos/5946077/pexels-photo-5946077.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Bee Pollen Granules',
      price: 22.99,
      image: 'https://images.pexels.com/photos/4041387/pexels-photo-4041387.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Raw Wildflower Honey',
      price: 18.99,
      image: 'https://images.pexels.com/photos/7078045/pexels-photo-7078045.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 4.9
    }
  ];

  const selectedSizeData = sizes.find(s => s.size === selectedSize);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm text-gray-600">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Health & Wellness</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Manuka Honey</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={images[selectedImage]}
              alt="Manuka Honey"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-amber-500 ring-2 ring-amber-200'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Manuka Honey
            </h1>
            <p className="text-lg text-gray-600 mb-4">UMF 24+ | MGO 1122+</p>
            
            {/* Reviews */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">(124 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-4">
            <div className="flex items-baseline space-x-3">
              <span className="text-3xl font-bold text-gray-900">
                ${selectedSizeData?.price}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ${selectedSizeData?.originalPrice}
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                20% OFF
              </span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Size</h3>
            <div className="grid grid-cols-3 gap-3">
              {sizes.map(({ size, price }) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-3 rounded-lg border-2 text-center transition-all ${
                    selectedSize === size
                      ? 'border-amber-500 bg-amber-50 text-amber-800'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{size}</div>
                  <div className="text-sm text-gray-600">${price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                -
              </button>
              <span className="text-lg font-medium w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart - ${(selectedSizeData?.price * quantity).toFixed(2)}</span>
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Save</span>
              </button>
              <button className="flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Free Shipping</div>
                <div className="text-sm text-gray-600">On orders over $50</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Authentic</div>
                <div className="text-sm text-gray-600">UMF certified</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <RotateCcw className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">30-Day Returns</div>
                <div className="text-sm text-gray-600">Money back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our premium Manuka Honey is sourced directly from the pristine wilderness of New Zealand. 
                  With a UMF rating of 24+ and MGO level of 1122+, this honey represents the highest grade 
                  of therapeutic quality available.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Manuka honey is renowned for its unique antibacterial properties, making it an excellent 
                  natural remedy for various health conditions. Each jar is independently tested and certified 
                  to ensure authenticity and potency.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• UMF 24+ certified for maximum potency</li>
                  <li>• Raw and unpasteurized</li>
                  <li>• Sustainably harvested from wild Manuka trees</li>
                  <li>• Third-party tested for purity</li>
                  <li>• 2-year shelf life when stored properly</li>
                </ul>
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {[
                  { name: 'Sarah M.', rating: 5, review: 'Absolutely love this honey! The quality is exceptional and you can really taste the difference.' },
                  { name: 'Michael R.', rating: 5, review: 'Been using this for months now. Great for my morning tea and seems to help with my throat.' },
                  { name: 'Lisa K.', rating: 4, review: 'High quality product, though quite expensive. Worth it for the health benefits.' }
                ].map((review, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{review.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{review.review}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nutritional Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Nutritional Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Serving Size</span>
                  <span className="font-medium">1 tsp (7g)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Carbs</span>
                  <span className="font-medium">6.3g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sugars</span>
                  <span className="font-medium">6.1g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">MGO Level</span>
                  <span className="font-medium">1122+</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
              <h3 className="text-lg font-bold text-amber-900 mb-2">Why Choose UMF 24+?</h3>
              <p className="text-amber-800 text-sm">
                UMF 24+ represents the highest therapeutic grade of Manuka honey, 
                offering maximum antibacterial benefits and potency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100 rounded-t-xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;