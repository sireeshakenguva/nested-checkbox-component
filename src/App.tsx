import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import CheckboxDemo from './components/CheckboxDemo';
import { ShoppingCart } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'product' | 'checkbox'>('product');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-gray-900">Demo Store</h1>
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => setCurrentView('product')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'product'
                      ? 'bg-amber-100 text-amber-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Product Page
                </button>
                <button
                  onClick={() => setCurrentView('checkbox')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentView === 'checkbox'
                      ? 'bg-amber-100 text-amber-800'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Checkbox Demo
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b">
        <div className="flex">
          <button
            onClick={() => setCurrentView('product')}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              currentView === 'product'
                ? 'bg-amber-100 text-amber-800 border-b-2 border-amber-500'
                : 'text-gray-600'
            }`}
          >
            Product Page
          </button>
          <button
            onClick={() => setCurrentView('checkbox')}
            className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
              currentView === 'checkbox'
                ? 'bg-amber-100 text-amber-800 border-b-2 border-amber-500'
                : 'text-gray-600'
            }`}
          >
            Checkbox Demo
          </button>
        </div>
      </div>

      {/* Content */}
      <main>
        {currentView === 'product' ? <ProductPage /> : <CheckboxDemo />}
      </main>
    </div>
  );
}

export default App;