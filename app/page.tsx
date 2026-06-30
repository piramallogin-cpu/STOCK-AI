export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 p-5 shadow-lg">
        <h1 className="text-3xl font-bold">📈 STOCK AI</h1>
        <p className="text-gray-300 mt-2">
          AI Powered Stock Market Prediction Platform
        </p>
      </header>

      {/* Dashboard */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Indian Market */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold">🇮🇳 Indian Market</h3>
            <p className="mt-3 text-gray-300">
              NSE &amp; BSE Live Stocks
            </p>
          </div>

          {/* US Market */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold">🇺🇸 US Market</h3>
            <p className="mt-3 text-gray-300">
              NASDAQ &amp; NYSE Stocks
            </p>
          </div>

          {/* Cryptocurrency */}
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold">₿ Cryptocurrency</h3>
            <p className="mt-3 text-gray-300">
              Bitcoin, Ethereum &amp; Altcoins
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}