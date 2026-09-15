import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-emerald-900/60 mix-blend-multiply"></div>
      </div>

      {/* Decorative blobs/elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-green/30 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-gold/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
            <span className="text-white text-sm font-medium tracking-wide">PT Buwana Mandala Karta</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Sinergi Inovasi dan <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-gold">
              Keberlanjutan
            </span><br className="hidden lg:block" />
            untuk Masa Depan
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Solusi rekayasa teknologi hijau dan infrastruktur ekologis dari PT Buwana Mandala Karta. 
            Membangun masa depan yang lebih baik melalui harmoni antara teknologi dan alam.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#layanan" 
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-green hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-green/30 hover:-translate-y-1"
            >
              Pelajari Layanan Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#kontak" 
              className="w-full sm:w-auto flex items-center justify-center bg-transparent hover:bg-white/10 text-white border-2 border-white/50 hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/60 text-xs font-medium mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
