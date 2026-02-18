export function Details() {
  const benefits = [
    {
      icon: "🎯",
      title: "Protect Your Brand",
      description: "Secure identification and world-class tech stack to ensure product authenticity"
    },
    {
      icon: "💼",
      title: "Secure Revenue",
      description: "Eliminate losses from counterfeit products and unauthorized distribution"
    },
    {
      icon: "🔍",
      title: "Complete Transparency",
      description: "Track products throughout the entire supply chain from origin to end consumer"
    },
    {
      icon: "🤝",
      title: "Build Trust",
      description: "Empower customers to verify authenticity and build lasting confidence in your brand"
    }
  ];

  const useCases = [
    "Pharmaceuticals & Healthcare",
    "Automotive & Parts",
    "Agriculture & Seeds",
    "Electronics & Technology",
    "Luxury Goods & Apparel",
    "Food & Beverage",
    "Industrial Components"
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Why Choose QR-Trust?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection and visibility across your entire supply chain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div id="industries" className="bg-gradient-to-br from-slate-50 to-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl text-gray-900 mb-6">Industries We Serve</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {useCases.map((industry, index) => (
                <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl mb-6">Real-World Impact</h3>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">95%</div>
                <p className="text-cyan-50">Reduction in counterfeit incidents</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">100%</div>
                <p className="text-cyan-50">Supply chain visibility</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-2">75%</div>
                <p className="text-cyan-50">Boost in customer trust & retention</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-6 text-center">
            Sample Use Case: Pharmaceutical Industry
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl text-gray-900 mb-4">The Process</h4>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <span className="text-gray-700 pt-1">Pharma company prints secure QR-Trust codes on each batch of medicine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <span className="text-gray-700 pt-1">Distributors and retailers scan code to verify authenticity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <span className="text-gray-700 pt-1">Customer scans with smartphone to validate the product</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <span className="text-gray-700 pt-1">Any duplicate or out-of-region scan triggers instant alert to manufacturer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                  <span className="text-gray-700 pt-1">Warranty claims simplified through end-to-end tracking</span>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-xl text-gray-900 mb-4">The Results</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Reduces counterfeit returns significantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Improves supply chain visibility for manufacturer, distributor and consumer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">75% boost in consumer trust & retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700">Complete end-to-end product lifecycle tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-2xl sm:text-3xl mb-4">
              Ready to Protect Your Brand?
            </h3>
            <p className="text-lg text-cyan-50 mb-8 max-w-2xl">
              Join leading manufacturers worldwide in securing their products and supply chains with QR-Trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-3 bg-white text-cyan-600 rounded-lg hover:bg-gray-100 transition-colors inline-block">
                Schedule a Demo
              </a>
              <a href="#contact" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-block">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}