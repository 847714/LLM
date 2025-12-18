import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Cpu, 
  Globe, 
  Plus,
  Terminal,
  ExternalLink,
  User,
  ShieldAlert
} from 'lucide-react';

// --- Shared Components ---

const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: { 
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverted',
  children: React.ReactNode,
  className?: string,
  [key: string]: any
}) => {
  const baseStyles = "px-10 py-5 uppercase tracking-[0.25em] font-medium text-[10px] md:text-xs transition-all duration-100 flex items-center justify-center gap-3 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-black focus-visible:outline-offset-[3px]";
  
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black border border-black",
    secondary: "bg-transparent text-black border-[2px] border-black hover:bg-black hover:text-white",
    ghost: "bg-transparent text-black hover:underline px-0 border-none",
    inverted: "bg-white text-black hover:bg-black hover:text-white border border-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const DisclaimerModal = ({ onAccept }: { onAccept: () => void }) => {
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md">
      <div className="bg-white border-[4px] border-black max-w-2xl w-full p-10 md:p-16 animate-in zoom-in-95 duration-300">
        <div className="flex items-center gap-4 mb-8">
          <ShieldAlert size={32} strokeWidth={1.5} />
          <h2 className="font-serif text-3xl italic tracking-tighter uppercase font-black">BCI Disclaimer</h2>
        </div>
        <p className="font-serif text-xl md:text-2xl text-zinc-800 leading-relaxed mb-12">
          As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. 
          The user acknowledges that there has been no solicitation, invitation or inducement of any sort 
          whatsoever from <span className="font-bold">LLM Advocates</span> or any of its members to create an 
          attorney-client relationship through this website. 
          <br /><br />
          The user wishes to gain information about LLM Advocates for their own knowledge and use.
        </p>
        <Button onClick={onAccept} className="w-full py-8 text-sm font-black tracking-[0.4em]">
          I Agree & Proceed
        </Button>
      </div>
    </div>
  );
};

// --- Section Components (for reuse) ---

