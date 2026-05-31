import React from 'react';
import Footer from '@/components/Footer';

const CallForPapers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="font-druk text-3xl md:text-4xl text-[#001324] mb-6">Call for Papers — ICICCDS 2027</h1>

          <div className="mb-8">
            <p className="font-publico text-lg mb-4">
              The Organizing Committee of the <strong>International Conference on Intelligent Computing, Communication and Data Science (ICICCDS 2027)</strong> cordially invites researchers, academicians, industry experts, scientists, practitioners, and students to submit original research papers, review articles, case studies, and innovative applications for presentation at the conference.
            </p>
            <p className="font-publico text-lg mb-4">
              ICICCDS 2027 aims to bring together leading academicians, researchers, scientists, industry professionals, innovators, and students from across the globe to exchange and share their research findings, innovative ideas, and practical experiences in the rapidly evolving domains of intelligent computing, communication technologies, and data science.
            </p>
            <p className="font-publico text-lg">
              ICICCDS 2027 will serve as a premier interdisciplinary platform for presenting novel advances, emerging trends, challenges, and future directions in Artificial Intelligence, Machine Learning, Intelligent Systems, Data Analytics, Next-Generation Communication Networks, Cloud and Edge Computing, Internet of Things (IoT), Cyber Security, and Smart Technologies.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-druk text-xl">Track 1: Intelligent Computing & Artificial Intelligence</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
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

              <div>
                <h4 className="font-druk text-xl">Track 2: Communication & Networking Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
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

              <div>
                <h4 className="font-druk text-xl">Track 3: Data Science & Big Data Analytics</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
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

              <div>
                <h4 className="font-druk text-xl">Track 4: Cloud, Edge & Distributed Computing</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
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

              <div>
                <h4 className="font-druk text-xl">Track 5: Cyber Security & Blockchain</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
                  <li>Information Security</li>
                  <li>Blockchain Technologies</li>
                  <li>Digital Forensics</li>
                  <li>Secure Communication Systems</li>
                  <li>Privacy-Preserving Techniques</li>
                  <li>Cryptography and Authentication</li>
                  <li>AI for Cyber Security</li>
                </ul>
              </div>

              <div>
                <h4 className="font-druk text-xl">Track 6: Smart Systems & Emerging Technologies</h4>
                <ul className="list-disc pl-6 space-y-1 font-graphik mt-2">
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

          {/* <div className="mt-8">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Important Dates</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Paper Submission Deadline: <strong>30th December 2025</strong></li>
              <li>Acceptance Notification Due: <strong>30th January 2026</strong></li>
              <li>Registration Due: <strong>30th December 2025</strong></li>
              <li>Camera Ready Submission: <strong>30th January 2026</strong></li>
              <li>Conference Dates: <strong>22nd - 23rd July 2026</strong></li>
            </ul>
          </div> */}

          <div className="mt-10">
            <h3 className="font-druk text-xl text-[#001324] mb-4">Submission Guidelines</h3>
            <ul className="list-disc pl-6 space-y-2 font-graphik">
              <li>Submissions must be original and unpublished.
              Authors should follow the conference formatting instructions (details on the website).</li>
              <li>All submissions will undergo peer review by the Technical Program Committee.</li>
              <li>Accepted papers will be included in the conference proceedings; selected high-quality papers may be invited for journal special issues.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CallForPapers;
