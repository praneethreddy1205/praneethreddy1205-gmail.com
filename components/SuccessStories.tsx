
import React from 'react';

const allStories = [
  { 
    name: 'Aditi Sharma', 
    university: 'Imperial College London', 
    country: 'UK', 
    quote: "The guidance from Integrity Overseas was instrumental in my journey to Imperial College. Their transparent approach and step-by-step visa support were exceptional. I highly recommend them to any serious student." 
  },
  { 
    name: 'Rahul Verma', 
    university: 'University of Melbourne', 
    country: 'Australia', 
    quote: "Securing my Australian visa was seamless thanks to the expert team at Integrity. They helped me shortlist the right courses and prepared me for my interview with incredible precision." 
  },
  { 
    name: 'Priya Patel', 
    university: 'University of Toronto', 
    country: 'Canada', 
    quote: "From SOP to Visa, they handled everything for my Canada application. The counselors are extremely knowledgeable about current immigration rules, which gave me immense confidence throughout the process." 
  },
  { 
    name: 'Siddharth M.', 
    university: 'Stanford University', 
    country: 'USA', 
    quote: "The mock interviews were the key to my success in the USA. Integrity Overseas doesn't just process papers; they build your profile and prepare you for the cultural shift of studying at a top-tier Ivy League school." 
  },
  { 
    name: 'Ishani Gupta', 
    university: 'University of Manchester', 
    country: 'UK', 
    quote: "Integrity helped me get a £5,000 scholarship for my Masters. Their database of global funding opportunities is vast, and they know exactly how to tailor an application to win these grants." 
  },
  { 
    name: 'Karan Mehra', 
    university: 'University of Edinburgh', 
    country: 'UK', 
    quote: "Highly recommended for UK education counseling. They know the process inside out, especially the new Graduate Route policies. Their post-landing support also helped me find accommodation quickly." 
  },
  { 
    name: 'Michael Chen', 
    university: 'University of British Columbia', 
    country: 'Canada', 
    quote: "UBC was my dream, and Integrity made it possible with the perfect study plan. Their attention to detail in the GIC and financial documentation process is unmatched in the industry." 
  },
  { 
    name: 'Sofia Meyer', 
    university: 'TU Munich', 
    country: 'Germany', 
    quote: "Getting into TU Munich required precise documentation, which the team handled perfectly. Their expertise in European public universities saved me thousands in tuition fees." 
  }
];

interface SuccessStoriesProps {
  view?: string;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ view = 'global' }) => {
  const stories = view === 'global' 
    ? allStories.slice(0, 6) // Show more stories on home page since they are smaller now
    : allStories.filter(s => s.country.toLowerCase() === view.toLowerCase());

  if (stories.length === 0 && view !== 'global') return null;

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
            <i className="fa-solid fa-star"></i> TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            {view === 'global' ? '1,000+ Success Stories' : `${view.toUpperCase()} Success Stories`}
          </h2>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            {view === 'global' 
              ? 'Real reviews from students who achieved their dreams with Integrity Overseas.'
              : `Honest reviews from students who started their career in ${view}.`}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full animate-fadeIn">
              {/* Quote Icon */}
              <div className="w-14 h-14 bg-slate-50 text-primary/20 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <i className="fa-solid fa-quote-left"></i>
              </div>

              {/* Review Text */}
              <div className="flex-1 mb-10">
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-sm text-slate-400 font-bold">
                    {story.university}
                  </p>
                </div>
                <div className="px-4 py-1.5 bg-primary/5 text-primary text-[9px] font-black uppercase rounded-full tracking-widest border border-primary/10">
                  {story.country}
                </div>
              </div>
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-10 transition-opacity">
                <i className="fa-solid fa-graduation-cap text-6xl"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Removed button when view is global as per previous instructions, keeping it for country views if needed */}
        {view !== 'global' && (
          <div className="mt-16 text-center">
            <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:bg-primary hover:-translate-y-1 transition-all active:scale-95">
               View All Student Experiences
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;
