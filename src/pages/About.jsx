/**
 * About Page Component
 *
 * Information about the organization, team, and mission.
 *
 * @component
 * @example
 * <About />
 *
 * @todo Add team members section
 * @todo Add mission/vision statements
 * @todo Add company history timeline
 */
const About = () => {
  // Sample team data - replace with actual data
  const team = [
    { id: 1, name: "Team Member 1", role: "Role Title", image: null },
    { id: 2, name: "Team Member 2", role: "Role Title", image: null },
    { id: 3, name: "Team Member 3", role: "Role Title", image: null },
    { id: 4, name: "Team Member 4", role: "Role Title", image: null },
  ];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Learn more about our journey, our mission, and the people behind
            Avinyaa.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">🚀</span>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                Add your mission statement here. Describe what drives your
                organization and the impact you aim to create.
              </p>
              <p className="text-gray-600 mb-6">
                Include additional context about your goals, values, and what
                makes your organization unique.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-xl">
                  <div className="text-2xl font-bold text-indigo-600">100+</div>
                  <div className="text-sm text-gray-600">Stat label</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Stat label</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Innovation", "Integrity", "Impact"].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">
                    {["💡", "🤝", "🎯"][index]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value}
                </h3>
                <p className="text-gray-600">
                  Add description about this value and how it guides your work.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
