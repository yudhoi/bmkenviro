import { Users, Scale, Network, Lightbulb, Leaf, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      id: 1,
      title: 'Dampak Sosial',
      description: 'Memberikan manfaat nyata bagi masyarakat sekitar.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      id: 2,
      title: 'Keseimbangan',
      description: 'Menyelaraskan kemajuan teknologi dan kelestarian alam.',
      icon: <Scale className="w-8 h-8" />,
    },
    {
      id: 3,
      title: 'Kolaborasi',
      description: 'Sinergi kuat lintas disiplin dan institusi.',
      icon: <Network className="w-8 h-8" />,
    },
    {
      id: 4,
      title: 'Inovasi',
      description: 'Menghadirkan solusi terdepan dan adaptif.',
      icon: <Lightbulb className="w-8 h-8" />,
    },
    {
      id: 5,
      title: 'Keberlanjutan',
      description: 'Berorientasi pada masa depan jangka panjang.',
      icon: <Leaf className="w-8 h-8" />,
    }
  ];

  return (
    <section id="tentang" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Layout: Image (Left) & Text (Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          
          {/* Left: Image */}
          <div className="w-full lg:w-5/12 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] transform lg:-rotate-2 transition-transform duration-500 hover:rotate-0">
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay z-10"></div>
              <img 
                src="/bmkenviro/gedung.jpg" 
                alt="Gedung Pascasarjana" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-gold/20 rounded-3xl -z-10 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-green/20 rounded-full -z-10 blur-xl"></div>
          </div>

          {/* Right: Text */}
          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-brand-green/20 text-brand-green font-medium text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              Tentang Kami
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
              Jembatan Antara <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-600">Inovasi Akademik</span> dan Kebutuhan Industri
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600">
              <p className="leading-relaxed">
                PT Buwana Mandala Karta (BMK) hadir sebagai pionir yang menghubungkan kecemerlangan riset akademik dari <strong>Institut Teknologi Yogyakarta</strong> dengan tantangan nyata di dunia industri.
              </p>
              <p className="leading-relaxed">
                Kami percaya bahwa masa depan pembangunan tidak bisa lagi mengabaikan aspek lingkungan. Oleh karena itu, kami menghadirkan solusi rekayasa teknologi hijau dan infrastruktur ekologis yang dirancang secara komprehensif, presisi, dan dapat dipertanggungjawabkan.
              </p>
            </div>
            
            <div className="mt-10">
              <a href="#layanan" className="inline-flex items-center gap-2 font-semibold text-brand-green hover:text-emerald-700 transition-colors group">
                Jelajahi Solusi Kami
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Grid / Minimalist Cards for Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Nilai-Nilai Utama Perusahaan</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value) => (
              <div 
                key={value.id} 
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-inner group-hover:shadow-brand-green/50">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
