import React, { useEffect } from 'react';
import DomeGallery from '../components/gallery/DomeGallery';
import { useOutletContext } from 'react-router-dom';

import img1 from '../assets/gallery-images/DSC00001.JPG';
import img2 from '../assets/gallery-images/DSC00002.JPG';
import img3 from '../assets/gallery-images/DSC00003.JPG';
import img5 from '../assets/gallery-images/DSC00005.JPG';
import img6 from '../assets/gallery-images/DSC00006.JPG';
import img7 from '../assets/gallery-images/DSC00007.JPG';
import img9 from '../assets/gallery-images/DSC00009.JPG';
import img10 from '../assets/gallery-images/DSC00010.JPG';
import img11 from '../assets/gallery-images/DSC00011.JPG';
import img13 from '../assets/gallery-images/DSC00013.JPG';
import img14 from '../assets/gallery-images/DSC00014.JPG';
import img15 from '../assets/gallery-images/DSC00015.JPG';
import img20 from '../assets/gallery-images/DSC00020.JPG';
import img21 from '../assets/gallery-images/DSC00021.JPG';
import img25 from '../assets/gallery-images/DSC00025.JPG';
import img28 from '../assets/gallery-images/DSC00028.JPG';
import img37 from '../assets/gallery-images/DSC00037.JPG';
import img45 from '../assets/gallery-images/DSC00045.JPG';
import img47 from '../assets/gallery-images/DSC00047.JPG';
import img49 from '../assets/gallery-images/DSC00049.JPG';
import img53 from '../assets/gallery-images/DSC00053.JPG';
import img54 from '../assets/gallery-images/DSC00054.JPG';

const Gallery = () => {
    const { isDark } = useOutletContext() || { isDark: true };

    const galleryImages = [
        { src: img37, alt: 'Event Photo 37' },
        { src: img45, alt: 'Event Photo 45' },
        { src: img47, alt: 'Event Photo 47' },
        { src: img49, alt: 'Event Photo 49' },
        { src: img53, alt: 'Event Photo 53' },
        { src: img54, alt: 'Event Photo 54' },
        { src: img1, alt: 'Event Photo 1' },
        { src: img2, alt: 'Event Photo 2' },
        { src: img3, alt: 'Event Photo 3' },
        { src: img5, alt: 'Event Photo 5' },
        { src: img6, alt: 'Event Photo 6' },
        { src: img7, alt: 'Event Photo 7' },
        { src: img9, alt: 'Event Photo 9' },
        { src: img10, alt: 'Event Photo 10' },
        { src: img11, alt: 'Event Photo 11' },
        { src: img13, alt: 'Event Photo 13' },
        { src: img14, alt: 'Event Photo 14' },
        { src: img15, alt: 'Event Photo 15' },
        { src: img20, alt: 'Event Photo 20' },
        { src: img21, alt: 'Event Photo 21' },
        { src: img25, alt: 'Event Photo 25' },
        { src: img28, alt: 'Event Photo 28' },
    ];

    return (
        <div className={`w-full h-screen overflow-hidden relative ${isDark ? 'bg-black' : 'bg-gray-100'}`}>
            {/* Header area visual spacing */}
            <div className={`absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none bg-gradient-to-b ${isDark ? 'from-[#8B0000]/20' : 'from-white/20'} to-transparent`} />

            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <h1 className={`text-[15vw] font-black opacity-5 pointer-events-none select-none tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                    GALLERY
                </h1>
            </div>

            <div className="w-full h-full pt-20">
                <DomeGallery
                    images={galleryImages}
                    overlayBlurColor={isDark ? '#000000ff' : '#ffffffff'}
                    minRadius={300} // Reduced for better fit on smaller screens
                    maxRadius={600} // Reduced max constraint
                    fit={0.85}      // Adjusted scale to fit viewport better
                    segments={20}
                />
            </div>
        </div>
    );
};

export default Gallery;
