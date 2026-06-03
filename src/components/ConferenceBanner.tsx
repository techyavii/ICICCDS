import React from 'react';
import { Calendar } from 'lucide-react';

const ConferenceBanner = () => {
  return (
    <div 
      className="w-full bg-cover bg-center py-8 relative z-0" 
      style={{ 
        backgroundImage: "url('/lovable-uploads/university-main.jpeg')", 
        backgroundSize: 'cover',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left Logo - Conference Logo */}
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <img 
            src="Logo.png" 
            alt="ICICCDS Logo" 
            className="h-24 md:h-24 w-auto"
          />
        </div>

        {/* Center - Conference Details */}
        <div className="text-center text-white flex-grow">
          <h1 className="text-lg md:text-2xl font-medium tracking-tight mb-2">
            International Conference on Intelligent Computing, Communication and Data Science
          </h1>
          <h2 className="text-base md:text-xl font-medium mb-2">(ICICCDS 2027)</h2>
          <p className="text-sm md:text-base font-medium mb-2">
            Organiser: Postgraduate Unit of Statistics and Informatics, Universidad Nacional del Altiplano de Puno – Perú
          </p>
          <div className="flex items-center justify-center text-sm md:text-base mb-2">
            <Calendar className="mr-2" size={16} />
            <p>January 25-26, 2027</p>
          </div>
          <p className="text-sm md:text-base font-medium text-yellow-300">
            Premier global forum for intelligent computing, communication, and data science
          </p>
        </div>

        {/* Right Logo - University Logo */}
        <div className='flex gap-7 flex-col items-center'>
        <div className=" p-2 rounded-lg shadow-sm">
          <img
            src="/lovable-uploads/logo.png"
            alt="University of Essex"
            className="h-16 md:h-24 p-2 w-auto bg-white rounded-md"
          />
        </div>
         {/* <div className="flex justify-center">
            <img 
              src="/partner/springer.png" 
              alt="Academic Indexing Services - Web of Science, Scopus, IET Inspec, dblp" 
              className="h-16 md:h-16 w-auto rounded-md"
            />
          </div> */}
          </div>
      </div>
    </div>
  );
};

export default ConferenceBanner;
