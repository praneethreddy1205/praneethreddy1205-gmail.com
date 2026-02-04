
import React from 'react';
import { CountryInfo } from '../types';

interface ExtendedCountryInfo extends CountryInfo {
  intro: string;
  benefits: string[];
  career: string;
  flag: string;
}

const destinationsList = [
  { id: 'UK', name: 'United Kingdom', flag: '🇬🇧' },
  { id: 'USA', name: 'United States', flag: '🇺🇸' },
  { id: 'Canada', name: 'Canada', flag: '🇨🇦' },
  { id: 'Australia', name: 'Australia', flag: '🇦🇺' },
  { id: 'Europe', name: 'Europe', flag: '🇪🇺' },
  { id: 'New Zealand', name: 'New Zealand', flag: '🇳🇿' }
];

const countryDataLookup: Record<string, ExtendedCountryInfo> = {
  UK: {
    flag: '🇬🇧',
    intro: "The UK is a global leader in education, offering world-recognized degrees from historic institutions. With a 1-year Masters program and a 2-year Post-Study Work (PSW) visa, it's the most efficient path to a global career.",
    benefits: ["Fast-track 1-year Masters", "No GRE/GMAT required for most unis", "High-quality research-led teaching", "Rich cultural heritage"],
    career: "UK graduates are among the most employable in the world, with top recruiters in Finance, Tech, and Healthcare favoring Russell Group alumni.",
    admissions: {
      intakes: [
        { period: 'Sept Intake (Primary)', details: 'Largest selection of courses and funding.', color: 'primary' },
        { period: 'Jan Intake (Secondary)', details: 'Perfect for students who missed the autumn cycle.', color: 'secondary' }
      ],
      requirements: ['Min 60% Academics', 'IELTS 6.5 / PTE 60+', 'Statement of Purpose', 'Two LORs', 'CAS Receipt']
    },
    visa: {
      type: 'Student Route Visa',
      details: 'Requires 70 points under the points-based system.',
      psw: '2-Year Graduate Route (3 for PhD)',
      workRights: '20 hours/week term-time, full-time vacations'
    },
    costs: {
      tuition: [{ level: 'Bachelors', range: '£12k - £25k' }, { level: 'Masters', range: '£14k - £30k' }],
      living: [{ area: 'Inside London', amount: '£1,334 / mo', color: 'primary' }, { area: 'Outside London', amount: '£1,023 / mo', color: 'secondary' }]
    },
    scholarships: [
      { name: 'GREAT', desc: 'Govt funded merit awards.', value: '£10,000', bg: 'bg-secondary' },
      { name: 'Chevening', desc: 'Full funding for Masters.', value: '100% Covered', bg: 'bg-primary' }
    ]
  },
  USA: {
    flag: '🇺🇸',
    intro: "Home to the world's most prestigious Ivy League universities, the USA offers unparalleled flexibility in curriculum and immense research opportunities in the heart of Silicon Valley.",
    benefits: ["World-class Research Facilities", "STEM OPT (3 years work permit)", "Flexible Major/Minor combinations", "Largest selection of Universities"],
    career: "The US market offers the highest entry-level salaries globally, particularly in STEM and Management sectors.",
    admissions: {
      intakes: [
        { period: 'Fall (August)', details: 'Major intake with most funding options.', color: 'primary' },
        { period: 'Spring (January)', details: 'Smaller intake but highly competitive.', color: 'secondary' }
      ],
      requirements: ['GPA 3.0+', 'GRE/GMAT (Select Unis)', 'IELTS 7.0 / TOEFL 90+', '3 LORs', 'Financial Documents']
    },
    visa: {
      type: 'F-1 Student Visa',
      details: 'Interview-based visa system.',
      psw: '1-Year OPT (3-Year for STEM)',
      workRights: 'On-campus only (20 hours)'
    },
    costs: {
      tuition: [{ level: 'State Unis', range: '$20k - $40k' }, { level: 'Private Unis', range: '$40k - $65k' }],
      living: [{ area: 'Metros', amount: '$2,000 / mo', color: 'primary' }, { area: 'Suburbs', amount: '$1,200 / mo', color: 'secondary' }]
    },
    scholarships: [
      { name: 'Fulbright', desc: 'Highly prestigious cultural exchange.', value: 'Full Tuition', bg: 'bg-secondary' },
      { name: 'Institutional', desc: 'Merit-based university grants.', value: 'Up to $20k', bg: 'bg-primary' }
    ]
  }
};

interface CountryDetailHubProps {
  country: string;
  onBook?: () => void;
  onBack?: () => void;
  setView: (view: string) => void;
}

const CountryDetailHub: React.FC<CountryDetailHubProps> = ({ country, onBook, onBack, setView }) => {
  const data = countryDataLookup[country] || countryDataLookup.UK;

  return (
    <section className="bg-white min-h-screen relative pt-10">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row">
        
        {/* SIDEBAR NAVIGATION - Respects fixed header height */}
        <aside className="lg:w-80 flex-shrink-0 lg:border-r border-slate-100 p-6 lg:p-10 bg-white">
          <div className="lg:sticky lg:top-[160px] space-y-12">
            
            <button 
              onClick={onBack}
              className="flex items-center gap-4 text-slate-400 hover:text-primary transition-all font-black text-xs group"
            >
              <div className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:-translate-x-1 transition-transform">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              HOME
            </button>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6">Explore Countries</p>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {destinationsList.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      setView(dest.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all border group ${
                      country === dest.id 
                        ? 'bg-primary text-white border-primary shadow-xl' 
                        : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-primary'
                    }`}
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform">{dest.flag}</span>
                    <span className="truncate">{dest.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 lg:pl-16 px-6 lg:px-10 pb-32">
          
          <div className="animate-fadeIn max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary-light text-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-primary/10">
              <i className="fa-solid fa-circle-info"></i> {country} Education Hub
            </div>
            
            <p className="text-2xl md:text-3xl text-slate-500 leading-tight font-bold mb-20">
              {data.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <h3 className="text-2xl font-black text-secondary uppercase tracking-tight flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-bolt"></i>
                  </div>
                  Key Benefits
                </h3>
                <div className="space-y-4">
                  {data.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                      <div className="w-10 h-10 bg-primary-light text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <i className="fa-solid fa-check"></i>
                      </div>
                      <span className="font-bold text-secondary text-lg leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-[4rem] p-12 lg:p-16 text-white relative flex flex-col justify-center border border-white/5 shadow-2xl">
                <h3 className="text-3xl font-black mb-6 tracking-tight">Career Outlook</h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-10 font-medium">
                  {data.career}
                </p>
                <button 
                  onClick={onBook} 
                  className="flex items-center gap-4 text-primary font-black text-lg hover:gap-6 transition-all group"
                >
                  Start Your Application <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailHub;
