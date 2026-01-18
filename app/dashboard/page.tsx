'use client';

import { useScoreStore } from '@/lib/store';
import {
    Zap,
    Target,
    Crown,
    ArrowRight,
    Gift,
    ShieldCheck,
    Rocket,
    Flame,
    ChevronLeft,
    Activity,
    Users,
    Fingerprint,
    LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuthStore } from '@/lib/auth-store';
import { useRouter } from 'next/navigation';
import { ScoreCircle } from '@/components/ScoreCircle';
import { useState, useEffect } from 'react';
import { Celebration } from '@/components/ui/Celebration';

export default function UserDashboard() {
    const { total, grade } = useScoreStore();
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();
    const [showCelebration, setShowCelebration] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowCelebration(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const perks = [
        { title: "0% Downpayment", provider: "TVS Motor", icon: Rocket, color: "text-[#00f2ff]", bg: "bg-primary/10" },
        { title: "Instant ₹10K Limit", provider: "LazyPay", icon: Zap, color: "text-[#bc13fe]", bg: "bg-accent/10" },
        { title: "Free Health Cover", provider: "Digit", icon: ShieldCheck, color: "text-success", bg: "bg-success/10" },
    ];

    const growthSteps = [
        { title: "Connect Zomato API", reward: "+25 pts", status: "Available", icon: Activity },
        { title: "Maintain ₹5K Balance", reward: "+15 pts", status: "In Progress", icon: Users },
        { title: "Pay Electricity Bill", reward: "+10 pts", status: "Available", icon: Zap },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pb-24 relative overflow-hidden">
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-full h-[600px] bg-primary/5 blur-[150px]" />
                <div className="absolute top-[30%] right-[-10%] w-[40%] h-[400px] bg-accent/5 blur-[120px]" />
            </div>

            {/* Futuristic Header */}
            <header className="relative z-50 px-8 py-8 flex items-center justify-between border-b border-gray-100 backdrop-blur-2xl bg-white/50 sticky top-0">
                <div className="flex items-center gap-4">
                    <Link href="/score" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-all border border-gray-200 group shadow-sm">
                        <ChevronLeft className="w-6 h-6 text-gray-500 group-hover:text-primary group-hover:-translate-x-1 transition-all" />
                    </Link>
                    <div>
                        <h1 className="font-heading font-black text-2xl tracking-tighter text-foreground">GIG IDENTITY</h1>
                        <p className="text-[10px] text-primary font-black uppercase tracking-[0.5em] mt-0.5">Verified Profile v2.0</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleLogout}
                        className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-error/10 hover:border-error/30 hover:text-error transition-all text-gray-600 shadow-sm"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                    <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-all text-gray-600 shadow-sm">
                        <Fingerprint className="w-4 h-4 text-primary" /> Security Log
                    </button>
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,102,255,0.3)]">
                        <Crown className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                </div>
            </header>

            <div className="p-8 space-y-12 max-w-4xl mx-auto relative z-10">

                {/* Score ID Badge - Premium Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative group "
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-blue-600 rounded-[50px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-white/80 backdrop-blur-3xl p-12 rounded-[48px] border border-white/20 flex flex-col items-center text-center overflow-hidden shadow-[0_20px_60px_rgba(0,102,255,0.08)]">

                        {/* Internal Chip Detail */}
                        <div className="absolute top-10 left-10 w-12 h-16 border border-gray-200 rounded-lg flex flex-col p-2 gap-1.5 opacity-30">
                            {[1, 2, 3].map(i => <div key={i} className="h-0.5 w-full bg-gray-400" />)}
                        </div>

                        <div className="absolute top-10 right-10">
                            <div className="px-5 py-2 bg-primary/10 rounded-full text-[10px] font-black text-primary border border-primary/20 tracking-widest shadow-sm">
                                IDENTITY ID: GC-{total}-{grade}
                            </div>
                        </div>

                        {showCelebration && <Celebration />}

                        {/* Replaced Custom Circle with Component */}
                        <div className="mb-6 mt-4 scale-125">
                            <ScoreCircle score={total} max={900} grade={grade} />
                        </div>

                        <h2 className="text-4xl font-heading font-black text-foreground mb-2 uppercase tracking-tight">Financial Potential</h2>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Elite Tier Verification Status</p>

                        <div className="flex gap-6">
                            <div className="px-6 py-3 bg-white border border-gray-100 rounded-[20px] text-primary text-xs font-black flex items-center gap-3 uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform">
                                <Flame className="w-5 h-5 text-accent animate-pulse" /> Grade {grade}
                            </div>
                            <div className="px-6 py-3 bg-white border border-gray-100 rounded-[20px] text-foreground text-xs font-black flex items-center gap-3 uppercase tracking-widest shadow-[0_10px_20px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform">
                                <Target className="w-5 h-5 text-success" /> Top 5%
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid Sections */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Score Boosters */}
                    <section className="p-8 rounded-[40px] bg-white border border-gray-100/50 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />

                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2">Identity Upgrade</p>
                                <h3 className="font-heading font-black text-2xl text-foreground">Next Steps</h3>
                            </div>
                            <span className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </div>
                        <div className="space-y-3">
                            {growthSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)] transition-all cursor-pointer group/item"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 group-hover/item:border-primary/30 transition-colors">
                                            <step.icon className="w-5 h-5 text-gray-400 group-hover/item:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm text-foreground group-hover/item:text-primary transition-colors">{step.title}</p>
                                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{step.status}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-success bg-white border border-success/10 px-3 py-1.5 rounded-lg shadow-sm">{step.reward}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Exclusive Perks */}
                    <section className="p-8 rounded-[40px] bg-white border border-gray-100/50 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />

                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <p className="text-[9px] font-black text-accent uppercase tracking-[0.4em] mb-2">Tier Rewards</p>
                                <h3 className="font-heading font-black text-2xl text-foreground">Unlocked Perks</h3>
                            </div>
                        </div>
                        <div className="space-y-3">
                            {perks.map((perk, i) => (
                                <div
                                    key={i}
                                    className="p-4 bg-gray-50/80 rounded-2xl border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-[0_10px_20px_rgba(0,0,0,0.02)] transition-all cursor-pointer group/item flex items-center gap-4"
                                >
                                    <div className={`w-12 h-12 ${perk.bg} rounded-xl flex items-center justify-center ${perk.color} opacity-80 group-hover/item:opacity-100 transition-opacity`}>
                                        <perk.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-foreground text-sm">{perk.title}</h4>
                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">via {perk.provider}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover/item:text-accent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Bottom Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                    <Link href="/loan" className="w-full">
                        <button className="w-full bg-primary text-white p-8 rounded-[36px] font-black shadow-[0_10px_40px_rgba(0,102,255,0.3)] flex items-center justify-between px-10 hover:scale-[1.02] active:scale-[0.98] transition-all group">
                            <div className="flex items-center gap-6">
                                <Zap className="w-10 h-10 fill-current" />
                                <div className="text-left">
                                    <span className="block text-2xl font-heading leading-none mb-1">PROVISION CREDIT</span>
                                    <span className="text-[10px] uppercase font-black tracking-widest opacity-80">Instant Disbursement</span>
                                </div>
                            </div>
                            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Link>
                    <button className="w-full bg-white border border-gray-200 p-8 rounded-[36px] font-black flex items-center justify-between px-10 hover:bg-gray-50 transition-all group shadow-sm">
                        <div className="flex items-center gap-6">
                            <Gift className="w-10 h-10 text-accent" />
                            <div className="text-left">
                                <span className="block text-2xl font-heading leading-none mb-1 text-foreground">REFER GIGS</span>
                                <span className="text-[10px] uppercase font-black tracking-widest text-gray-500 whitespace-nowrap">Unlock Tier Boosts</span>
                            </div>
                        </div>
                        <ArrowRight className="w-8 h-8 text-gray-400 group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
