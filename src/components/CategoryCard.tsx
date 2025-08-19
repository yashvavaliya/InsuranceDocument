import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Users, Shield, AlertTriangle, BookOpen, Folder } from 'lucide-react';

export interface InsurancePolicy {
  id: string;
  name: string;
  category: string;
  icon: string;
  shortDescription: string;
  features: string[];
  benefits: string[];
  eligibility: string[];
  exclusions: string[];
  keyTerms: { term: string; definition: string }[];
  documentsRequired: string[];
  coverage: string;
  premium: string;
  claimProcess: string[];
}

interface CategoryCardProps {
  policy: InsurancePolicy;
}

const iconMap = {
  car: '🚗',
  plane: '✈️',
  heart: '❤️',
  user: '👤',
  building: '🏢',
  home: '🏠',
  ship: '🚢',
  briefcase: '💼',
  shield: '🛡️',
  factory: '🏭',
  travel: '🌍',
  umbrella: '☂️',
  pet: '🐕',
  phone: '📱',
  farm: '🚜'
};

export default function CategoryCard({ policy }: CategoryCardProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    { key: 'features', title: 'Features', icon: <Shield className="h-4 w-4" />, data: policy.features },
    { key: 'benefits', title: 'Benefits', icon: <Users className="h-4 w-4" />, data: policy.benefits },
    { key: 'eligibility', title: 'Eligibility', icon: <FileText className="h-4 w-4" />, data: policy.eligibility },
    { key: 'exclusions', title: 'Exclusions', icon: <AlertTriangle className="h-4 w-4" />, data: policy.exclusions },
    { key: 'documents', title: 'Required Documents', icon: <Folder className="h-4 w-4" />, data: policy.documentsRequired }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-3xl">{iconMap[policy.icon as keyof typeof iconMap] || '🛡️'}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{policy.name}</h3>
            <p className="text-sm text-blue-600 font-medium">{policy.category}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{policy.shortDescription}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="font-semibold text-blue-800">Coverage</p>
            <p className="text-blue-600">{policy.coverage}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="font-semibold text-green-800">Premium Range</p>
            <p className="text-green-600">{policy.premium}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="font-semibold text-purple-800">Category</p>
            <p className="text-purple-600">{policy.category}</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {sections.map((section) => (
          <div key={section.key} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                {section.icon}
                <span className="font-semibold text-gray-900">{section.title}</span>
                <span className="text-sm text-gray-500">({section.data.length} items)</span>
              </div>
              {expandedSection === section.key ? 
                <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                <ChevronDown className="h-5 w-5 text-gray-400" />
              }
            </button>
            
            {expandedSection === section.key && (
              <div className="px-4 pb-4">
                <ul className="space-y-2">
                  {section.data.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

        {policy.keyTerms.length > 0 && (
          <div className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleSection('terms')}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span className="font-semibold text-gray-900">Key Terms</span>
                <span className="text-sm text-gray-500">({policy.keyTerms.length} terms)</span>
              </div>
              {expandedSection === 'terms' ? 
                <ChevronUp className="h-5 w-5 text-gray-400" /> : 
                <ChevronDown className="h-5 w-5 text-gray-400" />
              }
            </button>
            
            {expandedSection === 'terms' && (
              <div className="px-4 pb-4 space-y-3">
                {policy.keyTerms.map((term, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <dt className="font-semibold text-gray-900 mb-1">{term.term}</dt>
                    <dd className="text-gray-700 text-sm">{term.definition}</dd>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Claim Process</h4>
          <ol className="space-y-1 text-sm text-yellow-700">
            {policy.claimProcess.map((step, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[24px] text-center">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}