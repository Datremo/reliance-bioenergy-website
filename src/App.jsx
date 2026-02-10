import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Factory, Users, TrendingUp, Activity, Leaf, Menu, X, 
  ChevronRight, Droplets, Flame, CheckCircle2, AlertCircle, Database, 
  Recycle, Wind, Truck, Sun, Beaker, RotateCcw, ChevronDown, BookOpen,
  Settings, FlaskConical, Package, RefreshCw, Zap, Waves, Tractor, Gauge, Info,
  Thermometer, Clock, MoveRight, Microscope, Sprout, ShieldAlert, AlertTriangle, FileText,
  Target, Globe, Briefcase, Coins, Play, BarChart3, Landmark, Network, MapPin, ThumbsUp, 
  ArrowUpRight, Fuel, ShoppingBag, XCircle, ShieldCheck, Monitor, 
  Volume2, ThumbsDown, PlayCircle, PauseCircle, StopCircle,
  // 👇 THESE WERE MISSING! 👇
  UserCheck, HardHat, Scale, Computer, Video, ClipboardCheck, Scan, Footprints, Eye, ClipboardList, ArrowRight
} from 'lucide-react';
// 🎨 GLOBAL COLOR MAP
const colorClasses = {
  blue: { bgSoft: 'bg-blue-50', bgLight: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500', bgSolid: 'bg-blue-500', hoverText: 'group-hover:text-blue-700' },
  orange: { bgSoft: 'bg-orange-50', bgLight: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-500', bgSolid: 'bg-orange-500', hoverText: 'group-hover:text-orange-700' },
  purple: { bgSoft: 'bg-purple-50', bgLight: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500', bgSolid: 'bg-purple-500', hoverText: 'group-hover:text-purple-700' },
  green: { bgSoft: 'bg-green-50', bgLight: 'bg-green-100', text: 'text-green-600', border: 'border-green-500', bgSolid: 'bg-green-500', hoverText: 'group-hover:text-green-700' },
  emerald: { bgSoft: 'bg-emerald-50', bgLight: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-500', bgSolid: 'bg-emerald-500', hoverText: 'group-hover:text-emerald-700' },
  red: { bgSoft: 'bg-red-50', bgLight: 'bg-red-100', text: 'text-red-600', border: 'border-red-500', bgSolid: 'bg-red-500', hoverText: 'group-hover:text-red-700' },
  amber: { bgSoft: 'bg-amber-50', bgLight: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-500', bgSolid: 'bg-amber-500', hoverText: 'group-hover:text-amber-700' },
  yellow: { bgSoft: 'bg-yellow-50', bgLight: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-500', bgSolid: 'bg-yellow-500', hoverText: 'group-hover:text-yellow-700' },
  cyan: { bgSoft: 'bg-cyan-50', bgLight: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-500', bgSolid: 'bg-cyan-500', hoverText: 'group-hover:text-cyan-700' },
  indigo: { bgSoft: 'bg-indigo-50', bgLight: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-500', bgSolid: 'bg-indigo-500', hoverText: 'group-hover:text-indigo-700' },
  violet: { bgSoft: 'bg-violet-50', bgLight: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-500', bgSolid: 'bg-violet-500', hoverText: 'group-hover:text-violet-700' },
  lime: { bgSoft: 'bg-lime-50', bgLight: 'bg-lime-100', text: 'text-lime-600', border: 'border-lime-500', bgSolid: 'bg-lime-600', hoverText: 'group-hover:text-lime-700' },
  slate: { bgSoft: 'bg-slate-50', bgLight: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-500', bgSolid: 'bg-slate-600', hoverText: 'group-hover:text-slate-700' },
  sky: { bgSoft: 'bg-sky-50', bgLight: 'bg-sky-100', text: 'text-sky-600', border: 'border-sky-500', bgSolid: 'bg-sky-600', hoverText: 'group-hover:text-sky-700' },
  teal: { bgSoft: 'bg-teal-50', bgLight: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-500', bgSolid: 'bg-teal-600', hoverText: 'group-hover:text-teal-700' },
  pink: { bgSoft: 'bg-pink-50', bgLight: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-500', bgSolid: 'bg-pink-600', hoverText: 'group-hover:text-pink-700' },
  stone: { bgSoft: 'bg-stone-50', bgLight: 'bg-stone-100', text: 'text-stone-600', border: 'border-stone-500', bgSolid: 'bg-stone-500', hoverText: 'group-hover:text-stone-700' }
};



// ✨ NEW HELPER: ANIMATED COUNTER ✨
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease-out cubic function for smooth landing
      const ease = 1 - Math.pow(1 - percentage, 3);
      
      setCount(Math.floor(ease * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// --- 🌟 PROCESS SIMULATION ENGINE 🌟 ---
const ProcessSimulation = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // 🏭 NODE COORDINATES & DATA
  const nodes = [
    { id: "farming", title: "Sustainable Farming", x: 10, y: 70, icon: <Leaf className="w-5 h-5 md:w-6 md:h-6" />, color: "lime", stats: { "Crop": "Napier Grass", "Role": "Carbon Sink", "Status": "Active" }, description: "Farmers cultivate crops using returned organic manure (FOM/LFOM), fully closing the nutrient cycle." },
    { id: "input", title: "Feedstock Acquisition", x: 10, y: 30, icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />, color: "emerald", stats: { "Input": "5.5 MMT/Year", "Type": "Agri-Residue", "Queue": "Low" }, description: "Aggregation of organic waste. Automated weighbridges and moisture testing ensures quality input." },
    { id: "shredder", title: "Pre-Treatment", x: 30, y: 30, icon: <Settings className="w-5 h-5 md:w-6 md:h-6" />, color: "slate", stats: { "RPM": "1200", "Particle Size": "< 5mm", "Load": "85%" }, description: "Raw material is mechanically shredded into mm-sized particles to accelerate bacterial breakdown." },
    { id: "mixing", title: "Hydrolysis", x: 50, y: 30, icon: <FlaskConical className="w-5 h-5 md:w-6 md:h-6" />, color: "indigo", stats: { "Temp": "38°C", "pH": "6.8", "Slurry Mix": "Optimal" }, description: "Fresh biomass is mixed with recycled liquid manure (LFOM) to kickstart hydrolysis." },
    { id: "digester", title: "Anaerobic Digester", x: 50, y: 60, icon: <Flame className="w-5 h-5 md:w-6 md:h-6" />, color: "orange", stats: { "Temp": "38°C", "Gas Yield": "92%", "Pressure": "15 mBar" }, description: "The heart of the plant. Proprietary microbial consortia digest waste in oxygen-free domes." },
    { id: "upgradation", title: "Gas Upgradation", x: 70, y: 30, icon: <Wind className="w-5 h-5 md:w-6 md:h-6" />, color: "sky", stats: { "CH4 Purity": "96.5%", "CO2 Removal": "99%", "Technique": "VSA" }, description: "Raw biogas is scrubbed to remove impurities, resulting in pure Compressed Biogas (CBG)." },
    { id: "compression", title: "Grid/Cascade", x: 90, y: 30, icon: <Database className="w-5 h-5 md:w-6 md:h-6" />, color: "green", stats: { "Pressure": "250 Bar", "Flow": "1200 SCM/h", "Target": "CGD Grid" }, description: "CBG is compressed to high pressure for cylinder filling or direct pipeline injection." },
    { id: "separator", title: "Separator (SLS)", x: 70, y: 60, icon: <RefreshCw className="w-5 h-5 md:w-6 md:h-6" />, color: "teal", stats: { "Solid Cake": "20%", "Liquid Filtrate": "80%", "Efficiency": "High" }, description: "Post-digestion slurry (Digestate) is separated into solids (FOM) and liquid (LFOM)." },
    { id: "bhoovedyam", title: "Bhoovedyam (FOM)", x: 70, y: 85, icon: <Package className="w-5 h-5 md:w-6 md:h-6" />, color: "amber", stats: { "Organic C": "18%", "Moisture": "12%", "Stock": "Available" }, description: "Solid manure is cured in windrows, enriched, and packed as premium organic fertilizer." },
    { id: "lagoon", title: "LFOM Lagoon", x: 90, y: 60, icon: <Waves className="w-5 h-5 md:w-6 md:h-6" />, color: "violet", stats: { "Capacity": "5000 KL", "NPK": "Rich", "pH": "7.5" }, description: "Liquid Fermented Organic Manure (LFOM) is stored here. It's rich in Potash and Nitrogen." },
    { id: "tanker", title: "Tanker Dispatch", x: 90, y: 85, icon: <Tractor className="w-5 h-5 md:w-6 md:h-6" />, color: "pink", stats: { "Fleet": "15 Trucks", "Daily Disp": "40 KL", "Area": "50km" }, description: "Farmers collect LFOM in tankers for direct soil application as a liquid fertilizer." }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) { interval = setInterval(() => { setActiveStage((prev) => (prev + 1) % nodes.length); }, 3000); }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNodeClick = (node) => { setSelectedNode(node); setIsPlaying(false); };

  return (
    <div className="w-full bg-slate-50 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200">
      <div className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 bg-white">
        <div><h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">BIO-ENERGY <span className="text-emerald-600">NEXUS</span></h1><p className="text-xs md:text-sm text-slate-500 font-medium mt-1">Real-time Process Simulation • Live Monitor</p></div>
        <div className="flex gap-2 md:gap-4 mt-3 md:mt-0 w-full md:w-auto">
          <button onClick={() => setIsPlaying(!isPlaying)} className="flex-1 md:flex-none bg-slate-900 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">{isPlaying ? 'PAUSE' : 'RESUME'}</button>
        </div>
      </div>
      <div className="p-2 md:p-6 bg-slate-100">
        <div className="relative w-full aspect-[10/14] md:aspect-[21/9] bg-slate-900 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs><marker id="arrowHead" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" /></marker></defs>
            <path d="M 10 70 L 10 30 L 30 30 L 50 30" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 50 30 L 50 60" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 50 60 L 70 30 L 90 30" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 50 60 L 70 60" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 70 60 L 70 85" fill="none" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" markerEnd="url(#arrowHead)" />
            <path d="M 70 60 L 90 60" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 90 60 L 90 85" fill="none" stroke="#334155" strokeWidth="0.8" markerEnd="url(#arrowHead)" />
            <path d="M 90 60 Q 90 40 50 30" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
            <path d="M 70 85 Q 40 95 10 70" fill="none" stroke="#d97706" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.6" markerEnd="url(#arrowHead)" />
            <path d="M 90 85 Q 50 100 10 70" fill="none" stroke="#db2777" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.6" markerEnd="url(#arrowHead)" />
            {isPlaying && (
              <>
                <circle r="1" fill="#4ade80"><animateMotion dur="6s" repeatCount="indefinite" path="M 10 70 L 10 30 L 30 30 L 50 30 L 50 60" /></circle>
                <circle r="1" fill="#38bdf8"><animateMotion dur="4s" repeatCount="indefinite" path="M 50 60 L 70 30 L 90 30" /></circle>
                <circle r="1.2" fill="#a8a29e"><animateMotion dur="1.5s" repeatCount="indefinite" path="M 50 60 L 70 60" /></circle>
                <circle r="1" fill="#fbbf24"><animateMotion dur="2s" repeatCount="indefinite" path="M 70 60 L 70 85" /></circle>
                <circle r="1" fill="#a78bfa"><animateMotion dur="2s" repeatCount="indefinite" path="M 70 60 L 90 60" /></circle>
                <circle r="1" fill="#f472b6"><animateMotion dur="2s" repeatCount="indefinite" path="M 90 60 L 90 85" /></circle>
                <circle r="1" fill="#8b5cf6"><animateMotion dur="6s" repeatCount="indefinite" path="M 90 60 Q 90 40 50 30" /></circle>
                <circle r="0.8" fill="#d97706"><animateMotion dur="8s" repeatCount="indefinite" path="M 70 85 Q 40 95 10 70" /></circle>
                <circle r="0.8" fill="#db2777"><animateMotion dur="10s" repeatCount="indefinite" path="M 90 85 Q 50 100 10 70" /></circle>
              </>
            )}
          </svg>
          {nodes.map((node, index) => {
            const isActive = activeStage === index;
            const isSelected = selectedNode?.id === node.id;
            const colors = colorClasses[node.color];
            return (
              <div key={node.id} onClick={() => handleNodeClick(node)} className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-500 ease-out group/node ${isActive ? 'scale-110 z-20' : 'scale-100 z-10 hover:scale-105'}`} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
                <div className={`relative w-8 h-8 md:w-14 md:h-14 rounded-lg md:rounded-xl flex items-center justify-center shadow-2xl border-2 ${isActive || isSelected ? 'border-white ring-2 md:ring-4 ring-emerald-500/30' : 'border-slate-700'} ${colors.bgSolid} text-white transition-all`}>
                  <div className={`${isActive ? 'animate-bounce' : ''}`}>{node.icon}</div>
                  {isActive && <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full border-2 border-emerald-600 animate-pulse" />}
                </div>
                <div className={`hidden md:block absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap border border-slate-700 shadow-xl transition-all ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover/node:opacity-100'}`}>{node.title}</div>
              </div>
            );
          })}
          {selectedNode && (
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl p-4 md:p-6 shadow-2xl transform transition-transform duration-300 z-30 overflow-y-auto animate-slide-in">
              <button onClick={() => { setSelectedNode(null); setIsPlaying(true); }} className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all"><X size={16} /></button>
              <div className="flex items-center gap-3 mb-6 mt-6 md:mt-0"><div className={`p-2 rounded-lg ${colorClasses[selectedNode.color].bgSolid} text-white shadow-lg`}>{selectedNode.icon}</div><h2 className="text-lg md:text-xl font-bold text-white leading-tight">{selectedNode.title}</h2></div>
              <div className="space-y-4">
                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50"><p className="text-slate-300 text-sm leading-relaxed">{selectedNode.description}</p></div>
                <div className="grid grid-cols-1 gap-2"><h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-2">Telemetry Data</h3>{Object.entries(selectedNode.stats).map(([key, value]) => (<div key={key} className="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700 hover:border-emerald-500/30 transition-colors"><span className="text-xs text-slate-400">{key}</span><span className="text-emerald-400 font-mono font-bold text-sm">{value}</span></div>))}</div>
                <div className="mt-4 pt-4 border-t border-slate-800"><h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity size={12} className="text-emerald-500" /> Live Sensor Feed</h3><LiveGraph /><div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1"><span>t-5s</span><span>t-0s</span></div></div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] text-slate-400 font-medium bg-white p-3 rounded-xl border border-slate-200 inline-flex w-full">
          <span className="flex items-center gap-1 md:gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Biomass</span>
          <span className="flex items-center gap-1 md:gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Biogas</span>
          <span className="flex items-center gap-1 md:gap-2"><span className="w-2 h-2 rounded-full bg-stone-400"></span> Digestate Mix</span>
          <span className="flex items-center gap-1 md:gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Solid (FOM)</span>
          <span className="flex items-center gap-1 md:gap-2"><span className="w-2 h-2 rounded-full bg-violet-500"></span> Liquid (LFOM)</span>
        </div>
      </div>
    </div>
  );
};

// 📊 Helper: Live Data Graph
const LiveGraph = () => {
  const [bars, setBars] = useState([...Array(20)].map(() => Math.random() * 100));
  useEffect(() => { const interval = setInterval(() => { setBars(prev => [...prev.slice(1), Math.random() * 60 + 20]); }, 100); return () => clearInterval(interval); }, []);
  return (<div className="h-20 flex items-end justify-between gap-[2px]">{bars.map((height, i) => (<div key={i} className="w-full bg-emerald-500/20 rounded-sm relative" style={{ height: `${height}%` }}><div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400/50" /></div>))}</div>);
};

// --- 💎 ULTRA-PREMIUM BUSINESS OVERVIEW 💎 ---
const BusinessOverview = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <div className="animate-fade-in space-y-12 py-8">
      
      {/* 1. COMPACT CINEMATIC HEADER WITH GLASS STATS */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group border-4 border-slate-900/10 h-[400px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-900">
           <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80" 
              alt="Reliance Green Energy" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" 
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        {/* Main Title Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pb-24">
           <div 
             onClick={() => setShowVideoModal(true)}
             className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full mb-4 cursor-pointer hover:scale-110 hover:bg-white/20 transition-all shadow-2xl group/play animate-pulse"
           >
              <Play fill="white" size={32} className="text-white ml-1 group-hover/play:text-emerald-400 transition-colors" />
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl">
             NET ZERO <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">2035</span>
           </h2>
           <p className="text-lg text-slate-300 max-w-xl font-light">
             Accelerating India's transition to green energy. 
           </p>
        </div>

        {/* 💎 THE FLOATING UTILITY STATS (Restored!) 💎 */}
        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 md:grid-cols-4 gap-3">
           {[
             { label: "Plants Planned", val: 100, suffix: "+", icon: Factory },
             { label: "CO2 Saved", val: 2, suffix: ".2 MMT", icon: Leaf },
             { label: "Investment", val: 750, suffix: " Cr", icon: Coins },
             { label: "Green Jobs", val: 5000, suffix: "+", icon: Users },
           ].map((stat, i) => (
             <div key={i} className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-xl text-center hover:bg-black/60 transition-colors group/stat">
                <div className="flex justify-center mb-1 text-emerald-400 group-hover/stat:text-emerald-300 transform group-hover/stat:scale-110 transition-transform">
                  <stat.icon size={16} />
                </div>
                <div className="text-xl md:text-2xl font-black text-white mb-0.5">
                  <AnimatedCounter end={stat.val} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
             </div>
           ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-6 right-6 text-white hover:text-red-500 z-50 bg-black/50 rounded-full p-2 transition-all"
            >
              <X size={32} />
            </button>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/YQJoDj80HzM?autoplay=1&rel=0" 
              title="Reliance Industries Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 2. STRATEGIC DASHBOARD (BENTO GRID 2.0) */}
      <div>
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
             <Briefcase className="text-blue-600 fill-blue-100" size={32} /> Strategic Pillars
           </h3>
           <span className="hidden md:inline-block text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">Internal Report 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
           
           {/* CARD 1: THE FEEDSTOCK ENGINE (Large) */}
           <div className="md:col-span-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-[2rem] p-8 border border-green-100 relative overflow-hidden group hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12"><Sprout size={200} /></div>
              
              <div className="relative z-10 h-full flex flex-col">
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-white p-3 rounded-2xl shadow-sm text-green-600"><Tractor size={32} /></div>
                    <button onClick={() => setShowCaseStudy(true)} className="bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30">
                       READ FARMER STORY
                    </button>
                 </div>
                 
                 <h4 className="text-3xl font-black text-slate-800 mb-4">Feedstock Security</h4>
                 <p className="text-slate-600 text-lg leading-relaxed max-w-lg mb-8">
                    We don't just buy waste; we build relationships. Through our <strong className="text-green-700">Digital Aggregator Platform</strong>, we connect with 50,000+ farmers to procure Rice Straw & Press Mud, ensuring 100% year-round availability.
                 </p>
                 
                 {/* Progress Bar Visual */}
                 <div className="mt-auto bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-green-100">
                    <div className="flex justify-between text-xs font-bold text-slate-500 mb-2">
                       <span>PROCUREMENT GOAL</span>
                       <span className="text-green-600">85% ACHIEVED</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                       <div className="bg-gradient-to-r from-green-400 to-emerald-600 h-full w-[85%] rounded-full animate-pulse"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* CARD 2: ECONOMIC IMPACT (Short/Compact Version) */}
<div className="bg-slate-900 rounded-[2rem] p-6 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/50"></div>
  
  <div className="relative z-10 h-full flex flex-col justify-between">
      {/* Top Section: Header & Main Stat */}
      <div>
        <div className="flex items-center justify-between mb-4">
            <div className="bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center border border-slate-700">
              <Coins className="text-yellow-400" size={20} />
            </div>
            {/* Optional: Put a badge or small text here if needed, or leave empty */}
        </div>
        
        <h4 className="text-lg font-bold text-slate-300 mb-1">Economic Revolution</h4>
        <div className="text-4xl font-black text-yellow-400 mb-1">
            ₹<AnimatedCounter end={18000} duration={2500} />
        </div>
        <p className="text-slate-500 text-xs font-medium">Add. Income / Farmer</p>
      </div>

      {/* Bottom Section: Secondary Stats (Horizontal Grid) */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800/50">
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-blue-400">
              <TrendingUp size={14} />
              <span className="text-[10px] uppercase font-bold text-slate-500">Rural GDP</span>
            </div>
            <div className="font-mono text-sm text-white font-bold">+1.2%</div>
        </div>
        
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-green-400">
              <Database size={14} />
              <span className="text-[10px] uppercase font-bold text-slate-500">Savings</span>
            </div>
            <div className="font-mono text-sm text-white font-bold">$200M</div>
        </div>
      </div>
  </div>
</div>
           {/* CARD 3: TECH STACK */}
           <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                 <div className="bg-purple-100 p-3 rounded-2xl text-purple-600"><FlaskConical /></div>
                 <h4 className="text-xl font-bold text-slate-800">Deep Tech</h4>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-slate-500 text-sm font-medium">Reactor Type</span>
                    <span className="text-purple-700 font-bold text-sm bg-purple-50 px-2 py-1 rounded">CSTR Advanced</span>
                 </div>
                 <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                    <span className="text-slate-500 text-sm font-medium">Efficiency</span>
                    <span className="text-purple-700 font-bold text-sm bg-purple-50 px-2 py-1 rounded">+22% Yield</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm font-medium">Patents</span>
                    <span className="text-purple-700 font-bold text-sm bg-purple-50 px-2 py-1 rounded">12 Pending</span>
                 </div>
              </div>
           </div>

           {/* CARD 4: JIO-BP RETAIL */}
           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
              <div className="absolute -right-4 -bottom-4 opacity-20 rotate-12"><Fuel size={120} /></div>
              
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md"><ShoppingBag /></div>
                    <ArrowUpRight className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                 </div>
                 <h4 className="text-3xl font-black mb-1">Jio-bp</h4>
                 <p className="text-blue-200 text-sm font-medium mb-6">Retail Integration</p>
                 
                 <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                    <MapPin size={16} className="text-red-400" />
                    <span className="font-mono font-bold">1,400+ Stations Live</span>
                 </div>
              </div>
           </div>
            {/* Card 5: Circular Economy */}
           <div className="md:col-span-1 md:row-span-1 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center gap-6 group relative overflow-hidden">
              <div className="flex-1 relative z-10">
                 <div className="flex items-center gap-2 mb-2">
                    <Recycle className="text-blue-500 w-5 h-5 group-hover:animate-spin-slow" />
                    <h4 className="text-xl font-bold text-blue-900">Annadata to Urjadata</h4>
                 </div>
                 <p className="text-sm text-blue-700/80 leading-relaxed mb-4">
                    Transforming India's food providers into energy providers. A complete circular economy model.
                 </p>
                 <button 
                   onClick={() => setShowCaseStudy(true)}
                   className="text-xs font-bold text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                 >
                    Read Case Study
                 </button>
              </div>
              <div className="hidden md:block w-32 h-32 bg-white rounded-2xl shadow-md p-1 rotate-3 group-hover:rotate-0 transition-transform duration-500 relative z-10 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-xl" alt="Plant" />
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl"></div>
           </div>

        </div>
      </div>
      
      {/* CASE STUDY MODAL (UNCHANGED logic, visually polished) */}
      {showCaseStudy && (
        <div className="fixed inset-0 z-[60] bg-slate-900/90 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]">
             <button 
                onClick={() => setShowCaseStudy(false)}
                className="absolute top-4 right-4 text-white md:text-slate-400 z-20 bg-black/50 md:bg-slate-100 rounded-full p-2 hover:bg-red-500 hover:text-white transition-all"
              >
                <X size={20} />
              </button>
              
              {/* Left Image Side */}
              <div className="md:w-2/5 relative h-48 md:h-auto">
                 <img src="https://images.unsplash.com/photo-1625246333195-58197bd47d72?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div>
                      <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">SUCCESS STORY</span>
                      <h3 className="text-2xl font-bold text-white">Barabanki Model</h3>
                      <p className="text-slate-300 text-xs mt-1">Uttar Pradesh, India</p>
                    </div>
                 </div>
              </div>
              
              {/* Right Content Side */}
              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
                 <h4 className="text-2xl font-bold text-slate-900 mb-6">From Burning Waste to Earning Wealth</h4>
                 
                 <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <div className="text-3xl font-black text-green-600">Zero</div>
                       <div className="text-xs font-bold text-slate-500 uppercase">Stubble Burning</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                       <div className="text-3xl font-black text-blue-600">+15%</div>
                       <div className="text-xs font-bold text-slate-500 uppercase">Crop Yield</div>
                    </div>
                 </div>

                 <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                    <p>
                      <strong>The Challenge:</strong> Farmers in Barabanki were burning thousands of tons of paddy straw every winter, leading to severe smog in Delhi-NCR and loss of soil nutrients.
                    </p>
                    <p>
                      <strong>The Solution:</strong> Reliance setup a comprehensive collection chain. We deployed balers to collect straw directly from the fields at no cost to the farmer, and paid them <strong>₹2,000 per ton</strong> for the biomass.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 italic text-blue-800">
                       "I used to spend money to clear my field. Now, Reliance pays me for the waste, and the FOM fertilizer has revived my soil." 
                       <br/><span className="text-xs font-bold not-italic mt-2 block">- Ramesh Kumar, Farmer Partner</span>
                    </div>
                 </div>
              </div>
          </div>
        </div>
      )}
      {/* 3. THE ECOSYSTEM VISUALIZER (Restored at Bottom) */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
         <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800">The Reliance Bio-Energy Ecosystem</h3>
            <p className="text-slate-500">End-to-End Value Chain Integration</p>
         </div>
         
         <div className="flex flex-col md:flex-row justify-center items-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -z-0"></div>

            {[
              { title: "Aggregator", icon: Users, color: "blue", sub: "FPOs" },
              { title: "Logistics", icon: Truck, color: "orange", sub: "Supply Chain" },
              { title: "Processing", icon: Factory, color: "red", sub: "CBG Plants" },
              { title: "Distribution", icon: Fuel, color: "green", sub: "Pipelines" },
              { title: "Retail", icon: ShoppingBag, color: "purple", sub: "Jio-bp" }
            ].map((item, i) => (
               <div key={i} className="relative z-10 flex flex-col items-center bg-white p-6 rounded-2xl shadow-md border border-slate-100 w-40 hover:-translate-y-2 transition-transform cursor-default group">
                  <div className={`bg-${item.color}-100 p-3 rounded-full text-${item.color}-600 mb-3 group-hover:scale-110 transition-transform`}>
                     <item.icon size={24} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{item.title}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-1">{item.sub}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
    
  );
};

// --- DETAILED GUIDE ---
const DetailedProcessGuide = () => {
  return (
    <div className="animate-fade-in space-y-16 py-8">
      {/* 1. INPUT */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-blue-100 p-3 rounded-2xl text-blue-600"><Truck size={32} /></div>
           <div><h3 className="text-3xl font-bold text-gray-900">1. The Raw Input</h3><p className="text-slate-500">Sustainable feedstock is the foundation.</p></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Napier Grass", desc: "High-yield energy crop.", img: "/reliance-bioenergy-website/Napier.jpg?auto=format&fit=crop&q=80" },
            { name: "Paddy Straw", desc: "Agricultural residue.", img: "/reliance-bioenergy-website/paddy.jpg?auto=format&fit=crop&q=80" },
            { name: "Press Mud", desc: "Sugar industry by-product.", img: "/reliance-bioenergy-website/pressmud.jpg?auto=format&fit=crop&q=80" },
            { name: "Cow Dung", desc: "Inoculum for digestion.", img: "/reliance-bioenergy-website/cow-dung.jpeg?auto=format&fit=crop&q=80" },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 group hover:shadow-lg transition-all">
              <div className="h-32 overflow-hidden"><img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
              <div className="p-4"><h4 className="font-bold text-gray-900 mb-1">{item.name}</h4><p className="text-xs text-slate-500">{item.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PRECISION PROCESSING - ULTRA DETAILED */}
      <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-8 opacity-10"><Activity size={200} /></div>
         
         <div className="relative z-10 flex flex-col gap-12">
            <h3 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">2</span> 
              Precision Processing Engine
            </h3>

            {/* Step 2.1: The Reliance Edge (Pre-Treatment) */}
            <div className="bg-gradient-to-r from-orange-900/40 to-slate-900 p-6 rounded-2xl border border-orange-500/30 mb-8">
               <div className="flex gap-4 items-start">
                 <div className="mt-1 bg-orange-500 p-2 rounded-lg text-white shadow-lg shadow-orange-500/20"><Zap size={24} /></div>
                 <div>
                   <h4 className="font-bold text-xl text-white mb-2">The Reliance Edge: Advanced Pre-Treatment</h4>
                   <p className="text-slate-300 text-sm leading-relaxed mb-4">
                     Standard plants struggle with Napier Grass because of <strong>Lignin</strong> (tough woody fibers). 
                     Reliance uses a special <strong>Steam Explosion or Enzymatic Pre-treatment</strong> step. This "breaks" the woody exterior before it enters the digester, allowing bacteria to digest it much faster than traditional methods.
                   </p>
                   <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-bold bg-orange-500/20 text-orange-200 px-2 py-1 rounded border border-orange-500/30">Breaks Lignin Barrier</span>
                      <span className="text-[10px] font-bold bg-orange-500/20 text-orange-200 px-2 py-1 rounded border border-orange-500/30">Accelerates Digestion</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Step 2.2: Digester Technology Ecosystem */}
            <div className="space-y-8">
               <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <h4 className="font-bold text-2xl text-white flex items-center gap-3"><Factory className="text-red-500" /> Digester Technology</h4>
                  <span className="text-xs font-mono text-red-400 bg-red-900/30 px-3 py-1 rounded-full border border-red-500/30">Core Engine</span>
               </div>

               {/* A. Temperature Variants */}
               <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 opacity-60">
                     <div className="flex items-center gap-2 mb-2 text-blue-400"><Thermometer size={16} /><span className="font-bold text-sm">Psychrophilic</span></div>
                     <div className="text-2xl font-bold text-white mb-1">15°C - 25°C</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">70-100+ Days</div>
                     <p className="text-xs text-slate-500">Slowest process. Rarely used in industrial plants.</p>
                  </div>
                  
                  {/* Active Highlight */}
                  <div className="bg-gradient-to-b from-red-900/40 to-slate-800 p-4 rounded-xl border-2 border-red-500 shadow-xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">RELIANCE STANDARD</div>
                     <div className="flex items-center gap-2 mb-2 text-red-400"><Thermometer size={16} /><span className="font-bold text-sm">Mesophilic</span></div>
                     <div className="text-2xl font-bold text-white mb-1">35°C - 40°C</div>
                     <div className="text-[10px] text-red-300 uppercase tracking-wider mb-2">20-40 Days Retention</div>
                     <p className="text-xs text-slate-300">Industry Standard. Stable, energy-efficient, and resilient to agricultural waste variations.</p>
                  </div>

                  <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 opacity-60">
                     <div className="flex items-center gap-2 mb-2 text-orange-400"><Thermometer size={16} /><span className="font-bold text-sm">Thermophilic</span></div>
                     <div className="text-2xl font-bold text-white mb-1">50°C - 60°C</div>
                     <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2">12-15 Days</div>
                     <p className="text-xs text-slate-500">Faster yield but highly sensitive to temp fluctuations.</p>
                  </div>
               </div>

               {/* B. Reactor Types */}
               <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                     <h5 className="text-sm font-bold text-white border-l-4 border-red-500 pl-3">A. CSTR (Standard)</h5>
                     <p className="text-xs text-slate-400 leading-relaxed">
                       <strong>Continuous Stirred Tank Reactor.</strong> Best for high-moisture waste (Press Mud). Paddles keep the slurry moving so bacteria always touch fresh food.
                     </p>
                  </div>
                  <div className="space-y-2">
                     <h5 className="text-sm font-bold text-white border-l-4 border-slate-500 pl-3">B. Plug Flow (PFD)</h5>
                     <p className="text-xs text-slate-400 leading-relaxed">
                       <strong>Tunnel/Trench Design.</strong> No active mixing. Material moves as a "plug" from one end to the other. Used for thick, high-solid manure.
                     </p>
                  </div>
                  <div className="space-y-2">
                     <h5 className="text-sm font-bold text-white border-l-4 border-amber-500 pl-3">C. Dry Anaerobic</h5>
                     <p className="text-xs text-slate-400 leading-relaxed">
                       <strong>High-Solid (&gt;20%).</strong> Garage-style airtight chambers. Bacteria-rich liquid is sprayed over stacked dry grass/straw.
                     </p>
                  </div>
               </div>

               {/* C. Biological Process Flow */}
               <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                  <h5 className="font-bold text-white text-sm flex items-center gap-2 mb-6">
                    <Microscope size={16} className="text-green-400" /> The 4-Step Biological Core
                  </h5>
                  <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
                     {[
                       { step: "1", name: "Hydrolysis", desc: "Breakdown of complex carbs/proteins into sugars.", color: "text-purple-400", border: "border-purple-500" },
                       { step: "2", name: "Acidogenesis", desc: "Bacteria convert sugars into fatty acids & alcohols.", color: "text-yellow-400", border: "border-yellow-500" },
                       { step: "3", name: "Acetogenesis", desc: "Refining into acetic acid, hydrogen & CO2.", color: "text-orange-400", border: "border-orange-500" },
                       { step: "4", name: "Methanogenesis", desc: "Methanogens convert acid/H2 into Methane (CH4).", color: "text-green-400", border: "border-green-500" }
                     ].map((stage, i) => (
                       <div key={i} className="flex-1 relative group">
                          <div className={`text-xs font-bold ${stage.color} mb-1 uppercase tracking-wider`}>Stage {stage.step}</div>
                          <div className={`bg-slate-900 p-3 rounded-lg border-b-4 ${stage.border} h-full hover:bg-slate-800 transition-colors`}>
                             <div className="text-white font-bold text-sm mb-1">{stage.name}</div>
                             <div className="text-[10px] text-slate-400 leading-tight">{stage.desc}</div>
                          </div>
                          {i !== 3 && <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600"><MoveRight size={16} /></div>}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. OUTPUT & UPGRADATION - ULTRA DETAILED */}
      <section>
        <div className="flex items-center gap-4 mb-8">
           <div className="bg-green-100 p-3 rounded-2xl text-green-600"><Flame size={32} /></div>
           <div><h3 className="text-3xl font-bold text-gray-900">3. Purification & Value Creation</h3><p className="text-slate-500">From Raw Biogas to Clean Energy & Nutrients.</p></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {/* Gas Column */}
           <div className="bg-green-50 rounded-3xl p-8 border border-green-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
              <h4 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3"><Wind size={28} /> Gas Upgradation</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-2">Step 1: Storage & Scrubbing</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Raw gas is stored in double-membrane balloons. It then passes through the <strong>VPSA (Vacuum Pressure Swing Adsorption)</strong> unit or Amine Scrubbers. Here, specific chemicals/molecular sieves trap the CO2 and H2S.
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-2">Step 2: Purification Specs</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex justify-between border-b border-green-200 pb-1"><span>Methane (CH4)</span> <span className="font-bold text-green-700">&gt; 96%</span></li>
                    <li className="flex justify-between border-b border-green-200 pb-1"><span>Carbon Dioxide (CO2)</span> <span className="font-bold text-green-700">&lt; 3% (Removed)</span></li>
                    <li className="flex justify-between border-b border-green-200 pb-1"><span>H2S (Sulphur)</span> <span className="font-bold text-green-700">&lt; 5 ppm</span></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-2">Step 3: Compression</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The pure gas is compressed using a 3-stage compressor to <strong>250 Bar</strong> pressure. It is filled into <strong>Cascade Cylinders</strong> and transported to retail outlets.
                  </p>
                </div>
              </div>
           </div>

           {/* Manure Column */}
           <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full opacity-50 transition-transform group-hover:scale-110"></div>
              <h4 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3"><Sun size={28} /> Digestate Management</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold text-yellow-700 text-sm uppercase tracking-wider mb-2">The Separation (SLS)</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The "Digested Mix" leaves the dome and enters the <strong>Screw Press Separator (SLS)</strong>. This machine mechanically squeezes the sludge to separate solids from liquids.
                  </p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-xl border border-yellow-200">
                  <h5 className="font-bold text-amber-700 text-sm flex items-center gap-2 mb-2"><Package size={16} /> Solid FOM (Fermented Organic Manure)</h5>
                  <p className="text-xs text-gray-600 mb-2">
                    The solid cake is taken to the field and spread in <strong>straight windrow lines</strong>. It is sun-dried for 3-5 days and turned regularly.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">Rich in Organic Carbon</span>
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">Soil Conditioner</span>
                  </div>
                </div>

                <div className="bg-white/60 p-4 rounded-xl border border-violet-200">
                  <h5 className="font-bold text-violet-700 text-sm flex items-center gap-2 mb-2"><Droplets size={16} /> Liquid LFOM (Fertilizer)</h5>
                  <p className="text-xs text-gray-600 mb-2">
                    The liquid filtrate flows into large storage <strong>Lagoons</strong>. 
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1 ml-4 list-disc">
                    <li><strong>Recirculation:</strong> 30% is pumped back to the Mixing Tank (Step 2) to save water.</li>
                    <li><strong>Export:</strong> 70% is filled into <strong>Tankers</strong> and dispatched to farmers for liquid soil application.</li>
                  </ul>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// --- NEW COMPONENT: CRITICAL INSTALLATIONS (RED ZONES) ---
const CriticalInstallations = () => {
  return (
    <div className="animate-fade-in space-y-8 py-8">
      {/* HEADER WITH PESO WARNING */}
      <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-black text-red-700 uppercase tracking-tight flex items-center gap-2">
            <ShieldAlert size={28} /> Critical Installations (Red Zones)
          </h3>
          <p className="text-red-900/70 text-sm mt-1 max-w-2xl">
            High-hazard zones strictly regulated by <strong>PESO (Petroleum & Explosives Safety Organization)</strong>. 
            Unauthorized entry is prohibited. PPE is mandatory.
          </p>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg border border-red-200 shadow-sm text-xs font-bold text-red-600">
          COMPLIANCE: OISD-179
        </div>
      </div>

      {/* THE 4 RED ZONES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. HIGH PRESSURE COMPRESSOR */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-red-600 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-lg text-red-600"><Gauge size={24} /></div>
              <h4 className="font-bold text-lg text-slate-800">1. HP Compressor</h4>
            </div>
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Life Safety Priority</span>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              The single most dangerous unit. Compresses gas from low pressure to <strong>250 Bar</strong>. Failure here is catastrophic.
            </p>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100">
              <h5 className="text-xs font-bold text-red-800 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity size={14} /> Daily Critical Checks</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500" /> <strong>Oil Level:</strong> Low oil = Seizure.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500" /> <strong>Vibration:</strong> Listen for knocking.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-red-500" /> <strong>Cooling:</strong> Temp must be &lt;160°C.</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">Reg: SMPV Rules (Unfired)</div>
          </div>
        </div>

        {/* 2. ANAEROBIC DIGESTERS */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-orange-500 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Factory size={24} /></div>
              <h4 className="font-bold text-lg text-slate-800">2. Digester Domes</h4>
            </div>
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Business Continuity</span>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              The biological heart. Shock to bacteria can cause failure requiring <strong>3-4 months</strong> to restart.
            </p>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity size={14} /> Daily Critical Checks</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> <strong>Temp Stability:</strong> 37°C ±1°C.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> <strong>pH Balance:</strong> 6.8 - 7.2 Strict.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-orange-500" /> <strong>Agitation:</strong> Prevent crusting.</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">Zone: 2 (Methane Gen)</div>
          </div>
        </div>

        {/* 3. PURIFICATION SYSTEM */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-500 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Wind size={24} /></div>
              <h4 className="font-bold text-lg text-slate-800">3. Purification (BPS)</h4>
            </div>
            <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Asset Protection</span>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              Removes corrosives (H2S, CO2). Failure here destroys the expensive compressor downstream.
            </p>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <h5 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity size={14} /> Daily Critical Checks</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <strong>H2S Monitor:</strong> Must be &lt; 20 ppm.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <strong>Media Saturation:</strong> Check Delta-P.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-500" /> <strong>Moisture:</strong> Drain dew points.</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">Std: IS 16087:2016</div>
          </div>
        </div>

        {/* 4. STORAGE CASCADES */}
        <div className="bg-white rounded-2xl shadow-xl border-t-4 border-slate-800 overflow-hidden hover:-translate-y-1 transition-transform duration-300">
          <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-slate-200 p-2 rounded-lg text-slate-700"><Database size={24} /></div>
              <h4 className="font-bold text-lg text-slate-800">4. Storage Cascades</h4>
            </div>
            <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Regulatory Core</span>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-sm text-slate-500 leading-relaxed">
              "The Bomb Bank". High-pressure cylinder banks holding massive potential energy. Strict No-Spark Zone.
            </p>
            <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2"><Activity size={14} /> Daily Critical Checks</h5>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-500" /> <strong>Leak Test:</strong> Soap solution on joints.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-500" /> <strong>Earthing:</strong> Check strip integrity.</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-slate-500" /> <strong>Hydro-Test:</strong> Valid plates (3 Yrs).</li>
              </ul>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">Act: Gas Cylinder Rules 2016</div>
          </div>
        </div>

      </div>
    </div>
  );
};
// --- 🛡️ NEW VISUAL TRAINING ACADEMY (Replaces RolesTrainingModule) 🛡️ ---

// 🎨 Special Colors for Visual Cards
const visualColors = {
  red: { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', solid: 'bg-rose-600', gradient: 'from-rose-600 to-red-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', solid: 'bg-orange-500', gradient: 'from-orange-500 to-amber-600' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', solid: 'bg-blue-600', gradient: 'from-blue-600 to-indigo-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', solid: 'bg-purple-600', gradient: 'from-purple-600 to-violet-600' },
};

// 🗣️ AUDIO ENGINE (Browser Native TTS)
const speak = (text) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel(); // Stop previous
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9; 
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  // Try to find an Indian English voice for familiarity
  const indianVoice = voices.find(v => v.lang.includes('IN')) || voices[0];
  if (indianVoice) utterance.voice = indianVoice;
  window.speechSynthesis.speak(utterance);
};

// 🔘 Audio Button Helper
const AudioBtn = ({ text, size = "md" }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const handleSpeak = (e) => {
    e.stopPropagation();
    setIsSpeaking(true);
    speak(text);
    setTimeout(() => setIsSpeaking(false), 4000); 
  };
  return (
    <button onClick={handleSpeak} className={`flex items-center justify-center gap-2 rounded-full font-bold transition-all shadow-md active:scale-95 z-20 ${isSpeaking ? 'bg-green-500 text-white animate-pulse' : 'bg-white text-blue-600 hover:bg-blue-50'} ${size === "sm" ? "p-2 text-xs" : "px-4 py-2 text-sm"}`}>
      {isSpeaking ? <Volume2 size={18} className="animate-bounce" /> : <PlayCircle size={18} />}
      {size !== "sm" && (isSpeaking ? "Speaking..." : "Listen / सुनें")}
    </button>
  );
};

// 🃏 Action Card Helper
const ActionCard = ({ step, index }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
    <div className="relative h-48 w-full overflow-hidden">
      <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-2xl font-black text-xl z-10 shadow-lg">Step {index + 1}</div>
      <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-3 right-3"><AudioBtn text={`${step.title}. ${step.desc}`} /></div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight">{step.title}</h4>
      <p className="text-slate-500 text-base leading-relaxed mb-4 flex-grow border-l-4 border-slate-200 pl-3">{step.desc}</p>
      <div className="bg-blue-50 rounded-xl p-3 flex items-start gap-3 mt-auto">
        <div className="bg-blue-200 p-1.5 rounded-full mt-0.5"><AlertTriangle size={14} className="text-blue-700" /></div>
        <div><span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">CRITICAL / ज़रूरी</span><p className="text-sm font-semibold text-blue-800 leading-snug">{step.why}</p></div>
      </div>
    </div>
  </div>
);

// ✅❌ Do/Dont Helper
const DoDontComparison = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="relative rounded-2xl overflow-hidden border-2 border-green-400 group">
      <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10"><CheckCircle2 size={14} /> CORRECT / सही</div>
      <img src={data.doImg} className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Do" />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-green-900/90 to-transparent p-4 pt-12">
        <p className="text-white font-bold text-lg">{data.doText}</p>
        <div className="mt-2"><AudioBtn text={`Correct Way: ${data.doText}`} size="sm" /></div>
      </div>
    </div>
    <div className="relative rounded-2xl overflow-hidden border-2 border-red-400 group">
      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10"><XCircle size={14} /> WRONG / गलत</div>
      <img src={data.dontImg} className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" alt="Don't" />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-red-900/90 to-transparent p-4 pt-12">
        <p className="text-white font-bold text-lg">{data.dontText}</p>
        <div className="mt-2"><AudioBtn text={`Wrong Way: ${data.dontText}`} size="sm" /></div>
      </div>
    </div>
  </div>
);

const RolesTrainingModule = () => {
  const [activeRole, setActiveRole] = useState(null);

  const roles = [
    {
      id: 'sg',
      title: 'Security Guard (SG)',
      code: 'SG-01',
      icon: ShieldAlert,
      theme: visualColors.red,
      image: "/reliance-bioenergy-website/SG.jpg?auto=format&fit=crop&q=80", 
      videoUrl: "https://www.youtube.com/embed/HDN0My7Wj2k", 
      intro: "You are the first line of defense. Nothing enters without your check.",
      visualSteps: [
        { title: "Stop The Vehicle", desc: "Raise your hand firmly. Lower the boom barrier.", why: "Prevent unauthorized entry.", img: "/stopvehicle.png?auto=format&fit=crop&q=80" },
        { title: "Check ID Card", desc: "Match the face with the photo. Check expiry.", why: "Ensure only authorized staff enters.", img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80" },
        { title: "Full Frisking", desc: "Pat down from shoulders to ankles.", why: "Find hidden matches or lighters.", img: "https://plus.unsplash.com/premium_photo-1661331815343-f14bf2e60472?auto=format&fit=crop&q=80" },
        { title: "Vehicle Search", desc: "Open trunk. Use mirror for under-chassis.", why: "Contraband can be hidden in cars.", img: "https://images.unsplash.com/photo-1549469755-671e2205047b?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80", doText: "Always stay alert and standing.", dontImg: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?auto=format&fit=crop&q=80", dontText: "Never sleep on duty." },
      safety: { gear: ["Safety Helmet", "Reflective Jacket", "Safety Shoes"], note: "No Uniform = No Duty." }
    },
    {
      id: 'wb',
      title: 'Weighbridge Operator',
      code: 'WB-01',
      icon: Scale,
      theme: visualColors.orange,
      image: "/reliance-bioenergy-website/WB.jpg?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/S5Cke-fbUIs",
      intro: "You control the money. Accurate weight is critical.",
      visualSteps: [
        { title: "Zero Check", desc: "Ensure display shows 0.00 before truck enters.", why: "Even 10kg error causes loss.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" },
        { title: "Truck Positioning", desc: "All wheels must be inside yellow lines.", why: "Wheels outside = Wrong weight.", img: "https://images.unsplash.com/photo-1605218427368-35b0164c4c2a?auto=format&fit=crop&q=80" },
        { title: "Engine OFF", desc: "Driver MUST turn off engine.", why: "Vibration disturbs the sensor.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80" },
        { title: "Issue Slip", desc: "Print slip. Give one copy to driver.", why: "Proof of transaction.", img: "https://images.unsplash.com/photo-1629904853716-f004b377c81b?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1581093458791-9f302e6d8359?auto=format&fit=crop&q=80", doText: "Focus on the scale display.", dontImg: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80", dontText: "No mobile phones during weighing." },
      safety: { gear: ["Safety Shoes", "High-Vis Jacket"], note: "Never walk behind a reversing truck." }
    },
    {
      id: 'ss',
      title: 'Site Supervisor (SS)',
      code: 'SS-01',
      icon: UserCheck,
      theme: visualColors.blue,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/6k9_q6p7x8o",
      intro: "You lead the team. Ensure discipline and safety.",
      visualSteps: [
        { title: "Shift Briefing", desc: "Check uniforms and shave.", why: "Sets the tone for the day.", img: "https://images.unsplash.com/photo-1531498860503-6c03c9015c52?auto=format&fit=crop&q=80" },
        { title: "Patrol Rounds", desc: "Walk the perimeter every 2 hours.", why: "Find breaches early.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" },
        { title: "Incident Reporting", desc: "Call Manager immediately for fire/fights.", why: "Fast reaction saves lives.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80" },
        { title: "Shift Handover", desc: "Count keys. Sign the Logbook.", why: "Accountability for assets.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80", doText: "Carry your Walkie-Talkie.", dontImg: "https://images.unsplash.com/photo-1584281722573-4a682570081d?auto=format&fit=crop&q=80", dontText: "Never be rude to visitors." },
      safety: { gear: ["White Helmet", "Gas Detector"], note: "Lead by example." }
    },
    {
      id: 'sap',
      title: 'SAP Operator',
      code: 'SAP-01',
      icon: Computer,
      theme: visualColors.purple,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      videoUrl: "https://www.youtube.com/embed/8q_5z6x_3y0",
      intro: "You record the truth. Every entry matters.",
      visualSteps: [
        { title: "System Login", desc: "Enter your unique User ID.", why: "Security of data.", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" },
        { title: "Data Entry", desc: "Enter PO Number carefully.", why: "Wrong PO = Vendor not paid.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" },
        { title: "Scan & Upload", desc: "Upload clear image of slip.", why: "Digital proof for audit.", img: "https://images.unsplash.com/photo-1616035049386-7783935b625c?auto=format&fit=crop&q=80" },
        { title: "Save & Post", desc: "Review numbers once. Click Post.", why: "Finalizes transaction.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80", doText: "Double check numbers.", dontImg: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80", dontText: "Never share your password." },
      safety: { gear: ["Anti-glare Screen"], note: "Take eye-rest breaks." }
    }
  ];

  return (
    <div className="animate-fade-in space-y-10 py-8">
      {/* HEADER */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10 text-slate-400 transform rotate-12"><ShieldCheck size={250} /></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-300 text-xs font-bold uppercase tracking-widest mb-6">
             <Video size={14} /> Visual Training Academy
          </div>
          <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Safety & Operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Video Training</span></h3>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
            Click on your photo below to start. Watch the video and look at the pictures. <strong className="text-white block mt-2">नीचे दी गई अपनी फोटो पर क्लिक करें।</strong>
          </p>
        </div>
      </div>

      {/* CARDS */}
      {!activeRole && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div key={role.id} onClick={() => setActiveRole(role)} className="group relative h-[28rem] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border-4 border-white hover:scale-105 transition-all">
              <img src={role.image} className="w-full h-full object-cover" alt={role.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className={`w-14 h-14 rounded-2xl ${role.theme.solid} flex items-center justify-center text-white mb-4`}><role.icon size={28} /></div>
                <h3 className="text-3xl font-black text-white leading-none mb-2">{role.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-white font-bold bg-white/20 backdrop-blur-md p-3 rounded-xl"><PlayCircle size={20} /> Start Training</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL VIEW */}
      {activeRole && (
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden animate-slide-up">
           <div className={`bg-gradient-to-r ${activeRole.theme.gradient} p-8 text-white flex justify-between items-center`}>
              <div className="flex items-center gap-4">
                 <div className="bg-white/20 p-3 rounded-2xl"><activeRole.icon size={28} /></div>
                 <div><h3 className="text-3xl font-black">{activeRole.title}</h3><AudioBtn text={`Training for ${activeRole.title}`} /></div>
              </div>
              <button onClick={() => setActiveRole(null)} className="bg-white/20 p-3 rounded-full hover:bg-white/30"><X size={24} /></button>
           </div>

           <div className="p-8">
              {/* Video */}
              <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900 mb-12 aspect-video">
                 <iframe width="100%" height="100%" src={`${activeRole.videoUrl}?rel=0`} title="Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>

              {/* Visual Steps */}
              <h3 className="text-3xl font-black text-slate-800 mb-8 flex items-center gap-3"><Footprints /> Step-by-Step Procedure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
                 {activeRole.visualSteps.map((step, idx) => <ActionCard key={idx} step={step} index={idx} />)}
              </div>

              {/* Do's & Don'ts */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                 <div className="xl:col-span-2">
                    <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3"><ThumbsUp className="text-green-600" /> Do's & Don'ts</h3>
                    <DoDontComparison data={activeRole.doDonts} />
                 </div>
                 <div className="xl:col-span-1 bg-rose-50 rounded-[2rem] p-8 border-2 border-rose-100">
                    <h3 className="text-2xl font-black text-rose-800 mb-6 flex items-center gap-3"><ShieldAlert /> Safety First</h3>
                    <div className="space-y-4 mb-6">
                       {activeRole.safety.gear.map((g, i) => <div key={i} className="bg-white p-4 rounded-xl flex gap-3 font-bold text-slate-800 shadow-sm"><CheckCircle2 className="text-green-500" /> {g}</div>)}
                    </div>
                    <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-lg"><p className="text-lg font-bold">{activeRole.safety.note}</p></div>
                 </div>
              </div>

              <div className="mt-16 text-center">
                 <button className={`px-12 py-5 rounded-2xl bg-gradient-to-r ${activeRole.theme.gradient} text-white font-black text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto`}>
                    <ShieldCheck size={28} /> I Have Understood / समझ गया
                 </button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

// --- APP SHELL COMPONENTS ---

const Navigation = ({ onHome, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        <div className="cursor-pointer group" onClick={onHome}><img src="/reliance-bioenergy-website/biologo.png" alt="Reliance Bio-Energy" className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity" /></div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Overview', 'HSE Safety', 'Operations'].map((item) => (<button key={item} className={`text-sm font-medium transition-colors hover:text-green-500 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>{item}</button>))}
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/30">Employee Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-gray-100 animate-fade-in">
            {['Overview', 'HSE Safety', 'Operations'].map((item) => (
               <button key={item} className="text-left text-sm font-bold text-gray-700 py-2 hover:text-green-600 border-b border-gray-50">{item}</button>
            ))}
            <button className="bg-green-600 text-white w-full py-3 rounded-lg text-sm font-bold shadow-md">Employee Login</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <div className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/reliance-bioenergy-website/background.jpg?auto=format&fit=crop&q=80" alt="Biogas Plant" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-50"></div>
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-md text-green-300 text-xs md:text-sm font-medium mb-6 animate-fade-in-up">
        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
        New Joinee Module: SG & SS
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-tight">Fueling India's <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">Green Revolution</span></h1>
      <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed px-4">Comprehensive training on Critical Installations, Process Flow, and Operational Safety for Reliance CBG facilities.</p>
    </div>
  </div>
);

const Card = ({ title, desc, icon: Icon, onClick, color }) => {
  const colors = colorClasses[color]; 
  return (
    <div onClick={onClick} className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col">
      <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 ${colors.bgSoft}`}></div>
      <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0 ${colors.bgLight}`}>
        <Icon className={`${colors.text}`} size={28} />
      </div>
      <h3 className={`text-2xl font-bold text-gray-900 mb-3 transition-colors ${colors.hoverText}`}>{title}</h3>
      <p className="text-gray-500 leading-relaxed mb-6 flex-grow">{desc}</p>
      <div className={`flex items-center text-sm font-bold text-gray-900 transition-colors mt-auto ${colors.hoverText}`}>Start Module <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></div>
    </div>
  );
};

const DetailPage = ({ page, onBack }) => {
  const [activeTab, setActiveTab] = useState('process');
  
  const content = {
    business: { title: "Business Overview", subtitle: "Market Strategy & Product Lifecycle", icon: TrendingUp, color: "blue", isSpecial: true },
    site: { title: "Site Overview", subtitle: "Facility Layout & Operations", icon: Factory, color: "orange", isSpecial: true },
    roles: { title: "Roles & Responsibilities", subtitle: "Operational Hierarchy & Duties", icon: Users, color: "purple", sections: [
        { title: "Key Designations", text: "Understanding who does what is crucial.", points: ["SS (Site Supervisor)", "SG (Safety Guard)", "WB (Weigh Bridge)", "SAP: Data Log"] }
    ]},
    products: { title: "Products & Value", subtitle: "CBG, CNG & Organic By-Products", icon: Flame, color: "green", sections: [
        { title: "Compressed Biogas (CBG)", text: "Purified biogas compressed at 250 bar.", points: ["Clean Burning Fuel", "High Calorific Value", "Eco-friendly"] },
        { title: "Fermented Organic Manure", text: "Nutrient-rich by-product.", points: ["Solid FOM", "Liquid FOM", "Returning Nutrients"] }
    ]}
  };

  const data = content[page];
  const Icon = data.icon;
  const colors = colorClasses[data.color]; 

  const renderSpecialSiteContent = () => (
    <div className="animate-fade-in">
       {/* 3-Way Tab System for Site Overview */}
       <div className="flex flex-col md:flex-row p-1 bg-slate-100 rounded-xl w-full mb-8">
          <button onClick={() => setActiveTab('process')} className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'process' ? 'bg-white text-orange-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}><Activity size={16} /> Process Flow (PF)</button>
          <button onClick={() => setActiveTab('details')} className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'details' ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}><BookOpen size={16} /> How It Works (Deep Dive)</button>
          <button onClick={() => setActiveTab('critical')} className={`flex-1 px-4 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === 'critical' ? 'bg-white text-red-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}><AlertCircle size={16} /> Critical Installations (CI)</button>
        </div>
        
        {activeTab === 'process' && <ProcessSimulation />}
        {activeTab === 'details' && <DetailedProcessGuide />}
        {activeTab === 'critical' && <CriticalInstallations />}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <button onClick={onBack} className="group flex items-center gap-2 text-gray-500 hover:text-green-600 mb-8 transition-colors font-medium"><div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all"><ArrowLeft size={20} /></div>Back to Dashboard</button>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className={`${colors.bgSolid} p-8 md:p-12 text-white relative overflow-hidden`}>
             <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10"><Icon size={200} /></div>
             <div className="relative z-10"><div className="inline-block p-3 bg-white/20 backdrop-blur-md rounded-xl mb-6"><Icon size={32} className="text-white" /></div><h1 className="text-3xl md:text-5xl font-bold mb-2">{data.title}</h1><p className="text-white/80 text-lg md:text-xl">{data.subtitle}</p></div>
          </div>
          <div className="p-6 md:p-12">
            {/* If Business, show BusinessOverview. If Site, show Tabs. Else, show default sections */}
            {page === 'business' ? <BusinessOverview /> : 
            page === 'roles' ? <RolesTrainingModule /> :
             (data.isSpecial ? renderSpecialSiteContent() : 
              (data.sections.map((section, idx) => (<div key={idx} className="mb-12 last:mb-0"><h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3"><span className={`flex items-center justify-center w-8 h-8 rounded-full ${colors.bgLight} ${colors.text} text-sm`}>{idx + 1}</span>{section.title}</h3><p className="text-gray-600 mb-6 text-lg leading-relaxed pl-11">{section.text}</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-11">{section.points.map((point, pIdx) => (<div key={pIdx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-green-200 transition-colors"><CheckCircle2 size={20} className="text-green-500 mt-1 shrink-0" /><span className="text-gray-700 font-medium">{point}</span></div>))}</div></div>))))}
            
            <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6"><div><h4 className="text-lg font-bold mb-1">Module Status</h4><p className="text-slate-400 text-sm">Review all points before marking complete.</p></div><button className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/20 active:scale-95 w-full md:w-auto">Mark Complete</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card title="Business" desc="Market strategy, circular economy, and SCBG lifecycle." icon={TrendingUp} color="blue" onClick={() => setActivePage('business')} />
                <Card title="Site Overview" desc="Critical Installations (CI) & Process Flow (PF)." icon={Factory} color="orange" onClick={() => setActivePage('site')} />
                <Card title="Roles" desc="Duties for SS, SG, WB, and SAP operators." icon={Users} color="purple" onClick={() => setActivePage('roles')} />
                <Card title="Products" desc="CBG/CNG & Fermented Organic Manure (FOM)." icon={Flame} color="green" onClick={() => setActivePage('products')} />
              </div>
              <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Reliance Operational Excellence</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0"><AlertCircle className="text-green-600" /></div><div><h4 className="font-bold text-lg text-gray-900">Zero Harm Policy</h4><p className="text-gray-600">Strict adherence to safety zones. Safety is our core value.</p></div></div>
                    <div className="flex gap-4"><div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0"><Database className="text-blue-600" /></div><div><h4 className="font-bold text-lg text-gray-900">Digital Tracking</h4><p className="text-gray-600">Real-time SAP monitoring of gas output and raw material consumption.</p></div></div>
                  </div>
                </div>
                <div className="order-1 md:order-2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl relative"><img src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80" alt="Control Room" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8"><p className="text-white font-medium">State-of-the-art Control Systems</p></div></div>
              </div>
            </div>
          </>
        );
      default: return <DetailPage page={activePage} onBack={() => setActivePage('home')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navigation onHome={() => setActivePage('home')} activePage={activePage} />
      {renderContent()}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div><h5 className="text-white font-bold text-lg mb-4">Reliance Bio-Energy</h5><p>Empowering the future through sustainable biogas solutions.</p></div>
          <div><h5 className="text-white font-bold mb-4">Quick Links</h5><ul className="space-y-2"><li><a href="#" className="hover:text-green-400 transition-colors">Training Modules</a></li><li><a href="#" className="hover:text-green-400 transition-colors">HSE Safety Manual</a></li><li><a href="#" className="hover:text-green-400 transition-colors">Shift Roster</a></li></ul></div>
          <div><h5 className="text-white font-bold mb-4">Internal Use Only</h5><p>Authorized personnel access only. Report technical issues to IT Support.</p></div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">© 2024 Reliance Industries Ltd. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;
