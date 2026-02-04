
import React from 'react';

interface FooterProps {
  view?: string;
  setView?: (view: string) => void;
  contactNumber?: string;
}

const Footer: React.FC<FooterProps> = ({ view = 'global', setView, contactNumber = "919014614826" }) => {
  const whatsappMsg = encodeURIComponent("Hello Integrity Overseas, I am interested in your services and would like to speak with a counselor regarding my overseas education plans.");
  const instagramUrl = "https://www.instagram.com/integrityoverseaz?igsh=cXVteHV5bWVlZms1";

  const handleLink = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (setView) {
      setView(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a212c] text-slate-300 pt-32 pb-16">
      <div className="max-w-[1600px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-4 cursor-pointer" onClick={(e) => handleLink(e, 'global')}>
              <div className="w-20 h-20 bg-transparent flex items-center justify-center p-0 overflow-hidden">
                 <img 
                    src="https://res.cloudinary.com/dfgbpeggd/image/upload/v1770095688/WhatsApp_Image_2026-01-30_at_10.53.08_AM_dkqpfe.jpg" 
                    alt="Integrity Overseas Logo" 
                    className="w-full h-full object-contain invert brightness-[2] mix-blend-screen"
                    style={{ mixBlendMode: 'screen' }}
                  />
              </div>
              <span className="text-3xl font-black text-white">Integrity Overseas</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-lg font-medium">
              Empowering ambitious students with honest, transparent, and personalized guidance for over 30 years. Your global future is our integrity.
            </p>
            <div className="flex gap-6">
              {[
                { i: 'whatsapp', l: `https://wa.me/${contactNumber}?text=${whatsappMsg}` },
                { i: 'instagram', l: instagramUrl }
              ].map(s => (
                <a 
                  key={s.i} 
                  href={s.l} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-xl"
                >
                  <i className={`fa-brands fa-${s.i}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-10 uppercase tracking-widest">Study Abroad</h4>
            <ul className="space-y-6 font-bold text-lg">
              {['UK', 'USA', 'Canada', 'Australia', 'Europe'].map(c => (
                <li key={c}><a href="#" onClick={(e) => handleLink(e, c)} className="hover:text-primary transition-colors flex items-center gap-3"><i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Study in {c}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-10 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-6 font-bold text-lg">
              <li><a href="#" onClick={(e) => handleLink(e, 'about')} className="hover:text-primary transition-colors">About Our Agency</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'services')} className="hover:text-primary transition-colors">Our Full Services</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'admissions')} className="hover:text-primary transition-colors">Admissions Process</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'visa')} className="hover:text-primary transition-colors">Visa Process Support</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-primary transition-colors">Help & FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-black mb-10 uppercase tracking-widest">Global Support</h4>
            <div className="space-y-8">
               <div className="flex gap-6">
                 <i className="fa-solid fa-location-dot text-primary text-2xl mt-1"></i>
                 <div>
                   <p className="text-slate-300 font-bold mb-1">Hyderabad Head Office</p>
                   <p className="text-slate-400 text-sm font-medium">Plot no 26, near Ganesh Temple Road, Phase-1, Vanasthalipuram, Hyderabad, 500070</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <i className="fa-solid fa-phone text-primary text-2xl"></i>
                 <p className="text-slate-400 font-medium">+{contactNumber.slice(0, 2)} {contactNumber.slice(2)}</p>
               </div>
               <div className="flex gap-6">
                 <i className="fa-solid fa-envelope text-primary text-2xl"></i>
                 <p className="text-slate-400 font-medium">integrityoverseaz@gmail.com</p>
               </div>
               <button onClick={(e) => handleLink(e, 'contact')} className="w-full py-5 bg-white text-slate-900 rounded-[1.5rem] font-black hover:bg-primary hover:text-white transition-all">Visit Our Office</button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-sm font-bold text-slate-500">
          <p>© 2026 Integrity Overseas Education Consultants. Licensed by Ministry of Education.</p>
          <div className="flex gap-10">
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Terms of Use</a>
            <a href="#" onClick={(e) => handleLink(e, 'faqs')} className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
