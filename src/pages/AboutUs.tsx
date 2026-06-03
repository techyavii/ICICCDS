
import React from 'react';
import Footer from '@/components/Footer';
import { Book, Computer } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(141, 169, 214, 0.8), rgba(141, 169, 214, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <h1 className="font-druk text-3xl md:text-5xl text-white text-center">About Us</h1>
        </div>
      </div>
      
      {/* About the University Section */}
      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/pic1.jpg" 
                alt="Goldsmiths University Main Building" 
                className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-200"
              />
            </div>
            
            <div className="md:w-2/3">
              <h2 className="font-druk text-2xl md:text-3xl text-goldsmiths-text mb-6 border-b-4 border-goldsmiths-blue pb-2 inline-block">
                About the University
              </h2>
              
              <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6">
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  The Universidad Nacional del Altiplano de Puno (UNAP) is one of Peru’s oldest and most respected public universities, established in 1856 in the historic city of Puno. With a strong commitment to academic excellence, research, innovation, and social responsibility, the university has played a pivotal role in the educational and socio-economic development of southern Peru. UNAP offers a diverse range of undergraduate, postgraduate, and doctoral programs across disciplines including engineering, sciences, health, agriculture, business, education, and the humanities.
                </p>
                <p className="font-publico text-lg text-goldsmiths-text mb-4 leading-relaxed">
                  As a leading center of higher education in the Andean region, UNAP fosters an environment that encourages scientific inquiry, technological advancement, and community engagement. The university collaborates with national and international academic institutions to promote research, knowledge exchange, and global learning opportunities. Through its dedication to quality education and sustainable development, UNAP continues to prepare competent professionals and future leaders capable of addressing regional and global challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
