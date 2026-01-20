/**
 * Events Page Component
 *
 * Displays upcoming and past events.
 *
 * @component
 * @example
 * <Events />
 *
 * @todo Add event cards grid
 * @todo Add filtering functionality
 * @todo Add event details modal/page
 */
const Events = () => {
  // Sample events data - replace with actual data
  const events = [
    {
      id: 1,
      title: "Event Title 1",
      date: "2026-02-15",
      location: "Virtual",
      description: "Event description goes here.",
      image: null,
    },
    {
      id: 2,
      title: "Event Title 2",
      date: "2026-03-20",
      location: "New York, NY",
      description: "Event description goes here.",
      image: null,
    },
    {
      id: 3,
      title: "Event Title 3",
      date: "2026-04-10",
      location: "San Francisco, CA",
      description: "Event description goes here.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Events
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            Discover our upcoming events and activities. Join us to learn,
            connect, and grow.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs - Placeholder */}
          <div className="flex items-center gap-4 mb-8">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium">
              All Events
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">
              Upcoming
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-indigo-600 text-sm font-medium transition-colors">
              Past
            </button>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                {/* Event Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">📅</span>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-indigo-600 mb-2">
                    <span>
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  <button className="text-indigo-600 font-medium text-sm hover:text-indigo-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
