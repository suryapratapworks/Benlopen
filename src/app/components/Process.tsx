export function Process() {
  const keyFeatures = [
    {
      title: "Unique QR Codes",
      description: "Each product unit is tagged with a digitally signed tamper-proof QR code"
    },
    {
      title: "Real-time Product Scanning Authentication",
      description: "End consumers, dealers, and inspectors can instantly verify product authenticity"
    },
    {
      title: "Geo-Location Mapping Fraud Alerts",
      description: "Track product movement and spot anomalies"
    },
    {
      title: "Customer Engagement Portal",
      description: "After-scan redirection to warranty registration, feedback, or promotional content"
    }
  ];

  const workflowSteps = [
    {
      number: "1",
      title: "QR-Trust Engine Generates Secure Codes",
      description: "Unique for each SKU or unit",
      color: "from-blue-400 to-blue-500"
    },
    {
      number: "2",
      title: "Manufacturer Applies Codes on Packaging",
      description: "Through print or label",
      color: "from-green-400 to-green-500"
    },
    {
      number: "3",
      title: "Codes are Linked to Database Entries",
      description: "Immutable traceability",
      color: "from-orange-400 to-orange-500"
    },
    {
      number: "4",
      title: "Consumer or Distributor Scans the Code",
      description: "Gets verified result",
      color: "from-purple-400 to-purple-500"
    },
    {
      number: "5",
      title: "Dashboard Tracks Every Scan",
      description: "Helps identify hotspots, fraud, or incident zones",
      color: "from-yellow-400 to-yellow-500"
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="features" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Key Features of QR-Trust™
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The risks of financial loss due to counterfeit, duplicate goods and disengagement of supply chain process, 
            we are providing the Anti-Counterfeit & Supply Chain Management Solution with following features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div id="process" className="mb-16">
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-8 text-center">
            How QR-Trust Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 h-full hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-xl mb-4`}>
                    {step.number}
                  </div>
                  <h4 className="text-base text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}