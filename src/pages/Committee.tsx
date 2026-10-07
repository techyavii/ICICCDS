import React from 'react';
import Footer from '@/components/Footer';

const Committee = () => {
  const patron = [
    {
      name: "Dr. Pragati Kumar",
      affiliation: "Vice Chancellor and Prof., Shri Mata Vaishno Devi University, Katra"
    }
  ];

  const coPatron = [
    {
      name: "Sh. Ajay Kumar Sharma (JKAS)",
      affiliation: "Registrar, Shri Mata Vaishno Devi University, Katra"
    }
  ];

  const generalChairs = [
    {
      name: "Prof. Valdimiro Ibañez Quispe",
      affiliation: "Universidad Nacional del Altiplano de Puno – Perú"
    },
    {
      name: "Dr. Ginu Rajan",
      affiliation: "Cardiff Metropolitan University, UK"
    },
    {
      name: "Prof. Asok De",
      affiliation: "Professor, School of ECE, Shri Mata Vaishno Devi University, Katra"
    }
  ];

  const conferenceChairs = [
    {
      name: "Prof. V. K. Bhat",
      affiliation: "Professor, School of Mathematics, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Prof. Zdzislaw Polkowski",
      affiliation: "Professor, The Karkonosze University of Applied Sciences in Jelenia Góra, Poland"
    }
  ];

  const organisingChairs = [
    {
      name: "Prof. Fred Torres-Cruz",
      affiliation: "Universidad Nacional del Altiplano de Puno – Perú"
    },
    {
      name: "Prof. Baijnath Kaushik",
      affiliation: "Professor, School of CSE, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Prof. Kumud Ranjan Jha",
      affiliation: "Dean (Faculty of Engineering) & Professor, School of ECE, SMVD University"
    },
    {
      name: "Prof. Kavita Sharma",
      affiliation: "Professor, Galgotias College of Engineering and Technology, India"
    }
  ];

  const coOrganisingSecretaries = [
    {
      name: "Dr. Sunanda",
      affiliation: "Associate Professor, Head, School of CSE, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Prof. Amit Kant Pandit",
      affiliation: "Professor, School of ECE, Shri Mata Vaishno Devi University, Katra"
    }
  ];

  const technicalProgramChairs = [
    {
      name: "Dr. Charles Ignacio Mendoza Mollocondo",
      affiliation: "Universidad Nacional del Altiplano, Puno"
    },
    {
      name: "Dr. Weiwei Jiang",
      affiliation: "Beijing University of Posts and Telecommunications, China"
    },
    {
      name: "Dr. Rajkumar Singh Rathore",
      affiliation: "Cardiff Metropolitan University, UK"
    },
    {
      name: "Dr. Bernabé Canqui Flores",
      affiliation: "Universidad Nacional del Altiplano, Puno"
    },
    {
      name: "Dr. Tina Tomazic",
      affiliation: "University of Maribor, Slovenia, Europe"
    }
  ];

  const publicationChairs = [
    {
      name: "Dr. Zdzislaw Polkowski",
      affiliation: "The Karkonosze University of Applied Sciences, Poland"
    },
    {
      name: "Dr. Leonel Coyla Idme",
      affiliation: "Universidad Nacional del Altiplano, Puno"
    },
    {
      name: "Utku Kose",
      affiliation: "Suleyman Demirel University, Isparta, Turkey"
    },
    {
      name: "Dr. Vipul Sharma",
      affiliation: "Assistant Professor, School of CSE, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Mr. Sanjay Kumar Sharma",
      affiliation: "Assistant Professor, School of CSE, SMVD University, India"
    },
    {
      name: "Dr. Rohit Tanwar",
      affiliation: "Associate Professor, School of CSE, SMVD University, India"
    }
  ];

  const publicityChairs = [
    {
      name: "Dr. José Panfilo Tito Lipa",
      affiliation: "Universidad Nacional del Altiplano, Puno"
    },
    {
      name: "Mg. Leonid Alemán Gonzales",
      affiliation: "Universidad Nacional del Altiplano, Puno"
    },
    {
      name: "Prof. Howard Chuan-Ming Liu",
      affiliation: "National Taipei University of Technology, Taiwan"
    },
    {
      name: "Dr. Gulshan Shrivastava",
      affiliation: "Bennett University, Greater Noida, India"
    },
    {
      name: "Dr. Deepak Gupta",
      affiliation: "Maharaja Agrasen Institute of Technology, Delhi, India"
    }
  ];

  const convener = [
    {
      name: "Prof. Baijnath Kaushik",
      affiliation: "Professor, School of CSE, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Dr. Jafar A. Alzubi",
      affiliation: "Al-Balqa Applied University, Salt, Jordan"
    }
  ];

  const coConvener = [
    {
      name: "Dr. George A. Tsihrintzis",
      affiliation: "University of Piraeus, Greece"
    },
    {
      name: "Prof. Ananga Kumar Das",
      affiliation: "School of Mathematics Dean, Research and Development, Shri Mata Vaishno Devi University, Katra"
    },
    {
      name: "Dr. Shashi Bhushan Kotwal",
      affiliation: "Associate Professor, School of ECE, SMVD University, India"
    },
    {
      name: "Mr. Swastik Gupta",
      affiliation: "Assistant Professor, School of ECE, Shri Mata Vaishno Devi University, Katra"
    }
  ];

  const advisoryCommittee = [
    { name: "Manuel Ibarra Cabrera", affiliation: "Universidad Nacional Micaela Bastidas, Apurimac" },
    { name: "Ecler Mamani Vilca", affiliation: "Universidad Nacional Micaela Bastidas, Apurimac" },
    { name: "Nuno M. Garcia", affiliation: "University of Beira Interior, Portugal" },
    { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, USA" },
    { name: "Prajoy Podder", affiliation: "Institute of ICT, BUET, Dhaka" },
    { name: "M. Rubaiyat Hossain Mondal", affiliation: "Institute of ICT, BUET, Dhaka" },
    { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
    { name: "Khan Muhammad", affiliation: "Sejong University, South Korea" },
    { name: "Yenumula B Reddy", affiliation: "Grambling State University, USA" },
    { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
    { name: "Flah Aymen", affiliation: "National School of Engineering of Gabes, Tunisia" },
    { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
    { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
    { name: "Gautam Srivastava", affiliation: "Brandon University, Canada" },
    { name: "Mahendra K. Shukla", affiliation: "IIIT Gwalior, India" },
    { name: "Vassilis C. Gerogiannis", affiliation: "University of Thessaly, Greece" },
    { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
    { name: "Jagpreet Singh", affiliation: "IIT Ropar, India" },
    { name: "Muhibul Haque Bhuyan", affiliation: "Southeast University, Bangladesh" }
  ];

  const technicalProgramCommittee = [
    { name: "Carlos Rompante Da Cunha", affiliation: "Administração e Turismo, Portugal" },
    { name: "Hongbo Du", affiliation: "University of Buckingham, UK" },
    { name: "Sara Paiva", affiliation: "Instituto Politécnico de Viana do Castelo, Portugal" },
    { name: "Manuel J. Cabral S. Reis", affiliation: "UTAD University, Portugal" },
    { name: "Rajeev Kanth", affiliation: "Savonia University of Applied Sciences, Finland" },
    { name: "Rosdiadee Nordin", affiliation: "Sunway University, Malaysia" },
    { name: "Dijana Oreski", affiliation: "University of Zagreb, Croatia" },
    { name: "Jafar A. Alzubi", affiliation: "Al-Balqa Applied University, Jordan" },
    { name: "Alex Norta", affiliation: "Tallinn University of Technology, Estonia" },
    { name: "Utku Kose", affiliation: "Suleyman Demirel University, Turkey" },
    { name: "Oana Geman", affiliation: "Chalmers University of Technology, Sweden" },
    { name: "Mohammad Shojafar", affiliation: "University of Surrey, UK" },
    { name: "Anish Jindal", affiliation: "Durham University, UK" },
    { name: "Gagangeet Singh Aujla", affiliation: "Durham University, UK" },
    { name: "Sachin Kumar", affiliation: "South Ural State University, Russia" },
    { name: "Prayag Tiwari", affiliation: "Halmstad University, Sweden" },
    { name: "Amit Kumar Jaiswal", affiliation: "University of Surrey, UK" },
    { name: "Qianqian Xie", affiliation: "University of Manchester, UK" },
    { name: "Francesco Piccialli", affiliation: "University of Naples Federico II, Italy" },
    { name: "Ashiq Anjum", affiliation: "University of Leicester, UK" },
    { name: "Yu-Dong Zhang", affiliation: "University of Leicester, UK" },
    { name: "George Argota Pérez", affiliation: "Universidad de La Habana, Cuba" },
    { name: "Cleto De la Torre Dueñas", affiliation: "Universidad Nacional San Antonio Abad, Cusco" },
    { name: "Jorge Santiago Garate Quispe", affiliation: "Universidad Nacional Amazónica de Madre de Dios, Perú" },
    { name: "Renzo Apaza Cutipa", affiliation: "Universidad Nacional del Altiplano, Puno" },
    { name: "Angel Javier Quispe Carita", affiliation: "Universidad Nacional del Altiplano, Puno" },
    { name: "Abhishek Swaroop", affiliation: "Bhagwan Parshuram Institute of Technology, India" },
    { name: "Giorgos Karagiannidis", affiliation: "Aristotle University of Thessaloniki, Greece" },
    { name: "Fides del Castillo", affiliation: "De La Salle University, Philippines" },
    { name: "Nuno M. Garcia", affiliation: "University of Beira Interior, Portugal" },
    { name: "Jaafar Alghazo", affiliation: "Virginia Military Institute, USA" },
    { name: "Daniel Nogueira", affiliation: "University of Minho, Brazil" },
    { name: "Yenumula B Reddy", affiliation: "Grambling State University, USA" },
    { name: "Alireza Jolfaei", affiliation: "Macquarie University, Australia" },
    { name: "Placido Rogerio Pinheiro", affiliation: "University of Fortaleza, Brazil" },
    { name: "Daniela Clara Moraru", affiliation: "University of Luxembourg, Luxembourg" },
    { name: "Rab Nawaz", affiliation: "University of Essex, UK" },
    { name: "Vijay Bhaskar Semwal", affiliation: "MANIT Bhopal, India" },
    { name: "Kashif Saleem", affiliation: "Universiti Teknologi Malaysia, Riyadh, Saudi Arabia" },
    { name: "Kemal Polat", affiliation: "Abant Izzet Baysal University, Turkey" },
    { name: "Juhriyansyah Dalle", affiliation: "Universitas Lambung Mangkurat, Indonesia" },
    { name: "Sarada Prasad Gochhayat", affiliation: "IIT Jammu, India" },
    { name: "Ilya Levin", affiliation: "Tel Aviv University, Israel" },
    { name: "Lalit Garg", affiliation: "University of Malta, Msida, Malta" },
    { name: "Arij Naser Abougreen", affiliation: "University of Tripoli, Libya" },
    { name: "Iwan Adhicandra", affiliation: "University of Sydney, Australia" },
    { name: "Meng Li", affiliation: "Hefei University of Technology, China" },
    { name: "Alfredo Grieco", affiliation: "Politecnico di Bari, Italy" },
    { name: "Quoc-Viet Pham", affiliation: "Pusan National University, South Korea" },
    { name: "Tu Nguyen", affiliation: "Kennesaw State University, USA" },
    { name: "Christos Douligeris", affiliation: "University of Piraeus, Greece" },
    { name: "Assunta Di Vaio", affiliation: "University of Naples Parthenope, Italy" }
  ];

  const CommitteeSection = ({
    title,
    members
  }: {
    title: string;
    members: { name: string; affiliation: string }[];
  }) => (
    <div className="mb-8">
      <h3 className="font-druk text-xl md:text-2xl text-goldsmiths-text mb-4 border-b-2 border-goldsmiths-blue pb-2">
        {title}
      </h3>

      <div className="space-y-2">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-goldsmiths-beige p-3 rounded"
          >
            <p className="font-graphik font-bold text-goldsmiths-text">
              {member.name}
            </p>
            <p className="font-publico text-sm text-goldsmiths-text">
              {member.affiliation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-druk text-3xl md:text-4xl text-goldsmiths-text text-center mb-8 border-b-4 border-goldsmiths-blue pb-2 inline-block mx-auto">
            Committee
          </h1>

          <div className="space-y-8">
            <CommitteeSection
              title="Patron"
              members={patron}
            />

            <CommitteeSection
              title="Co-Patron"
              members={coPatron}
            />

            <CommitteeSection
              title="General Chair(s)"
              members={generalChairs}
            />

            <CommitteeSection
              title="Conference Chair"
              members={conferenceChairs}
            />

            <CommitteeSection
              title="Organising Chair(s)"
              members={organisingChairs}
            />

            <CommitteeSection
              title="Co-Organising Secretary"
              members={coOrganisingSecretaries}
            />

            <CommitteeSection
              title="Technical Program Chair(s)"
              members={technicalProgramChairs}
            />

            <CommitteeSection
              title="Publication Chair(s)"
              members={publicationChairs}
            />

            <CommitteeSection
              title="Publicity Chair(s)"
              members={publicityChairs}
            />

            <CommitteeSection
              title="Convener"
              members={convener}
            />

            <CommitteeSection
              title="Co-Convener"
              members={coConvener}
            />

            <CommitteeSection
              title="Advisory Committee"
              members={advisoryCommittee}
            />

            <CommitteeSection
              title="Technical Program Committee"
              members={technicalProgramCommittee}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Committee;