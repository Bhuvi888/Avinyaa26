import React from 'react';

const FutureBanner = () => {
    // Placeholder component
    return (
        <section className="py-32 relative overflow-hidden bg-primary text-white text-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 px-6">
                <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-wider">The Future is Now</h2>
                <p className="max-w-2xl mx-auto text-lg opacity-90 font-light">Join us in shaping tomorrow's technology today.</p>
            </div>
        </section>
    );
};

export default FutureBanner;
