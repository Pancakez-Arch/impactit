import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Kvalitetssikret utstyr',
      description: 'Alt vårt utstyr gjennomgår grundige inspeksjoner og vedlikehold for å sikre din trygghet.',
    },
    {
      icon: Clock,
      title: 'Fleksibel utleie',
      description: 'Vi tilbyr utleie fra dagsbasis til lengre perioder, tilpasset dine behov.',
    },
    {
      icon: Users,
      title: 'Ekspert veiledning',
      description: 'Vårt erfarne team gir deg profesjonell rådgivning og opplæring i bruk av utstyret.',
    },
    {
      icon: Award,
      title: '10 års erfaring',
      description: 'Med over et tiår i bransjen har vi opparbeidet solid kompetanse og kundetillit.',
    },
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Om Oss</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <feature.icon className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
