import { InsurancePolicy } from '../components/CategoryCard';

export const insurancePolicies: InsurancePolicy[] = [
  {
    id: 'motor',
    name: 'Motor Insurance',
    category: 'Personal Lines',
    icon: 'car',
    shortDescription: 'Comprehensive protection for vehicles against accidents, theft, and third-party liabilities.',
    coverage: 'Vehicle damage, Third-party liability, Personal injury',
    premium: '$300-$2,000 annually',
    features: [
      'Third-party liability coverage',
      'Comprehensive damage protection',
      'Personal accident coverage',
      'Roadside assistance',
      'No-claim bonus',
      'Zero depreciation coverage',
      'Engine protection',
      'Key replacement coverage'
    ],
    benefits: [
      'Financial protection against accidents',
      'Legal compliance with mandatory insurance',
      'Peace of mind while driving',
      'Coverage for medical expenses',
      'Vehicle repair/replacement costs',
      'Third-party damage compensation',
      'Roadside emergency support'
    ],
    eligibility: [
      'Valid driving license holder',
      'Vehicle registration documents',
      'Age between 18-70 years',
      'Clean driving record preferred',
      'Vehicle fitness certificate',
      'Previous insurance history (for renewals)'
    ],
    exclusions: [
      'Driving under influence of alcohol/drugs',
      'Racing or speed testing',
      'War and nuclear risks',
      'Consequential losses',
      'Mechanical or electrical breakdown',
      'Normal wear and tear',
      'Driving without valid license'
    ],
    keyTerms: [
      { term: 'Deductible', definition: 'Amount paid out of pocket before insurance coverage begins' },
      { term: 'No-Claim Bonus', definition: 'Discount on premium for claim-free years' },
      { term: 'IDV', definition: 'Insured Declared Value - maximum sum assured for vehicle' },
      { term: 'Third Party', definition: 'Person other than policyholder and insurer' }
    ],
    documentsRequired: [
      'Driving license',
      'Vehicle registration certificate',
      'Previous insurance policy (for renewal)',
      'Pollution Under Control (PUC) certificate',
      'Vehicle fitness certificate',
      'Identity proof',
      'Address proof'
    ],
    claimProcess: [
      'Immediate notification to insurer',
      'File FIR if required',
      'Submit claim form with documents',
      'Vehicle inspection by surveyor',
      'Repair estimate approval',
      'Settlement or reimbursement'
    ]
  },
  {
    id: 'health',
    name: 'Health Insurance',
    category: 'Personal Lines',
    icon: 'heart',
    shortDescription: 'Medical coverage for hospitalization, treatments, and healthcare expenses.',
    coverage: 'Hospitalization, Surgery, Pre/Post hospitalization, Daycare',
    premium: '$200-$1,500 annually',
    features: [
      'Hospitalization coverage',
      'Daycare procedures',
      'Pre and post hospitalization expenses',
      'Ambulance charges',
      'Cashless treatment facility',
      'Health check-up coverage',
      'Alternative treatment coverage',
      'Maternity benefits'
    ],
    benefits: [
      'Financial protection against medical expenses',
      'Access to quality healthcare',
      'Cashless treatment at network hospitals',
      'Tax benefits under Section 80D',
      'Coverage for entire family',
      'No medical examination for renewals',
      'Worldwide emergency coverage'
    ],
    eligibility: [
      'Age: Newborn to 65 years (entry)',
      'Medical examination if required',
      'Declaration of pre-existing conditions',
      'No adverse health history',
      'Regular health maintenance'
    ],
    exclusions: [
      'Pre-existing conditions (initial waiting period)',
      'Cosmetic treatments',
      'Dental treatments (unless accidental)',
      'Pregnancy-related expenses (waiting period)',
      'Self-inflicted injuries',
      'War and nuclear risks',
      'Alternative treatments (unless covered)'
    ],
    keyTerms: [
      { term: 'Co-payment', definition: 'Percentage of claim amount paid by policyholder' },
      { term: 'Waiting Period', definition: 'Time before certain benefits become effective' },
      { term: 'Room Rent Limit', definition: 'Maximum daily hospital room charges covered' },
      { term: 'Network Hospital', definition: 'Hospitals with cashless treatment facility' }
    ],
    documentsRequired: [
      'Proposal form',
      'Medical examination reports',
      'Identity proof',
      'Address proof',
      'Passport size photographs',
      'Previous health insurance policy',
      'Medical history documents'
    ],
    claimProcess: [
      'Hospitalization notification within 24 hours',
      'Submit pre-authorization form',
      'Treatment at network/non-network hospital',
      'Submit discharge summary and bills',
      'Claim processing and verification',
      'Settlement within 30 days'
    ]
  },
  {
    id: 'life',
    name: 'Life Insurance',
    category: 'Personal Lines',
    icon: 'user',
    shortDescription: 'Financial security for beneficiaries in case of policyholder\'s death.',
    coverage: 'Death benefit, Terminal illness, Accidental death',
    premium: '$100-$5,000 annually',
    features: [
      'Death benefit coverage',
      'Terminal illness benefit',
      'Accidental death benefit',
      'Permanent disability coverage',
      'Premium waiver benefit',
      'Maturity benefit (endowment)',
      'Loan facility against policy',
      'Tax benefits'
    ],
    benefits: [
      'Financial security for family',
      'Income replacement',
      'Debt clearance provision',
      'Children\'s education fund',
      'Retirement planning tool',
      'Tax savings under Section 80C',
      'Loan collateral facility'
    ],
    eligibility: [
      'Age: 18-65 years (entry age)',
      'Medical examination required',
      'Income proof mandatory',
      'Good health condition',
      'Insurable interest in own life',
      'Financial underwriting'
    ],
    exclusions: [
      'Suicide within first two years',
      'War and military operations',
      'Nuclear risks',
      'Self-inflicted injuries',
      'Criminal activities',
      'Aviation risks (unless covered)',
      'Pre-existing terminal illness'
    ],
    keyTerms: [
      { term: 'Sum Assured', definition: 'Guaranteed amount payable on death or maturity' },
      { term: 'Premium', definition: 'Amount paid to keep policy in force' },
      { term: 'Surrender Value', definition: 'Amount receivable on policy surrender' },
      { term: 'Bonus', definition: 'Additional benefit in participating policies' }
    ],
    documentsRequired: [
      'Proposal form',
      'Medical examination reports',
      'Income proof',
      'Identity and address proof',
      'Passport size photographs',
      'Bank account details',
      'Nominee details and documents'
    ],
    claimProcess: [
      'Death claim intimation',
      'Submit death certificate',
      'Claim form completion',
      'Submit policy documents',
      'Investigation if required',
      'Claim settlement to nominee'
    ]
  },
  {
    id: 'travel',
    name: 'Travel Insurance',
    category: 'Personal Lines',
    icon: 'plane',
    shortDescription: 'Protection against travel-related risks including medical emergencies and trip cancellations.',
    coverage: 'Medical emergency, Trip cancellation, Baggage loss, Flight delay',
    premium: '$20-$500 per trip',
    features: [
      'Medical emergency coverage',
      'Emergency medical evacuation',
      'Trip cancellation/interruption',
      'Baggage and personal effects',
      'Flight delay compensation',
      'Personal liability coverage',
      'Adventure sports coverage',
      '24/7 assistance services'
    ],
    benefits: [
      'Worldwide medical coverage',
      'Trip investment protection',
      'Peace of mind while traveling',
      'Emergency assistance services',
      'Coverage for unexpected events',
      'Baggage protection',
      'Flight-related compensations'
    ],
    eligibility: [
      'Any age (age-specific plans available)',
      'Valid passport for international travel',
      'Trip booking confirmation',
      'Good health declaration',
      'Departure from home country'
    ],
    exclusions: [
      'Pre-existing medical conditions',
      'Travel to war-affected areas',
      'Extreme sports (unless covered)',
      'Alcohol/drug-related incidents',
      'Pregnancy-related expenses',
      'Business equipment losses',
      'Known events before booking'
    ],
    keyTerms: [
      { term: 'Emergency Evacuation', definition: 'Medical transportation to adequate facility' },
      { term: 'Trip Interruption', definition: 'Unexpected early return from trip' },
      { term: 'Baggage Delay', definition: 'Compensation for delayed luggage' },
      { term: 'Pre-existing Condition', definition: 'Medical condition before policy purchase' }
    ],
    documentsRequired: [
      'Passport copy',
      'Visa (if required)',
      'Travel itinerary',
      'Flight/hotel booking confirmations',
      'Medical history declaration',
      'Emergency contact details',
      'Previous travel insurance (if any)'
    ],
    claimProcess: [
      'Immediate notification of incident',
      'Collect all relevant receipts/reports',
      'Submit claim form within time limit',
      'Provide supporting documents',
      'Claim investigation if required',
      'Settlement or reimbursement'
    ]
  },
  {
    id: 'home',
    name: 'Home Insurance',
    category: 'Property Insurance',
    icon: 'home',
    shortDescription: 'Comprehensive protection for homes against fire, theft, natural disasters, and liability.',
    coverage: 'Building structure, Contents, Personal liability, Alternative accommodation',
    premium: '$300-$2,500 annually',
    features: [
      'Building structure coverage',
      'Contents and personal belongings',
      'Personal liability protection',
      'Alternative accommodation',
      'Garden and outbuilding coverage',
      'Credit card fraud protection',
      'Home emergency services',
      'Legal expenses coverage'
    ],
    benefits: [
      'Complete home protection',
      'Rebuild and replacement costs',
      'Liability coverage for accidents',
      'Temporary accommodation provision',
      'Peace of mind for homeowners',
      'Coverage for theft and burglary',
      'Natural disaster protection'
    ],
    eligibility: [
      'Property ownership or tenancy',
      'Property valuation required',
      'Security measures compliance',
      'Regular property maintenance',
      'No adverse claims history'
    ],
    exclusions: [
      'Normal wear and tear',
      'Gradual deterioration',
      'War and nuclear risks',
      'Flooding (unless specifically covered)',
      'Business use of property',
      'Vacant property (extended periods)',
      'Intentional damage'
    ],
    keyTerms: [
      { term: 'Rebuild Cost', definition: 'Cost to completely rebuild property' },
      { term: 'Contents Sum Insured', definition: 'Maximum amount for contents coverage' },
      { term: 'Excess', definition: 'Amount paid before insurance responds' },
      { term: 'Accidental Damage', definition: 'Sudden unexpected damage' }
    ],
    documentsRequired: [
      'Property ownership documents',
      'Property valuation certificate',
      'Construction details',
      'Security system details',
      'Previous insurance history',
      'Photographs of property',
      'Contents inventory list'
    ],
    claimProcess: [
      'Immediate claim notification',
      'Secure property if damaged',
      'Submit claim form with details',
      'Property inspection by surveyor',
      'Estimate verification and approval',
      'Repair or cash settlement'
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial Property Insurance',
    category: 'Commercial Lines',
    icon: 'building',
    shortDescription: 'Protection for business properties, equipment, and operations against various risks.',
    coverage: 'Building, Equipment, Inventory, Business interruption, Liability',
    premium: '$500-$10,000+ annually',
    features: [
      'Building and structure coverage',
      'Business equipment protection',
      'Inventory and stock coverage',
      'Business interruption insurance',
      'Machinery breakdown coverage',
      'Employee dishonesty coverage',
      'Cyber liability protection',
      'Environmental liability'
    ],
    benefits: [
      'Business continuity assurance',
      'Asset protection',
      'Revenue loss compensation',
      'Liability coverage',
      'Comprehensive risk management',
      'Customizable coverage options',
      'Industry-specific solutions'
    ],
    eligibility: [
      'Valid business registration',
      'Financial statements required',
      'Risk assessment completion',
      'Safety compliance certification',
      'No major adverse claims',
      'Regular business operations'
    ],
    exclusions: [
      'War and terrorism (unless covered)',
      'Nuclear risks',
      'Gradual pollution',
      'Professional indemnity',
      'Employment practices liability',
      'Cyber attacks (unless covered)',
      'Business closure by authorities'
    ],
    keyTerms: [
      { term: 'Business Interruption', definition: 'Coverage for lost income during closure' },
      { term: 'Replacement Cost', definition: 'Cost to replace with new equivalent item' },
      { term: 'Waiting Period', definition: 'Time before business interruption coverage begins' },
      { term: 'Aggregate Limit', definition: 'Maximum total coverage in policy period' }
    ],
    documentsRequired: [
      'Business registration certificate',
      'Financial statements (3 years)',
      'Property valuation report',
      'Equipment inventory list',
      'Safety compliance certificates',
      'Previous insurance policies',
      'Risk assessment reports'
    ],
    claimProcess: [
      'Immediate loss notification',
      'Secure damaged property',
      'Document all damages',
      'Submit detailed claim form',
      'Professional loss adjuster assessment',
      'Negotiate and settle claim'
    ]
  },
  {
    id: 'marine',
    name: 'Marine Insurance',
    category: 'Commercial Lines',
    icon: 'ship',
    shortDescription: 'Coverage for goods in transit, vessels, and maritime-related risks.',
    coverage: 'Cargo, Hull and machinery, Freight, Port risks, Transit delays',
    premium: '0.1%-2% of cargo value',
    features: [
      'Cargo insurance coverage',
      'Hull and machinery protection',
      'Freight insurance',
      'Port and terminal coverage',
      'Transit delay compensation',
      'General average contribution',
      'Salvage and sue & labor',
      'Warehousing coverage'
    ],
    benefits: [
      'International trade protection',
      'Comprehensive transit coverage',
      'Port-to-port security',
      'Financial loss mitigation',
      'Compliance with trade requirements',
      'Worldwide coverage options',
      'Flexible policy terms'
    ],
    eligibility: [
      'Valid import/export license',
      'Detailed cargo description',
      'Transportation documentation',
      'Proper packaging requirements',
      'Carrier verification',
      'Route approval'
    ],
    exclusions: [
      'War and strikes (unless covered)',
      'Nuclear risks',
      'Delay losses (unless specified)',
      'Inherent vice of goods',
      'Insufficient packaging',
      'Ordinary leakage/breakage',
      'Gradual deterioration'
    ],
    keyTerms: [
      { term: 'CIF Value', definition: 'Cost, Insurance, and Freight value' },
      { term: 'General Average', definition: 'Proportional sharing of maritime losses' },
      { term: 'Total Loss', definition: 'Complete destruction or loss of cargo' },
      { term: 'Sue and Labor', definition: 'Reasonable expenses to minimize loss' }
    ],
    documentsRequired: [
      'Commercial invoice',
      'Packing list',
      'Bill of lading/Airway bill',
      'Import/Export license',
      'Cargo survey report',
      'Transportation contract',
      'Previous claim history'
    ],
    claimProcess: [
      'Immediate notification of loss',
      'Preserve damaged goods',
      'Arrange for survey',
      'Submit claim documents',
      'Independent assessment',
      'Settlement based on policy terms'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Indemnity Insurance',
    category: 'Commercial Lines',
    icon: 'briefcase',
    shortDescription: 'Protection against claims arising from professional advice, services, or negligence.',
    coverage: 'Professional negligence, Legal costs, Compensation, Defense costs',
    premium: '$500-$5,000+ annually',
    features: [
      'Professional negligence coverage',
      'Legal defense costs',
      'Compensation payments',
      'Regulatory proceedings support',
      'Loss of documents coverage',
      'Cyber liability (professional)',
      'Worldwide territorial coverage',
      'Retroactive date coverage'
    ],
    benefits: [
      'Professional reputation protection',
      'Legal cost coverage',
      'Client relationship preservation',
      'Regulatory compliance support',
      'Peace of mind in practice',
      'Industry-specific expertise',
      'Comprehensive risk management'
    ],
    eligibility: [
      'Professional qualification required',
      'Active professional practice',
      'Good professional standing',
      'No major adverse claims',
      'Professional body membership',
      'Continuing education compliance'
    ],
    exclusions: [
      'Criminal or fraudulent acts',
      'Employment disputes',
      'Property damage',
      'Bodily injury claims',
      'Contractual penalties',
      'Trading losses',
      'Insolvency-related claims'
    ],
    keyTerms: [
      { term: 'Retroactive Date', definition: 'Earliest date for covered incidents' },
      { term: 'Aggregate Limit', definition: 'Total coverage limit for all claims' },
      { term: 'Extended Reporting', definition: 'Coverage after policy expiration' },
      { term: 'Notification Date', definition: 'When claim is reported to insurer' }
    ],
    documentsRequired: [
      'Professional qualification certificates',
      'Professional indemnity proposal form',
      'Business registration documents',
      'Professional body membership',
      'Financial statements',
      'Claims history declaration',
      'Client testimonials/references'
    ],
    claimProcess: [
      'Immediate claim notification',
      'Preserve all relevant documents',
      'Do not admit liability',
      'Submit detailed claim information',
      'Cooperate with legal defense',
      'Follow insurer\'s instructions'
    ]
  },
  {
    id: 'cyber',
    name: 'Cyber Liability Insurance',
    category: 'Specialty Lines',
    icon: 'shield',
    shortDescription: 'Protection against cyber attacks, data breaches, and digital risks.',
    coverage: 'Data breach, Cyber attacks, Business interruption, Privacy liability',
    premium: '$500-$7,500+ annually',
    features: [
      'Data breach response coverage',
      'Cyber attack protection',
      'Business interruption losses',
      'Privacy liability coverage',
      'Network security failures',
      'Cyber extortion coverage',
      'Regulatory fines and penalties',
      '24/7 cyber incident response'
    ],
    benefits: [
      'Comprehensive cyber risk protection',
      'Expert incident response team',
      'Regulatory compliance support',
      'Business continuity assurance',
      'Reputation management',
      'Legal and forensic support',
      'Customer notification services'
    ],
    eligibility: [
      'Active digital business operations',
      'Cybersecurity controls assessment',
      'Data protection policies',
      'Employee training programs',
      'Regular security updates',
      'Incident response plan'
    ],
    exclusions: [
      'Known security vulnerabilities',
      'War and terrorism',
      'Nuclear risks',
      'Bodily injury/property damage',
      'Employment practices',
      'Professional services errors',
      'Contractual penalties'
    ],
    keyTerms: [
      { term: 'Data Breach', definition: 'Unauthorized access to sensitive information' },
      { term: 'Ransomware', definition: 'Malicious software demanding payment' },
      { term: 'Business Interruption', definition: 'Loss of income due to cyber incident' },
      { term: 'Privacy Liability', definition: 'Claims for privacy law violations' }
    ],
    documentsRequired: [
      'Cybersecurity assessment report',
      'Data protection policies',
      'IT infrastructure details',
      'Employee training records',
      'Previous cyber incidents',
      'Business continuity plan',
      'Vendor management policies'
    ],
    claimProcess: [
      'Immediate incident notification (24/7)',
      'Secure affected systems',
      'Engage incident response team',
      'Preserve digital evidence',
      'Coordinate breach response',
      'Submit detailed claim documentation'
    ]
  },
  {
    id: 'directors',
    name: 'Directors & Officers Insurance',
    category: 'Management Liability',
    icon: 'briefcase',
    shortDescription: 'Protection for company directors and officers against personal liability claims.',
    coverage: 'Personal liability, Defense costs, Company reimbursement, Entity coverage',
    premium: '$2,000-$25,000+ annually',
    features: [
      'Personal liability protection',
      'Legal defense cost coverage',
      'Company reimbursement',
      'Entity liability coverage',
      'Employment practices liability',
      'Fiduciary liability coverage',
      'Worldwide territorial coverage',
      'Crisis management support'
    ],
    benefits: [
      'Personal asset protection',
      'Comprehensive legal coverage',
      'Board decision confidence',
      'Talent attraction/retention',
      'Regulatory compliance support',
      'Crisis management assistance',
      'Global coverage availability'
    ],
    eligibility: [
      'Active company director/officer',
      'Properly incorporated entity',
      'Good corporate governance',
      'Financial stability',
      'No major pending litigation',
      'Proper board composition'
    ],
    exclusions: [
      'Criminal or fraudulent acts',
      'Personal profit gains',
      'Pollution liability',
      'Bodily injury/property damage',
      'Employment benefits claims',
      'Prior known circumstances',
      'Insured vs. insured claims'
    ],
    keyTerms: [
      { term: 'Side A Coverage', definition: 'Personal liability when company cannot indemnify' },
      { term: 'Side B Coverage', definition: 'Company reimbursement for indemnification' },
      { term: 'Side C Coverage', definition: 'Entity liability coverage' },
      { term: 'Severability', definition: 'Individual consideration of wrongful acts' }
    ],
    documentsRequired: [
      'Corporate structure documents',
      'Board resolution for insurance',
      'Financial statements (3 years)',
      'Directors\' and officers\' details',
      'Corporate governance policies',
      'Litigation history',
      'Previous D&O insurance history'
    ],
    claimProcess: [
      'Immediate claim notification',
      'Preserve all relevant documents',
      'Avoid admissions of liability',
      'Cooperate with investigation',
      'Follow legal counsel advice',
      'Regular claim status updates'
    ]
  },
  {
    id: 'workers-comp',
    name: 'Workers\' Compensation Insurance',
    category: 'Commercial Lines',
    icon: 'users',
    shortDescription: 'Mandatory coverage for employee work-related injuries and illnesses.',
    coverage: 'Medical expenses, Lost wages, Disability benefits, Vocational rehabilitation',
    premium: '$0.75-$2.50 per $100 payroll',
    features: [
      'Medical expense coverage',
      'Lost wage compensation',
      'Disability benefits',
      'Vocational rehabilitation',
      'Survivor benefits',
      'Legal defense coverage',
      'Return-to-work programs',
      'Experience rating programs'
    ],
    benefits: [
      'Legal compliance assurance',
      'Employee protection guarantee',
      'Lawsuit protection for employers',
      'Predictable insurance costs',
      'Professional claims management',
      'Safety program support',
      'Risk management assistance'
    ],
    eligibility: [
      'Legitimate business operations',
      'Employee payroll records',
      'Proper worker classification',
      'Safety program implementation',
      'Regulatory compliance',
      'Experience modification factors'
    ],
    exclusions: [
      'Intentional self-inflicted injuries',
      'Injuries while intoxicated',
      'Criminal activity injuries',
      'Non-work-related injuries',
      'Domestic workers (some states)',
      'Independent contractors',
      'Volunteers (unless specified)'
    ],
    keyTerms: [
      { term: 'Experience Mod', definition: 'Factor based on claims history affecting premium' },
      { term: 'Class Code', definition: 'Industry classification for rating purposes' },
      { term: 'Premium Audit', definition: 'Annual review of actual payroll vs. estimated' },
      { term: 'Return to Work', definition: 'Programs to help injured workers resume duties' }
    ],
    documentsRequired: [
      'Payroll records',
      'Employee classification details',
      'Previous workers\' comp policies',
      'OSHA injury logs',
      'Safety program documentation',
      'Business registration',
      'Financial statements'
    ],
    claimProcess: [
      'Immediate injury notification',
      'Provide emergency medical care',
      'Complete injury report forms',
      'Submit claim to insurer',
      'Coordinate medical treatment',
      'Monitor return-to-work progress'
    ]
  },
  {
    id: 'product-liability',
    name: 'Product Liability Insurance',
    category: 'Commercial Lines',
    icon: 'factory',
    shortDescription: 'Protection against claims arising from defective products causing injury or damage.',
    coverage: 'Bodily injury, Property damage, Legal defense, Product recall',
    premium: '$1,000-$10,000+ annually',
    features: [
      'Bodily injury coverage',
      'Property damage protection',
      'Legal defense costs',
      'Product recall coverage',
      'Worldwide territorial coverage',
      'Completed operations coverage',
      'Advertising injury protection',
      'Crisis communication support'
    ],
    benefits: [
      'Comprehensive product risk protection',
      'Legal defense and settlement',
      'Global market access',
      'Brand reputation protection',
      'Regulatory compliance support',
      'Supply chain protection',
      'Peace of mind for manufacturers'
    ],
    eligibility: [
      'Product manufacturing/distribution',
      'Quality control processes',
      'Product testing procedures',
      'Proper product labeling',
      'Distribution channel management',
      'Product liability history'
    ],
    exclusions: [
      'Known defects not disclosed',
      'Recall costs (unless covered)',
      'War and terrorism',
      'Nuclear risks',
      'Pollution liability',
      'Professional services',
      'Employment practices'
    ],
    keyTerms: [
      { term: 'Occurrence', definition: 'Event causing injury during policy period' },
      { term: 'Claims-Made', definition: 'Policy responding to claims made during period' },
      { term: 'Aggregate Limit', definition: 'Total coverage limit for all claims' },
      { term: 'Product Recall', definition: 'Systematic removal of defective products' }
    ],
    documentsRequired: [
      'Product specifications',
      'Quality control procedures',
      'Testing and certification reports',
      'Distribution agreements',
      'Previous product liability history',
      'Safety warnings and labels',
      'Manufacturing processes documentation'
    ],
    claimProcess: [
      'Immediate claim notification',
      'Preserve product samples',
      'Document incident details',
      'Coordinate with legal counsel',
      'Investigation cooperation',
      'Settlement negotiation'
    ]
  },
  {
    id: 'umbrella',
    name: 'Umbrella Insurance',
    category: 'Personal Lines',
    icon: 'umbrella',
    shortDescription: 'Additional liability coverage above underlying insurance policies.',
    coverage: 'Excess liability, Defense costs, Worldwide coverage, Personal injury',
    premium: '$200-$500 annually per $1M',
    features: [
      'Excess liability coverage',
      'Broad form coverage',
      'Defense cost coverage',
      'Worldwide territorial coverage',
      'Personal injury protection',
      'Coverage for gaps in underlying policies',
      'High coverage limits available',
      'Cost-effective protection'
    ],
    benefits: [
      'Enhanced asset protection',
      'Comprehensive liability coverage',
      'Gap coverage provision',
      'High-limit protection at low cost',
      'Peace of mind for high-net-worth',
      'Defense against frivolous lawsuits',
      'Global coverage availability'
    ],
    eligibility: [
      'Underlying liability policies required',
      'Minimum underlying coverage limits',
      'Good claims history',
      'Asset valuation assessment',
      'Risk exposure evaluation',
      'Proper maintenance of underlying coverage'
    ],
    exclusions: [
      'Business/professional activities',
      'Intentional criminal acts',
      'War and nuclear risks',
      'Aircraft/watercraft (unless scheduled)',
      'Workers\' compensation',
      'Pollution liability',
      'Cyber liability'
    ],
    keyTerms: [
      { term: 'Underlying Insurance', definition: 'Primary insurance that must respond first' },
      { term: 'Drop Down Coverage', definition: 'When umbrella covers gaps in underlying' },
      { term: 'Aggregate Limit', definition: 'Total amount available during policy period' },
      { term: 'SIR', definition: 'Self-Insured Retention - deductible amount' }
    ],
    documentsRequired: [
      'Underlying insurance policy copies',
      'Asset inventory and valuation',
      'Income documentation',
      'Previous umbrella insurance',
      'Claims history from all policies',
      'Risk exposure questionnaire',
      'Professional activities disclosure'
    ],
    claimProcess: [
      'Report to underlying insurer first',
      'Notify umbrella carrier immediately',
      'Coordinate coverage between insurers',
      'Provide all claim documentation',
      'Follow both insurers\' requirements',
      'Monitor underlying policy limits'
    ]
  },
  {
    id: 'pet',
    name: 'Pet Insurance',
    category: 'Specialty Lines',
    icon: 'pet',
    shortDescription: 'Medical coverage for pets including accidents, illnesses, and routine care.',
    coverage: 'Accident/illness, Surgery, Prescription drugs, Preventive care',
    premium: '$200-$800 annually',
    features: [
      'Accident and illness coverage',
      'Surgical procedure coverage',
      'Prescription medication',
      'Diagnostic testing',
      'Preventive care options',
      'Hereditary condition coverage',
      'Alternative therapy coverage',
      'No network restrictions'
    ],
    benefits: [
      'Unexpected veterinary cost protection',
      'Quality care access for pets',
      'Peace of mind for pet owners',
      'Veterinarian choice flexibility',
      'Coverage for hereditary conditions',
      'Lifetime coverage availability',
      'Fast claim processing'
    ],
    eligibility: [
      'Pet age limits (typically 8 weeks-14 years)',
      'Veterinary examination required',
      'Up-to-date vaccinations',
      'No pre-existing conditions',
      'Spay/neuter may be required',
      'Breed-specific considerations'
    ],
    exclusions: [
      'Pre-existing conditions',
      'Breeding and pregnancy',
      'Cosmetic procedures',
      'Behavioral issues (some)',
      'Routine dental cleaning',
      'Experimental treatments',
      'Racing or commercial use'
    ],
    keyTerms: [
      { term: 'Deductible', definition: 'Amount paid before insurance responds' },
      { term: 'Reimbursement Rate', definition: 'Percentage of eligible expenses covered' },
      { term: 'Annual Limit', definition: 'Maximum coverage per policy year' },
      { term: 'Waiting Period', definition: 'Time before coverage becomes effective' }
    ],
    documentsRequired: [
      'Pet adoption/purchase records',
      'Veterinary medical records',
      'Vaccination certificates',
      'Recent veterinary examination',
      'Spay/neuter certificate',
      'Pet photographs',
      'Previous pet insurance history'
    ],
    claimProcess: [
      'Pay veterinarian directly',
      'Submit claim form online/by mail',
      'Include itemized veterinary invoice',
      'Provide medical records if requested',
      'Claim processing (typically 1-2 weeks)',
      'Direct reimbursement to pet owner'
    ]
  },
  {
    id: 'gadget',
    name: 'Gadget Insurance',
    category: 'Specialty Lines',
    icon: 'phone',
    shortDescription: 'Protection for electronic devices against damage, theft, and malfunction.',
    coverage: 'Accidental damage, Theft, Liquid damage, Mechanical breakdown',
    premium: '$50-$300 annually',
    features: [
      'Accidental damage coverage',
      'Theft and robbery protection',
      'Liquid damage coverage',
      'Mechanical breakdown protection',
      'Screen damage repair',
      'Worldwide coverage',
      'Accessories coverage',
      'Data recovery assistance'
    ],
    benefits: [
      'Device replacement/repair cost protection',
      'Quick repair/replacement service',
      'Worldwide coverage during travel',
      'Peace of mind for expensive gadgets',
      'No effect on manufacturer warranty',
      'Flexible coverage options',
      'Easy online claims process'
    ],
    eligibility: [
      'Device age limits (typically under 3 years)',
      'Purchase receipt required',
      'Device in good working condition',
      'Proper protective measures',
      'Regular software updates',
      'No existing damage'
    ],
    exclusions: [
      'Normal wear and tear',
      'Gradual deterioration',
      'Software issues (unless hardware-related)',
      'Cosmetic damage not affecting function',
      'Loss/misplacement',
      'War and terrorism',
      'Nuclear risks'
    ],
    keyTerms: [
      { term: 'Excess', definition: 'Amount paid towards each claim' },
      { term: 'Sum Insured', definition: 'Maximum amount payable for device' },
      { term: 'New for Old', definition: 'Replacement with new equivalent device' },
      { term: 'Depreciation', definition: 'Reduction in value due to age/use' }
    ],
    documentsRequired: [
      'Device purchase receipt',
      'Device serial number/IMEI',
      'Proof of ownership',
      'Device photographs',
      'Previous gadget insurance history',
      'Bank account details',
      'Identity proof'
    ],
    claimProcess: [
      'Report theft to police (if applicable)',
      'Submit online claim form',
      'Provide device details and photos',
      'Submit purchase receipt',
      'Claim assessment and approval',
      'Repair authorization or replacement'
    ]
  },
  {
    id: 'crop',
    name: 'Crop Insurance',
    category: 'Agricultural Insurance',
    icon: 'farm',
    shortDescription: 'Protection for farmers against crop losses due to natural disasters and adverse weather.',
    coverage: 'Yield loss, Revenue protection, Weather-related damage, Disease/pest damage',
    premium: '2%-10% of sum insured',
    features: [
      'Multi-peril crop coverage',
      'Yield-based insurance',
      'Revenue protection options',
      'Weather index insurance',
      'Crop-specific coverage',
      'Government subsidy programs',
      'Area yield coverage',
      'Prevented planting coverage'
    ],
    benefits: [
      'Farm income stability',
      'Protection against natural disasters',
      'Credit access facilitation',
      'Risk management for farmers',
      'Government support programs',
      'Technology-based assessments',
      'Prompt claim settlements'
    ],
    eligibility: [
      'Active farming operations',
      'Proper crop cultivation practices',
      'Land ownership/tenancy documents',
      'Previous crop production history',
      'Compliance with agricultural guidelines',
      'Timely sowing within specified period'
    ],
    exclusions: [
      'Poor farming practices',
      'War and civil commotion',
      'Nuclear risks',
      'Theft of harvested crop',
      'Damage due to negligence',
      'Non-compliance with conditions',
      'Grazing by own cattle'
    ],
    keyTerms: [
      { term: 'Sum Insured', definition: 'Maximum liability per hectare or per crop' },
      { term: 'Threshold Yield', definition: 'Minimum yield level for claim eligibility' },
      { term: 'Indemnity', definition: 'Compensation for crop loss' },
      { term: 'Cut-off Date', definition: 'Last date for reporting crop loss' }
    ],
    documentsRequired: [
      'Land ownership/tenancy documents',
      'Previous season yield records',
      'Sowing certificate from authorities',
      'Bank account details',
      'Identity and address proof',
      'Crop cutting experiment certificate',
      'Loss assessment report'
    ],
    claimProcess: [
      'Report crop loss within 72 hours',
      'Submit notice of loss form',
      'Joint inspection by officials',
      'Crop cutting experiments',
      'Yield assessment and calculation',
      'Claim settlement within 60 days'
    ]
  }
];