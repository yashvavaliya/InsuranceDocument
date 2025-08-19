import React from 'react';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  coverage: string[];
  selectedCoverage: string;
  setSelectedCoverage: (coverage: string) => void;
}

export default function FilterSidebar({ 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  coverage,
  selectedCoverage,
  setSelectedCoverage
}: FilterSidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="h-5 w-5 text-blue-600" />
        <h3 className="font-bold text-gray-900">Filters</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                selectedCategory === 'All' 
                  ? 'bg-blue-100 text-blue-800 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                  selectedCategory === category 
                    ? 'bg-blue-100 text-blue-800 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Coverage Type</h4>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCoverage('All')}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                selectedCoverage === 'All' 
                  ? 'bg-green-100 text-green-800 font-medium' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Coverage
            </button>
            {coverage.map((cov) => (
              <button
                key={cov}
                onClick={() => setSelectedCoverage(cov)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                  selectedCoverage === cov 
                    ? 'bg-green-100 text-green-800 font-medium' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cov}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}