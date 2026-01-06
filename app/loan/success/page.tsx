'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, TrendingUp, Zap, ArrowRight, Share2, Download } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useScoreStore } from '@/lib/store';
import { useAuthStore } from '@/lib/auth-store';

export default function LoanSuccess() {
    const router = useRouter();
    const [showConfetti, setShowConfetti] = useState(true);
    const [currentQuote, setCurrentQuote] = useState(0);
    const { total, grade } = useScoreStore();
    const user = useAuthStore((state) => state.user);

    const quotes = [
        "Every gig is a step towards financial freedom 🚀",
        "Your hustle deserves recognition, not rejection 💪",
        "Building credit, one delivery at a time 📦",
        "From the streets to success - your journey matters ⭐",
        "Gig workers are the backbone of India's economy 🇮🇳"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 4000);

        const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(confettiTimer);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900 flex items-center justify-center p-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-indigo-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Confetti Effect */}
            <AnimatePresence>
                {showConfetti && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * window.innerWidth,
                                    y: -20,
                                    rotate: 0,
                                    opacity: 1
                                }}
                                animate={{
                                    y: window.innerHeight + 20,
                                    rotate: Math.random() * 360,
                                    opacity: 0
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    delay: Math.random() * 2,
                                    ease: "easeOut"
                                }}
                                className="absolute w-3 h-3 rounded-full"
                                style={{
                                    backgroundColor: ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'][Math.floor(Math.random() * 5)]
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden relative z-10"
            >
                {/* Success Header - CIBIL Score */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-center relative overflow-hidden">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-4 shadow-lg"
                    >
                        <CheckCircle2 className="w-16 h-16 text-indigo-600" strokeWidth={2.5} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl font-bold text-white mb-2"
                    >
                        Your CIBIL Score is Ready! 🎯
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-white/90 text-lg mb-6"
                    >
                        Congratulations, {user?.name || 'Gig Hero'}!
                    </motion.p>

                    {/* Unique CIBIL Code */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="bg-white/20 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border border-white/30"
                    >
                        <p className="text-white/80 text-sm font-medium mb-2">Your Unique CIBIL Code</p>
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-5xl font-bold text-white tracking-wider font-mono">
                                GC-{total}-{grade}
                            </span>
                        </div>
                        <p className="text-white/70 text-xs">Reference: CIBIL{new Date().getFullYear()}{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                </div>

                {/* Loan Details */}
                <div className="p-8 space-y-6">
                    {/* Amount Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <p className="text-white/80 text-sm font-medium mb-1">Disbursement Amount</p>
                                <h2 className="text-5xl font-bold tracking-tight">₹50,000</h2>
                            </div>
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-green-300">
                            <Zap className="w-4 h-4" />
                            <span className="text-sm font-semibold">Money arrives in 5 minutes</span>
                        </div>
                    </motion.div>

                    {/* Bank Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="bg-gray-50 dark:bg-slate-700/50 rounded-2xl p-6 space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                <img src="https://logo.clearbit.com/hdfcbank.com" alt="HDFC" className="w-8 h-8 rounded" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><rect width="32" height="32" fill="%234285F4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="16" font-weight="bold">H</text></svg>' }} />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Disbursing to</p>
                                <p className="font-bold text-gray-900 dark:text-white">HDFC Bank •••• 4582</p>
                            </div>
                            <div className="px-3 py-1 bg-success/10 text-success rounded-full text-xs font-bold">
                                ✓ Verified
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Your Score</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">{total} <span className="text-sm font-normal text-gray-500">({grade})</span></p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Interest Rate</p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">12% <span className="text-sm font-normal text-gray-500">p.a.</span></p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Motivational Quote */}
                    <motion.div
                        key={currentQuote}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 border-l-4 border-amber-500"
                    >
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                                "{quotes[currentQuote]}"
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <Link href="/dashboard" className="w-full">
                            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                                Go to Dashboard
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                        <button className="w-full bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white py-4 rounded-xl font-bold hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-2">
                            <Share2 className="w-5 h-5" />
                            Share Success
                        </button>
                    </div>

                    {/* Download Statement */}
                    <button className="w-full border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download Loan Agreement
                    </button>

                    {/* Footer Note */}
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400 pt-4">
                        You'll receive SMS and email confirmation shortly. Track your loan in the Dashboard.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
