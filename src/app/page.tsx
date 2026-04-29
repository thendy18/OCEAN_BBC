'use client';

import { useCallback, useMemo, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { 
  Search, CheckCircle2, ChevronRight, PlayCircle, Mic, Square, 
  MessageSquare, Sparkles, BookOpen, Presentation, LayoutDashboard, 
  X, Send, BrainCircuit, ChevronDown, Check
} from 'lucide-react';

import {
  type BusinessScale,
  type FeatureCategory,
  type ProductFeature,
  type PainPoint,
  scaleOptions,
  sectorOptions,
  productFeatures,
  painPoints,
  commonBusinessIssues,
  friendlyPainPointCopy,
  categoryTone,
  categoryOrder,
  categoryDescriptions,
} from '@/data/oceanData';

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: { length: number; [i: number]: { isFinal: boolean; [j: number]: { transcript: string } } };
}

interface SpeechRecognitionApi extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start(): void;
  stop(): void;
}

type SpeechRecognitionCtor = new () => SpeechRecognitionApi;

type TabId = 'profiling' | 'probing' | 'showcase' | 'academy' | 'voice-analyzer';

type CustomerProfile = {
  scale: BusinessScale;
  sector: string;
};

type ChatMessage = {
  role: 'staff' | 'assistant';
  text: string;
};

const tabs: Array<{ id: TabId; label: string; eyebrow: string; icon: ReactNode }> = [
  { id: 'profiling', label: 'Profiling', eyebrow: 'Discovery', icon: <Search size={18} /> },
  { id: 'probing', label: 'Probing', eyebrow: 'Checklist', icon: <CheckCircle2 size={18} /> },
  { id: 'showcase', label: 'Value Showcase', eyebrow: 'Demo & ROI', icon: <Presentation size={18} /> },
  { id: 'academy', label: 'OCEAN Academy', eyebrow: 'Learning', icon: <BookOpen size={18} /> },
  { id: 'voice-analyzer', label: 'Voice Analyzer', eyebrow: 'AI Mode', icon: <Mic size={18} /> },
];

const featureById = new Map(productFeatures.map((feature) => [feature.id, feature]));

function Placeholder({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex min-h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center text-sm font-semibold tracking-wide text-slate-300 shadow-inner ${className}`}
    >
      <div className="flex flex-col items-center gap-3">
        <PlayCircle size={32} className="text-slate-500 opacity-50" />
        <span>[{label}]</span>
      </div>
    </div>
  );
}

function Badge({ children, tone }: { children: ReactNode; tone: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1 shadow-sm ${tone}`}>
      {children}
    </span>
  );
}

