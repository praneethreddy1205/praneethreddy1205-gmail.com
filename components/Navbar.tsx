
import React, { useState } from 'react';

const destinations = ['UK', 'USA', 'Canada', 'Australia', 'Europe', 'New Zealand'];

interface NavbarProps {
  setView: (view: string) => void;
  currentView: string;
  contactNumber?: string;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView, contactNumber = "919014614826" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (view: string) => {
    setView(view);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDestinationActive = destinations.includes(currentView);

  return (
    <header className="fixed w-full z-[100] top-0 shadow-sm bg-white">
      {/* Top Bar - Solid and Static */}
      <div className="hidden lg:block bg-[#1a212c] text-white py-2 border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-10 flex justify-between items-center text-[10px]">
          <div className="flex items-center gap-8">
            <a href={`tel:+${contactNumber}`} className="flex items-center gap-2 hover:text-primary transition-colors font-bold">
              <i className="fa-solid fa-phone text-primary"></i>
              <span>+{contactNumber}</span>
            </a>
            <div className="flex items-center gap-2 font-bold opacity-80">
              <i className="fa-solid fa-location-dot text-primary"></i>
              <span>Vanasthalipuram, Hyderabad</span>
            </div>
          </div>
          <div className="flex items-center gap-6 font-black tracking-widest uppercase">
            <span className="flex items-center gap-2">AAERI Member</span>
            <span className="flex items-center gap-2">ICEF Certified</span>
          </div>
        </div>
      </div>

      {/* Main Nav - Styled like the screenshot */}
      <nav className="bg-white">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="flex justify-between items-center h-24">
            {/* Logo Left */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNav('global')}>
              <img 
                src="https://res.cloudinary.com/dfgbpeggd/image/upload/v1770095688/WhatsApp_Image_2026-01-30_at_10.53.08_AM_dkqpfe.jpg" 
                alt="Integrity Overseas" 
                className="h-16 lg:h-20 w-auto object-contain mix-blend-multiply"
              />
            </div>
            
            {/* Nav Links Right */}
            <div className="hidden lg:flex items-center space-x-10">
              <button onClick={() => handleNav('global')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'global' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>HOME</button>
              <button onClick={() => handleNav('about')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'about' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>ABOUT US</button>
              
              <div className="relative group h-full flex items-center">
                <button className={`relative flex items-center gap-2 font-black text-[13px] tracking-widest uppercase transition-all py-2 ${isDestinationActive ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>
                  DESTINATIONS <i className="fa-solid fa-chevron-down text-[10px]"></i>
                  {isDestinationActive && (
                    <div className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-primary"></div>
                  )}
                </button>
                <div className="absolute top-[80px] -left-10 w-[260px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110]">
                  <div className="bg-white shadow-2xl rounded-3xl border border-slate-100 p-6 flex flex-col gap-2">
                    {destinations.map(c => (
                      <button key={c} onClick={() => handleNav(c)} className={`text-left px-5 py-3 rounded-xl font-black text-xs transition-all uppercase tracking-widest ${currentView === c ? 'bg-primary text-white shadow-lg' : 'hover:bg-slate-50 text-slate-500 hover:text-primary'}`}>Study in {c}</button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={() => handleNav('services')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'services' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>SERVICES</button>
              <button onClick={() => handleNav('admissions')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'admissions' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>ADMISSIONS</button>
              <button onClick={() => handleNav('visa')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'visa' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>VISA</button>
              <button onClick={() => handleNav('contact')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'contact' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>CONTACT</button>
              <button onClick={() => handleNav('faqs')} className={`font-black text-[13px] tracking-widest uppercase transition-all ${currentView === 'faqs' ? 'text-primary' : 'text-slate-800 hover:text-primary'}`}>FAQ</button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[#1a212c] text-2xl p-2">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden transition-all duration-300 bg-white ${isOpen ? 'max-h-screen border-t' : 'max-h-0 overflow-hidden'}`}>
          <div className="px-6 py-8 space-y-4">
            {['global', 'about', 'services', 'admissions', 'visa', 'contact', 'faqs'].map((v) => (
               <button key={v} onClick={() => handleNav(v)} className="block w-full text-left font-black text-xs uppercase tracking-widest text-slate-800 border-b border-slate-50 py-3">
                 {v === 'global' ? 'Home' : v.replace(/([A-Z])/g, ' $1').trim()}
               </button>
            ))}
            <div className="pt-4 grid grid-cols-2 gap-2">
                {destinations.map(c => (
                  <button key={c} onClick={() => handleNav(c)} className="text-left px-4 py-3 bg-slate-50 rounded-xl text-[10px] font-black uppercase text-slate-600">
                    {c}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
