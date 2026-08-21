import React from 'react';
import Footer from '@/components/Footer';

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 font-publico">Publications</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-6">All the accepted and presented papers of ICICCDS 2027 will be published as a proceedings in Springer’s Studies in Autonomic, Data-driven and Industrial Computing (Scopus Indexed).
            </p>
            Link: <a href="https://www.springer.com/series/16624" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              https://www.springer.com/series/16624
            </a>
            <div className="flex justify-center mt-6">
              <img 
                src="/Publication_pic.jpeg" 
                alt="Academic Indexing Services - Web of Science, Scopus, IET Inspec, dblp" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;