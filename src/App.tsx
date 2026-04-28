/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  Bell, 
  User as UserIcon,
  ChevronRight,
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Monitor,
  Globe,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { 
  NAV_ITEMS, 
  PROJECTS, 
  SERVICES, 
  SKILLS, 
} from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [projectFilter, setProjectFilter] = useState('All');

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = projectFilter === 'All' || p.category === projectFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, projectFilter]);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTab(id);
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800
        transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">NG</div>
              <span className="font-semibold tracking-tight text-white uppercase text-sm">Munal Dev</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'logout') return;
                  scrollToSection(item.id);
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group
                  ${activeTab === item.id 
                    ? 'bg-indigo-500/10 text-indigo-400 border-l-2 border-indigo-500' 
                    : item.id === 'logout'
                      ? 'text-rose-400 hover:bg-rose-500/10 mt-auto'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                <item.icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${activeTab === item.id ? 'text-indigo-400' : ''}`} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* User Profile Footer */}
          <div className="p-4 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-3 p-3 bg-slate-950 border border-slate-800 rounded-2xl">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500 bg-slate-800 overflow-hidden shadow-inner flex items-center justify-center">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Munal" 
                  alt="Munal Gaihre" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate uppercase tracking-tighter">Munal Gaihre</p>
                <p className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Sys Admin</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className="fixed top-0 right-0 left-0 lg:left-64 z-30 h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 lg:hidden text-slate-400 hover:text-white">
            <Menu className="w-5 h-5" />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search projects, skills..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-full py-1.5 pl-10 pr-4 text-xs text-white focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4 ml-4">
          <div className="hidden md:block text-right">
            <p className="text-[10px] text-indigo-400 font-medium uppercase tracking-widest leading-none">Active System</p>
            <p className="text-xs font-bold text-white mt-1">v1.2.0-stable</p>
          </div>
          <button className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors relative">
            <Bell className="w-4 h-4 text-slate-400" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="lg:pl-64 pt-16 min-h-screen">
        <div className="p-6 max-w-7xl mx-auto space-y-6 pb-24">
          
          {/* Dashboard Bento Grid */}
          <div id="dashboard" className="grid grid-cols-1 md:grid-cols-4 gap-4 scroll-mt-24 text-left">
            
            {/* Hero Block */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 to-indigo-900 rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-end group shadow-2xl"
            >
              <div className="absolute top-8 right-8 mix-blend-overlay opacity-20 group-hover:scale-110 transition-transform duration-1000">
                <UserIcon size={120} strokeWidth={1} />
              </div>
              <div className="relative z-10 space-y-4">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                    Munal GAIHRE
                  </h1>
                  <h2 className="text-indigo-200 font-bold mt-2 uppercase text-[10px] tracking-[0.2em]">Full Stack Developer</h2>
                </div>
                <p className="text-indigo-100/70 text-xs max-w-sm leading-relaxed">
                  Building modern, high-performance web solutions with a focus on administrative efficiency and user-centric architecture.
                </p>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => scrollToSection('contact')} className="px-5 py-2.5 bg-white text-indigo-900 rounded-xl text-xs font-black uppercase tracking-tight hover:scale-105 active:scale-95 transition-all">
                    Get Quote
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="px-5 py-2.5 bg-indigo-500/20 text-white border border-white/20 rounded-xl text-xs font-bold uppercase tracking-tight backdrop-blur-sm hover:bg-white/10 transition-all">
                    Work Feed
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Blocks */}
            <div className="md:col-span-1 bg-slate-900 rounded-[2rem] p-6 border border-slate-800 flex flex-col justify-between group hover:border-indigo-500 transition-colors">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Top Skill</span>
                <span className="text-xs font-mono text-emerald-400">90%</span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-black text-white tracking-tighter">REACT</p>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-indigo-500" 
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 bg-slate-900 rounded-[2rem] p-6 border border-slate-800 flex flex-col justify-between group hover:border-indigo-500 transition-colors uppercase">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System</span>
                <span className="text-xs font-mono text-indigo-400 tracking-normal">STABLE</span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-black text-white tracking-tighter">BACKEND</p>
                <p className="text-[10px] text-slate-500 font-bold tracking-widest">PHP / Node.js</p>
              </div>
            </div>

            {/* Profile Summary Block */}
            <div id="profile" className="md:col-span-2 bg-slate-900 rounded-[2rem] p-6 border border-slate-800 flex flex-col justify-center scroll-mt-24">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-slate-800 rounded-[1.5rem] p-1 border-2 border-indigo-500 shadow-xl shadow-indigo-500/10 shrink-0">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Munal" alt="Munal" className="w-full h-full object-cover rounded-[1rem]" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Authorized Admin</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-sm">
                    Focused on crafting seamless digital experiences through clean and maintainable code. Specializing in administrative systems and scalable architectures.
                  </p>
                  <div className="flex justify-center sm:justify-start gap-4 mt-4">
                    <Github className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                    <Mail className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {/* Core Capabilities */}
            <div id="skills" className="md:col-span-1 bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 flex flex-col space-y-6 scroll-mt-24">
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Core Capabilities</h3>
              <div className="space-y-4 flex-1">
                {SKILLS.slice(0, 7).map((skill, idx) => (
                  <div key={idx} className="space-y-1.5 focus-within:scale-[1.02] transition-transform">
                    <div className="flex justify-between text-[10px] uppercase font-black tracking-tight">
                      <span className="text-slate-400">{skill.name}</span>
                      <span className="text-indigo-400 font-mono tracking-normal">{skill.percentage}%</span>
                    </div>
                    <div className="h-1 bg-slate-800 w-full rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * idx }}
                        className={`h-full ${skill.percentage > 90 ? 'bg-emerald-500' : 'bg-indigo-500'}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Services */}
            <div id="services" className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 space-y-8 scroll-mt-24">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Strategic Services</h3>
                <button onClick={() => scrollToSection('contact')} className="text-[10px] font-black text-slate-500 hover:text-white uppercase flex items-center gap-1 transition-colors group">
                  Learn More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((service, idx) => (
                  <div key={idx} className="p-4 bg-slate-950/50 border border-slate-800 rounded-2xl flex items-start gap-4 group hover:border-indigo-500 transition-all cursor-default">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h4 className="text-xs font-black text-white uppercase tracking-tight">{service.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-tight line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Service CTA Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="flex -space-x-3">
                  {['APP', 'DEV', 'SEO'].map((label, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-[8px] font-black shadow-lg
                      ${i === 0 ? 'bg-indigo-600' : i === 1 ? 'bg-emerald-600' : 'bg-rose-600'}`}>
                      {label}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">End-to-End Enterprise Solutions</p>
              </div>
            </div>
          </div>

          {/* Projects Feed Section */}
          <section id="projects" className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 space-y-6 scroll-mt-24 text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Deployment Feed</h3>
              <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
                {['All', 'Web Application', 'Web Development', 'Graphic Design'].slice(0, 3).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all
                      ${projectFilter === cat 
                        ? 'bg-indigo-500 text-white' 
                        : 'text-slate-500 hover:text-white'}`}
                  >
                    {cat === 'Web Application' ? 'App' : cat === 'Web Development' ? 'Dev' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="p-4 bg-slate-950/50 border border-slate-800 rounded-[1.5rem] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group cursor-pointer hover:border-indigo-500 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0">
                        <Monitor className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-white uppercase tracking-tight">{project.title}</h4>
                        <p className="text-[10px] font-mono text-slate-500 mt-0.5 tracking-tight">{project.tech.join(' • ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <span className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest
                        ${project.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' : 
                          project.status === 'In Progress' ? 'bg-amber-500/10 text-amber-500' : 
                          'bg-indigo-500/10 text-indigo-500'}`}>
                        {project.status}
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </section>

          {/* Contact Block Grid */}
          <div id="contact" className="grid grid-cols-1 md:grid-cols-5 gap-4 scroll-mt-24 text-left">
            {/* Contact Details */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 space-y-8 flex flex-col">
              <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">Secure Channel</h3>
              <div className="space-y-6 flex-1">
                {[
                  { icon: Mail, label: 'Email Communication', val: 'gaihreMunal2021@gmail.com' },
                  { icon: Globe, label: 'Location Hub', val: 'Nepal / Remote-Ready' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-950 border border-slate-800 rounded-2xl group hover:border-indigo-500 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-indigo-400 transition-colors shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">{item.label}</p>
                      <p className="text-xs font-bold text-white mt-0.5 truncate">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Connect Socially</p>
                <div className="flex gap-3">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <Icon key={i} className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3 bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Identity</label>
                    <input type="text" placeholder="FULL NAME" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-indigo-500 outline-none uppercase font-bold tracking-tight" />
                  </div>
                  <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Protocol</label>
                    <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-indigo-500 outline-none uppercase font-bold tracking-tight" />
                  </div>
                </div>
                <div className="space-y-1.5 focus-within:translate-x-1 transition-transform">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Information Hub</label>
                  <textarea rows={4} placeholder="TRANSMIT YOUR MESSAGE..." className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-xs text-white focus:border-indigo-500 outline-none font-bold uppercase tracking-tight resize-none" />
                </div>
                <button className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-indigo-500/20 active:scale-95 transition-all outline-none">
                  TRANSMIT DATA
                </button>
              </form>
            </div>
          </div>

        </div>
        
        {/* Footer Area */}
        <footer className="p-12 border-t border-slate-800 bg-slate-950 text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">
              Munal GAIHRE • {new Date().getFullYear()} • SYS_ARCH_V2
            </p>
            <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <Code2 className="w-4 h-4 cursor-help" />
             <Globe className="w-4 h-4 cursor-help" />
             <ShieldCheck className="w-4 h-4 cursor-help" />
          </div>
        </footer>
      </main>

      {/* Floating Tactical Button */}
      <button 
        onClick={() => scrollToSection('contact')}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-indigo-500 text-white rounded-2xl shadow-2xl flex items-center justify-center md:hidden active:scale-90 transition-transform"
      >
        <Mail className="w-6 h-6" />
      </button>
    </div>
  );
}
