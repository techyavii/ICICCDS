import React from 'react';
import Footer from '@/components/Footer';
import { Map, MapPin, Building } from 'lucide-react';

const ConferenceVenue = () => {
  const preConferenceVenueImages = [
    {
      src: "/venue/jammu1.webp",
      alt: "Shri Mata Vaishno Devi University campus"
    },
    {
      src: "/venue/jammu2.webp",
      alt: "Scenic view of the university campus"
    },
    {
      src: "/venue/jammu3.webp",
      alt: "University buildings in the Himalayan foothills"
    },
    {
      src: "/venue/jammu4.webp",
      alt: "Landscape around Shri Mata Vaishno Devi University"
    }
  ];

  const venueImages = [
    {
      src: "/lovable-uploads/pic1.jpg",
      alt: "Aerial view of Universidad Nacional del Altiplano de Puno"
    },
    {
      src: "/lovable-uploads/pic2.jpg",
      alt: "UNAP campus with students"
    },
    {
      src: "/lovable-uploads/pic3.jpg",
      alt: "UNAP main building"
    },
    {
      src: "/lovable-uploads/pic4.jpeg",
      alt: "Student life at UNAP"
    }
  ];

  const locationImages = [
    {
      src: "/lovable-uploads/peru1.jpg",
      alt: "Puno city view"
    },
    {
      src: "/lovable-uploads/peru2.jpg",
      alt: "Lake Titicaca"
    },
    {
      src: "/lovable-uploads/peru3.jpg",
      alt: "Puno cultural heritage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
            ABOUT THE UNIVERSITY
          </h1>

          {/* Pre-conference venue */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
              PRE-CONFERENCE VENUE
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="grid grid-cols-2 gap-4">
                {preConferenceVenueImages.map((image) => (
                  <div
                    key={image.src}
                    className="bg-white rounded-lg overflow-hidden shadow-md"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  School of CSE, Shri Mata Vaishno Devi University, Katra,
                  Jammu and Kashmir, India
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Shri Mata Vaishno Devi University, located in Katra, Jammu
                  and Kashmir, India, offers a serene and inspiring setting
                  for academic gatherings. Nestled close to the famous Vaishno
                  Devi pilgrimage site, the university combines modern
                  infrastructure with a scenic backdrop of the Himalayan
                  foothills. Its well-equipped lecture halls, conference
                  facilities, and research centers make it an ideal venue for
                  scholarly events, fostering collaboration and knowledge
                  exchange in a peaceful and culturally rich environment.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  LOCATION
                </h3>
                <div className="flex items-start gap-3 mb-3">
                  <Building className="mt-1 flex-shrink-0" size={20} />
                  <p>
                    School of CSE, Shri Mata Vaishno Devi University, Katra,
                    Jammu and Kashmir, India
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 flex-shrink-0" size={20} />
                  <p>Jammu and Kashmir, India</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <iframe
                  title="Map to Shri Mata Vaishno Devi University"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26780.205116611865!2d74.91769449877073!3d32.96353125244632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e7f68e599872f%3A0xed34304519ea1c71!2sShri%20Mata%20Vaishno%20Devi%20University!5e0!3m2!1sen!2sin!4v1791396482477!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">
                JAMMU AND KASHMIR
              </h3>
              <p className="text-justify text-gray-700 leading-relaxed">
                Jammu and Kashmir, celebrated as the “Paradise on Earth,”
                entices visitors with its breathtaking landscapes, ranging
                from the tranquil Dal Lake and vibrant Mughal Gardens of
                Srinagar to the snow-clad slopes of Gulmarg and the lush,
                flower-filled meadows of Pahalgam. The region is not only rich
                in natural wonders but also steeped in cultural history,
                offering a blend of adventure, spiritual heritage, and warm
                hospitality. For those attending conferences, the opportunity
                to explore these stunning sites transforms every visit into a
                truly memorable experience.
              </p>
            </div>
          </section>

          {/* University Section */}
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
              CONFERENCE VENUE
            </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="grid grid-cols-2 gap-4">
              {venueImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                Postgraduate Unit of Statistics and Informatics
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                The Universidad Nacional del Altiplano de Puno (UNAP) is one of
                Peru’s oldest and most respected public universities,
                established in 1856 in the historic city of Puno. With a strong
                commitment to academic excellence, research, innovation, and
                social responsibility, the university has played a pivotal role
                in the educational and socio-economic development of southern
                Peru.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                UNAP offers a diverse range of undergraduate, postgraduate, and
                doctoral programs across disciplines including engineering,
                sciences, health, agriculture, business, education, and the
                humanities. Through its dedication to quality education and
                sustainable development, UNAP continues to prepare competent
                professionals and future leaders capable of addressing regional
                and global challenges.
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4 text-blue-600">
                LOCATION
              </h2>

              <div className="flex items-start gap-3 mb-3">
                <Building className="mt-1 flex-shrink-0" size={20} />
                <p>
                  Postgraduate Unit of Statistics and Informatics,
                  Universidad Nacional del Altiplano de Puno – Perú.
                </p>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <p>Av. Floral 200, Puno 21001, Peru</p>
              </div>

              <a
                href="https://www.google.com/maps?q=Universidad+Nacional+del+Altiplano+de+Puno"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mt-2"
              >
                <Map className="mr-1" size={16} />
                View on Google Maps
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Universidad+Nacional+del+Altiplano+de+Puno&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Puno Section */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
              PUNO, PERU
            </h2>

            <p className="mb-6 text-justify text-gray-700">
              Puno is a vibrant city located on the shores of the famous Lake
              Titicaca, the highest navigable lake in the world. Known as the
              folklore capital of Peru, Puno offers visitors a unique blend of
              cultural heritage, breathtaking natural landscapes, and rich
              traditions. The city serves as a gateway to the floating islands
              of the Uros people and numerous archaeological and historical
              attractions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {locationImages.map((image, index) => (
                <div key={index} className="bg-black p-2 rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConferenceVenue;