
import React from 'react';
import About from '@/components/About';
import ConferenceHighlights from '@/components/ConferenceHighlights';
import ConferenceTracks from '@/components/ConferenceTracks';
import ImportantDatesSection from '@/components/ImportantDatesSection';
import Footer from '@/components/Footer';
import ImageCarousel from '@/components/ImageCarousel';
import IndexingSection from '@/components/IndexingSection';
import AssociatedPartners from '@/components/AssociatedPartners';
import KeynoteSpeakers from '@/components/KeynoteSpeakers';

const Index: React.FC = () => {
  const carouselImages = [
    { src: "/lovable-uploads/pic1.jpg", alt: "University of Essex Campus" },
    { src: "/lovable-uploads/pic2.jpg", alt: "University of Essex Building" },
    { src: "/lovable-uploads/pic3.jpg", alt: "University of Essex Entrance" },
    { src: "/lovable-uploads/pic4.jpeg", alt: "Aerial view of University of Essex" },
    { src: "/lovable-uploads/pic5.avif", alt: "University of Essex campus with students" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ImageCarousel images={carouselImages} />
      <IndexingSection />
      <About />
      <ConferenceHighlights />
      <ConferenceTracks />
      <ImportantDatesSection />
      <KeynoteSpeakers />
      {/* <AssociatedPartners/> */}
      <Footer />
    </div>
  );
};


export default Index;
