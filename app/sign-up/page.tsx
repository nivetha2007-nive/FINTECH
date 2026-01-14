'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowRight, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/lib/auth-store';
import { motion } from 'framer-motion';

export default function SignUp() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            login('New User', '9876543210');
            router.push('/get-started');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-6 md:p-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/5 blur-[150px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl bg-white backdrop-blur-3xl border border-primary/10 p-8 md:p-12 rounded-[48px] shadow-[0_10px_60px_rgba(0,102,255,0.1)] relative z-10"
            >
                <div className="flex flex-col items-center text-center mb-12">
                    <Link href="/sign-in" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Authorized Access</span>
                    </Link>

                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 border border-primary/10">
                        <ShieldCheck className="text-primary w-12 h-12" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-4xl font-heading font-black tracking-tight mb-2 uppercase text-foreground">Create Account</h1>
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Begin Your GigCredit Journey</p>
                </div>

                <form onSubmit={handleSignUp} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Display Name</label>
                            <input required placeholder="e.g. Alex" className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-bold text-foreground placeholder:text-gray-400 shadow-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Registry ID (Mobile)</label>
                            <input required placeholder="98765 43210" className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-bold text-foreground placeholder:text-gray-400 shadow-sm" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Neural Key (Password)</label>
                        <input required type="password" placeholder="••••••••" className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-bold text-foreground placeholder:text-gray-400 shadow-sm" />
                    </div>

                    <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10 space-y-4">
                        <div className="flex items-start gap-4">
                            <input type="checkbox" required className="mt-1 accent-primary" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-relaxed">
                                I verify my intent to sync financial data for AI calculation under the <span className="text-primary">GigCredit Identity Standard</span>.
                            </p>
                        </div>
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-primary text-white py-6 rounded-2xl font-black shadow-[0_4px_20px_rgba(0,102,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 disabled:opacity-50 uppercase tracking-[0.3em] hover:shadow-[0_6px_30px_rgba(0,102,255,0.4)]"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>CREATE ACCOUNT <ArrowRight className="w-5 h-5" /></>
                        )}
                    </button>
                </form>

                <p className="text-center mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    Already have an account? <Link href="/sign-in" className="text-primary hover:text-cyan transition-colors ml-1 underline decoration-primary/30 underline-offset-4">Sign In</Link>
                </p>
            </motion.div>
        </div>
    );
}
