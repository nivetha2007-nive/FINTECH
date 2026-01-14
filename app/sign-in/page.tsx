'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowRight, Mail, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { useAuthStore } from '@/lib/auth-store';
import { motion } from 'framer-motion';

export default function SignIn() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            login('Rajesh Kumar', '9876543210');
            router.push('/get-started');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white backdrop-blur-3xl border border-primary/10 p-10 rounded-[40px] shadow-[0_20px_60px_rgba(0,102,255,0.1)] relative z-10"
            >
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Back to Hub</span>
                    </Link>

                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_10px_30px_rgba(0,102,255,0.3)]">
                        <ShieldCheck className="text-white w-9 h-9" strokeWidth={2.5} />
                    </div>
                    <h1 className="text-3xl font-heading font-black tracking-tight mb-2 text-foreground">GIG ACCESS</h1>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Secure Entry</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Access Key (Mobile/ID)</label>
                        <input
                            required
                            type="text"
                            placeholder="e.g. 98765 43210"
                            className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Security Phrase</label>
                            <a href="#" className="text-[10px] font-black text-primary uppercase tracking-widest hover:text-cyan transition-colors">Recover</a>
                        </div>
                        <input
                            required
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                        />
                    </div>

                    <button
                        disabled={loading}
                        className="w-full bg-primary text-white py-6 rounded-2xl font-black shadow-[0_4px_20px_rgba(0,102,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 uppercase tracking-[0.2em] hover:shadow-[0_6px_30px_rgba(0,102,255,0.4)]"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>INITIALIZE SESSION <ArrowRight className="w-5 h-5" /></>
                        )}
                    </button>
                </form>

                <div className="relative my-10">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100" />
                    </div>
                    <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
                        <span className="px-4 bg-white">OR LINK VIA</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-black text-[10px] uppercase tracking-widest text-gray-600">
                        <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor" /></svg>
                        Google
                    </button>
                    <button className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-black text-[10px] uppercase tracking-widest text-gray-600">
                        <Mail className="w-4 h-4" />
                        Email
                    </button>
                </div>

                <p className="text-center mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                    New to GigCredit? <Link href="/sign-up" className="text-primary hover:text-cyan transition-colors ml-1">Establish Profile</Link>
                </p>
            </motion.div>
        </div>
    );
}
