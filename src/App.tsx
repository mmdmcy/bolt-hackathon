import React, { useState, useEffect } from 'react';
import { Trophy, DollarSign, Users, Send, Rocket, Code, Globe, Zap, ChevronDown } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('attendee');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    setVisible(true);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight) + 1;
      setCurrentSection(Math.min(section, 4));
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className={`min-h-screen relative section-${currentSection}`}>
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        
        <div className="container mx-auto px-4 pt-24 pb-32 relative">
          <div className={`text-center transform transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mb-12">
              <Trophy className="w-24 h-24 mx-auto text-[#0066FF] animate-float" />
              <div className="absolute -inset-8 bg-[#0066FF]/20 blur-3xl rounded-full -z-10" />
            </div>

            <h1 className="text-8xl md:text-[12rem] font-bold mb-8 tracking-tighter leading-none animate-neon">
              <span className="bolt-gradient">
                $1M+
              </span>
            </h1>
            
            <div className="space-y-4 mb-16">
              <p className="text-6xl md:text-8xl font-black tracking-tight text-stroke animate-glitch"
                 data-text="HACKATHON">
                HACKATHON
              </p>
              <p className="text-xl md:text-2xl text-[#0066FF] tracking-widest neon-border inline-block px-6 py-2 rounded-full">
                POWERED BY BOLT.NEW
              </p>
            </div>

            <div className="flex flex-wrap gap-8 justify-center items-center mb-16">
              <div className="glass-card px-8 py-4 rounded-full flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-[#0066FF]" />
                <span className="text-lg">$1M+ Prize Pool</span>
              </div>
              <div className="glass-card px-8 py-4 rounded-full flex items-center gap-3">
                <Users className="w-6 h-6 text-[#0066FF]" />
                <span className="text-lg">World's Largest Hackathon</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-[#0066FF] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-32 relative section-${currentSection}`}>
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="glass-card p-8 rounded-2xl">
              <Rocket className="w-12 h-12 text-[#0066FF] mb-6" />
              <h3 className="text-2xl font-bold mb-4 animate-neon">Launch Your Vision</h3>
              <p className="text-gray-300">Transform your groundbreaking ideas into reality with cutting-edge tools and unlimited possibilities.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <Code className="w-12 h-12 text-[#0066FF] mb-6" />
              <h3 className="text-2xl font-bold mb-4 animate-neon">Code Excellence</h3>
              <p className="text-gray-300">Push the boundaries of what's possible with next-generation development platforms.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <Globe className="w-12 h-12 text-[#0066FF] mb-6" />
              <h3 className="text-2xl font-bold mb-4 animate-neon">Global Impact</h3>
              <p className="text-gray-300">Join developers worldwide in creating solutions that shape the future of technology.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Judges Section */}
      <div className={`py-32 relative section-${currentSection}`}>
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center tracking-wide animate-neon">
              JUDGED BY INDUSTRY TITANS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
              <div className="space-y-4">
                <p className="text-3xl font-medium bolt-gradient">Pieter Levels</p>
                <p className="text-xl text-[#0066FF]">@levelsio</p>
                <p className="text-gray-300">Founder of Nomad List & Remote OK</p>
              </div>
              <div className="space-y-4">
                <p className="text-3xl font-medium bolt-gradient">Logan K</p>
                <p className="text-xl text-[#0066FF]">@OfficialLoganK</p>
                <p className="text-gray-300">Tech Innovator & Entrepreneur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Section */}
      <div className={`py-32 relative section-${currentSection}`}>
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-12">
            <div className="flex items-center justify-center mb-8">
              <Zap className="w-12 h-12 text-[#0066FF] animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center tracking-wide animate-neon">
              JOIN THE REVOLUTION
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <label className="block text-xl text-gray-300">I am a...</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setRole('attendee')}
                    className={`flex-1 py-4 px-6 rounded-lg transition-all duration-300 ${
                      role === 'attendee'
                        ? 'bg-[#0066FF] text-white neon-border'
                        : 'glass-card hover:bg-[#0066FF]/10'
                    }`}
                  >
                    Attendee
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole('sponsor')}
                    className={`flex-1 py-4 px-6 rounded-lg transition-all duration-300 ${
                      role === 'sponsor'
                        ? 'bg-[#0066FF] text-white neon-border'
                        : 'glass-card hover:bg-[#0066FF]/10'
                    }`}
                  >
                    Sponsor
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="block text-xl text-gray-300">Email</label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-6 py-4 rounded-lg glass-card bg-white/5 focus:bg-[#0066FF]/10 focus:outline-none focus:ring-2 focus:ring-[#0066FF]/50 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#0066FF] hover:bg-[#0055DD] text-white px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300 neon-border"
                  >
                    <Send className="w-5 h-5" />
                    Join
                  </button>
                </div>
              </div>
            </form>

            {submitted && (
              <div className="mt-8 text-center">
                <p className="text-2xl bolt-gradient">
                  Welcome to the future of hackathons.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;