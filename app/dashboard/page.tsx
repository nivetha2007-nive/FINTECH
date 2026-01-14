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
    LayoutDashboard,
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

export default function UserDashboard() {
    const { total, grade } = useScoreStore();
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

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
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-blue-600 rounded-[50px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative bg-white backdrop-blur-3xl p-12 rounded-[48px] border border-primary/10 flex flex-col items-center text-center overflow-hidden shadow-[0_20px_60px_rgba(0,102,255,0.08)]">

                        {/* Internal Chip Detail */}
                        <div className="absolute top-10 left-10 w-12 h-16 border border-gray-200 rounded-lg flex flex-col p-2 gap-1.5 opacity-30">
                            {[1, 2, 3].map(i => <div key={i} className="h-0.5 w-full bg-gray-400" />)}
                        </div>

                        <div className="absolute top-10 right-10">
                            <div className="px-5 py-2 bg-primary/10 rounded-full text-[10px] font-black text-primary border border-primary/20 tracking-widest shadow-sm">
                                IDENTITY ID: GC-{total}-{grade}
                            </div>
                        </div>

                        {/* Circular Score Visual */}
                        <div className="relative mb-8 mt-4">
                            <div className="w-40 h-40 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-inner">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border border-dashed border-primary/20 scale-110"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border border-dashed border-accent/20"
                                />
                                <div className="text-center">
                                    <span className="text-6xl font-heading font-black text-foreground block">{total}</span>
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mt-1">Hustle Val</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-4xl font-heading font-black text-foreground mb-2 uppercase tracking-tight">Financial Potential</h2>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Elite Tier Verification Status</p>

                        <div className="flex gap-6">
                            <div className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-[20px] text-primary text-xs font-black flex items-center gap-3 uppercase tracking-widest shadow-sm">
                                <Flame className="w-5 h-5 text-accent animate-pulse" /> Grade {grade}
                            </div>
                            <div className="px-6 py-3 bg-gray-50 border border-gray-200 rounded-[20px] text-foreground text-xs font-black flex items-center gap-3 uppercase tracking-widest shadow-sm">
                                <Target className="w-5 h-5 text-success" /> Top 5%
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Grid Sections */}
                <div className="grid md:grid-cols-2 gap-10">
                    {/* Score Boosters */}
                    <section className="p-10 rounded-[40px] bg-white border border-primary/10 relative overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2">Identity Upgrade</p>
                                <h3 className="font-heading font-black text-2xl text-foreground">SCORE BOOSTERS</h3>
                            </div>
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest cursor-pointer hover:text-primary transition-colors">View All</span>
                        </div>
                        <div className="space-y-4">
                            {growthSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-5 bg-gray-50 rounded-3xl border border-gray-100 group hover:border-primary/30 transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 group-hover:border-primary/50 transition-all shadow-sm">
                                            <step.icon className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <p className="font-black text-sm text-foreground group-hover:text-primary transition-colors">{step.title}</p>
                                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mt-1">{step.status}</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black text-success bg-success/10 px-3 py-1.5 rounded-xl border border-success/20">{step.reward}</span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Exclusive Perks */}
                    <section className="p-10 rounded-[40px] bg-white border border-primary/10 relative overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <p className="text-[9px] font-black text-accent uppercase tracking-[0.4em] mb-2">Tier Rewards</p>
                                <h3 className="font-heading font-black text-2xl text-foreground">MASTER PERKS</h3>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {perks.map((perk, i) => (
                                <div
                                    key={i}
                                    className="p-5 bg-gray-50 rounded-3xl border border-gray-100 flex items-center gap-6 group hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-md"
                                >
                                    <div className={`w-14 h-14 ${perk.bg} rounded-[20px] flex items-center justify-center ${perk.color} border border-current opacity-70 group-hover:opacity-100 transition-opacity`}>
                                        <perk.icon className="w-7 h-7" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-black text-foreground uppercase text-xs tracking-wider">{perk.title}</h4>
                                        <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-widest mt-1">via {perk.provider}</p>
                                    </div>
                                    <button className="w-10 h-10 bg-white text-gray-400 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all border border-gray-100">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
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
