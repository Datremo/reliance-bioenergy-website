import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, Factory, Users, TrendingUp, Activity, Leaf, Menu, X, 
  ChevronRight, Droplets, Flame, CheckCircle2, AlertCircle, Database, 
  Recycle, Wind, Truck, Sun, Beaker, RotateCcw, ChevronDown, BookOpen,
  Settings, FlaskConical, Package, RefreshCw, Zap, Waves, Tractor, Gauge, Info,
  Thermometer, Clock, MoveRight, Microscope, Sprout, ShieldAlert, AlertTriangle, FileText,
  Target, Globe, Briefcase, Coins, Play, BarChart3, Landmark, Network, MapPin, ThumbsUp, 
  ArrowUpRight, Fuel, ShoppingBag, XCircle, ShieldCheck, Monitor, 
  Volume2, ThumbsDown, PlayCircle, PauseCircle, StopCircle,
  Languages, Maximize, Clock4, ThermometerSun,
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

// 🌐 ADD THIS RIGHT AFTER YOUR colorClasses OBJECT!
const translations = {
  en: {
    nav_overview: "Overview", nav_safety: "HSE Safety", nav_ops: "Operations",
    hero_title: "Fueling India's Green Revolution",
    btn_start: "Start Module", btn_complete: "Mark as Complete",
    role_security: "Security Guard", role_weigh: "Weighbridge Ops",
    role_supervisor: "Site Supervisor", role_sap: "SAP Operator"
  },
  hi: {
    nav_overview: "अवलोकन", nav_safety: "सुरक्षा (HSE)", nav_ops: "संचालन",
    hero_title: "भारत की हरित क्रांति को ईंधन",
    btn_start: "प्रशिक्षण शुरू करें", btn_complete: "पूर्ण के रूप में चिह्नित करें",
    role_security: "सुरक्षा गार्ड", role_weigh: "वे ब्रिज ऑपरेटर",
    role_supervisor: "साइट पर्यवेक्षक", role_sap: "SAP ऑपरेटर"
  },
  mr: { 
    nav_overview: "आढावा", nav_safety: "सुरक्षा", nav_ops: "कामकाज",
    hero_title: "भारताच्या हरित क्रांतीला इंधन",
    btn_start: "प्रशिक्षण सुरू करा", btn_complete: "पूर्ण झाल्याचे चिन्हांकित करा",
    role_security: "सुरक्षा रक्षक", role_weigh: "वेब्रिज ऑपरेटर",
    role_supervisor: "पर्यवेक्षक", role_sap: "सॅप ऑपरेटर"
  },
  gu: { 
    nav_overview: "અવલોકન", nav_safety: "સુરક્ષા", nav_ops: "કામગીરી",
    hero_title: "ભારતની હરિયાળી ક્રાંતિ",
    btn_start: "તાલીમ શરૂ કરો", btn_complete: "પૂર્ણ તરીકે ચિહ્નિત કરો",
    role_security: "સુરક્ષા રક્ષક", role_weigh: "વેબ્રિજ ઓપરેટર",
    role_supervisor: "સુપરવાઈઝર", role_sap: "SAP ઓપરેટર"
  },
  te: {
    nav_overview: "అవలోకనం", nav_safety: "భద్రత", nav_ops: "ఆపరేషన్స్",
    hero_title: "భారతదేశ హరిత విప్లవం",
    btn_start: "శిక్షణ ప్రారంభించండి", btn_complete: "పూర్తయినట్లు గుర్తించండి",
    role_security: "సెక్యూరిటీ గార్డ్", role_weigh: "వేబ్రిడ్జ్ ఆపరేటర్",
    role_supervisor: "సూపర్వైజర్", role_sap: "SAP ఆపరేటర్"
  }
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
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=400&q=60" 
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
           <div className="mt-4"><AudioBtn text="Net Zero 2035. Accelerating India's transition to green energy. We are building over 100 plants and creating 5000 green jobs." /></div>
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
                 <div className="mb-4"><AudioBtn text="Feedstock Security. We connect with 50,000 farmers via our digital platform to ensure 100% year-round supply of rice straw and press mud." size="sm" /></div>

                 
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
        <div className="mt-2"><AudioBtn text="Economic Revolution. Farmers earn 18,000 rupees extra income per year." size="sm" /></div>
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
                 <div className="mb-4"><AudioBtn text="Jio-bp Retail Integration. We are selling compressed biogas at over 1,400 stations across India." size="sm" /></div>
                 
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
                 <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=400&q=60" className="w-full h-full object-cover rounded-xl" alt="Plant" />
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
                 <img src="/reliance-bioenergy-website/farmer.png?auto=format&fit=crop&q=80&w=400&q=60" className="w-full h-full object-cover" />
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
// --- 🌿 NEW PRODUCT SHOWCASE ENGINE 🌿 ---

// 🎨 Product Theme Colors
const productColors = {
  cbg: { main: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', gradient: 'from-emerald-600 to-teal-600', shadow: 'shadow-emerald-500/30' },
  fom: { main: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200', gradient: 'from-amber-600 to-orange-700', shadow: 'shadow-amber-500/30' },
  lfom: { main: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-200', gradient: 'from-cyan-600 to-blue-600', shadow: 'shadow-cyan-500/30' }
};

// 🗣️ Product Audio Helper
const ProductAudioBtn = ({ text }) => {
  const [speaking, setSpeaking] = useState(false);
  const play = (e) => {
    e.stopPropagation();
    setSpeaking(true);
    // Uses the global speak function we defined earlier or a local one
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.includes('IN')) || voices[0];
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
    setTimeout(() => setSpeaking(false), 5000);
  };
  return (
    <button onClick={play} className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 ${speaking ? 'bg-green-500 text-white animate-pulse' : 'bg-white text-blue-600 border border-blue-100'}`}>
      {speaking ? <Volume2 size={16} /> : <PlayCircle size={16} />} {speaking ? "Listening..." : "Listen / सुनें"}
    </button>
  );
};

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('cbg');

  const products = {
    cbg: {
      id: 'cbg', name: 'Compressed Biogas (CBG)', tagline: 'The Green Fuel of India', icon: Flame,
      image: "/reliance-bioenergy-website/CBG.jpg?auto=format&fit=crop&q=80",
      description: "Pure methane gas produced from waste. It powers cars, trucks, and factories just like CNG, but cleaner! 98% Methane Purity.",
      benefits: [{ title: "High Power", text: "Better mileage than regular CNG.", icon: Zap }, { title: "Zero Smoke", text: "Burns completely. Keeps engine clean.", icon: Wind }, { title: "Cheaper", text: "Cost-effective compared to Petrol.", icon: Coins }],
      usage: "Used in Cars, Trucks, and Industries.", color: productColors.cbg
    },
    fom: {
      id: 'fom', name: 'Solid Manure (FOM)', tagline: 'Black Gold for Soil', icon: Sprout,
      image: "/reliance-bioenergy-website/fom.jpg?auto=format&fit=crop&q=80",
      description: "Fermented Organic Manure (FOM). This is 'Bhoovedyam' - magic food for the earth. It restores soil health and increases yield.",
      benefits: [{ title: "Organic Carbon", text: "Restores soil water-holding capacity.", icon: Leaf }, { title: "Chemical Free", text: "100% natural. No harmful Urea.", icon: ShieldCheck }, { title: "Higher Yield", text: "Farmers get bigger vegetables.", icon: TrendingUp }],
      usage: "Spread on fields before plowing.", color: productColors.fom
    },
    lfom: {
      id: 'lfom', name: 'Liquid Fertilizer (LFOM)', tagline: 'Instant Nutrient Boost', icon: Droplets,
      image: "/reliance-bioenergy-website/lfom.jpg?auto=format&fit=crop&q=80",
      description: "Liquid Fermented Organic Manure. Rich in Nitrogen and Potash. Plants absorb it instantly through roots.",
      benefits: [{ title: "Fast Action", text: "Absorbed instantly via irrigation.", icon: Activity }, { title: "Disease Fight", text: "Makes plants stronger against pests.", icon: ShieldAlert }, { title: "Water Saver", text: "Reduces watering needs.", icon: Waves }],
      usage: "Mixed with irrigation water.", color: productColors.lfom
    }
  };

  const current = products[activeTab];

  return (
    <div className="animate-fade-in pb-12">
      <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl mb-12 border-4 border-slate-800">
        <div className="absolute top-0 right-0 p-12 opacity-10 text-emerald-400"><Leaf size={300} /></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 px-6 py-2 rounded-full text-emerald-300 text-sm font-bold uppercase tracking-widest mb-6"><Recycle size={16} /> Circular Economy</div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Wealth from <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Waste</span></h2>
          <p className="text-slate-300 text-xl font-light">We don't just make gas. We return life to the soil. Explore our premium green products below.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 px-4">
        {Object.values(products).map((prod) => (
          <button key={prod.id} onClick={() => setActiveTab(prod.id)} className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 border-2 ${activeTab === prod.id ? `bg-white ${prod.color.border} shadow-xl scale-105 z-10` : 'bg-white/50 border-transparent hover:bg-white text-slate-500 hover:scale-100'}`}>
            <div className={`p-3 rounded-full ${activeTab === prod.id ? `bg-gradient-to-r ${prod.color.gradient} text-white` : 'bg-slate-200 text-slate-500'}`}><prod.icon size={24} /></div>
            <div className="text-left"><span className={`block text-xs font-bold uppercase tracking-wider ${activeTab === prod.id ? prod.color.main : 'text-slate-400'}`}>Product</span><span className={`block text-lg font-black ${activeTab === prod.id ? 'text-slate-800' : 'text-slate-500'}`}>{prod.name.split('(')[0]}</span></div>
          </button>
        ))}
      </div>

      <div key={activeTab} className="max-w-6xl mx-auto animate-slide-up">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-tr ${current.color.gradient} rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-700`}></div>
            <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src={current.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={current.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <h3 className="text-3xl font-black text-white mb-1">{current.name}</h3>
                  <p className="text-white/90 font-medium text-lg flex items-center gap-2"><CheckCircle2 size={20} className="text-green-400" /> {current.tagline}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${current.color.gradient}`}></div>
              <h4 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Info className={current.color.main} /> What is it?</h4>
              <p className="text-slate-600 text-lg leading-relaxed">{current.description}</p>
              <div className="mt-6">
                <AudioBtn text={`${current.name}. ${current.tagline}. ${current.description}`} />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Key Benefits</h4>
              <div className="grid grid-cols-1 gap-4">
                {current.benefits.map((benefit, idx) => (
                  <div key={idx} className={`bg-white p-5 rounded-2xl shadow-sm border ${current.color.border} flex items-start gap-4 hover:shadow-md transition-shadow`}>
                    <div className={`p-3 rounded-xl ${current.color.bg} ${current.color.main}`}><benefit.icon size={24} /></div>
                    <div><h5 className="font-bold text-slate-800 text-lg">{benefit.title}<AudioBtn text={`${benefit.title}. ${benefit.text}`} size="sm" /></h5><p className="text-slate-500 text-sm">{benefit.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`rounded-2xl p-6 ${current.color.bg} border ${current.color.border} flex items-center gap-4`}>
               <div className={`p-3 bg-white rounded-full shadow-sm ${current.color.main}`}><Tractor size={24} /></div>
               <div><span className={`text-xs font-bold uppercase tracking-wider ${current.color.main}`}>Usage / उपयोग</span><p className="font-bold text-slate-800 text-lg">{current.usage}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// --- 🌊 THE ULTIMATE DEEP DIVE (High-Tech Bento Layout) 🌊 ---
const DetailedProcessGuide = () => {
  return (
    <div className="animate-fade-in space-y-12 py-8">
      
      {/* 🚀 PHASE 1: RAW MATERIAL (The Input) */}
      <section>
        <div className="flex items-center justify-between mb-8">
           <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30 text-white">
                <Truck size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Phase 1: The Raw Input</h3>
                <p className="text-slate-500 font-medium">Sustainable feedstock is the foundation of our CBG.</p>
              </div>
           </div>
           <AudioBtn text="Phase 1: Raw Input. We use Napier Grass, Paddy Straw, Press Mud, and Cow Dung to start the process." />
        </div>
        
        {/* Input Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Napier Grass", desc: "High-yield energy crop.", img: "/reliance-bioenergy-website/Napier.jpg?auto=format&fit=crop&w=600&q=60", color: "lime" },
            { name: "Paddy Straw", desc: "Agricultural residue.", img: "/reliance-bioenergy-website/paddy.jpg?auto=format&fit=crop&w=600&q=60", color: "amber" },
            { name: "Press Mud", desc: "Sugar industry by-product.", img: "/reliance-bioenergy-website/pressmud.jpg?auto=format&fit=crop&w=600&q=60", color: "orange" },
            { name: "Cow Dung", desc: "Inoculum for digestion.", img: "/reliance-bioenergy-website/cow-dung.jpeg?auto=format&fit=crop&w=600&q=60", color: "stone" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
              <div className="h-40 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute top-3 right-3 w-3 h-3 rounded-full bg-${item.color}-500 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 animate-pulse`}></div>
              </div>
              <div className="p-5 absolute bottom-0 left-0 z-20 w-full">
                <h4 className="font-black text-white text-xl mb-1">{item.name}</h4>
                <p className="text-xs text-slate-300 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ PHASE 2: PRECISION PROCESSING (Dark Mode Dashboard) */}
      <section className="bg-slate-900 rounded-[3rem] p-6 md:p-10 relative overflow-hidden border-4 border-slate-800 shadow-2xl">
         {/* Background grids */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
               <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/50 text-orange-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                 <Activity size={14} className="animate-pulse" /> Core Engine
               </div>
               <h3 className="text-3xl md:text-4xl font-black text-white">Precision Processing Engine</h3>
            </div>
            <AudioBtn text="Phase 2: Processing. We use steam explosion to break the grass, then 4 biological steps inside Mesophilic C S T R reactors to create gas." />
         </div>

         {/* BENTO GRID FOR TECH SPECS */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Col: Pre-treatment & Bio Flow */}
            <div className="md:col-span-7 space-y-6">
               
               {/* Pre-Treatment */}
               <div className="bg-gradient-to-br from-orange-900/50 to-slate-800 rounded-3xl p-6 border border-orange-500/30 relative overflow-hidden group">
                  <div className="absolute -right-6 -top-6 opacity-20 group-hover:scale-110 transition-transform"><Zap size={120} className="text-orange-500" /></div>
                  <div className="relative z-10">
                     <h4 className="font-black text-2xl text-white mb-2 flex items-center gap-2"><Settings className="text-orange-500" /> Advanced Pre-Treatment</h4>
                     <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        Standard plants struggle with Napier Grass due to <strong>Lignin</strong>. We use a proprietary <strong>Steam Explosion & Enzymatic</strong> step to shatter the woody exterior, accelerating bacterial digestion by 300%.
                     </p>
                     <div className="flex flex-wrap gap-2">
                        <span className="bg-black/40 text-orange-300 text-[10px] font-bold px-3 py-1.5 rounded-full border border-orange-500/20">Breaks Lignin</span>
                        <span className="bg-black/40 text-orange-300 text-[10px] font-bold px-3 py-1.5 rounded-full border border-orange-500/20">Mm-sized Particles</span>
                     </div>
                  </div>
               </div>

               {/* 4-Step Biological Core */}
               <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700 backdrop-blur-xl">
                  <h4 className="font-black text-xl text-white mb-6 flex items-center gap-2">
                     <Microscope className="text-purple-400" /> The 4-Step Biological Core
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {[
                        { step: 1, name: "Hydrolysis", desc: "Breaks complex carbs into sugars.", color: "text-purple-400", border: "border-purple-500/50", bg: "bg-purple-500/10" },
                        { step: 2, name: "Acidogenesis", desc: "Sugars turn into fatty acids.", color: "text-pink-400", border: "border-pink-500/50", bg: "bg-pink-500/10" },
                        { step: 3, name: "Acetogenesis", desc: "Refines into acetic acid & hydrogen.", color: "text-amber-400", border: "border-amber-500/50", bg: "bg-amber-500/10" },
                        { step: 4, name: "Methanogenesis", desc: "Converts acid/H2 into Methane (CH4).", color: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10" }
                     ].map((s) => (
                        <div key={s.step} className={`p-4 rounded-2xl border ${s.border} ${s.bg} flex items-start gap-3`}>
                           <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black bg-slate-900 ${s.color} border ${s.border} shrink-0`}>{s.step}</div>
                           <div>
                              <h5 className={`font-bold text-sm mb-1 ${s.color}`}>{s.name}</h5>
                              <p className="text-[10px] text-slate-300 leading-tight">{s.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Col: Temp & Reactors */}
            <div className="md:col-span-5 space-y-6">
               
               {/* Temp Dials */}
               <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700">
                  <h4 className="font-black text-lg text-white mb-4 flex items-center gap-2"><Thermometer className="text-red-400" /> Operating Temperatures</h4>
                  <div className="space-y-3">
                     <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 opacity-50 flex justify-between items-center">
                        <div><div className="text-blue-400 text-xs font-bold uppercase">Psychrophilic</div><div className="text-white text-lg font-black">15°C - 25°C</div></div>
                        <div className="text-right"><div className="text-[10px] text-slate-500">70+ Days</div></div>
                     </div>
                     <div className="bg-gradient-to-r from-red-900/40 to-slate-900 p-4 rounded-xl border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] flex justify-between items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-red-600 text-[8px] font-black px-2 py-0.5 rounded-bl-lg text-white">RELIANCE STD</div>
                        <div><div className="text-red-400 text-xs font-bold uppercase">Mesophilic</div><div className="text-white text-2xl font-black">35°C - 40°C</div></div>
                        <div className="text-right"><div className="text-[10px] text-red-200 font-bold bg-red-500/20 px-2 py-1 rounded">20-40 Days</div></div>
                     </div>
                     <div className="bg-slate-900 p-3 rounded-xl border border-slate-700 opacity-50 flex justify-between items-center">
                        <div><div className="text-orange-400 text-xs font-bold uppercase">Thermophilic</div><div className="text-white text-lg font-black">50°C - 60°C</div></div>
                        <div className="text-right"><div className="text-[10px] text-slate-500">12-15 Days</div></div>
                     </div>
                  </div>
               </div>

               {/* Reactor Types */}
               <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700 h-full">
                  <h4 className="font-black text-lg text-white mb-4 flex items-center gap-2"><Database className="text-indigo-400" /> Reactor Types</h4>
                  <ul className="space-y-4">
                     <li className="border-l-2 border-indigo-500 pl-3">
                        <div className="text-indigo-400 text-sm font-bold">A. CSTR (Our Standard)</div>
                        <div className="text-slate-400 text-[10px] leading-tight mt-1">Continuous Stirred Tank Reactor. Paddles actively mix high-moisture slurry.</div>
                     </li>
                     <li className="border-l-2 border-slate-600 pl-3">
                        <div className="text-slate-300 text-sm font-bold">B. Plug Flow (PFD)</div>
                        <div className="text-slate-500 text-[10px] leading-tight mt-1">Tunnel design. Material moves as a solid "plug". No active mixing.</div>
                     </li>
                     <li className="border-l-2 border-slate-600 pl-3">
                        <div className="text-slate-300 text-sm font-bold">C. Dry Anaerobic</div>
                        <div className="text-slate-500 text-[10px] leading-tight mt-1">High-Solid (>20%). Garage-style chambers sprayed with bacteria liquid.</div>
                     </li>
                  </ul>
               </div>

            </div>
         </div>
      </section>

      {/* 💎 PHASE 3: PURIFICATION & OUTPUT (Split Bento) */}
      <section>
         <div className="flex items-center justify-between mb-8 mt-12">
           <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-4 rounded-2xl shadow-lg shadow-emerald-500/30 text-white">
                <Flame size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">Phase 3: Purification & Output</h3>
                <p className="text-slate-500 font-medium">Creating clean energy and returning nutrients to the earth.</p>
              </div>
           </div>
           <AudioBtn text="Phase 3: Output. Raw gas is scrubbed into 96 percent pure CBG. Remaining digestate is separated into solid FOM and liquid LFOM." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
           
           {/* GAS COLUMN */}
           <div className="bg-sky-50 rounded-[2.5rem] p-8 border-2 border-sky-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-10 -right-10 opacity-20 group-hover:scale-110 transition-transform"><Wind size={180} className="text-sky-500" /></div>
              
              <h4 className="text-2xl font-black text-sky-900 mb-6 flex items-center gap-2 relative z-10">
                 <div className="bg-sky-500 text-white p-2 rounded-xl"><Wind size={20} /></div> Gas Upgradation
              </h4>
              
              <div className="space-y-4 relative z-10">
                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-sky-100">
                    <h5 className="font-bold text-sky-800 text-sm uppercase tracking-wider mb-2 flex items-center gap-2"><Settings size={16} /> 1. VPSA Scrubbing</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">Raw gas enters the Vacuum Pressure Swing Adsorption unit to trap and remove CO2 and toxic H2S.</p>
                 </div>

                 {/* Digital Spec Board */}
                 <div className="bg-slate-900 p-5 rounded-2xl shadow-inner border-4 border-slate-800">
                    <h5 className="font-bold text-slate-400 text-[10px] uppercase tracking-widest mb-3">Output Specifications</h5>
                    <div className="grid grid-cols-3 gap-2">
                       <div className="text-center bg-slate-800 rounded-xl p-2 border border-slate-700">
                          <div className="text-emerald-400 font-black text-lg"> >96%</div>
                          <div className="text-slate-400 text-[10px] font-bold">CH4 (Methane)</div>
                       </div>
                       <div className="text-center bg-slate-800 rounded-xl p-2 border border-slate-700">
                          <div className="text-sky-400 font-black text-lg">{"<3%"}</div>
                          <div className="text-slate-400 text-[10px] font-bold">CO2</div>
                       </div>
                       <div className="text-center bg-slate-800 rounded-xl p-2 border border-slate-700">
                          <div className="text-red-400 font-black text-lg">{"<5ppm"}</div>
                          <div className="text-slate-400 text-[10px] font-bold">H2S</div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-sky-100 flex items-start gap-4">
                    <div className="bg-sky-100 p-3 rounded-full text-sky-600 shrink-0"><Database size={24} /></div>
                    <div>
                       <h5 className="font-bold text-sky-800 text-sm uppercase tracking-wider mb-1">2. Compression</h5>
                       <p className="text-sm text-slate-600 leading-relaxed">Pure CBG is compressed via 3-stage compressors to <strong>250 Bar</strong> into cascade cylinders.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* MANURE COLUMN */}
           <div className="bg-amber-50 rounded-[2.5rem] p-8 border-2 border-amber-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform"><Sprout size={180} className="text-amber-500" /></div>
              
              <h4 className="text-2xl font-black text-amber-900 mb-6 flex items-center gap-2 relative z-10">
                 <div className="bg-amber-500 text-white p-2 rounded-xl"><Sun size={20} /></div> Digestate Management
              </h4>

              <div className="space-y-4 relative z-10">
                 <div className="bg-white p-5 rounded-2xl shadow-sm border border-amber-100 flex items-center justify-between">
                    <div>
                       <h5 className="font-bold text-amber-800 text-sm uppercase tracking-wider mb-1">Separation (SLS)</h5>
                       <p className="text-xs text-slate-600">Screw Press Separator splits sludge.</p>
                    </div>
                    <RefreshCw size={24} className="text-amber-500 animate-spin-slow" />
                 </div>

                 {/* Visual Splitter */}
                 <div className="grid grid-cols-2 gap-4">
                    {/* Solid */}
                    <div className="bg-gradient-to-b from-white to-amber-100/50 p-4 rounded-2xl border border-amber-200 shadow-sm text-center">
                       <div className="w-12 h-12 mx-auto bg-amber-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg"><Package size={20} /></div>
                       <h5 className="font-black text-amber-900 text-sm mb-1">Solid FOM</h5>
                       <p className="text-[10px] text-slate-600 mb-3">Sun-dried in windrow lines. Rich in Organic C.</p>
                       <div className="bg-white rounded-full text-[10px] font-bold text-amber-600 py-1 border border-amber-200">Bagged & Sold</div>
                    </div>
                    
                    {/* Liquid */}
                    <div className="bg-gradient-to-b from-white to-violet-100/50 p-4 rounded-2xl border border-violet-200 shadow-sm text-center">
                       <div className="w-12 h-12 mx-auto bg-violet-500 text-white rounded-full flex items-center justify-center mb-3 shadow-lg"><Droplets size={20} /></div>
                       <h5 className="font-black text-violet-900 text-sm mb-1">Liquid LFOM</h5>
                       <p className="text-[10px] text-slate-600 mb-3">Stored in Lagoons. 30% recirculated to save water.</p>
                       <div className="bg-white rounded-full text-[10px] font-bold text-violet-600 py-1 border border-violet-200">Tanker Dispatch</div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </section>

    </div>
  );
};
// --- 🚨 NEW CRITICAL INSTALLATIONS (Red Zones) 🚨 ---
const CriticalInstallations = () => {
  
  // 📝 DATA: Red Zones with Images & Emergency Protocols
  const zones = [
    {
      id: 1, title: "HP Compressor",
      img: "/reliance-bioenergy-website/compressor.png?auto=format&fit=crop&w=800&q=60", // Industrial Compressor
      desc: "High Pressure Area (250 Bar). The most dangerous unit. Compresses gas into cylinders.",
      risk: "Explosion Hazard",
      checks: ["Check Oil Level", "Listen for Knocking", "Check Temperature (<160°C)"],
      emergency: "Press Emergency Stop (ESD) immediately if you hear loud knocking.",
      color: "red"
    },
    {
      id: 2, title: "Digester Domes",
      img: "/reliance-bioenergy-website/Digestors.png?auto=format&fit=crop&w=800&q=60", // Domes/Tanks
      desc: "The biological heart. Bacteria inside produce Methane gas. Oxygen is the enemy here.",
      risk: "Gas Leak / Fire",
      checks: ["Check Pressure Gauge", "Ensure Water Seal", "No Smoking Zone"],
      emergency: "If smell of rotten eggs (H2S), evacuate wind-up direction.",
      color: "orange"
    },
    {
      id: 3, title: "Purification (BPS)",
      img: "/reliance-bioenergy-website/BPS.png?auto=format&fit=crop&w=800&q=60", // Pipes/Valves
      desc: "Removes bad gases (CO2 & H2S). Failure here destroys the expensive compressor.",
      risk: "Toxic Gas Release",
      checks: ["H2S Monitor Reading", "Check Valve Leaks", "Drain Moisture"],
      emergency: "Wear Breathing Apparatus (BA Set) before entering if alarm rings.",
      color: "blue"
    },
    {
      id: 4, title: "Storage Cascades",
      img: "/reliance-bioenergy-website/Cascades.jpeg?auto=format&fit=crop&w=800&q=60", // Cylinders
      desc: "'The Bomb Bank'. Massive energy stored here. Strictly No Spark/Mobile zone.",
      risk: "Catastrophic Burst",
      checks: ["Soap Water Leak Test", "Check Earthing Strip", "Check Hydro-Test Date"],
      emergency: "Isolate main valve. Trigger Fire Sprinkler System.",
      color: "slate"
    }
  ];

  return (
    <div className="animate-fade-in space-y-8 py-8">
      
      {/* 1. WARNING HEADER */}
      <div className="bg-red-50 border-l-8 border-red-600 rounded-r-3xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm">
        <div>
          <h3 className="text-3xl font-black text-red-700 uppercase tracking-tight flex items-center gap-3">
            <ShieldAlert size={32} className="animate-pulse" /> 
            Red Zones (Danger Areas)
          </h3>
          <p className="text-red-900/70 text-lg mt-2 max-w-2xl font-medium">
            These are <strong>Restricted Areas</strong>. Authorized personnel only. 
            <br/>Mobile phones and lighters are <strong>STRICTLY PROHIBITED</strong>.
          </p>
        </div>
        <div className="flex flex-col gap-3">
           <div className="bg-white px-5 py-2 rounded-lg border border-red-200 shadow-sm text-sm font-bold text-red-600 flex items-center gap-2">
             <AlertTriangle size={16} /> Compliance: OISD-179
           </div>
           <AudioBtn text="Warning. These are Red Zones. Do not enter without permission. No mobile phones." />
        </div>
      </div>

      {/* 2. VISUAL INSTALLATION GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {zones.map((zone) => (
          <div key={zone.id} className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1">
            
            {/* Image Header */}
            <div className="relative h-56 w-full">
               <img src={zone.img} alt={zone.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 w-fit bg-${zone.color}-600 text-white`}>
                     <ShieldAlert size={12} /> {zone.risk}
                  </div>
                  <h4 className="text-3xl font-black text-white">{zone.title}</h4>
               </div>
               <div className="absolute top-4 right-4">
                  <AudioBtn text={`${zone.title}. Risk: ${zone.risk}. ${zone.desc}`} size="sm" />
               </div>
            </div>

            {/* Content Body */}
            <div className="p-6">
               <p className="text-slate-600 text-sm font-medium mb-6 leading-relaxed border-l-4 border-slate-200 pl-3">
                 {zone.desc}
               </p>

               {/* Checklist */}
               <div className={`bg-${zone.color}-50 rounded-2xl p-5 mb-6 border border-${zone.color}-100`}>
                  <h5 className={`font-bold text-${zone.color}-800 text-xs uppercase tracking-wider mb-3 flex items-center gap-2`}>
                     <Activity size={14} /> Critical Daily Checks
                  </h5>
                  <ul className="space-y-2">
                     {zone.checks.map((check, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                           <div className={`w-5 h-5 rounded-full bg-${zone.color}-200 flex items-center justify-center text-${zone.color}-700 shrink-0`}>
                              <CheckCircle2 size={12} />
                           </div>
                           {check}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Emergency Protocol (New!) */}
               <div className="bg-red-600 text-white rounded-xl p-4 shadow-lg shadow-red-200">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider mb-1 text-red-200">
                     <Flame size={14} /> In Case of Emergency
                  </div>
                  <p className="font-bold text-sm leading-snug">{zone.emergency}</p>
               </div>

            </div>
          </div>
        ))}
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

// 🌐 1. AUTO-TRANSLATE CACHE & ENGINE (No manual typing needed!)
const translationCache = {};
const translateText = async (text, targetLang) => {
  if (targetLang === 'en' || !text) return text;
  const key = `${targetLang}:${text}`;
  if (translationCache[key]) return translationCache[key]; // Saves time & API calls!
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`);
    const data = await res.json();
    const translated = data?.responseData?.translatedText || text;
    translationCache[key] = translated;
    return translated;
  } catch (e) { return text; }
};

// 🪄 2. REACT-SAFE TEXT TRANSLATOR COMPONENT
const T = ({ children, lang }) => {
  const [text, setText] = useState(children);
  useEffect(() => {
    translateText(children, lang).then(setText);
  }, [children, lang]);
  return <>{text}</>;
};

// 🗣️ 5. AGGRESSIVE INDIAN ACCENT ENGINE (The "Hindi Hack")
const AudioBtn = ({ text, lang = 'en', size = "md", className = "" }) => {
  const [state, setState] = useState('idle');
  const [voices, setVoices] = useState([]);

  // 1. Load voices reliably (Chrome needs this listener)
  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      if (v.length > 0) setVoices(v);
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
  }, []);

  const handleSpeak = async (e) => {
    e.stopPropagation();
    window.speechSynthesis.cancel(); 

    if (state === 'speaking') {
      setState('idle');
      return;
    }

    setState('translating');

    // Get target language
    const targetLang = window.currentLang || lang || 'en';
    
    // Translate text
    const finalString = await translateText(text, targetLang);

    setState('speaking');
    const utterance = new SpeechSynthesisUtterance(finalString);

    // 🕵️‍♀️ THE VOICE SELECTOR 🕵️‍♀️
    let selectedVoice = null;

    if (targetLang === 'en') {
        // English? Look for "Google US English" or "Microsoft David"
        selectedVoice = voices.find(v => v.lang === 'en-US');
    } else {
        // 🇮🇳 INDIAN LANGUAGES (te, hi, mr, gu)
        
        // Priority 1: Exact Match (e.g., 'te-IN')
        // MUST exclude "English" from name to avoid "English (India)" voice reading Telugu
        selectedVoice = voices.find(v => 
            v.lang.startsWith(targetLang) && !v.name.toLowerCase().includes('english')
        );

        // Priority 2: Name Match (e.g., "Google Telugu")
        if (!selectedVoice) {
             const langName = { 'te': 'Telugu', 'hi': 'Hindi', 'mr': 'Marathi', 'gu': 'Gujarati' }[targetLang];
             if (langName) {
                 selectedVoice = voices.find(v => v.name.toLowerCase().includes(langName.toLowerCase()));
             }
        }

        // 🚨 Priority 3 (THE FIX): Force HINDI Voice
        // If Telugu voice is missing, the Hindi voice is the best substitute. 
        // It has the correct Indian accent ("Native").
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith('hi') && !v.name.toLowerCase().includes('english'));
        }
        
        // Priority 4: Any "India" voice that isn't purely English
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.includes('IN') && !v.name.toLowerCase().includes('english'));
        }
    }

    // Apply the voice
    if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
    } else {
        // If we STILL have no voice, we rely on the browser's language matching
        utterance.lang = targetLang === 'en' ? 'en-US' : 'hi-IN'; // Default to Hindi for Indian scripts
    }

    utterance.rate = 0.85; // Slower is better for accent
    utterance.pitch = 1.0;

    utterance.onend = () => setState('idle');
    utterance.onerror = () => setState('idle');
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={handleSpeak} className={`flex shrink-0 items-center justify-center gap-2 rounded-full font-bold transition-all shadow-md active:scale-95 z-20 ${state !== 'idle' ? 'bg-green-500 text-white animate-pulse' : 'bg-white text-blue-600 hover:bg-blue-50 border border-blue-100'} ${size === "sm" ? "p-2 text-xs" : "px-4 py-2 text-sm"} ${className}`}>
      {state === 'translating' ? <RefreshCw size={18} className="animate-spin" /> : state === 'speaking' ? <Volume2 size={18} className="animate-bounce" /> : <PlayCircle size={18} />}
      {size !== "sm" && <span className="hidden md:inline">{state === 'translating' ? "Translating..." : state === 'speaking' ? "Speaking..." : "Listen / सुनें"}</span>}
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

const RolesTrainingModule = ({ lang, onComplete }) => {
  const [activeRole, setActiveRole] = useState(null);
  const t = translations[lang] || translations.en;
  const roles = React.useMemo(() => [
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
        { title: "Check ID Card", desc: "Match the face with the photo. Check expiry.", why: "Ensure only authorized staff enters.", img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Full Frisking", desc: "Pat down from shoulders to ankles.", why: "Find hidden matches or lighters.", img: "https://plus.unsplash.com/premium_photo-1661331815343-f14bf2e60472?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Vehicle Search", desc: "Open trunk. Use mirror for under-chassis.", why: "Contraband can be hidden in cars.", img: "https://images.unsplash.com/photo-1549469755-671e2205047b?auto=format&fit=crop&q=80&w=400&q=60" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&q=60", doText: "Always stay alert and standing.", dontImg: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?auto=format&fit=crop&q=80&w=400&q=60", dontText: "Never sleep on duty." },
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
        { title: "Zero Check", desc: "Ensure display shows 0.00 before truck enters.", why: "Even 10kg error causes loss.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Truck Positioning", desc: "All wheels must be inside yellow lines.", why: "Wheels outside = Wrong weight.", img: "https://images.unsplash.com/photo-1605218427368-35b0164c4c2a?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Engine OFF", desc: "Driver MUST turn off engine.", why: "Vibration disturbs the sensor.", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Issue Slip", desc: "Print slip. Give one copy to driver.", why: "Proof of transaction.", img: "https://images.unsplash.com/photo-1629904853716-f004b377c81b?auto=format&fit=crop&q=80&w=400&q=60" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1581093458791-9f302e6d8359?auto=format&fit=crop&q=80&w=400&q=60", doText: "Focus on the scale display.", dontImg: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=400&q=60", dontText: "No mobile phones during weighing." },
      safety: { gear: ["Safety Shoes", "High-Vis Jacket"], note: "Never walk behind a reversing truck." }
    },
    {
      id: 'ss',
      title: 'Site Supervisor (SS)',
      code: 'SS-01',
      icon: UserCheck,
      theme: visualColors.blue,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400&q=60",
      videoUrl: "https://www.youtube.com/embed/6k9_q6p7x8o",
      intro: "You lead the team. Ensure discipline and safety.",
      visualSteps: [
        { title: "Shift Briefing", desc: "Check uniforms and shave.", why: "Sets the tone for the day.", img: "https://images.unsplash.com/photo-1531498860503-6c03c9015c52?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Patrol Rounds", desc: "Walk the perimeter every 2 hours.", why: "Find breaches early.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Incident Reporting", desc: "Call Manager immediately for fire/fights.", why: "Fast reaction saves lives.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Shift Handover", desc: "Count keys. Sign the Logbook.", why: "Accountability for assets.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&q=60", doText: "Carry your Walkie-Talkie.", dontImg: "https://images.unsplash.com/photo-1584281722573-4a682570081d?auto=format&fit=crop&q=80&w=400&q=60", dontText: "Never be rude to visitors." },
      safety: { gear: ["White Helmet", "Gas Detector"], note: "Lead by example." }
    },
    {
      id: 'sap',
      title: 'SAP Operator',
      code: 'SAP-01',
      icon: Computer,
      theme: visualColors.purple,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&q=60",
      videoUrl: "https://www.youtube.com/embed/8q_5z6x_3y0",
      intro: "You record the truth. Every entry matters.",
      visualSteps: [
        { title: "System Login", desc: "Enter your unique User ID.", why: "Security of data.", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Data Entry", desc: "Enter PO Number carefully.", why: "Wrong PO = Vendor not paid.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Scan & Upload", desc: "Upload clear image of slip.", why: "Digital proof for audit.", img: "https://images.unsplash.com/photo-1616035049386-7783935b625c?auto=format&fit=crop&q=80&w=400&q=60" },
        { title: "Save & Post", desc: "Review numbers once. Click Post.", why: "Finalizes transaction.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" }
      ],
      doDonts: { doImg: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400&q=60", doText: "Double check numbers.", dontImg: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?auto=format&fit=crop&q=80&w=400&q=60", dontText: "Never share your password." },
      safety: { gear: ["Anti-glare Screen"], note: "Take eye-rest breaks." }
    }
  ],[lang]);

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
const Navigation = ({ onHome, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🪄 The magic function that tells Google to translate the page
  const handleLangChange = (l) => {
    setLang(l);
    window.currentLang = l; // Saves it for the Audio engine!
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = l;
      select.dispatchEvent(new Event('change'));
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        <div className="cursor-pointer group" onClick={onHome}><img src="/reliance-bioenergy-website/biologo.png" alt="Reliance Bio-Energy" className="h-12 md:h-16 w-auto object-contain hover:opacity-90 transition-opacity" /></div>
        
        {/* 🌍 Language Switcher */}
        <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200 shadow-sm notranslate">
            {['en', 'hi', 'mr', 'gu', 'te'].map((l) => (
              <button 
                key={l} 
                onClick={() => handleLangChange(l)}
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${lang === l ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:text-green-600'}`}
              >
                {l}
              </button>
            ))}
          </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Overview', 'HSE Safety', 'Operations'].map((item) => (<button key={item} className={`text-sm font-medium transition-colors hover:text-green-500 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>{item}</button>))}
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/30">Employee Login</button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
        </button>
     
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
      <div className="flex justify-center mb-8">
        <AudioBtn text="Welcome to Reliance Bio-Energy Training Portal. Learn about Critical Installations, Process Flow, and Operational Safety. Select a module below to begin." />
        </div>    
    </div>
  </div>
);

const Card = ({ title, desc, icon: Icon, onClick, color }) => {
  const colors = colorClasses[color];

  const handleAudioClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div 
      onClick={onClick} 
      // 👇 UPDATED CLASSES HERE:
      // 1. Changed 'p-6' to 'p-4 md:p-8' (Smaller padding on mobile)
      // 2. Added 'min-h-[180px]' to ensure they are all the same height in the grid
      className="group relative bg-white rounded-2xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:-translate-y-2 h-full flex flex-col min-h-[180px]"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 ${colors.bgSoft}`}></div>
      
      {/* Header with Icon and Audio */}
      <div className="flex justify-between items-start mb-3 md:mb-6 relative z-10">
        {/* Made icon container smaller on mobile (w-10 vs w-14) */}
        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 ${colors.bgLight}`}>
          <Icon className={`${colors.text}`} size={20} /> {/* Reduced Icon size default, md will scale up via CSS if needed, or keep 20/24 */}
        </div>

        <div onClick={handleAudioClick}>
           <AudioBtn text={`${title}. ${desc}`} size="sm" />
        </div>
      </div>

      {/* Title: Smaller text on mobile (text-lg), larger on desktop (md:text-2xl) */}
      <h3 className={`text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 transition-colors ${colors.hoverText} leading-tight`}>{title}</h3>
      
      {/* Description: Smaller text on mobile */}
      <p className="text-gray-500 text-xs md:text-base leading-relaxed mb-4 flex-grow">{desc}</p>
      
      <div className={`flex items-center text-xs md:text-sm font-bold text-gray-900 transition-colors mt-auto ${colors.hoverText}`}>
        Start <span className="hidden md:inline">&nbsp;Module</span> <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

// --- 📄 UPDATED DETAIL PAGE (With Success Animation) 📄 ---
const DetailPage = ({ page, onBack, lang}) => {
  const [activeTab, setActiveTab] = useState('process');
  const [isCompleted, setIsCompleted] = useState(false); // ✨ Track completion
  const [isSaving, setIsSaving] = useState(false);       // ✨ Track loading state
   
  const content = {
    business: { title: "Business Overview", subtitle: "Market Strategy & Product Lifecycle", icon: TrendingUp, color: "blue", isSpecial: true },
    site: { title: "Site Overview", subtitle: "Facility Layout & Operations", icon: Factory, color: "orange", isSpecial: true },
    roles: { title: "Roles & Responsibilities", subtitle: "Operational Hierarchy & Duties", icon: Users, color: "purple", sections: [] }, // Handled by VisualAcademy
    products: { title: "Products & Value", subtitle: "CBG, CNG & Organic By-Products", icon: Flame, color: "green", sections: [] } // Handled by ProductShowcase
  };

  const data = content[page];
  const Icon = data.icon;
  const colors = colorClasses[data.color]; 

  // ✨ The Magic Function
  const handleMarkComplete = () => {
    setIsSaving(true);
    // Simulate a network request/saving to database
    setTimeout(() => {
        setIsSaving(false);
        setIsCompleted(true);
        // Optional: Speak the success message!
        if (typeof window !== 'undefined' && window.speechSynthesis) {
             const utterance = new SpeechSynthesisUtterance("Great job! You have successfully completed this module.");
             utterance.rate = 0.9;
             window.speechSynthesis.speak(utterance);
        }
    }, 1500); // 1.5 second delay for realism
  };

  const renderSpecialSiteContent = () => (
    <div className="animate-fade-in">
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
            
            {/* CONTENT RENDERER */}
            {page === 'business' ? <BusinessOverview /> : 
             page === 'roles' ? <RolesTrainingModule lang={lang} onComplete={handleMarkComplete}/> :
             page === 'products' ? <ProductShowcase /> :
             (data.isSpecial ? renderSpecialSiteContent() : null)}
            
            {/* ✨ NEW SUCCESS FOOTER (CRASH-PROOF VERSION) ✨ */}
{isCompleted ? (
  <div className="mt-12 w-full bg-gradient-to-br from-emerald-500 to-green-600 rounded-[2rem] p-8 md:p-12 text-center text-white shadow-2xl transform transition-all animate-in fade-in zoom-in duration-500 relative overflow-hidden border-4 border-white">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div className="relative z-10">
      <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm animate-bounce shadow-lg">
        <CheckCircle2 size={40} className="text-white" />
      </div>
      {/* Wrapped in spans to prevent translation crashes */}
      <h3 className="text-3xl md:text-4xl font-black mb-3 drop-shadow-sm">
        <span>Excellent Work! 🎉</span>
      </h3>
      <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl mx-auto font-medium">
        <span>You have successfully mastered the {data.title} module. Your progress has been saved to the server.</span>
      </p>
      <div className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-transform cursor-default">
        <Database size={16} /> <span>Progress Synced</span>
      </div>
    </div>
  </div>
) : (
  <div className="mt-12 p-6 md:p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-4 border-slate-800">
    <div className="text-center md:text-left">
      <h4 className="text-xl font-bold mb-1 flex items-center justify-center md:justify-start gap-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div> 
        {/* Protected text */}
        <span>Module Status: Pending</span>
      </h4>
      <p className="text-slate-400 text-sm">
        <span>Please review all information above before completing.</span>
      </p>
    </div>
    <button 
      onClick={handleMarkComplete} 
      disabled={isSaving}
      className={`
        px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-green-900/30 active:scale-95 w-full md:w-auto flex items-center justify-center gap-3
        ${isSaving ? 'opacity-80 cursor-wait' : ''}
      `}
    >
      {/* 🛡️ CRITICAL FIX: Wrapped text in spans so React doesn't crash during translation */}
      {isSaving ? (
        <span className="flex items-center gap-2">
          <RefreshCw size={20} className="animate-spin" /> 
          <span>Saving Progress...</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <CheckCircle2 size={20} /> 
          <span>Mark as Complete</span>
        </span>
      )}
    </button>
  </div>
)}

          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('en'); 

  // 🔄 MAGIC: Inject Google Translate & Listen for Back Button
  useEffect(() => {
    window.currentLang = lang; // Store global lang for audio

    // 1. Inject Google Translate ONLY ONCE
    if (!document.getElementById('google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'hi,mr,gu,en,te',
            autoDisplay: false
          }, 'google_translate_element');
        };
    }

    // 2. Back Button Logic
    const handlePopState = (event) => {
      if (event.state && event.state.page) {
        setActivePage(event.state.page);
      } else {
        setActivePage('home');
      }
    };
    if (!window.history.state) window.history.replaceState({ page: 'home' }, '', '?page=home');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 🪄 Trigger Google Translate when you click the Language buttons!
  useEffect(() => {
     window.currentLang = lang;
     const select = document.querySelector('.goog-te-combo');
     if (select) {
       select.value = lang;
       select.dispatchEvent(new Event('change'));
     }
  }, [lang]);

  const navigateTo = (pageKey) => {
    window.history.pushState({ page: pageKey }, '', `?page=${pageKey}`);
    setActivePage(pageKey);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <>
            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                <Card title="Business" desc="Market strategy, circular economy, and SCBG lifecycle." icon={TrendingUp} color="blue" onClick={() => navigateTo('business')} />
                <Card title="Site Overview" desc="Critical Installations (CI) & Process Flow (PF)." icon={Factory} color="orange" onClick={() => navigateTo('site')} />
                <Card title="Roles" desc="Duties for SS, SG, WB, and SAP operators." icon={Users} color="purple" onClick={() => navigateTo('roles')} />
                <Card title="Products" desc="CBG/CNG & Fermented Organic Manure (FOM)." icon={Flame} color="green" onClick={() => navigateTo('products')} />
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
      default: return <DetailPage page={activePage} onBack={() => window.history.back()} lang={lang} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🛑 CSS Hack to hide the ugly Google Translate banner! */}
      <style>{`
  /* Hides the top banner frame */
  .goog-te-banner-frame.skiptranslate { display: none !important; } 
  
  /* Hides the specific top bar shown in your image */
  .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; } 
  
  /* Ensures body doesn't get pushed down */
  body { top: 0px !important; } 
  
  /* Hides the element itself */
  #google_translate_element { display: none !important; } 
  
  /* Hides the popup on hover (optional, cleaner look) */
  .goog-tooltip { display: none !important; }
  .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
`}</style>
      
      <div id="google_translate_element"></div>

      <Navigation onHome={() => navigateTo('home')} activePage={activePage} lang={lang} setLang={setLang} />
      {renderContent()}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div><h5 className="text-white font-bold text-lg mb-4">Reliance Bio-Energy</h5><p>Empowering the future through sustainable biogas solutions.</p></div>
          <div><h5 className="text-white font-bold mb-4">Quick Links</h5><ul className="space-y-2"><li><a href="#" className="hover:text-green-400 transition-colors">Training Modules</a></li><li><a href="#" className="hover:text-green-400 transition-colors">HSE Safety Manual</a></li><li><a href="#" className="hover:text-green-400 transition-colors">Shift Roster</a></li></ul></div>
          <div><h5 className="text-white font-bold mb-4">Internal Use Only</h5><p>Authorized personnel access only. Report technical issues to IT Support.</p></div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">© 2026 Reliance Industries Ltd. All rights reserved.</div>
      </footer>
    </div>
  );
};
export default App;