import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Cpu, Zap, Code, Shield, Brain, Sparkles, ChevronRight, X } from 'lucide-react';

const App = () => {
  const [activeDay, setActiveDay] = useState(1);
  const [isEnrollModalOpen, setEnrollModalOpen] = useState(false);

  const days = [
    { day: 1, title: 'Introduction to GenAI', icon: <Bot />, notes: "JARVIS protocol initiated. Explain the evolution of AI." },
    { day: 2, title: 'Prompt Engineering', icon: <Code />, notes: "Tony's HUD logic: Give precise commands. Zero-shot vs Few-shot." },
    { day: 3, title: 'Context Engineering', icon: <Brain />, notes: "The Arc Reactor of AI. Memory systems and RAG basics." },
    { day: 4, title: 'AI Tools Ecosystem', icon: <Zap />, notes: "Stark Industries arsenal. Compare different LLMs." },
    { day: 5, title: 'Automation & Agents', icon: <Cpu />, notes: "Iron Legion protocols. Multi-agent systems and no-code automation." },
    { day: 6, title: 'Building Real Projects', icon: <Shield />, notes: "Suit up. Hands-on building phase for beginner-friendly projects." },
    { day: 7, title: 'Future of AI', icon: <Sparkles />, notes: "Avengers Assemble. Capstone presentations and future careers." },
  ];

  const features = [
    { title: 'Gamified Learning', desc: 'Earn points and climb the global leaderboard.', icon: <Sparkles className="text-primary" size={32} /> },
    { title: 'Live Mini-Projects', desc: 'Build real-world AI applications every single day.', icon: <Code className="text-primary" size={32} /> },
    { title: 'Industry Certification', desc: 'Get certified by the Context Engineering Lab.', icon: <Shield className="text-primary" size={32} /> },
  ];

  return (
    <div className="min-h-screen bg-background text-textMain font-sans overflow-x-hidden">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 bg-[#030014]" />
      <div className="fixed inset-0 z-0 neural-links opacity-20 pointer-events-none" />
      <div className="fixed -top-[20%] -left-[10%] w-[60%] h-[60%] ambient-glow-1 blur-[120px] pointer-events-none" />
      <div className="fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] ambient-glow-2 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
      {/* Navbar */}
      <nav className="fixed w-full z-50 py-6 px-8 flex justify-center">
        <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-12 border-white/5">
          <div className="text-xl font-display font-bold flex items-center gap-2">
            <Zap size={18} className="text-primary" />
            <span className="text-white">GenAI Academy</span>
          </div>
          <div className="hidden md:flex gap-8 text-textMuted text-xs font-medium uppercase tracking-widest">
            <a href="#curriculum" className="hover:text-primary transition-colors">Curriculum</a>
            <a href="#syllabus" className="hover:text-primary transition-colors">Syllabus</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <button onClick={() => setEnrollModalOpen(true)} className="theme-purple-btn px-5 py-1.5 rounded-full text-xs transition-all duration-300">
            Secure Spot
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-8 min-h-[95vh] flex flex-col justify-center items-center text-center grid-background">
        {/* Background Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            ✨ Next-Gen AI Mastery
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master the Future of <br className="hidden md:block" />
            <span className="text-gradient">AI Superintelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl mx-auto">
            Build high-performance AI agents and master context engineering in this premium 7-day intensive program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setEnrollModalOpen(true)} className="theme-neon-btn px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300">
              Get Started <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Marquee Section */}
        <div className="mt-20 w-full marquee-container bg-black/40 backdrop-blur-sm">
          <div className="marquee-content flex gap-12 text-sm font-display font-medium text-textMuted/40 tracking-[0.2em] uppercase">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span>Prompt Engineering</span>
                <span className="text-primary">✦</span>
                <span>Context Windows</span>
                <span className="text-secondary">✦</span>
                <span>RAG Systems</span>
                <span className="text-primary">✦</span>
                <span>Multi-Agent Workflows</span>
                <span className="text-secondary">✦</span>
                <span>Autonomous Agents</span>
                <span className="text-primary">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Floating Elements Simulation */}
        <motion.div 
          className="absolute right-[10%] top-[30%] -z-10 hidden lg:block opacity-60"
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 rounded-xl glass-panel rotate-12 flex justify-center items-center">
            <Cpu size={48} className="text-primary/50" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute left-[10%] bottom-[20%] -z-10 hidden lg:block opacity-60"
          animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-24 h-24 rounded-full glass-panel flex justify-center items-center">
            <Bot size={36} className="text-[#8A2BE2]/50" />
          </div>
        </motion.div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-gradient">7-Day</span> Journey</h2>
            <p className="text-textMuted">From fundamentals to building complex multi-agent systems.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Days Navigation */}
            <div className="col-span-1 flex flex-col gap-3">
              {days.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`p-4 rounded-xl flex items-center gap-4 transition-all duration-300 text-left relative overflow-hidden ${
                    activeDay === d.day 
                      ? 'bg-primary/10 border border-primary/30 text-white translate-x-2' 
                      : 'glass-panel text-textMuted hover:bg-white/5'
                  }`}
                >
                  <div className="card-bg-number opacity-[0.05]">0{d.day}</div>
                  <div className={`p-2 rounded-lg relative z-10 ${activeDay === d.day ? 'bg-primary text-background' : 'bg-white/10'}`}>
                    {d.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-[10px] uppercase tracking-tighter font-bold opacity-60">Day {d.day}</div>
                    <div className="font-bold text-sm">{d.title}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Day Details */}
            <div className="col-span-1 lg:col-span-2">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 md:p-10 rounded-2xl h-full border-primary/20 relative overflow-hidden"
              >
                <div className="card-accent-bar bg-primary" />
                <div className="card-bg-number">0{activeDay}</div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -z-10 rounded-full" />
                
                <h3 className="text-3xl font-bold mb-2">Day {activeDay}: {days[activeDay-1].title}</h3>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">1.5 Hours Live</span>
                  <span className="px-3 py-1 text-xs font-medium bg-[#8A2BE2]/10 text-[#8A2BE2] rounded-full">Mini-Project</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-primary mb-2 flex items-center gap-2">
                      <Zap size={20}/> Core Concepts
                    </h4>
                    <p className="text-textMuted leading-relaxed mb-6">
                      {activeDay === 1 && "Understand the fundamentals of AI, ML, LLMs, and Generative AI, and their real-world impact. We explore the evolution of AI and the dawn of intelligent systems."}
                      {activeDay === 2 && "Master the anatomy of a prompt and advanced prompting techniques like Zero-shot, One-shot, and Chain-of-Thought prompting."}
                      {activeDay === 3 && "Move beyond basic prompting to understanding context windows, memory, and RAG (Retrieval-Augmented Generation) basics. This is the highlight of the course."}
                      {activeDay === 4 && "Navigate and utilize the top free AI tools for text, images, and productivity. Compare ChatGPT, Claude, Gemini, Perplexity, and more."}
                      {activeDay === 5 && "Understand multi-agent systems, AI workflows, and no-code automation using tools like n8n and Flowise."}
                      {activeDay === 6 && "Apply learned skills to build practical, beginner-friendly AI projects. From AI Resume Builders to AI Study Assistants."}
                      {activeDay === 7 && "Discuss AGI, future careers, monetization, and present capstone projects. Capstone presentations and certification ceremony."}
                    </p>
                    
                    <h4 className="text-xl font-medium text-secondary mb-2 flex items-center gap-2">
                      <Brain size={20}/> Instructor Notes
                    </h4>
                    <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20 text-textMuted leading-relaxed">
                      {days[activeDay-1].notes}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-card border border-white/5">
                    <h4 className="text-lg font-medium text-white mb-2">Daily Challenge</h4>
                    <p className="text-textMuted text-sm">
                      Complete the interactive mini-project to unlock the next day's module and earn 50 XP points towards the leaderboard.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-24 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="glass-panel p-12 rounded-[2rem] border-primary/20 flex flex-col md:flex-row items-center gap-12 relative">
            <div className="card-accent-bar bg-primary" />
            <div className="card-bg-number opacity-[0.03]">PDF</div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Complete <span className="text-gradient">Knowledge Vault</span></h2>
              <p className="text-lg text-textMuted mb-10 max-w-xl">
                Access the detailed curriculum, exclusive worksheets, and technical blueprints in our centralized resource repository.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="https://docs.google.com/document/d/1g_efSmwxXGwlkyqk_lK8xhmixVvxC6IH/edit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="theme-neon-btn px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300"
                >
                  <Bot size={24} /> Access Resource Drive
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-all" />
                <div className="w-48 h-48 glass-panel rounded-3xl rotate-6 flex flex-col justify-center items-center gap-4 group-hover:rotate-0 transition-all duration-500 border-white/10">
                  <Bot size={64} className="text-primary animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Syllabus.v2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 px-8 bg-[#0B0C10]/80">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Premium <span className="text-gradient">Experience</span></h2>
            <p className="text-textMuted">Not just another video course. A complete learning ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="glass-panel p-8 rounded-2xl border-white/5 group"
              >
                <div className={`card-accent-bar ${idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-accent'}`} />
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The <span className="text-gradient">Investment</span></h2>
            <p className="text-textMuted">Choose your tier and start your AI evolution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Essential Plan */}
            <div className="glass-panel p-10 rounded-3xl border-white/5 flex flex-col">
              <div className="card-accent-bar bg-textMuted/20" />
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Core Access</h3>
                <div className="text-4xl font-display font-bold">Free</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow text-textMuted">
                <li className="flex items-center gap-3"><Zap size={16} className="text-primary"/> 7-Day Curriculum Access</li>
                <li className="flex items-center gap-3"><Zap size={16} className="text-primary"/> Community Discord</li>
                <li className="flex items-center gap-3"><Zap size={16} className="text-primary"/> Daily Mini-Projects</li>
              </ul>
              <button className="w-full py-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all uppercase tracking-widest text-xs font-bold">Start Learning</button>
            </div>

            {/* Pro Plan */}
            <div className="glass-panel p-10 rounded-3xl border-primary/40 bg-primary/5 flex flex-col relative">
              <div className="absolute -top-4 right-8 bg-primary text-background px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
              <div className="card-accent-bar bg-primary" />
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Elite Protocol</h3>
                <div className="text-4xl font-display font-bold">$199<span className="text-lg opacity-50 font-sans">/one-time</span></div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3"><Sparkles size={16} className="text-primary"/> Everything in Core</li>
                <li className="flex items-center gap-3"><Sparkles size={16} className="text-primary"/> 1-on-1 Mentorship</li>
                <li className="flex items-center gap-3"><Sparkles size={16} className="text-primary"/> Certified Professional ID</li>
                <li className="flex items-center gap-3"><Sparkles size={16} className="text-primary"/> Job Placement Support</li>
              </ul>
              <button className="theme-neon-btn w-full py-4 rounded-xl uppercase tracking-widest text-xs font-bold">Enroll in Elite</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl border-primary/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-lg text-textMuted mb-10">Join 5,000+ engineers mastering the new AI stack.</p>
          <button onClick={() => setEnrollModalOpen(true)} className="theme-neon-btn px-10 py-4 rounded-full font-bold text-lg transition-all duration-300">
            Join the Academy
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-textMuted text-sm">
        <p>© 2026 Context Engineering & AI Systems Lab. All rights reserved.</p>
      </footer>
      </div>

      {/* Enrollment Modal */}
      {isEnrollModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setEnrollModalOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md glass-panel p-8 rounded-3xl border-primary/50 shadow-[0_0_40px_rgba(230,36,41,0.3)] z-10"
          >
            <button 
              onClick={() => setEnrollModalOpen(false)}
              className="absolute top-4 right-4 text-textMuted hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-3xl font-display font-bold mb-2">
              <span className="text-gradient">Suit Up</span>
            </h3>
            <p className="text-textMuted mb-6">Enter your details to claim your spot in the Avengers Initiative.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setEnrollModalOpen(false); alert('Welcome to the Academy!'); }}>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-1">Full Name</label>
                <input type="text" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Alex Chen" />
              </div>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-1">Email Address</label>
                <input type="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="alex@example.com" />
              </div>
              <button type="submit" className="w-full theme-purple-btn px-6 py-4 rounded-xl mt-4 transition-all duration-300">
                Secure My Spot
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default App;
