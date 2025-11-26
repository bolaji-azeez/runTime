"use client";

const PaymentGatewaysSection = () => {
  const paymentGateways = [
    {
      symbol: "ETHUSD",
      name: "ETHEREM / U.S. DOLLAR",
      price: "2,785.9",
    },
    {
      symbol: "BTCUSD",
      name: "BITCOIN / U.S. DOLLAR",
      price: "85,011",
    },
    {
      symbol: "LTCUSDT",
      name: "LITECOIN / TETHERUS",
      price: "83.94",
      change: "-3.78%",
    },
    {
      symbol: "SOLUSD",
      name: "SOLAMA / U.S. DOLLAR",
      price: "129.55",
    },
  ];

  return (
    <section className="py-16 bg-[#e4edf3]">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[#004767] mb-4">
            Some Of Our Supported Payment Gateways
          </h2>
          <div className="text-center p-3 bg-[#004767] rounded-sm">
            <span className="text-[#e4edf3] text-sm font-semibold">CRYPTO ASSETS</span>
          </div>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {paymentGateways.map((asset, index) => (
            <div
              key={index}
              className="bg-white rounded-3px p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {asset.symbol}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{asset.name}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  {asset.price}
                </span>
                {asset.change && (
                  <span className="text-red-500 text-sm font-medium">
                    {asset.change}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

            
      </div>
    </section>
  );
};

export default PaymentGatewaysSection;
