import { Map, Leaf, HardHat } from 'lucide-react';

const Team = () => {
  const founders = [
    { name: 'GKBRAy Adipati Paku', role: 'Founder', img: 'https://ui-avatars.com/api/?name=GKBRAy+Adipati+Paku&background=10B981&color=fff&size=200' },
    { name: 'Prof. Dr. Ir. Chafid Fandeli', role: 'Founder', img: 'https://ui-avatars.com/api/?name=Chafid+Fandeli&background=10B981&color=fff&size=200' },
  ];

  const commissioners = [
    { name: 'Prof. Dr. Suratman, M.Sc.', role: 'Dewan Komisaris', img: 'https://ui-avatars.com/api/?name=Suratman&background=064E3B&color=fff&size=200' },
    { name: 'Ir. Sri Yuniarti, M.Par.', role: 'Dewan Komisaris', img: 'https://ui-avatars.com/api/?name=Sri+Yuniarti&background=064E3B&color=fff&size=200' },
    { name: 'B.P.H. Kusumo Bimantoro (Suryo)', role: 'Dewan Komisaris', img: 'https://ui-avatars.com/api/?name=Kusumo+Bimantoro&background=064E3B&color=fff&size=200' },
  ];

  const management = [
    { name: 'Dr. Triyono, ST, M.Sc.', role: 'Direktur', img: 'https://ui-avatars.com/api/?name=Triyono&background=FBBF24&color=fff&size=200' },
    { name: 'Dewayanto, S.Si', role: 'Direktur Marketing', img: 'https://ui-avatars.com/api/?name=Dewayanto&background=FBBF24&color=fff&size=200' },
    { name: 'Reno Fandelika', role: 'Kepala Kantor', img: 'https://ui-avatars.com/api/?name=Reno+Fandelika&background=FBBF24&color=fff&size=200' },
    { 
      name: 'Yudho Indardjo, S.Si., M.Ling', 
      role: 'Manajer Operasional', 
      img: '/bmkenviro/yudho.jpg',
      technicalInfo: 'Keahlian Eksekusi Lapangan, Rekayasa Lingkungan & Manajemen Data Spasial (GIS)'
    },
  ];

  // Component for rendering a single profile card
  const ProfileCard = ({ person, index }) => (
    <div className="flex flex-col items-center group">
      {/* Profile Image Wrapper */}
      <div className="relative mb-4 p-1 rounded-full bg-white transition-all duration-300 group-hover:shadow-xl group-hover:shadow-brand-green/20">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-brand-green overflow-hidden relative">
          <img 
            src={person.img} 
            alt={person.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay for technical role if present */}
          {person.technicalInfo && (
            <div className="absolute inset-0 bg-brand-dark/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm cursor-help" title={person.technicalInfo}>
              <div className="flex gap-2 text-brand-gold mb-2">
                <Map className="w-5 h-5" />
                <Leaf className="w-5 h-5" />
                <HardHat className="w-5 h-5" />
              </div>
              <span className="text-white text-xs font-medium text-center px-2">Ahli Teknis & GIS</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Name and Role */}
      <h4 className="text-lg font-semibold text-slate-800 text-center mb-1">
        {person.name}
      </h4>
      <p className="text-brand-green font-medium text-sm text-center">
        {person.role}
      </p>
    </div>
  );

  return (
    <section id="tim" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Sumber Daya Manusia
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            Sinergi keahlian lintas disiplin dari para akademisi dan praktisi profesional yang berdedikasi tinggi.
          </p>
        </div>

        <div className="space-y-20">
          {/* Tier 1: Founders */}
          <div>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {founders.map((person, index) => (
                <ProfileCard key={index} person={person} index={index} />
              ))}
            </div>
          </div>

          {/* Tier 2: Commissioners */}
          <div className="relative">
            {/* Connecting visual line (optional decorative element) */}
            <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-brand-green/50 to-transparent"></div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {commissioners.map((person, index) => (
                <ProfileCard key={index} person={person} index={index} />
              ))}
            </div>
          </div>

          {/* Tier 3: Management */}
          <div className="relative">
            <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-brand-green/50 to-transparent"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {management.map((person, index) => (
                <ProfileCard key={index} person={person} index={index} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
