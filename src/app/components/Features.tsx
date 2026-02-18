export function Features() {
  const features = [
    {
      title: "Anti-Counterfeit Solution",
      subtitle: "Brand Protection",
      icon: "🛡️",
      color: "from-orange-400 to-orange-500",
      items: [
        "Digital ID association to each Product",
        "Unique Algorithms based Serial numbers",
        "Track and Trace throughout Product Life Cycle",
        "Determine Counterfeiting Activities throughout supply chain",
        "Maintaining Brand Image and reputation in the marketplace",
        "Reduce the risk of financial loss, liability and safety"
      ]
    },
    {
      title: "Supply Chain Management",
      subtitle: "",
      color: "from-yellow-400 to-yellow-500",
      icon: "🔗",
      items: [
        "Production coordination on the basis of demand forecasting",
        "Warehouse management by having the product on available stock and transition",
        "Logistics Management through coordinating and managing the flow of products from the point of origin to the end consumer",
        "Stores Management by using the product at the premises",
        "Tests Product at Customer level to enhance the forecasting levels"
      ]
    },
    {
      title: "Demand Forecasting / Production Management",
      subtitle: "",
      color: "from-blue-400 to-blue-500",
      icon: "📊",
      items: [
        "Right Quality by enabling the product solution to maintain brand image",
        "Right Quantity identification for determining the right production levels or capturing the supply chain",
        "Right Time determining to complete the production jobs on-time on the basis of product sales and demand tracking",
        "Right Manufacturing Cost by reducing the production and storage cost"
      ]
    },
    {
      title: "Sales Forecasting / Financial Planning",
      subtitle: "",
      color: "from-green-400 to-green-500",
      icon: "💰",
      items: [
        "Sales Forecasting by predicting future sales of a product with the help of historical data and market trends with currency and transitions",
        "Financial Planning through available live data of stock movement across the territories by complete in & out transitions and current sales statistics"
      ]
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To help our customer by providing high level of services & solutions to grow them with sustainable profitability, 
            brand protection & business enhancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg text-gray-900 mb-2">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="text-sm text-gray-500 mb-3">{feature.subtitle}</p>
              )}
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-cyan-500 mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl sm:text-3xl mb-4">
            QR-Trust is not just a technology — it is a Trust Infrastructure for the Future
          </h3>
          <p className="text-lg text-cyan-50">
            Every scan protects your brand. Every QR-Trust code tells a story of authenticity, safety, and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}