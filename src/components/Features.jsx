import { Award, FlaskConical, FileCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Tenaga Ahli Tersertifikasi',
      description: 'Didukung oleh profesional bersertifikat dengan pengalaman industri mendalam.',
      icon: <Award className="w-10 h-10" />,
    },
    {
      id: 2,
      title: 'Fasilitas Laboratorium',
      description: 'Dilengkapi fasilitas Uji Material & Lingkungan yang berstandar tinggi.',
      icon: <FlaskConical className="w-10 h-10" />,
    },
    {
      id: 3,
      title: 'Legalitas Terjamin',
      description: 'Memiliki legalitas lengkap termasuk SBU Perkonindo dan NIB resmi.',
      icon: <FileCheck className="w-10 h-10" />,
    }
  ];

  return (
    <section id="keunggulan" className="bg-gradient-to-r from-brand-dark to-brand-green py-20 relative overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Keunggulan & Dukungan Penuh
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center px-6 pt-10 md:pt-0">
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mb-6 backdrop-blur-sm border border-white/20 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-emerald-50 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
