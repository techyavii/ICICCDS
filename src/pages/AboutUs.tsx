
import React from 'react';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Image with Overlay */}
      <div 
        className="w-full h-64 bg-goldsmiths-blue relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-druk text-3xl md:text-5xl text-white">About ICICCDS 2027</h1>
            <p className="mt-4 text-sm md:text-base text-white/80">
              International Conference on Intelligent Computing, Communication and Data Science
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-goldsmiths-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white shadow-lg border border-gray-200 rounded-lg p-8">
            <div className="mb-10">
              <h2 className="font-druk text-3xl text-goldsmiths-text mb-4">International Conference on Intelligent Computing, Communication and Data Science (ICICCDS 2027)</h2>
              <p className="font-publico text-lg text-goldsmiths-text leading-relaxed mb-4">
                The <strong>International Conference on Intelligent Computing, Communication and Data Science (ICICCDS 2027)</strong> aims to bring together leading academicians, researchers, scientists, industry professionals, innovators, and students from across the globe to exchange and share their research findings, innovative ideas, and practical experiences in the rapidly evolving domains of intelligent computing, communication technologies, and data science.
              </p>
              <p className="font-publico text-lg text-goldsmiths-text leading-relaxed mb-4">
                ICICCDS 2027 will serve as a premier interdisciplinary platform for presenting novel advances, emerging trends, challenges, and future directions in Artificial Intelligence, Machine Learning, Intelligent Systems, Data Analytics, Next-Generation Communication Networks, Cloud and Edge Computing, Internet of Things (IoT), Cyber Security, and Smart Technologies.
              </p>
              <p className="font-publico text-lg text-goldsmiths-text leading-relaxed">
                The conference seeks to foster collaboration among academia, industry, startups, and research organizations while promoting technological innovations for sustainable digital transformation and intelligent solutions for real-world challenges. The event will include keynote talks, invited lectures, technical paper presentations, workshops, tutorials, industry sessions, and networking opportunities.
              </p>
            </div>

            <div className="grid gap-8">
              <div>
                <h3 className="font-druk text-2xl text-goldsmiths-text mb-4">Conference Details</h3>
                <ul className="space-y-3 font-publico text-lg text-goldsmiths-text">
                  <li><strong>Date:</strong> 25th – 26th January 2027</li>
                  <li><strong>Organised by:</strong> Postgraduate Unit of Statistics and Informatics, Universidad Nacional del Altiplano de Puno – Perú</li>
                </ul>
              </div>

              <div>
                <h3 className="font-druk text-2xl text-goldsmiths-text mb-4">Conference Themes & Tracks</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 1: Intelligent Computing & Artificial Intelligence</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Artificial Intelligence and Expert Systems</li>
                      <li>Machine Learning and Deep Learning</li>
                      <li>Neural Networks and Cognitive Computing</li>
                      <li>Evolutionary Computing</li>
                      <li>Fuzzy Logic and Soft Computing</li>
                      <li>Reinforcement Learning</li>
                      <li>Computer Vision and Image Processing</li>
                      <li>Natural Language Processing</li>
                      <li>Generative AI and Large Language Models</li>
                      <li>Explainable AI (XAI)</li>
                    </ul>
                  </div>

                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 2: Communication & Networking Technologies</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>5G/6G Communication Systems</li>
                      <li>Wireless and Mobile Networks</li>
                      <li>IoT and Smart Communication</li>
                      <li>Software Defined Networks (SDN)</li>
                      <li>Network Security and Privacy</li>
                      <li>Edge and Fog Computing</li>
                      <li>Vehicular Communication Systems</li>
                      <li>Satellite and Optical Communication</li>
                      <li>Quantum Communication</li>
                      <li>Cyber-Physical Systems</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 3: Data Science & Big Data Analytics</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Big Data Processing and Analytics</li>
                      <li>Data Mining and Knowledge Discovery</li>
                      <li>Predictive Analytics</li>
                      <li>Business Intelligence</li>
                      <li>Social Media Analytics</li>
                      <li>Healthcare Data Analytics</li>
                      <li>Financial Data Analytics</li>
                      <li>Data Visualization</li>
                      <li>Intelligent Data Engineering</li>
                      <li>Real-Time Data Processing</li>
                    </ul>
                  </div>

                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 4: Cloud, Edge & Distributed Computing</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Cloud Computing Architectures</li>
                      <li>Edge Intelligence</li>
                      <li>Distributed Systems</li>
                      <li>Virtualization and Containerization</li>
                      <li>Serverless Computing</li>
                      <li>Green Computing</li>
                      <li>High Performance Computing</li>
                      <li>Intelligent Resource Management</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 5: Cyber Security & Blockchain</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Information Security</li>
                      <li>Blockchain Technologies</li>
                      <li>Digital Forensics</li>
                      <li>Secure Communication Systems</li>
                      <li>Privacy-Preserving Techniques</li>
                      <li>Cryptography and Authentication</li>
                      <li>AI for Cyber Security</li>
                    </ul>
                  </div>

                  <div className="bg-goldsmiths-beige p-5 rounded-lg border border-gray-200">
                    <h4 className="font-druk text-xl mb-3">Track 6: Smart Systems & Emerging Technologies</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Smart Cities and Smart Governance</li>
                      <li>Industry 5.0</li>
                      <li>Robotics and Automation</li>
                      <li>Intelligent Transportation Systems</li>
                      <li>Smart Healthcare</li>
                      <li>Smart Agriculture</li>
                      <li>Human-Computer Interaction</li>
                      <li>Sustainable Digital Technologies</li>
                    </ul>
                  </div>
                </div>
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
