'use client';

import { useScoreStore } from '@/lib/store';
import { ScoreCircle } from '@/components/ScoreCircle';
import { PillarCard } from '@/components/PillarCard';
import { Share2, RefreshCw, ChevronLeft, ArrowRight, Zap, FileText, Briefcase, Users, Activity, Lock, AlertTriangle, CheckCircle2, LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

import { useAuthStore } from '@/lib/auth-store';

export default function ScoreDashboard() {
    const { pillars, total, grade, eligibleAmount } = useScoreStore();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/');
    };

    const userName = user?.name || 'Rajesh Kumar';

    const pillarsList = [
        { key: 'upi' as const, icon: <Zap />, title: 'UPI Intelligence', color: 'text-primary', boosts: ['Income Velocity +140', 'UPI Discipline +70'] },
        { key: 'bills' as const, icon: <FileText />, title: 'Utilities Sync', color: 'text-primary', boosts: ['Bill Sync Active', 'No Delays'] },
        { key: 'job' as const, icon: <Briefcase />, title: 'Platform Trust', color: 'text-primary', boosts: ['Certified Hustler', 'Rapido Verified'] },
        { key: 'social' as const, icon: <Users />, title: 'Social Stability', color: 'text-primary', boosts: ['Identity Verified'] },
        { key: 'finance' as const, icon: <Activity />, title: 'Fiscal Grade', color: 'text-primary', boosts: ['Savings Ratio 24%'] },
        { key: 'identity' as const, icon: <Lock />, title: 'Digital KYC', color: 'text-primary', boosts: ['Bank-Level Verify'] },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pb-24 selection:bg-primary/30">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]" />
                <div className="absolute top-[20%] left-[10%] w-[1px] h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
            </div>

            {/* Header */}
            <header className="relative z-50 px-6 py-6 border-b border-gray-100 backdrop-blur-xl sticky top-0 bg-white/50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group text-gray-500 hover:text-primary transition-colors">
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Exit Dashboard</span>
                    </Link>

                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-1">Authenticated User</span>
                        <h1 className="text-xl font-heading font-black tracking-tight text-foreground">{userName}</h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-error bg-error/10 px-4 py-2 rounded-xl border border-error/20 hover:bg-error/20 transition-all active:scale-95"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Logout</span>
                        </button>
                        <button className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 hover:bg-primary/20 transition-all active:scale-95">
                            <RefreshCw className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Sync Data</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative z-10 p-6 max-w-7xl mx-auto space-y-12 mt-8">
                {/* Score Section - The "Gauge" Container */}
                <div className="relative rounded-[48px] bg-white border border-primary/10 p-12 overflow-hidden group shadow-[0_20px_60px_rgba(0,102,255,0.08)]">
                    {/* Inner Glass Effect */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex justify-center lg:justify-start">
                            <ScoreCircle score={total} max={900} grade={grade} />
                        </div>

                        <div className="space-y-10 text-center lg:text-left">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Maximum Credit Unlocked</p>
                                <h2 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-foreground">
                                    ₹{(eligibleAmount).toLocaleString('en-IN')}
                                </h2>
                                <p className="text-primary font-black uppercase tracking-[0.2em] text-xs mt-4 flex items-center justify-center lg:justify-start gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    Instant Disbursement Ready
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/loan" className="flex-1">
                                    <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(0,102,255,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                                        LOAN APPLICATION
                                        <ArrowRight className="w-6 h-6" />
                                    </button>
                                </Link>
                                <button className="px-8 py-5 rounded-2xl bg-white border border-gray-300 text-gray-700 font-black hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
                                    <Share2 className="w-5 h-5" />
                                    SHARE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Intelligence Modules */}
                <div>
                    <div className="flex items-end justify-between mb-8 px-4">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-2">Score Breakdown</p>
                            <h3 className="text-3xl font-heading font-black text-foreground">Intelligence Modules</h3>
                        </div>
                        <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest animate-pulse">Swipe to explore &rarr;</span>
                    </div>

                    <div className="flex overflow-x-auto gap-6 pb-8 px-4 -mx-4 hide-scrollbar snap-x">
                        {pillarsList.map((p) => {
                            const data = pillars[p.key];
                            return (
                                <PillarCard
                                    key={p.key}
                                    icon={p.icon}
                                    title={p.title}
                                    score={data.score}
                                    points={`${data.points}/${data.max}`}
                                    weight="Proprietary"
                                    boosts={p.boosts}
                                    color={p.color}
                                />
                            )
                        })}
                    </div>
                </div>

                {/* Factors & Stats Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Insights */}
                    <div className="p-10 rounded-[40px] bg-white border border-primary/10 relative overflow-hidden shadow-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Hustle Signals</h3>
                        <div className="space-y-6">
                            {[
                                { label: "UPI Consistency", value: "+148 pts", icon: CheckCircle2, status: "Positive" },
                                { label: "Bill Payment Discipline", value: "+82 pts", icon: CheckCircle2, status: "Positive" },
                                { label: "New Credit Inquiry", value: "-12 pts", icon: AlertTriangle, status: "Negative" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-primary/20 transition-all">
                                    <div className="flex items-center gap-4">
                                        <item.icon className={cn("w-5 h-5", item.status === "Positive" ? "text-success" : "text-error")} />
                                        <span className="text-sm font-bold text-gray-500 group-hover:text-foreground transition-colors">{item.label}</span>
                                    </div>
                                    <span className={cn("text-sm font-black tracking-widest", item.status === "Positive" ? "text-success" : "text-error")}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Improvement Plan */}
                    <div className="p-10 rounded-[40px] bg-white border border-primary/10 relative overflow-hidden group shadow-sm">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8 flex items-center gap-2">
                            Improvement Roadmap
                        </h3>

                        <div className="space-y-4 mb-10 relative z-10">
                            <div className="flex justify-between p-4 rounded-xl bg-white border border-gray-100 text-sm font-bold shadow-sm">
                                <span className="text-gray-500">Monthly Avg Balance &gt; ₹5k</span>
                                <span className="text-success tracking-widest">+22 PTS</span>
                            </div>
                            <div className="flex justify-between p-4 rounded-xl bg-white border border-gray-100 text-sm font-bold shadow-sm">
                                <span className="text-gray-500">Zero Late Utility Bills</span>
                                <span className="text-success tracking-widest">+15 PTS</span>
                            </div>
                        </div>

                        <div className="bg-white/50 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-200 relative z-10 group-hover:bg-white/80 transition-all">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2">Projected Score (6MO)</p>
                            <div className="text-5xl font-heading font-black flex items-center justify-center gap-5 text-foreground">
                                {total}
                                <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                                {total + 35}
                            </div>
                            <div className="mt-4 inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
                                Target: Elite Grade
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
