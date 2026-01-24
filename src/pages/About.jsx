/**
 * About Page Component
 * Elegant animated About page with cinematic floating background
 */

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

// 👉 IMPORT ALL IMAGES CORRECTLY
import girijaImg from "../assets/Girija.jpeg";
import Ezhumalai from "../assets/Ezhumalai.jpeg";
import kumari from "../assets/Kumari.jpeg";
import Shajin from "../assets/Shajin.jpeg";
import Burhan from "../assets/Burhan.jpeg";
import Mahadiya from "../assets/Mahadiya.jpeg";
import kamalika from "../assets/kamalika.jpeg";
import lakshmi from "../assets/Lakshmi.jpeg";
import jothishwaran from "../assets/Jothishwaran.jpeg";
import naren from "../assets/Naren.jpeg";
import hasika from "../assets/Hasika.jpeg";
import Shrutheega from "../assets/Shrutheega.jpeg";
import deepak from "../assets/deepak.jpeg";
import dharma from "../assets/dharma.jpeg";
import vaman from "../assets/dharma.jpeg";
import Sanjeev from "../assets/dharma.jpeg";
import Bhunvanesh from "../assets/dharma.jpeg";
import mathin from "../assets/dharma.jpeg";


const About = () => {
  const coordinators = [
    { id: 1, name: "Kumari Selvi C", role: "President", image: kumari, gmail: "selvi16122005@gmail.com", linkedin: "http://www.linkedin.com/in/kumari-selvi-2314032b8" },
    { id: 2, name: "Shajin S P", role: "Vice President", image: Shajin, gmail: "shajinsree03@gmail.com", linkedin: "http://www.linkedin.com/in/shajinaiml" },
    { id: 3, name: "Mohammed Burhan K", role: "Secretary", image: Burhan, gmail: "23204030@rmd.ac.in", linkedin: "https://www.linkedin.com/in/mohammed-burhan-61a710285" },
    { id: 4, name: "Mahadiya Maheen K F", role: "Joint Secretary", image: Mahadiya, gmail: "23204027@rmd.ac.in", linkedin: "https://www.linkedin.com/in/mahadiya-maheen-k-f-b236b629a/" },
    { id: 5, name: "Ezhumalai A", role: "Treasurer", image: Ezhumalai, gmail: "23204010@rmd.ac.in", linkedin: "https://www.linkedin.com/in/ezhumalai-a-47a05a2b4" },
    { id: 6, name: "Kamalika M", role: "Office Bearer", image: kamalika, gmail: "kamalikamano0615@gmail.com", linkedin: "https://www.linkedin.com/in/kamalika-m01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { id: 7, name: "Lakshmi Shri K", role: "Office Bearer", image: lakshmi, gmail: "lshri2804@gmail.com", linkedin: "https://www.linkedin.com/in/lakshmi-shri-41705a2b0/" },
    { id: 8, name: "Jothishwaran S", role: "Office Bearer", image: jothishwaran, gmail: "jothishwar007@gmail.com", linkedin: "https://www.linkedin.com/in/jothishwaran-s-914406314?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { id: 9, name: "Mathinshack Meshack", role: "Office Bearer", image: mathin, gmail: "#", linkedin: "#" },
  ];

  const developers = [
    { id: 1, name: "Bhuvanesh Kumar S", image:Bhunvanesh, gmail: " bhuvaneshkumar433@gmail.com", linkedin: " https://www.linkedin.com/in/bhuvaneshkumar08/" },
    { id: 2, name: "Dharmadurai K", image: dharma, gmail: " dharmaduraik04@gmail.com", linkedin: "https://in.linkedin.com/in/dharmadurai-k-39a9a2293" },
    { id: 3, name: "Girija",image:girijaImg, gmail: "girijasd904@gmail.com", linkedin: "https://www.linkedin.com/in/girija06/" },
    { id: 4, name: "Hasika",image: hasika, gmail: "hasika2014raj@gmail.com", linkedin: "www.linkedin.com/in/hasika-rajendran-16083a2a7" },
    { id: 5, name: "Om Naren",image: naren, gmail: "naren220305@gmail.com", linkedin: "https://www.linkedin.com/in/om-naren-d-68a2502b5" },
    { id: 6, name: "Sanjeev Raj",image: Sanjeev, gmail: "sr900108@gmail.com ", linkedin: "https://www.linkedin.com/in/sanjeevrajg2312" },
    { id: 7, name: "Shajin SP",image: Shajin, gmail: "shajinsree03@gmail.com", linkedin: "www.linkedin.com/in/shajinaiml" },
    { id: 8, name: "Ssrutheega G I",image: Shrutheega, gmail: "https://in.linkedin.com/in/ssrutheega-g-i", linkedin: "https://in.linkedin.com/in/ssrutheega-g-i" },
    { id: 9, name: "Vijji Deepak",image: deepak, gmail: "deepakvijji1@gmail.com", linkedin: "www.linkedin.com/in/vijji-deepak-6b0a0b312" },
    { id: 10, name: "Vaman Prabhakar",image:vaman, gmail: " vamanprabhakar03@gmail.com", linkedin: "https://www.linkedin.com/in/vaman-prabakar-32b6072a1/" },
  ];

  return (
    <div className="relative isolate min-h-screen text-white overflow-hidden bg-black">


      {/* 🌈 GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-[radial-gradient(circle_at_20%_20%,#7c3aed,transparent_40%),radial-gradient(circle_at_80%_30%,#ec4899,transparent_40%),radial-gradient(circle_at_50%_80%,#3b82f6,transparent_40%)]" />
      {/* 🌌 FLOATING BLOBS */}
      {/* 🌌 FLOATING BLOBS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="blob bg-purple-600/30 top-10 left-10"
          style={{ width: "500px", height: "500px" }}
        />
        <div
          className="blob bg-pink-600/30 top-1/3 right-10 animation-delay-2000"
          style={{ width: "350px", height: "350px" }}
        />
        <div
          className="blob bg-blue-600/30 bottom-20 left-1/4 animation-delay-4000"
          style={{ width: "600px", height: "600px" }}
        />
        <div
          className="blob bg-indigo-600/20 bottom-10 right-1/4 animation-delay-6000"
          style={{ width: "280px", height: "280px" }}
        />
      </div>

      {/* ✨ FLOATING PARTICLES */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {[...Array(500)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${15 + Math.random() * 40}s`,
            }}
          />
        ))}
      </div>


      {/* HERO */}
      <section className="h-[70vh] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-red-500 uppercase tracking-widest mb-4">Mission Control</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">The Architects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The minds engineering Avinyaa 26 — planning, building, launching.
          </p>
        </div>
      </section>

      <AnimatedSection title="Event Coordinators" data={coordinators} />
      <AnimatedSection title="Developers" data={developers} />

      {/* PAGE CSS */}
      <style>{`
        @keyframes scroll-linear {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-gradient {
          animation: gradientMove 40s linear infinite;
        }

        @keyframes gradientMove {
          from { filter: hue-rotate(0deg); }
          to { filter: hue-rotate(360deg); }
        }
        
        .blob {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(120px);
          animation: floatBlob 30s ease-in-out infinite;
        }

        @keyframes floatBlob {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(120px, -100px);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .particle {
          position: absolute;
          bottom: -10px;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: rise linear infinite;
        }

        @keyframes rise {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          to {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }

      `}</style>
    </div>
  );
};

const AnimatedSection = ({ title, data }) => (
  <section className="py-20 overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

    <div className="relative max-w-[1200px] mx-auto overflow-hidden">
      <div
        className="flex gap-8 px-10"
        style={{
          animation: "scroll-linear 25s linear infinite",
          width: "max-content",
        }}
      >
        {[...data, ...data].map((p, i) => (
          <div
            key={i}
            className="relative min-w-[320px] bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-800 group hover:border-red-500 transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-[22rem] object-cover object-top"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-400">{p.role}</p>
            </div>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-end pb-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-sm mb-4">Connect with me</p>
              <div className="flex gap-6 text-2xl">
                {p.gmail !== "#" && (
                  <a
                    href={`mailto:${p.gmail}`}
                    className="hover:text-red-400"
                  >
                    <MdEmail />
                  </a>
                )}
                {p.linkedin !== "#" && (
                  <a
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500"
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
