import React from 'react';
import { X, BookOpen } from 'lucide-react';

interface GlossaryModalProps {
  onClose: () => void;
}

const glossaryTerms = [
  { term: 'Actuarial Science', definition: 'The discipline that applies mathematical and statistical methods to assess risk in insurance and finance.' },
  { term: 'Aggregate Limit', definition: 'The maximum amount an insurance company will pay for all claims during a policy period.' },
  { term: 'Beneficiary', definition: 'The person or entity designated to receive insurance proceeds upon the occurrence of a covered event.' },
  { term: 'Claim', definition: 'A formal request to an insurance company asking for payment based on the terms of the policy.' },
  { term: 'Deductible', definition: 'The amount of money the insured must pay out-of-pocket before insurance coverage begins.' },
  { term: 'Exclusion', definition: 'Specific conditions or circumstances that are not covered by an insurance policy.' },
  { term: 'Grace Period', definition: 'A period after the premium due date during which the policy remains in force without penalty.' },
  { term: 'Indemnity', definition: 'The principle that insurance should restore the insured to the same financial position as before the loss.' },
  { term: 'Liability', definition: 'Legal responsibility for damages or injury to another person or their property.' },
  { term: 'Moral Hazard', definition: 'The tendency for insurance to reduce the incentive to guard against risk.' },
  { term: 'Peril', definition: 'A specific cause of loss insured against in a policy, such as fire, windstorm, or theft.' },
  { term: 'Premium', definition: 'The amount paid to an insurance company to purchase and maintain insurance coverage.' },
  { term: 'Reinsurance', definition: 'Insurance purchased by an insurance company to protect against large losses.' },
  { term: 'Risk', definition: 'The chance of loss or the person or thing insured under a policy.' },
  { term: 'Underwriting', definition: 'The process of evaluating and pricing insurance risk.' },
  { term: 'Waiver', definition: 'A voluntary relinquishment of a known right, often used in insurance claims.' }
];

export default function GlossaryModal({ onClose }: GlossaryModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Insurance Glossary</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Essential insurance terms and definitions to help you understand the knowledge base better.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <dt className="font-semibold text-gray-900 mb-2">{item.term}</dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{item.definition}</dd>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Need More Information?</h3>
            <p className="text-blue-800 text-sm">
              Each insurance policy card contains specific key terms related to that type of coverage. 
              Expand the "Key Terms" section in any policy card to see specialized definitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}