// Animation Variants
const pageVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.2, ease: 'easeIn' } }
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function OceanNavigator() {
  const [activeTab, setActiveTab] = useState<TabId>('profiling');
  const [customerProfile, setCustomerProfile] = useState<CustomerProfile>({
    scale: 'Menengah',
    sector: 'Manufaktur',
  });
  const [selectedProfileIssues, setSelectedProfileIssues] = useState<string[]>([]);
  const [selectedPainPoints, setSelectedPainPoints] = useState<string[]>([]);
  const [selectedAcademyCategory, setSelectedAcademyCategory] = useState<FeatureCategory | null>(null);
  const [selectedAcademyModule, setSelectedAcademyModule] = useState<ProductFeature | null>(null);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [aiProbingGuide, setAiProbingGuide] = useState('');
  const [isAiProbingLoading, setIsAiProbingLoading] = useState(false);
  const [copilotInput, setCopilotInput] = useState('');
  const [copilotMessages, setCopilotMessages] = useState<ChatMessage[]>([
    {
      role: 'staff',
      text: 'Kalau nasabah tanya integrasi API BCA, saya harus jelaskan apa tanpa terlalu teknis?',
    },
    {
      role: 'assistant',
      text:
        'Jelaskan sebagai jembatan aman agar saldo dan mutasi bisa muncul langsung di sistem bisnis nasabah. Tekankan manfaat: data real-time, monitoring cashflow, dan pengurangan input manual. Sumber: SOP Produk Transaksi - API BCA Individu Bisnis.',
    },
  ]);
  const [isCopilotLoading, setIsCopilotLoading] = useState(false);

  const recognitionRef = useRef<SpeechRecognitionApi | null>(null);
  const voiceResultRef = useRef<HTMLDivElement | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [voiceInterim, setVoiceInterim] = useState('');
  const [voiceAnalysis, setVoiceAnalysis] = useState('');
  const [isVoiceAnalyzing, setIsVoiceAnalyzing] = useState(false);

  const [tutorMessages, setTutorMessages] = useState<ChatMessage[]>([]);
  const [tutorInput, setTutorInput] = useState('');
  const [isTutorLoading, setIsTutorLoading] = useState(false);

  const visiblePainPoints = useMemo(() => {
    const matched = painPoints.filter(
      (painPoint) =>
        painPoint.scale.includes(customerProfile.scale) &&
        (painPoint.sectors.includes(customerProfile.sector) || painPoint.sectors.includes('Umum')),
    );
    return matched.length > 0 ? matched : painPoints;
  }, [customerProfile]);

  const visibleProfileIssues = useMemo(
    () => commonBusinessIssues.filter((issue) => issue.scale === customerProfile.scale),
    [customerProfile.scale],
  );

  const selectedProfileIssueData = useMemo(
    () => commonBusinessIssues.filter((issue) => selectedProfileIssues.includes(issue.id)),
    [selectedProfileIssues],
  );

  const selectedPainPointData = useMemo(
    () => painPoints.filter((painPoint) => selectedPainPoints.includes(painPoint.id)),
    [selectedPainPoints],
  );

  const probingPainPoints = useMemo(() => {
    const merged = new Map<string, PainPoint>();
    visiblePainPoints.forEach((painPoint) => merged.set(painPoint.id, painPoint));
    selectedPainPointData.forEach((painPoint) => merged.set(painPoint.id, painPoint));
    return Array.from(merged.values());
  }, [selectedPainPointData, visiblePainPoints]);

  const recommendedFeatures = useMemo(() => {
    const ids = new Set([
      ...selectedPainPointData.flatMap((painPoint) => painPoint.featureIds),
      ...selectedProfileIssueData.flatMap((issue) => issue.featureIds),
    ]);
    return Array.from(ids)
      .map((id) => featureById.get(id))
      .filter((feature): feature is ProductFeature => Boolean(feature));
  }, [selectedPainPointData, selectedProfileIssueData]);

  const academyModules = useMemo(
    () =>
      [...productFeatures].sort((a, b) => {
        if (a.category === b.category) {
          return a.name.localeCompare(b.name);
        }
        return a.category.localeCompare(b.category);
      }),
    [],
  );

  const academyCategorySummaries = useMemo(
    () =>
      categoryOrder.map((category) => {
        const modules = academyModules.filter((feature) => feature.category === category);
        return {
          category,
          modules,
          featuredNames: modules.slice(0, 3).map((feature) => feature.name),
        };
      }),
    [academyModules],
  );

  const selectedAcademyModules = useMemo(
    () =>
      selectedAcademyCategory
        ? academyModules.filter((feature) => feature.category === selectedAcademyCategory)
        : [],
    [academyModules, selectedAcademyCategory],
  );

  const handleProfileChange = (field: keyof CustomerProfile, value: string) => {
    setCustomerProfile((current) => ({ ...current, [field]: value }));
    setSelectedProfileIssues([]);
    setSelectedPainPoints([]);
    setAiProbingGuide('');
  };

  const toggleProfileIssue = (issueId: string) => {
    setSelectedProfileIssues((current) =>
      current.includes(issueId) ? current.filter((id) => id !== issueId) : [...current, issueId],
    );
    setAiProbingGuide('');
  };

  const startDiagnosisFromProfile = () => {
    const mappedPainPointIds = selectedProfileIssueData.flatMap((issue) => issue.painPointIds);
    setSelectedPainPoints(Array.from(new Set(mappedPainPointIds)));
    setActiveTab('probing');
  };

  const togglePainPoint = (painPointId: string) => {
    setSelectedPainPoints((current) =>
      current.includes(painPointId)
        ? current.filter((id) => id !== painPointId)
        : [...current, painPointId],
    );
    setAiProbingGuide('');
  };

  const selectedSummary =
    selectedPainPointData.length > 0
      ? `${selectedPainPointData.length} pain point terpilih`
      : 'Belum ada pain point terpilih';

  const requestGemini = async (mode: 'probing' | 'copilot', question?: string) => {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mode,
        question,
        profile: customerProfile,
        profileIssues: selectedProfileIssueData,
        painPoints: selectedPainPointData,
        recommendedFeatures,
      }),
    });

    const payload = (await response.json()) as { answer?: string; error?: string };

    if (!response.ok) {
      throw new Error(payload.error ?? 'AI belum bisa menjawab saat ini.');
    }

    return payload.answer ?? 'AI belum mengembalikan jawaban.';
  };

  const generateAiProbingGuide = async () => {
    setIsAiProbingLoading(true);
    try {
      const answer = await requestGemini('probing');
      setAiProbingGuide(answer);
    } catch (error) {
      setAiProbingGuide(error instanceof Error ? error.message : 'AI belum bisa membuat panduan probing.');
    } finally {
      setIsAiProbingLoading(false);
    }
  };

  const submitCopilotQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedQuestion = copilotInput.trim();
    if (!trimmedQuestion || isCopilotLoading) return;

    setCopilotInput('');
    setCopilotMessages((current) => [...current, { role: 'staff', text: trimmedQuestion }]);
    setIsCopilotLoading(true);

    try {
      const answer = await requestGemini('copilot', trimmedQuestion);
      setCopilotMessages((current) => [...current, { role: 'assistant', text: answer }]);
    } catch (error) {
      setCopilotMessages((current) => [
        ...current,
        {
          role: 'assistant',
          text: error instanceof Error ? error.message : 'Maaf, Co-Pilot belum bisa menjawab.',
        },
      ]);
    } finally {
      setIsCopilotLoading(false);
    }
  };

  const startVoiceRecording = useCallback(() => {
    const win = window as Window & {
      SpeechRecognition?: SpeechRecognitionCtor;
      webkitSpeechRecognition?: SpeechRecognitionCtor;
    };
    const Ctor = win.SpeechRecognition ?? win.webkitSpeechRecognition;
    if (!Ctor) {
      alert('Browser Anda tidak mendukung pengenalan suara. Gunakan Chrome atau Edge terbaru.');
      return;
    }

    const recognition = new Ctor();
    recognition.lang = 'id-ID';
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let finalText = '';
      let interimText = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalText += text + ' ';
        } else {
          interimText += text;
        }
      }
      if (finalText) setVoiceTranscript((prev) => prev + finalText);
      setVoiceInterim(interimText);
    };

    recognition.onerror = () => { setIsRecording(false); setVoiceInterim(''); };
    recognition.onend = () => { setIsRecording(false); setVoiceInterim(''); };

    recognitionRef.current = recognition;
    recognition.start();
    setIsRecording(true);
  }, []);

  const stopVoiceRecording = useCallback(() => {
    recognitionRef.current?.stop();
    setIsRecording(false);
    setVoiceInterim('');
  }, []);

  const analyzeVoice = async () => {
    if (!voiceTranscript.trim() || isVoiceAnalyzing) return;
    setIsVoiceAnalyzing(true);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'voice-analysis', transcript: voiceTranscript }),
      });
      const payload = (await response.json()) as { answer?: string; error?: string };
      if (!response.ok) {
        setVoiceAnalysis(`Error dari AI: ${payload.error ?? response.status}`);
      } else {
        setVoiceAnalysis(payload.answer ?? 'AI tidak mengembalikan jawaban.');
      }
      setTimeout(() => voiceResultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } catch {
      setVoiceAnalysis('Gagal menghubungi AI. Periksa koneksi dan coba lagi.');
    } finally {
      setIsVoiceAnalyzing(false);
    }
  };

  const submitTutorQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = tutorInput.trim();
    if (!question || isTutorLoading || !selectedAcademyModule) return;

    setTutorInput('');
    setTutorMessages((prev) => [...prev, { role: 'staff', text: question }]);
    setIsTutorLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'tutor',
          question,
          product: selectedAcademyModule,
          tutorHistory: tutorMessages,
        }),
      });
      const payload = (await response.json()) as { answer?: string; error?: string };
      setTutorMessages((prev) => [...prev, { role: 'assistant', text: payload.answer ?? 'AI belum bisa menjawab.' }]);
    } catch {
      setTutorMessages((prev) => [...prev, { role: 'assistant', text: 'Gagal terhubung ke AI. Coba lagi.' }]);
    } finally {
      setIsTutorLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 text-slate-800">
      {/* Background Decorators */}
      <div className="fixed top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[30%] h-[30%] rounded-full bg-orange-200/20 blur-[100px] pointer-events-none z-0" />

      <div className="flex min-h-screen flex-col lg:flex-row relative z-10">
        {/* PREMIUM SIDEBAR */}
        <aside className="glass-bca px-5 py-6 text-white lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-72 lg:flex-col lg:px-6 lg:py-8 z-20 shadow-2xl">
          <div className="flex items-center justify-between gap-4 lg:block">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-orange-400" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-200">Internal BCA</p>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">OCEAN</h1>
              <h2 className="text-xl font-medium tracking-wide text-white/90">Navigator</h2>
              <p className="mt-4 hidden text-sm leading-relaxed text-blue-100/80 lg:block">
                Tablet assistant untuk consultative selling dan just-in-time learning produk B2B.
              </p>
            </motion.div>
            <div className="rounded-xl bg-white/10 backdrop-blur-md px-4 py-3 text-right text-xs font-semibold ring-1 ring-white/20 lg:mt-8 lg:text-left shadow-lg">
              <p className="text-orange-300 mb-1">{customerProfile.scale}</p>
              <p className="text-white text-sm">{customerProfile.sector}</p>
            </div>
          </div>

          <nav className="mt-6 grid grid-cols-2 gap-3 lg:mt-10 lg:grid-cols-1">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex flex-col items-start rounded-xl px-4 py-3 transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'bg-white text-[#003b70] shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                      : 'bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="relative z-10 flex w-full items-center justify-between">
                    <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                      {tab.icon} {tab.eyebrow}
                    </span>
                    <span className="text-[10px] font-bold opacity-40">0{index + 1}</span>
                  </div>
                  <span className="relative z-10 mt-1 block text-base font-bold">{tab.label}</span>
                </motion.button>
              );
            })}
          </nav>

          <div className="mt-auto hidden rounded-xl bg-gradient-to-br from-[#002a5c] to-[#001c3d] p-5 text-sm leading-relaxed text-blue-100 ring-1 ring-white/10 shadow-inner lg:block">
            <div className="flex items-center gap-2 mb-2">
              <BrainCircuit size={18} className="text-orange-400" />
              <p className="font-bold text-white">C-Level Lens</p>
            </div>
            <p className="text-xs opacity-80">Fokus narasi: efisiensi waktu, penghematan biaya, keamanan, kontrol, dan cashflow.</p>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <section className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10 max-w-[1600px] mx-auto w-full">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-col justify-between gap-5 rounded-2xl glass p-6 sm:flex-row sm:items-center"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0060af] mb-1 flex items-center gap-2">
                <LayoutDashboard size={14} /> Branch Sales Console
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 drop-shadow-sm">{tabs.find((tab) => tab.id === activeTab)?.label}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm sm:min-w-80">
              <div className="rounded-xl bg-white/60 p-4 ring-1 ring-slate-200/60 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Profil Aktif</p>
                <p className="mt-1 font-extrabold text-slate-900">{customerProfile.scale}</p>
              </div>
              <div className="rounded-xl bg-white/60 p-4 ring-1 ring-slate-200/60 shadow-sm backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Status</p>
                <p className="mt-1 font-bold text-[#0060af]">{selectedSummary}</p>
              </div>
            </div>
          </motion.header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              {activeTab === 'profiling' && (
                <section className="grid gap-8 xl:grid-cols-[1fr_0.85fr]">
                  <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8">
                    <div className="max-w-2xl">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af]">Discovery</p>
                      <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Mulai dari konteks bisnis nasabah</h3>
                      <p className="mt-3 text-base leading-relaxed text-slate-600">
                        Profil singkat ini membantu staf cabang mengarahkan pertanyaan probing ke masalah bisnis yang relevan, bukan langsung masuk ke fitur teknis.
                      </p>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                      <label className="block group">
                        <span className="text-sm font-bold text-slate-700 transition-colors group-focus-within:text-[#0060af]">Skala Bisnis</span>
                        <div className="relative mt-2">
                          <select
                            value={customerProfile.scale}
                            onChange={(event) => handleProfileChange('scale', event.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-300 bg-white/80 px-5 py-4 text-base font-semibold text-slate-900 outline-none transition-all focus:border-[#0060af] focus:ring-4 focus:ring-blue-100/50 shadow-sm hover:border-slate-400"
                          >
                            {scaleOptions.map((scale) => (
                              <option key={scale} value={scale}>{scale}</option>
                            ))}
                          </select>
                          <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </label>

                      <label className="block group">
                        <span className="text-sm font-bold text-slate-700 transition-colors group-focus-within:text-[#0060af]">Sektor Industri</span>
                        <div className="relative mt-2">
                          <select
                            value={customerProfile.sector}
                            onChange={(event) => handleProfileChange('sector', event.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-300 bg-white/80 px-5 py-4 text-base font-semibold text-slate-900 outline-none transition-all focus:border-[#0060af] focus:ring-4 focus:ring-blue-100/50 shadow-sm hover:border-slate-400"
                          >
                            {sectorOptions.map((sector) => (
                              <option key={sector} value={sector}>{sector}</option>
                            ))}
                          </select>
                          <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </label>
                    </div>

                    <div className="mt-12">
                      <div className="flex flex-col justify-between gap-3 border-b border-slate-200/60 pb-4 sm:flex-row sm:items-end">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af]">
                            Masalah Umum {customerProfile.scale}
                          </p>
                          <h4 className="mt-1 text-2xl font-extrabold text-slate-900">Pilih konteks masalah yang terasa</h4>
                        </div>
                        <span className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-600 shadow-sm border border-slate-200">
                          {selectedProfileIssues.length} dipilih
                        </span>
                      </div>

                      <motion.div variants={listVariants} initial="hidden" animate="show" className="mt-6 grid gap-4">
                        {visibleProfileIssues.map((issue) => {
                          const isSelected = selectedProfileIssues.includes(issue.id);
                          const linkedFeatures = issue.featureIds
                            .map((featureId) => featureById.get(featureId))
                            .filter((feature): feature is ProductFeature => Boolean(feature));

                          return (
                            <motion.button
                              variants={itemVariants}
                              key={issue.id}
                              type="button"
                              onClick={() => toggleProfileIssue(issue.id)}
                              className={`group relative rounded-2xl border p-5 text-left transition-all duration-300 overflow-hidden ${
                                isSelected
                                  ? 'border-[#0060af] bg-blue-50/80 ring-2 ring-[#0060af]/20 shadow-md'
                                  : 'border-slate-200 bg-white/60 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-lg'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div className={`mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                  isSelected ? 'border-[#0060af] bg-[#0060af] text-white' : 'border-slate-300 bg-slate-50 text-transparent group-hover:border-blue-300'
                                }`}>
                                  <Check size={14} strokeWidth={3} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-lg font-bold text-slate-900">{issue.title}</span>
                                  <span className="mt-2 block leading-relaxed text-slate-600">{issue.description}</span>
                                  <div className="mt-4 rounded-xl bg-white p-4 text-sm font-medium leading-relaxed text-slate-700 shadow-sm border border-slate-100">
                                    <span className="font-bold text-[#0060af] flex items-center gap-2 mb-1"><Search size={14}/> Fokus Probing:</span>
                                    {issue.probingCue}
                                  </div>
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {linkedFeatures.map((feature) => (
                                      <Badge key={feature.id} tone={categoryTone[feature.category]}>{feature.name}</Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.button>
                          );
                        })}
                      </motion.div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row pt-6 border-t border-slate-200/60">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={startDiagnosisFromProfile}
                        className="flex items-center justify-center gap-2 rounded-xl bg-[#f26522] px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/20 transition-all hover:bg-orange-600 hover:shadow-orange-500/40"
                      >
                        Mulai Diagnosa <ChevronRight size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => setActiveTab('academy')}
                        className="rounded-xl border-2 border-[#0060af] px-8 py-4 text-base font-extrabold text-[#0060af] transition-all hover:bg-blue-50/80"
                      >
                        Buka OCEAN Academy
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <Placeholder label="Video Animasi Value Proposition OCEAN by BCA" className="min-h-64 rounded-3xl" />
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="rounded-2xl glass p-6 shadow-sm">
                      <p className="text-base font-extrabold text-slate-900 flex items-center gap-2 mb-4">
                        <Sparkles size={18} className="text-orange-500"/> Arah Solusi Awal
                      </p>
                      {selectedProfileIssueData.length > 0 ? (
                        <div className="space-y-4">
                          {selectedProfileIssueData.map((issue) => {
                            const linkedFeatures = issue.featureIds
                              .map((featureId) => featureById.get(featureId))
                              .filter((feature): feature is ProductFeature => Boolean(feature));
                            return (
                              <div key={issue.id} className="rounded-xl bg-gradient-to-r from-slate-50 to-white p-4 ring-1 ring-slate-200 shadow-sm">
                                <p className="font-bold text-slate-900">{issue.title}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{issue.probingCue}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                  {linkedFeatures.map((feature) => (
                                    <Badge key={feature.id} tone={categoryTone[feature.category]}>{feature.name}</Badge>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500 bg-slate-50/50">
                          <p className="leading-relaxed">Pilih minimal satu masalah umum agar Navigator bisa memberi arahan solusi OCEAN sebelum masuk ke checklist.</p>
                        </div>
                      )}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl glass p-6 shadow-sm border-l-4 border-l-[#0060af]">
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">Opening Talk Track</p>
                      <p className="mt-3 text-lg italic text-slate-700 font-medium">
                        "Pak/Bu, sebelum bicara fitur, kita petakan dulu proses yang paling banyak makan waktu atau biaya. Dari sana saya tunjukkan solusi OCEAN yang paling relevan."
                      </p>
                    </motion.div>
                  </div>
                </section>
              )}

              {activeTab === 'probing' && (
                <section className="grid gap-8 xl:grid-cols-[0.8fr_1fr]">
                  <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8 flex flex-col h-full">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af]">Consultation Checklist</p>
                    <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Pertanyaan membuka cerita</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      Bahasa di tahap ini dibuat awam agar staf cabang bisa bertanya natural. Masalah dari Profiling otomatis diubah menjadi pertanyaan lanjutan yang lebih mudah dipakai saat meeting.
                    </p>

                    <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/30 p-5 ring-1 ring-blue-100 shadow-inner">
                      <p className="text-sm font-extrabold text-[#003b70] uppercase tracking-wider mb-3 flex items-center gap-2"><CheckCircle2 size={16}/> Diagnosis Aktif</p>
                      <p className="text-base font-medium leading-relaxed text-slate-800">
                        {selectedPainPointData.length > 0
                          ? selectedPainPointData.map((painPoint) => painPoint.title).join(', ')
                          : 'Belum ada masalah spesifik yang dipilih.'}
                      </p>
                      {selectedProfileIssueData.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-blue-200/50">
                          <p className="text-xs font-bold text-[#0060af] uppercase mb-1">Dari Profiling:</p>
                          <p className="text-sm font-medium text-slate-700">{selectedProfileIssueData.map((issue) => issue.title).join(', ')}</p>
                        </div>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: selectedPainPoints.length > 0 ? 1.02 : 1 }}
                      whileTap={{ scale: selectedPainPoints.length > 0 ? 0.98 : 1 }}
                      type="button"
                      onClick={() => setActiveTab('showcase')}
                      disabled={selectedPainPoints.length === 0}
                      className="mt-8 w-full rounded-xl bg-[#f26522] px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-orange-500/20 transition-all hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                    >
                      Tampilkan Solusi Terpilih
                    </motion.button>

                    <div className="mt-auto pt-8">
                      <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                          <BrainCircuit size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <p className="text-base font-bold text-slate-900 flex items-center gap-2"><Sparkles size={18} className="text-indigo-500"/> AI Probing Assistant</p>
                            <p className="mt-1 text-sm text-slate-500">Susun script probing dari profil & checklist.</p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            onClick={generateAiProbingGuide}
                            disabled={isAiProbingLoading}
                            className="shrink-0 rounded-xl bg-blue-50 px-4 py-2.5 text-sm font-bold text-[#0060af] transition-colors hover:bg-blue-100 disabled:opacity-50"
                          >
                            {isAiProbingLoading ? 'Memproses...' : 'Buat Script'}
                          </motion.button>
                        </div>
                        <div className="rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700 ring-1 ring-slate-200/60 font-medium min-h-[100px]">
                          {aiProbingGuide || 'Klik tombol di atas untuk membuat panduan percakapan otomatis.'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <motion.div variants={listVariants} initial="hidden" animate="show" className="grid gap-5 content-start">
                    {probingPainPoints.map((painPoint) => {
                      const isSelected = selectedPainPoints.includes(painPoint.id);
                      const friendlyCopy = friendlyPainPointCopy[painPoint.id] ?? {
                        title: painPoint.title,
                        question: painPoint.question,
                      };
                      const linkedProfileIssues = selectedProfileIssueData.filter((issue) =>
                        issue.painPointIds.includes(painPoint.id),
                      );

                      return (
                        <motion.button
                          variants={itemVariants}
                          key={painPoint.id}
                          type="button"
                          onClick={() => togglePainPoint(painPoint.id)}
                          className={`group relative rounded-2xl border bg-white/80 backdrop-blur-sm p-6 text-left transition-all duration-300 ${
                            isSelected
                              ? 'border-[#0060af] ring-4 ring-blue-100/50 shadow-lg scale-[1.01]'
                              : 'border-slate-200 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1'
                          }`}
                        >
                          <div className="flex items-start gap-5">
                            <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                              isSelected ? 'border-[#0060af] bg-[#0060af] text-white' : 'border-slate-300 text-transparent group-hover:border-blue-300'
                            }`}>
                              <Check size={16} strokeWidth={3} />
                            </div>
                            <div className="flex-1">
                              <span className="block text-xl font-extrabold text-slate-900">{friendlyCopy.title}</span>
                              <span className="mt-2 block text-base leading-relaxed text-slate-600">{friendlyCopy.question}</span>
                              
                              {linkedProfileIssues.length > 0 && (
                                <span className="mt-4 block rounded-xl bg-blue-50/80 p-3.5 text-sm font-semibold leading-relaxed text-[#003b70] ring-1 ring-blue-100">
                                  <span className="opacity-70 mr-1">Terkait Profiling:</span> {linkedProfileIssues.map((issue) => issue.title).join(', ')}
                                </span>
                              )}
                              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-bold text-orange-700 ring-1 ring-orange-200/50">
                                <Sparkles size={14}/> {painPoint.impact}
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </section>
              )}

              {activeTab === 'showcase' && (
                <section className="space-y-8">
                  <div className="grid gap-8 xl:grid-cols-[1fr_0.8fr]">
                    <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8">
                      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start border-b border-slate-200/60 pb-5">
                        <div>
                          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af]">Demo & ROI</p>
                          <h3 className="mt-2 text-3xl font-extrabold text-slate-900">Solusi OCEAN yang relevan</h3>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setActiveTab('probing')}
                          className="rounded-xl border-2 border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-[#0060af] hover:text-[#0060af] hover:bg-blue-50/50 shadow-sm"
                        >
                          Ubah Checklist
                        </motion.button>
                      </div>

                      {recommendedFeatures.length === 0 ? (
                        <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-10 text-center text-slate-500">
                          <Search size={40} className="mx-auto mb-4 opacity-20" />
                          <p className="text-lg font-medium">Pilih minimal satu pain point di tab Probing untuk melihat rekomendasi.</p>
                        </div>
                      ) : (
                        <motion.div variants={listVariants} initial="hidden" animate="show" className="mt-8 grid gap-5 md:grid-cols-2">
                          {recommendedFeatures.map((feature) => (
                            <motion.article variants={itemVariants} key={feature.id} className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                              <div className="flex items-start justify-between gap-3 mb-4">
                                <h4 className="text-xl font-extrabold text-slate-900">{feature.name}</h4>
                                <Badge tone={categoryTone[feature.category]}>{feature.category}</Badge>
                              </div>
                              <p className="leading-relaxed text-slate-600 font-medium">{feature.businessValue}</p>
                              <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm font-medium leading-relaxed text-slate-700 ring-1 ring-slate-100 group-hover:bg-blue-50/30 transition-colors">
                                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Pitching Script</span>
                                "{feature.pitchingScript}"
                              </div>
                            </motion.article>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Kalkulator Efisiensi</p>
                      <h3 className="mt-2 text-3xl font-extrabold text-slate-900">ROI Estimator</h3>
                      <div className="mt-8 space-y-4">
                        {selectedPainPointData.length === 0 ? (
                          <div className="rounded-xl bg-slate-50 p-6 text-center text-slate-500 ring-1 ring-slate-200 border border-dashed border-slate-300">
                            ROI akan muncul setelah checklist dipilih.
                          </div>
                        ) : (
                          selectedPainPointData.map((painPoint) => (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={painPoint.id} className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/30 p-5 ring-1 ring-emerald-100/50 shadow-sm border border-emerald-100">
                              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                              <p className="relative z-10 text-lg font-extrabold text-emerald-950 mb-4">{painPoint.title}</p>
                              <div className="relative z-10 grid grid-cols-2 gap-4 text-sm">
                                <div className="rounded-xl bg-white/80 p-4 shadow-sm border border-slate-100">
                                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Sebelum</p>
                                  <p className="text-lg font-bold text-slate-800">{painPoint.before}</p>
                                </div>
                                <div className="rounded-xl bg-white/80 p-4 shadow-sm border border-emerald-100">
                                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">Sesudah</p>
                                  <p className="text-lg font-extrabold text-emerald-600">{painPoint.after}</p>
                                </div>
                              </div>
                              <p className="relative z-10 mt-4 text-sm font-bold text-emerald-800 flex items-center gap-2">
                                <CheckCircle2 size={16}/> {painPoint.savings}
                              </p>
                            </motion.div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
                    <Placeholder label="Interactive Dashboard UI OCEAN" className="min-h-[400px] rounded-3xl border-4 border-white/50 shadow-2xl" />
                    <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8 flex flex-col">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af]">Simulasi Live</p>
                      <h3 className="mt-2 text-2xl font-extrabold text-slate-900 mb-6">Tampilan Nyata OCEAN</h3>
                      
                      <div className="flex-1 rounded-2xl border border-slate-200/60 bg-slate-50/50 p-6 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
                        <div className="relative z-10">
                          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">OCEAN Console</p>
                              <p className="text-xl font-extrabold text-slate-900">Cashflow & Payment Control</p>
                            </div>
                            <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
                            </span>
                          </div>
                          <div className="grid gap-4 sm:grid-cols-3 mb-6">
                            {['Invoice Match', 'Payroll Batch', 'Tax Docs'].map((item, index) => (
                              <div key={item} className="rounded-xl bg-white p-5 ring-1 ring-slate-200/50 shadow-sm transform transition hover:-translate-y-1 hover:shadow-md">
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">{item}</p>
                                <p className="text-3xl font-extrabold text-[#0060af]">{index === 0 ? '98%' : index === 1 ? '24/7' : '1.2k'}</p>
                              </div>
                            ))}
                          </div>
                          <div className="space-y-3">
                            {['VA payment identified', 'Invoice approved', 'Payroll authorization ready'].map((activity) => (
                              <div key={activity} className="flex items-center justify-between rounded-xl bg-white px-5 py-4 text-sm ring-1 ring-slate-200/50 shadow-sm">
                                <span className="font-bold text-slate-700">{activity}</span>
                                <span className="text-[#0060af] font-bold text-xs bg-blue-50 px-2 py-1 rounded-md">Completed</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {activeTab === 'academy' && (
                <section className="space-y-8">
                  <div className="rounded-2xl glass p-6 shadow-enterprise sm:p-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start border-b border-slate-200/60 pb-6">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0060af] flex items-center gap-2"><BookOpen size={16}/> Microlearning</p>
                        <h3 className="mt-2 text-3xl font-extrabold text-slate-900">
                          {selectedAcademyCategory ? selectedAcademyCategory : 'Pilih Kategori Pembelajaran'}
                        </h3>
                      </div>
                      {selectedAcademyCategory && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setSelectedAcademyCategory(null)}
                          className="rounded-xl border-2 border-[#0060af] px-5 py-2.5 text-sm font-bold text-[#0060af] transition hover:bg-blue-50/80 shadow-sm"
                        >
                          Kembali ke Kategori
                        </motion.button>
                      )}
                    </div>
                    <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-4xl font-medium">
                      {selectedAcademyCategory
                        ? categoryDescriptions[selectedAcademyCategory]
                        : 'Kategori membantu staf cabang belajar bertahap: pilih area produk dulu, lalu buka modul yang relevan.'}
                    </p>
                  </div>

                  {!selectedAcademyCategory ? (
                    <motion.div variants={listVariants} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {academyCategorySummaries.map(({ category, modules, featuredNames }) => (
                        <motion.button
                          variants={itemVariants}
                          whileHover={{ y: -5 }}
                          key={category}
                          type="button"
                          onClick={() => setSelectedAcademyCategory(category)}
                          className="group rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-xl relative overflow-hidden"
                        >
                          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
                            <BookOpen size={80} />
                          </div>
                          <div className="relative z-10">
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <h4 className="text-2xl font-extrabold text-slate-900">{category}</h4>
                              <Badge tone={categoryTone[category]}>{modules.length} modul</Badge>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 min-h-[40px]">{categoryDescriptions[category]}</p>
                            <div className="mt-6 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100 group-hover:bg-white transition-colors">
                              <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2">Contoh Modul</p>
                              <p className="text-sm font-bold leading-relaxed text-slate-700">
                                {featuredNames.join(', ')}
                                {modules.length > featuredNames.length ? ', dll.' : ''}
                              </p>
                            </div>
                            <div className="mt-5 flex items-center gap-2 text-sm font-extrabold text-[#0060af] group-hover:text-[#f26522] transition-colors">
                              Lihat Modul <ChevronRight size={16} />
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-transparent p-5 border-l-4 border-[#0060af]">
                        <p className="text-lg font-extrabold text-[#003b70] flex items-center gap-2">
                          <BookOpen size={20}/> {selectedAcademyModules.length} Modul Tersedia
                        </p>
                        <p className="mt-1 text-slate-600 font-medium">Pilih modul untuk mempelajari detail produk dan cara penawaran.</p>
                      </div>

                      <motion.div variants={listVariants} initial="hidden" animate="show" className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {selectedAcademyModules.map((feature) => (
                          <motion.button
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            key={feature.id}
                            type="button"
                            onClick={() => { setSelectedAcademyModule(feature); setTutorMessages([]); setTutorInput(''); }}
                            className="group flex flex-col rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 text-left shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
                          >
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <h4 className="text-xl font-extrabold text-slate-900">{feature.name}</h4>
                              <Badge tone={categoryTone[feature.category]}>{feature.category}</Badge>
                            </div>
                            <p className="flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3 mb-6 font-medium">{feature.plainExplanation}</p>
                            <div className="mt-auto flex items-center gap-2 text-sm font-extrabold text-[#0060af] bg-blue-50 px-4 py-2 rounded-lg w-max group-hover:bg-[#0060af] group-hover:text-white transition-colors">
                              <PlayCircle size={16} /> Buka Materi
                            </div>
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>
                  )}
                </section>
              )}

              {activeTab === 'voice-analyzer' && (
                <section className="max-w-4xl mx-auto space-y-8">
                  <div className="rounded-2xl glass p-8 shadow-enterprise text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#0060af] mb-6">
                      <Mic size={32} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900">AI Voice Analyzer</h3>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto font-medium">
                      Rekam percakapan langsung dengan nasabah. AI akan otomatis mengekstrak pain points dan merekomendasikan solusi OCEAN yang tepat.
                    </p>

                    <div className="mt-10 flex flex-col items-center gap-6">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                        className={`relative flex h-28 w-28 flex-col items-center justify-center rounded-full text-white shadow-2xl transition-all duration-300 ${
                          isRecording
                            ? 'bg-red-500 shadow-red-500/50 hover:bg-red-600'
                            : 'bg-gradient-to-tr from-[#0060af] to-[#0080ff] shadow-blue-500/40 hover:shadow-blue-500/60'
                        }`}
                      >
                        {isRecording && (
                          <span className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-75" />
                        )}
                        {isRecording ? <Square size={32} fill="currentColor" /> : <Mic size={40} />}
                        <span className="mt-2 text-xs font-bold uppercase tracking-widest">{isRecording ? 'Stop' : 'Rekam'}</span>
                      </motion.button>

                      <div className={`px-6 py-3 rounded-full text-sm font-bold border transition-colors ${
                        isRecording ? 'bg-red-50 border-red-200 text-red-600' : 'bg-slate-100 border-slate-200 text-slate-500'
                      }`}>
                        {isRecording ? (
                          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/> Sedang Merekam...</span>
                        ) : 'Siap merekam. Tekan tombol di atas.'}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl glass p-6 shadow-sm border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2"><MessageSquare size={18}/> Transkrip Percakapan</h4>
                      <div className="flex gap-2">
                        {(voiceTranscript || voiceAnalysis) && (
                          <button onClick={() => { setVoiceTranscript(''); setVoiceAnalysis(''); setVoiceInterim(''); }} className="px-3 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
                            Bersihkan
                          </button>
                        )}
                        <button
                          onClick={() => { void analyzeVoice(); }}
                          disabled={!voiceTranscript.trim() || isVoiceAnalyzing}
                          className="flex items-center gap-2 rounded-lg bg-[#0060af] px-4 py-1.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#003b70] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isVoiceAnalyzing ? <span className="animate-pulse">Memproses...</span> : <><Sparkles size={14}/> Analisis AI</>}
                        </button>
                      </div>
                    </div>
                    <textarea
                      value={voiceTranscript + (voiceInterim ? ` ${voiceInterim}` : '')}
                      onChange={(e) => setVoiceTranscript(e.target.value)}
                      rows={6}
                      placeholder="Teks percakapan akan muncul otomatis di sini..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white/50 p-4 text-base leading-relaxed text-slate-800 outline-none transition-all focus:border-[#0060af] focus:ring-4 focus:ring-blue-100 focus:bg-white"
                    />
                  </div>

                  <AnimatePresence>
                    {voiceAnalysis && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="rounded-2xl bg-gradient-to-br from-[#003b70] to-[#001c3d] p-6 shadow-2xl text-white" ref={voiceResultRef}>
                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                          <h4 className="text-lg font-bold flex items-center gap-2"><BrainCircuit size={20} className="text-orange-400"/> Hasil Analisis AI</h4>
                          <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/30">Selesai</span>
                        </div>
                        <div className="whitespace-pre-line text-sm leading-relaxed text-blue-50 font-medium">
                          {voiceAnalysis}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>

      {/* COPILOT BUTTON */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="button"
        onClick={() => setIsCopilotOpen((current) => !current)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f26522] to-orange-500 px-6 py-4 text-sm font-extrabold text-white shadow-2xl shadow-orange-500/40 transition-all hover:shadow-orange-500/60"
      >
        <Sparkles size={18} /> OCEAN Co-Pilot
      </motion.button>

      {/* COPILOT CHAT MODAL */}
      <AnimatePresence>
        {isCopilotOpen && (
          <motion.section 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200/50 flex flex-col max-h-[600px]"
          >
            <div className="bg-gradient-to-r from-[#003b70] to-[#0060af] p-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg"><BrainCircuit size={20}/></div>
                  <div>
                    <h3 className="text-lg font-bold">OCEAN Co-Pilot</h3>
                    <p className="text-[10px] uppercase tracking-widest text-blue-200">AI Assistant</p>
                  </div>
                </div>
                <button type="button" onClick={() => setIsCopilotOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
              {copilotMessages.map((message, index) => (
                <div key={index} className={`flex ${message.role === 'staff' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                    message.role === 'staff' 
                      ? 'bg-[#0060af] text-white rounded-tr-sm shadow-md shadow-blue-900/10' 
                      : 'bg-white text-slate-800 rounded-tl-sm border border-slate-200 shadow-sm'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}
              {isCopilotLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: "0.1s"}} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: "0.2s"}} />
                  </div>
                </div>
              )}
            </div>
            
            <form onSubmit={submitCopilotQuestion} className="bg-white border-t border-slate-100 p-4">
              <div className="relative">
                <textarea
                  value={copilotInput}
                  onChange={(event) => setCopilotInput(event.target.value)}
                  rows={2}
                  placeholder="Tanya seputar produk atau cara pitching..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 pr-12 pl-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-[#0060af] focus:bg-white focus:ring-4 focus:ring-blue-100"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      submitCopilotQuestion(e as unknown as FormEvent<HTMLFormElement>);
                    }
                  }}
                />
                <button
                  type="submit"
                  disabled={isCopilotLoading || !copilotInput.trim()}
                  className="absolute right-2 bottom-2 p-2 rounded-lg bg-[#0060af] text-white transition hover:bg-[#003b70] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ACADEMY MODAL */}
      <AnimatePresence>
        {selectedAcademyModule && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSelectedAcademyModule(null)} />
            <motion.section 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl flex flex-col"
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-100 bg-white/90 backdrop-blur-md p-6 sm:px-8">
                <div>
                  <Badge tone={categoryTone[selectedAcademyModule.category]}>{selectedAcademyModule.category}</Badge>
                  <h3 className="mt-3 text-3xl font-extrabold text-slate-900">{selectedAcademyModule.name}</h3>
                </div>
                <button type="button" onClick={() => setSelectedAcademyModule(null)} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100 sm:col-span-3">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2"><BookOpen size={14}/> Penjelasan Awam</p>
                    <p className="text-lg leading-relaxed text-slate-700 font-medium">{selectedAcademyModule.plainExplanation}</p>
                  </div>
                  <div className="rounded-2xl bg-blue-50/50 p-6 border border-blue-100/50">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#0060af] mb-3">Target Klien</p>
                    <p className="text-base leading-relaxed text-slate-800 font-medium">{selectedAcademyModule.targetClient}</p>
                  </div>
                  <div className="rounded-2xl bg-orange-50/50 p-6 border border-orange-100/50 sm:col-span-2">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#f26522] mb-3">Pitching Script</p>
                    <p className="text-lg italic leading-relaxed text-slate-800">"{selectedAcademyModule.pitchingScript}"</p>
                  </div>
                </div>

                <Placeholder label={`Video Animasi: ${selectedAcademyModule.name}`} className="min-h-64 rounded-2xl" />
                <p className="text-sm font-bold text-slate-400 text-center">Sumber dokumen: {selectedAcademyModule.source}</p>

                <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-xl"><BrainCircuit size={20} /></div>
                    <p className="text-lg font-extrabold text-slate-900">AI Tutor Spesifik Produk</p>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 font-medium ml-12">Tanya cara menjual atau simulasi objection handling untuk produk ini.</p>

                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col">
                    <div className="max-h-64 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
                      {tutorMessages.length === 0 ? (
                        <div className="text-center text-slate-400 text-sm py-4">Belum ada pertanyaan. Coba tanya "Kapan momen pas nawarin ini?"</div>
                      ) : (
                        tutorMessages.map((msg, i) => (
                          <div key={i} className={`flex ${msg.role === 'staff' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed ${
                              msg.role === 'staff' ? 'bg-[#0060af] text-white rounded-tr-sm shadow-sm' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm shadow-sm'
                            }`}>
                              {msg.text}
                            </div>
                          </div>
                        ))
                      )}
                      {isTutorLoading && (
                        <div className="flex justify-start"><div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm flex gap-1"><span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"/><span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay:"0.1s"}}/><span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{animationDelay:"0.2s"}}/></div></div>
                      )}
                    </div>
                    <form onSubmit={submitTutorQuestion} className="border-t border-slate-100 p-3 flex gap-2 bg-white">
                      <input
                        value={tutorInput}
                        onChange={(e) => setTutorInput(e.target.value)}
                        placeholder="Tanya AI Tutor..."
                        className="flex-1 rounded-xl bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-blue-100 border border-transparent focus:border-blue-200"
                      />
                      <button
                        type="submit"
                        disabled={isTutorLoading || !tutorInput.trim()}
                        className="rounded-xl bg-[#0060af] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#003b70] disabled:opacity-50"
                      >
                        Tanya
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
