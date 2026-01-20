/**
 * Home Page Component
 *
 * The main landing page of the application.
 *
 * @component
 * @example
 * <Home />
 *
 * @todo Add hero section
 * @todo Add featured content
 * @todo Add call-to-action sections
 */
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Avinyaa
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your compelling tagline goes here. Describe what makes your
            organization unique and valuable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Feature {item}
                </h3>
                <p className="text-gray-600">
                  Add your feature description here. Explain the value this
                  brings to users.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
