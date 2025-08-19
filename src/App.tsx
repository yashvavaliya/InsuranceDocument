import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import FilterSidebar from './components/FilterSidebar';
import ComparisonTool from './components/ComparisonTool';
import GlossaryModal from './components/GlossaryModal';
import { insurancePolicies } from './data/insurancePolicies';
import { ArrowRightLeft, BookOpen, BarChart3 } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCoverage, setSelectedCoverage] = useState('All');
  const [showComparison, setShowComparison] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(insurancePolicies.map(policy => policy.category)));
    return cats.sort();
  }, []);

  const coverageTypes = useMemo(() => {
    const types = Array.from(new Set(insurancePolicies.map(policy => policy.coverage.split(',')[0].trim())));
    return types.sort();
  }, []);

  const filteredPolicies = useMemo(() => {
    return insurancePolicies.filter(policy => {
      const matchesSearch = policy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           policy.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           policy.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           policy.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           policy.keyTerms.some(t => t.term.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || policy.category === selectedCategory;
      const matchesCoverage = selectedCoverage === 'All' || policy.coverage.toLowerCase().includes(selectedCoverage.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesCoverage;
    });
  }, [searchTerm, selectedCategory, selectedCoverage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Stats and Action Buttons */}
        <div className="mb-8 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-800">{insurancePolicies.length}</div>
              <div className="text-sm text-gray-600">Insurance Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-800">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-800">{filteredPolicies.length}</div>
              <div className="text-sm text-gray-600">Showing</div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={() => setShowComparison(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowRightLeft className="h-4 w-4" />
              <span>Compare Policies</span>
            </button>
            <button
              onClick={() => setShowGlossary(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              <BookOpen className="h-4 w-4" />
              <span>Glossary</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <FilterSidebar 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              coverage={coverageTypes}
              selectedCoverage={selectedCoverage}
              setSelectedCoverage={setSelectedCoverage}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredPolicies.length === 0 ? (
              <div className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No policies found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {filteredPolicies.map((policy) => (
                  <CategoryCard key={policy.id} policy={policy} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showComparison && (
        <ComparisonTool 
          policies={insurancePolicies}
          onClose={() => setShowComparison(false)}
        />
      )}
      
      {showGlossary && (
        <GlossaryModal onClose={() => setShowGlossary(false)} />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Insurance Knowledge Base. Comprehensive research database for insurance automation systems.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;