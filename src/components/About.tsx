
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            About the Conference
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-6">
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            The <strong>International Conference on Intelligent Computing, Communication and Data Science (ICICCDS 2027)</strong> aims to bring together leading academicians, researchers, scientists, industry professionals, innovators, and students from across the globe to exchange and share their research findings, innovative ideas, and practical experiences in the rapidly evolving domains of intelligent computing, communication technologies, and data science.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text mb-6 leading-relaxed text-justify">
            ICICCDS 2027 will serve as a premier interdisciplinary platform for presenting novel advances, emerging trends, challenges, and future directions in Artificial Intelligence, Machine Learning, Intelligent Systems, Data Analytics, Next-Generation Communication Networks, Cloud and Edge Computing, Internet of Things (IoT), Cyber Security, and Smart Technologies.
          </p>
          <p className="font-publico text-lg text-goldsmiths-text leading-relaxed text-justify">
            <strong>The conference seeks to foster collaboration among academia, industry, startups, and research organizations while promoting technological innovations for sustainable digital transformation and intelligent solutions for real-world challenges.</strong>
          </p>
          <Link to="https://cmt3.research.microsoft.com/ICICCDS2027" >
            <Button className="mt-4">Paper Submission Link</Button>
          </Link>
          <p className="font-publico text-lg text-goldsmiths-text mt-6 leading-relaxed text-justify">
            All the accepted and presented papers of ICICCDS 2027 will be published as a proceedings in Springer’s Studies in Autonomic, Data-driven and Industrial Computing (Scopus Indexed)
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
