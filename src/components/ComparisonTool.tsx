import React, { useState } from 'react';
import { ArrowRightLeft, X } from 'lucide-react';
import { InsurancePolicy } from './CategoryCard';

interface ComparisonToolProps {
  policies: InsurancePolicy[];
  onClose: () => void;
}

export default function ComparisonTool({ policies, onClose }: ComparisonToolProps) {
  const [selectedPolicies, setSelectedPolicies] = useState<InsurancePolicy[]>([]);

  const addPolicyToComparison = (policy: InsurancePolicy) => {
    if (selectedPolicies.length < 3 && !selectedPolicies.find(p => p.id === policy.id)) {
      setSelectedPolicies([...selectedPolicies, policy]);
    }
  };

  const removePolicyFromComparison = (policyId: string) => {
    setSelectedPolicies(selectedPolicies.filter(p => p.id !== policyId));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ArrowRightLeft className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Insurance Policy Comparison</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {selectedPolicies.length === 0 ? (
            <div>
              <p className="text-gray-600 mb-6">Select up to 3 policies to compare their features, benefits, and terms.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {policies.map((policy) => (
                  <button
                    key={policy.id}
                    onClick={() => addPolicyToComparison(policy)}
                    className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{policy.icon === 'car' ? '🚗' : policy.icon === 'heart' ? '❤️' : '🛡️'}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{policy.name}</h3>
                        <p className="text-sm text-gray-600">{policy.category}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  Comparing {selectedPolicies.length} polic{selectedPolicies.length === 1 ? 'y' : 'ies'} 
                  {selectedPolicies.length < 3 && ' (Select more to compare)'}
                </p>
                <button
                  onClick={() => setSelectedPolicies([])}
                  className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>

              {selectedPolicies.length < 3 && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 font-medium mb-3">Add more policies to compare:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {policies
                      .filter(p => !selectedPolicies.find(sp => sp.id === p.id))
                      .slice(0, 6)
                      .map((policy) => (
                        <button
                          key={policy.id}
                          onClick={() => addPolicyToComparison(policy)}
                          className="p-2 bg-white border border-blue-200 rounded-lg hover:border-blue-500 text-left text-sm"
                        >
                          {policy.name}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Comparison Criteria</th>
                      {selectedPolicies.map((policy) => (
                        <th key={policy.id} className="border border-gray-300 p-3 text-left">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900">{policy.name}</h3>
                              <p className="text-sm text-gray-600">{policy.category}</p>
                            </div>
                            <button
                              onClick={() => removePolicyFromComparison(policy.id)}
                              className="p-1 hover:bg-gray-200 rounded transition-colors duration-200"
                            >
                              <X className="h-4 w-4 text-gray-500" />
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Coverage</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">{policy.coverage}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Premium Range</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">{policy.premium}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Key Features</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {policy.features.slice(0, 5).map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                            {policy.features.length > 5 && (
                              <li className="text-gray-500">... and {policy.features.length - 5} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Main Benefits</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {policy.benefits.slice(0, 4).map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                            {policy.benefits.length > 4 && (
                              <li className="text-gray-500">... and {policy.benefits.length - 4} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Eligibility Requirements</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {policy.eligibility.slice(0, 3).map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                            {policy.eligibility.length > 3 && (
                              <li className="text-gray-500">... and {policy.eligibility.length - 3} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Key Exclusions</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {policy.exclusions.slice(0, 3).map((exclusion, idx) => (
                              <li key={idx}>{exclusion}</li>
                            ))}
                            {policy.exclusions.length > 3 && (
                              <li className="text-gray-500">... and {policy.exclusions.length - 3} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium bg-gray-50">Required Documents</td>
                      {selectedPolicies.map((policy) => (
                        <td key={policy.id} className="border border-gray-300 p-3">
                          <ul className="list-disc list-inside text-sm space-y-1">
                            {policy.documentsRequired.slice(0, 4).map((doc, idx) => (
                              <li key={idx}>{doc}</li>
                            ))}
                            {policy.documentsRequired.length > 4 && (
                              <li className="text-gray-500">... and {policy.documentsRequired.length - 4} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}