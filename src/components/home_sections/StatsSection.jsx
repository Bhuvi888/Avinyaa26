import React from 'react';

const StatsSection = () => {
    // Placeholder component as code was not provided
    return (
        <section className="py-20 bg-gray-100 dark:bg-[#0a0f1c] text-center">
            <h2 className="text-3xl font-display font-bold text-primary mb-8">EVENT STATISTICS</h2>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <h3 className="text-4xl font-black mb-2 text-gray-900 dark:text-white">500+</h3>
                    <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400">Participants</p>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <h3 className="text-4xl font-black mb-2 text-gray-900 dark:text-white">10+</h3>
                    <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400">Events</p>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <h3 className="text-4xl font-black mb-2 text-gray-900 dark:text-white">3</h3>
                    <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400">Workshops</p>
                </div>
                <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                    <h3 className="text-4xl font-black mb-2 text-gray-900 dark:text-white">₹1L+</h3>
                    <p className="text-sm tracking-widest uppercase text-gray-600 dark:text-gray-400">Prize Pool</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
