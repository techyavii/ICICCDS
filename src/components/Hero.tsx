
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-[60vh] flex items-center justify-center bg-goldsmiths-blue relative pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 py-14 text-center text-white">
        <h1 className="font-druk text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight text-center">
          International Conference on<br />Intelligent Computing, Communication and Data Science
        </h1>
        <h2 className="font-graphik text-xl md:text-2xl lg:text-3xl mb-6 text-goldsmiths-yellow text-center">
          (ICICCDS 2027)
        </h2>
        <p className="font-graphik text-lg md:text-xl mb-4 text-center text-goldsmiths-yellow">
          Jointly Organised by
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
          <p className="font-graphik text-base md:text-lg text-center max-w-xl">
            Postgraduate Unit of Statistics and Informatics, Universidad Nacional del Altiplano de Puno – Perú
          </p>
          <div className="hidden md:block h-10 w-px bg-white/70"></div>
          <p className="font-graphik text-base md:text-lg text-center max-w-xl">
            School of CSE, Shri Mata Vaishno Devi University, Katra, Jammu and Kashmir, India
          </p>
        </div>
        <p className="font-graphik text-lg md:text-xl mb-8 text-center">
          January 25-26, 2027
        </p>
        <p className="font-publico text-base md:text-lg mb-8 text-center">
          Bringing together researchers and industry on AI, IoT, data science, and intelligent communication systems
        </p>
        <button className="bg-goldsmiths-yellow text-goldsmiths-text hover:bg-opacity-90 transition-colors font-graphik font-bold py-3 px-8 rounded-md text-lg">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
