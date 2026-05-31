import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Network, Cpu, Database, Shield, Rocket } from 'lucide-react';

const ConferenceTracks: React.FC = () => {
  const tracks = [
    {
      id: 1,
      title: "Intelligent Computing & Artificial Intelligence",
      icon: Network,
      topics: [
        "Artificial Intelligence and Expert Systems",
        "Machine Learning and Deep Learning",
        "Neural Networks and Cognitive Computing",
        "Evolutionary Computing",
        "Fuzzy Logic and Soft Computing",
        "Reinforcement Learning",
        "Computer Vision and Image Processing",
        "Natural Language Processing",
        "Generative AI and Large Language Models",
        "Explainable AI (XAI)"
      ]
    },
    {
      id: 2,
      title: "Communication & Networking Technologies",
      icon: Cpu,
      topics: [
        "5G/6G Communication Systems",
        "Wireless and Mobile Networks",
        "IoT and Smart Communication",
        "Software Defined Networks (SDN)",
        "Network Security and Privacy",
        "Edge and Fog Computing",
        "Vehicular Communication Systems",
        "Satellite and Optical Communication",
        "Quantum Communication",
        "Cyber-Physical Systems"
      ]
    },
    {
      id: 3,
      title: "Data Science & Big Data Analytics",
      icon: Database,
      topics: [
        "Big Data Processing and Analytics",
        "Data Mining and Knowledge Discovery",
        "Predictive Analytics",
        "Business Intelligence",
        "Social Media Analytics",
        "Healthcare Data Analytics",
        "Financial Data Analytics",
        "Data Visualization",
        "Intelligent Data Engineering",
        "Real-Time Data Processing"
      ]
    },
    {
      id: 4,
      title: "Cloud, Edge & Distributed Computing",
      icon: Shield,
      topics: [
        "Cloud Computing Architectures",
        "Edge Intelligence",
        "Distributed Systems",
        "Virtualization and Containerization",
        "Serverless Computing",
        "Green Computing",
        "High Performance Computing",
        "Intelligent Resource Management"
      ]
    },
    {
      id: 5,
      title: "Cyber Security & Blockchain",
      icon: Rocket,
      topics: [
        "Information Security",
        "Blockchain Technologies",
        "Digital Forensics",
        "Secure Communication Systems",
        "Privacy-Preserving Techniques",
        "Cryptography and Authentication",
        "AI for Cyber Security"
      ]
    },
    {
      id: 6,
      title: "Smart Systems & Emerging Technologies",
      icon: Rocket,
      topics: [
        "Smart Cities and Smart Governance",
        "Industry 5.0",
        "Robotics and Automation",
        "Intelligent Transportation Systems",
        "Smart Healthcare",
        "Smart Agriculture",
        "Human-Computer Interaction",
        "Sustainable Digital Technologies"
      ]
    }
  ];

  return (
    <section id="tracks" className="py-16 bg-goldsmiths-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-druk text-3xl md:text-4xl text-goldsmiths-text border-b-4 border-goldsmiths-blue pb-2 inline-block">
            Conference Tracks
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {tracks.map((track) => {
            const IconComponent = track.icon;
            return (
              <Card key={track.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-8 w-8 text-goldsmiths-blue" />
                    <CardTitle className="font-druk text-xl text-goldsmiths-text">
                      Track {track.id}
                    </CardTitle>
                  </div>
                  <CardDescription className="font-graphik text-base text-goldsmiths-text">
                    {track.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {track.topics.map((topic, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-goldsmiths-blue mr-2">•</span>
                        <span className="font-publico text-sm text-goldsmiths-text">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;

