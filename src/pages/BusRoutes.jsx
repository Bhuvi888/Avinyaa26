import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Bus, MapPin, Clock } from 'lucide-react';

const BusRoutes = () => {
    const { isDark } = useOutletContext() || { isDark: true };

    // Sample Bus Data
    const routes = [
        {
            id: 1,
            routeNo: "101",
            startPoint: "Central Station",
            time: "6:30 AM",
            areas: "Central, Egmore, Kilpauk, Anna Nagar",
        },
        {
            id: 2,
            routeNo: "102",
            startPoint: "Tambaram",
            time: "6:15 AM",
            areas: "Tambaram, Chromepet, Pallavaram, Guindy",
        },
        {
            id: 3,
            routeNo: "103",
            startPoint: "Avadi",
            time: "6:30 AM",
            areas: "Avadi, Ambattur, Padi, Thirumangalam",
        },
        {
            id: 4,
            routeNo: "104",
            startPoint: "Velachery",
            time: "6:20 AM",
            areas: "Velachery, Adyar, Mylapore, Royapettah",
        },
        {
            id: 5,
            routeNo: "105",
            startPoint: "Porur",
            time: "6:40 AM",
            areas: "Porur, Valasaravakkam, Vadapalani, Koyambedu",
        },
        {
            id: 6,
            routeNo: "106",
            startPoint: "Tiruvottiyur",
            time: "6:25 AM",
            areas: "Tiruvottiyur, Tollgate, Royapuram, Beach Station",
        },
    ];

    return (
        <div className={`min-h-screen pt-32 pb-20 px-6 font-display ${isDark ? 'text-white' : 'text-gray-800'}`}>

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-20 relative">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDark ? 'border-red-500/30 bg-red-900/20' : 'border-red-500/20 bg-red-100'} mb-6`}>
                    <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-red-500' : 'bg-red-600'} animate-pulse`}></span>
                    <span className={`text-xs font-bold tracking-[0.25em] uppercase ${isDark ? 'text-red-300' : 'text-red-700'}`}>Transportation</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
                    Bus <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">Routes</span>
                </h1>

                <p className={`text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto ${isDark ? "text-rose-200/70" : "text-gray-600"}`}>
                    Convenient and safe transportation covering major areas of the city. Find your nearest boarding point.
                </p>
            </div>

            {/* Routes Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {routes.map((route) => (
                    <div
                        key={route.id}
                        className={`group p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${isDark
                                ? "bg-[#8B0000]/10 border-white/10 hover:border-red-500/50 hover:shadow-red-900/20"
                                : "bg-white/40 border-black/10 hover:border-red-500/50 hover:shadow-red-500/10"
                            }`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? "bg-red-500/20 text-red-500" : "bg-red-100 text-red-600"}`}>
                                <Bus className="w-6 h-6" />
                            </div>
                            <span className={`text-3xl font-black opacity-30 ${isDark ? "text-white" : "text-black"}`}>
                                {route.routeNo}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">{route.startPoint}</h3>

                        <div className="space-y-3 mt-6">
                            <div className="flex items-center gap-3">
                                <Clock className={`w-4 h-4 ${isDark ? "text-red-400" : "text-red-600"}`} />
                                <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                                    Starts at {route.time}
                                </span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className={`w-4 h-4 mt-1 ${isDark ? "text-red-400" : "text-red-600"}`} />
                                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                    {route.areas}
                                </span>
                            </div>
                        </div>

                        <div className={`mt-6 pt-6 border-t ${isDark ? "border-white/10" : "border-black/5"}`}>
                            <button className={`w-full py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${isDark
                                    ? "bg-white/5 hover:bg-red-600 hover:text-white text-gray-300"
                                    : "bg-black/5 hover:bg-red-600 hover:text-white text-gray-700"
                                }`}>
                                View Full Schedule
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Note */}
            <div className={`mt-12 text-center text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                * Routes and timings are subject to change. Please contact the transport department for confirmation.
            </div>
        </div>
    );
};

export default BusRoutes;