const HeroSection = ({ onContactClick }: { onContactClick: () => void }) => (
  <section className="pt-64 pb-32 px-6 md:px-16 min-h-screen flex flex-col justify-between animate-in fade-in duration-700">
    <div>
      <div className="flex items-center gap-6 mb-16">
        <div className="h-[2px] w-32 bg-black" />
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40">CHANDIGARH — PUNJAB & HARYANA HIGH COURT</span>
      </div>
      
      <h1 className="text-[12vw] font-serif leading-[0.8] tracking-[-0.07em] uppercase font-black mb-12">
        <span className="block italic font-light">Traditional</span>
        <span className="block">Litigation &</span>
        <span className="block italic font-light">AI Governance.</span>
      </h1>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end border-t border-black pt-16">
      <div className="lg:col-span-6">
        <p className="text-3xl md:text-4xl font-serif italic text-zinc-900 leading-tight mb-8">
          ISO 42001:2023 Lead Auditors providing elite-tier legal defense and synthetic compliance strategy.
        </p>
        <div className="flex flex-wrap gap-8">
          <Button onClick={onContactClick}>
            Book Consultation <ArrowRight size={20} strokeWidth={1} />
          </Button>
        </div>
      </div>
      <div className="lg:col-span-6 flex justify-end">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-right space-y-2 opacity-60">
          <p>Constitutional Writs</p>
          <p>Cyber Compliance</p>
          <p>Criminal Defense</p>
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = ({ title = "The Team" }) => (
  <section className="py-48 px-6 md:px-16 bg-zinc-50 border-t border-black relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
         style={{ backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #000 40px, #000 42px)` }} />
    <div className="relative">
      <div className="mb-24">
        <div className="h-[8px] w-24 bg-black mb-10" />
        <h2 className="text-7xl md:text-[10rem] font-serif italic text-black tracking-tighter leading-[0.85] uppercase font-black">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black border border-black">
        <div className="bg-white p-12 md:p-20 flex flex-col group">
          <div className="aspect-[4/5] bg-zinc-100 mb-12 relative flex items-center justify-center">
            <User size={120} strokeWidth={0.5} className="opacity-20" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-zinc-400">Partner / Advocate</div>
          <h3 className="text-5xl font-serif italic font-black uppercase mb-6 tracking-tighter">Adv. Ritik Khurana</h3>
          <p className="text-zinc-500 font-mono text-[11px] mb-8 leading-relaxed uppercase tracking-widest">
            B.A. LL.B, LL.M<br />ISO 42001:2023 Lead Auditor
          </p>
          <p className="text-2xl font-serif leading-relaxed mb-12">
            Specializing in <span className="italic">Complex Litigation & AI Compliance</span>. 
            Bridging the gap between the courtroom and computational accountability.
          </p>
        </div>

        <div className="bg-white p-12 md:p-20 flex flex-col group">
          <div className="aspect-[4/5] bg-zinc-100 mb-12 relative flex items-center justify-center">
            <User size={120} strokeWidth={0.5} className="opacity-20" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] mb-4 text-zinc-400">Partner / Advocate</div>
          <h3 className="text-5xl font-serif italic font-black uppercase mb-6 tracking-tighter">Adv. Parul Kumar</h3>
          <p className="text-zinc-500 font-mono text-[11px] mb-8 leading-relaxed uppercase tracking-widest">
            B.A. LL.B, LL.M<br />ISO 42001:2023 Lead Auditor
          </p>
          <p className="text-2xl font-serif leading-relaxed mb-12">
            Expertise in <span className="italic">Digital Privacy Strategy, Family Law & Criminal Defense</span>. 
            Strategizing defense for a data-driven world.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PracticeSection = () => (
  <section className="py-48 px-6 md:px-16 bg-white border-t border-black">
    {/* Heading 'Jurisdiction' removed as per request */}
    <div className="mb-24 border-t-[8px] border-black pt-16">
      <h3 className="text-5xl md:text-8xl font-serif font-black uppercase tracking-tighter leading-none">
        Specialisation & Expertise
      </h3>
      <p className="font-mono text-[10px] uppercase tracking-[0.6em] mt-8 opacity-40">Core Council Mandates</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
      <div className="space-y-16">
        <h4 className="text-4xl font-serif italic uppercase font-black tracking-tighter pb-4 border-b border-zinc-100">Digital & AI</h4>
        <div className="space-y-12">
          {[
            { title: "Data Privacy", sub: "DPDP Act Compliance & Strategy", icon: ShieldCheck },
            { title: "AI Governance", sub: "ISO 42001:2023 Alignment", icon: Cpu },
            { title: "Digital Forensics", sub: "Legal auditing for synthetic systems", icon: Terminal },
            { title: "Cyber Crime", sub: "Defense against digital exploitation", icon: Gavel },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <item.icon size={32} strokeWidth={1} className="mt-1" />
              <div>
                <h5 className="text-3xl font-serif italic font-bold tracking-tight mb-2 group-hover:underline underline-offset-8 decoration-1">{item.title}</h5>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <h4 className="text-4xl font-serif italic uppercase font-black tracking-tighter pb-4 border-b border-zinc-100">Litigation</h4>
        <div className="space-y-12">
          {[
            { title: "Criminal Defense", sub: "Strategic representation in criminal law", icon: Scale },
            { title: "Writ Jurisdiction", sub: "Punjab & Haryana High Court practice", icon: Globe },
            { title: "Family Law", sub: "Matrimonial & guardianship disputes", icon: Plus },
            { title: "Civil Disputes", sub: "Corporate & private property matters", icon: Scale },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <item.icon size={32} strokeWidth={1} className="mt-1" />
              <div>
                <h5 className="text-3xl font-serif italic font-bold tracking-tight mb-2 group-hover:underline underline-offset-8 decoration-1">{item.title}</h5>
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-48 px-6 md:px-16 border-t border-black bg-white">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-32">
      <div className="lg:col-span-5">
        <h2 className="text-[8rem] font-serif italic mb-16 tracking-tighter leading-none font-black uppercase">Nexus.</h2>
        <div className="space-y-16 font-serif text-3xl">
          <p className="text-zinc-400 italic">Consultations by appointment.</p>
          <div className="h-[4px] w-48 bg-black" />
          <div className="space-y-12">
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-6">Regional Node</h5>
              <p className="font-bold">Chandigarh / Punjab Region</p>
              <p className="text-zinc-500">Punjab & Haryana High Court</p>
            </div>
            <div>
              <h5 className="font-mono text-[10px] uppercase tracking-[0.6em] text-zinc-400 mb-6">Direct Terminal</h5>
              <p className="underline decoration-black decoration-[3px] underline-offset-[12px] font-black text-4xl truncate">contact@llm-advocates.law</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 border-l-4 border-black pl-0 lg:pl-32 py-12">
        <form className="space-y-20" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-20">
            <div className="space-y-6">
              <label className="font-mono text-[10px] uppercase tracking-[0.6em] block opacity-50">Party Identity</label>
              <input type="text" className="w-full bg-transparent border-b-2 border-black py-6 focus:outline-none focus:border-b-8 font-serif text-3xl transition-all" placeholder="Legal or Corporate Entity" />
            </div>
            <div className="space-y-6">
              <label className="font-mono text-[10px] uppercase tracking-[0.6em] block opacity-50">Communication Interface</label>
              <input type="email" className="w-full bg-transparent border-b-2 border-black py-6 focus:outline-none focus:border-b-8 font-serif text-3xl transition-all" placeholder="email@nexus.com" />
            </div>
            <div className="space-y-6">
              <label className="font-mono text-[10px] uppercase tracking-[0.6em] block opacity-50">Subject Matter</label>
              <textarea 
                rows={4} 
                className="w-full bg-transparent border-b-2 border-black py-6 focus:outline-none focus:border-b-8 font-serif text-3xl resize-none transition-all" 
                placeholder="Detail the mandate complexity..."
              />
            </div>
          </div>
          <Button className="w-full py-10 text-xl font-black">Request Consultation</Button>
        </form>
      </div>
    </div>
  </section>
);

// --- Main App ---

export function App() {
  const [accepted, setAccepted] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'team' | 'practice' | 'contact'>('home');

  useEffect(() => {
    const isAccepted = sessionStorage.getItem('bci_accepted');
    if (isAccepted) setAccepted(true);
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleAccept = () => {
    sessionStorage.setItem('bci_accepted', 'true');
    setAccepted(true);
  };

  return (
    <>
      {!accepted && <DisclaimerModal onAccept={handleAccept} />}
      
      <div className={`min-h-screen relative bg-white selection:bg-black selection:text-white transition-all duration-1000 ${!accepted ? 'blur-bg' : ''}`}>
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
        
        <nav className="fixed top-0 left-0 w-full z-[1000] bg-white border-b border-black">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 flex justify-between items-center h-28">
            <div className="flex items-center gap-6 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <span className="text-white font-mono text-sm font-bold tracking-tighter">LLM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-3xl tracking-tighter font-black uppercase leading-none">LLM Advocates</span>
                <span className="font-mono text-[8px] tracking-[0.5em] uppercase opacity-40">High Court & AI Governance</span>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-16 font-mono text-[9px] tracking-[0.4em] uppercase items-center">
              <button onClick={() => setCurrentView('home')} className={`hover:text-zinc-400 transition-colors ${currentView === 'home' ? 'underline underline-offset-[12px] decoration-4' : ''}`}>Home</button>
              <button onClick={() => setCurrentView('team')} className={`hover:text-zinc-400 transition-colors ${currentView === 'team' ? 'underline underline-offset-[12px] decoration-4' : ''}`}>The Team</button>
              <button onClick={() => setCurrentView('practice')} className={`hover:text-zinc-400 transition-colors ${currentView === 'practice' ? 'underline underline-offset-[12px] decoration-4' : ''}`}>Practice Areas</button>
              <button onClick={() => setCurrentView('contact')} className={`hover:text-zinc-400 transition-colors ${currentView === 'contact' ? 'underline underline-offset-[12px] decoration-4' : ''}`}>Contact</button>
              <Button variant="secondary" onClick={() => setCurrentView('contact')} className="py-2.5 px-8">Inquiry</Button>
            </div>

            <button className="lg:hidden p-2">
              <Menu size={32} strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        <main className="max-w-[1600px] mx-auto border-x border-black min-h-screen">
          {currentView === 'home' ? (
            <div className="animate-in fade-in duration-1000">
              <HeroSection onContactClick={() => setCurrentView('contact')} />
              <TeamSection />
              <PracticeSection />
              <ContactSection />
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-5 duration-700">
              {currentView === 'team' && <TeamSection title="Principal Counsel" />}
              {currentView === 'practice' && <PracticeSection />}
              {currentView === 'contact' && <ContactSection />}
            </div>
          )}
        </main>

        <footer className="py-32 bg-black text-white border-t-[40px] border-black relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-16 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-32">
              <div className="max-w-2xl">
                <h3 className="text-8xl font-serif italic mb-10 tracking-tighter font-black">LLM ADVOCATES</h3>
                <p className="font-serif text-zinc-500 text-3xl leading-relaxed italic border-l-2 border-zinc-800 pl-12">
                  High Court Advocates & ISO 42001:2023 Lead Auditors. Definitive defense for the synthetic frontier.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <div className="flex flex-col gap-8 font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                  <h6 className="text-white border-b border-zinc-800 pb-4">Practice Reach</h6>
                  <p>Punjab & Haryana High Court</p>
                  <p>District & Sessions Courts</p>
                  <p>Cyber Compliance Nodes</p>
                </div>
                <div className="flex flex-col gap-8 font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                  <h6 className="text-white border-b border-zinc-800 pb-4">Integrity</h6>
                  <p>ISO 42001:2023</p>
                  <p>BCI Compliant</p>
                  <p>Ethical Advocacy</p>
                </div>
              </div>
            </div>
            
            <div className="mt-48 pt-16 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-12 font-mono text-[9px] uppercase tracking-[0.6em] text-zinc-600 text-center lg:text-left">
              <span>LLM ADVOCATES — PRINCIPAL COUNSEL RITIK KHURANA & PARUL KUMAR</span>
              <div className="flex gap-16">
                <span>CHANDIGARH / PUNJAB</span>
                <span>EST. 2024</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}