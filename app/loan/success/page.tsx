'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Share2, Download } from 'lucide-react';
import Link from 'next/link';

import { useScoreStore } from '@/lib/store';
import { useAuthStore } from '@/lib/auth-store';
import Image from 'next/image';

export default function LoanSuccess() {
    const { total, grade } = useScoreStore();
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        const confettiTimer = setTimeout(() => { }, 5000);
        return () => clearTimeout(confettiTimer);
    }, []);

    const cibilId = `GC-${total}-${grade}-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;

    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-primary/5 blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-20%] w-full h-full bg-accent/5 blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl bg-white backdrop-blur-3xl rounded-[48px] shadow-[0_20px_60px_rgba(0,102,255,0.1)] border border-primary/10 overflow-hidden relative z-10"
            >
                {/* Header Section */}
                <div className="p-12 text-center relative border-b border-gray-100">
                    <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", damping: 15 }}
                        className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-[32px] mb-8 shadow-[0_10px_30px_rgba(0,102,255,0.4)] rotate-3"
                    >
                        <ShieldCheck className="w-12 h-12 text-white" strokeWidth={2.5} />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-4 leading-tight tracking-tight">
                        CIBIL Score <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">VERIFIED 🚀</span>
                    </h1>

                    <div className="bg-gray-50 backdrop-blur-md rounded-2xl py-4 px-8 inline-block border border-gray-200 mt-6 group hover:border-primary/50 transition-colors shadow-sm">
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mb-2">Reference ID</p>
                        <p className="text-3xl font-mono font-black text-foreground tracking-[0.2em]">{cibilId}</p>
                    </div>
                </div>

                <div className="p-10 space-y-10">
                    {/* User & Loan Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[32px] bg-white border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/30">
                                    <Image src="/images/gig-1.png" alt="User" width={64} height={64} className="object-cover h-full w-full" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-black text-foreground">{user?.name || 'Rajesh Kumar'}</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">Verified Identity</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold text-gray-500">
                                    <span>BANK SYNC</span>
                                    <span className="text-success uppercase tracking-widest">Active</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-gray-500">
                                    <span>PLATFORM TRUST</span>
                                    <span className="text-success uppercase tracking-widest">Top Tier</span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-gray-500">
                                    <span>CREDIT LIMIT</span>
                                    <span className="text-foreground">₹{(total * 100).toLocaleString()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-[32px] bg-gradient-to-br from-primary via-blue-600 to-accent text-white group overflow-hidden relative shadow-lg">
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 blur-3xl rounded-full" />
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-80 mb-2">Approved Credit</p>
                            <h2 className="text-6xl font-heading font-black tracking-tighter mb-6 text-white">₹50,000</h2>
                            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                                <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-white">
                                    <Zap className="w-5 h-5 animate-pulse" /> Disbursing...
                                </div>
                                <p className="text-[10px] font-bold mt-1 opacity-90 text-white">Transfer initiated to registered bank</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/dashboard" className="flex-1">
                            <button className="w-full bg-[#020617] text-white py-6 rounded-[24px] font-black text-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
                                GOTO DASHBOARD
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </Link>
                        <button className="px-10 py-6 rounded-[24px] bg-white border border-gray-300 text-gray-700 font-black hover:bg-gray-50 transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <button className="w-full border border-gray-300 text-gray-500 py-5 rounded-[24px] font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:text-primary hover:border-primary/50 transition-all hover:shadow-sm">
                        <Download className="w-5 h-5" />
                        Download Detailed Report
                    </button>
                </div>

                <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.5em]">GigCredit AI • Secure Disbursement Channel</p>
                </div>
            </motion.div>
        </div>
    );
}

