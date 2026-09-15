import { Sprout, Sun, Building2, HeartHandshake, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Teknologi Hijau & Ramah Lingkungan',
      description: 'Solusi teknologi mutakhir yang dirancang khusus untuk meminimalkan jejak karbon dan menjaga kelestarian ekosistem alam secara berkelanjutan.',
      icon: <Sprout className="w-10 h-10" />,
    },
    {
      id: 2,
      title: 'Pengelolaan Energi Terbarukan',
      description: 'Pemanfaatan dan manajemen sumber energi bersih seperti PLTS dan biogas untuk efisiensi maksimal serta kemandirian energi masa depan.',
      icon: <Sun className="w-10 h-10" />,
    },
    {
      id: 3,
      title: 'Pengembangan Infrastruktur Ekologis',
      description: 'Perencanaan dan pembangunan infrastruktur yang berharmoni dengan alam, mengintegrasikan prinsip-prinsip green building.',
      icon: <Building2 className="w-10 h-10" />,
    },
    {
      id: 4,
      title: 'Pemberdayaan Masyarakat Lokal',
      description: 'Program inkubasi dan kewirausahaan sosial yang berfokus pada peningkatan kapasitas masyarakat berbasis potensi lokal berkelanjutan.',
      icon: <HeartHandshake className="w-10 h-10" />,
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-brand-green/30 text-brand-dark font-medium text-sm mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            Layanan Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Produk & Layanan
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Menghadirkan solusi terintegrasi dan inovatif untuk menjawab berbagai tantangan keberlanjutan dari aspek teknologi, energi, hingga masyarakat.
          </p>
        </div>

        {/* 2x2 Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl hover:shadow-brand-green/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient blob on hover */}
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br from-brand-green/10 to-brand-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col h-full relative z-10">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-md">
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-brand-dark transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow line-clamp-3 text-base lg:text-lg">
                  {service.description}
                </p>
                
                {/* Action Link */}
                <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-brand-green/20 transition-colors duration-300">
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-green group-hover:text-emerald-700 transition-colors duration-300">
                    Pelajari Lebih Lanjut 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
