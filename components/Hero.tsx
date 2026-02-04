
import React from 'react';

interface HeroProps {
  view: string;
  onAction?: (action: string) => void;
}

const Hero: React.FC<HeroProps> = ({ view, onAction }) => {
  const isDestination = ['UK', 'USA', 'Canada', 'Australia', 'Europe', 'New Zealand'].includes(view);
  
  // --- DESTINATION HERO (Matches Screenshot) ---
  if (isDestination) {
    return (
      <section className="relative pt-[160px] pb-10 bg-white animate-fadeIn">
        <div className="max-w-[1600px] mx-auto px-10">
          <h1 className="text-6xl md:text-[8rem] font-black text-secondary leading-none tracking-tight">
            Why Study in <span className="text-primary">{view}?</span>
          </h1>
          <div className="mt-12">
            <div className="w-28 h-2.5 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>
    );
  }

  // --- HOME HERO ---
  if (view === 'global') {
    return (
      <section className="relative pt-[200px] pb-32 overflow-hidden bg-white">
        <div className="max-w-[1600px] mx-auto px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary-light text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">
                <i className="fa-solid fa-star"></i> Trusted by 1,000+ Students
              </div>
              <h1 className="text-6xl lg:text-[7.5rem] font-black text-secondary leading-[0.9] tracking-tighter">
                Shape Your <br />
                <span className="text-primary">Future</span> with <br />
                Integrity.
              </h1>
              <p className="text-2xl text-slate-500 leading-relaxed max-w-xl font-medium">
                Transparent consultancy for your global education. Experience an industry-leading 99% visa success rate and personalized university selection.
              </p>
              <div className="flex flex-wrap items-center gap-8 pt-6">
                <button 
                  onClick={() => onAction?.('consult')} 
                  className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl shadow-primary/30 hover:bg-primary-dark transition-all"
                >
                  Book Free Counseling
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 w-full aspect-square rounded-[5rem] overflow-hidden border-[20px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                  alt="Graduation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

export default Hero;
