'use client';

import { LoanCalculator } from '@/components/LoanCalculator';
import { UserDetailsForm } from '@/components/UserDetailsForm';
import { ScoreCircle } from '@/components/ScoreCircle';
import { ChevronLeft, CheckCircle, ArrowRight, Building2, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type Step = 'calculator' | 'details' | 'submitted';

const BANKS = [
    { id: 'hdfc', name: 'HDFC Bank', color: 'bg-[#004c8f]', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png' },
    { id: 'sbi', name: 'State Bank of India', color: 'bg-[#280071]', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1200px-SBI-logo.svg.png' },
    { id: 'union', name: 'Union Bank', color: 'bg-[#ed1c24]', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Union_Bank_of_India_Logo.svg/1200px-Union_Bank_of_India_Logo.svg.png' }, // Placeholder logo URL
    { id: 'icici', name: 'ICICI Bank', color: 'bg-[#f37e20]', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/1200px-ICICI_Bank_Logo.svg.png' },
    { id: 'axis', name: 'Axis Bank', color: 'bg-[#97144d]', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png' },
];

export default function LoanApplication() {
    const [step, setStep] = useState<Step>('calculator');
    const [selectedBank, setSelectedBank] = useState<string | null>(null);

    const [showSuccess, setShowSuccess] = useState(false);

    const handleCalculatorNext = () => {
        if (selectedBank) {
            setStep('details');
        } else {
            alert("Please select a bank partners to proceed.");
        }
    };

    const handleFormSubmit = (data: Record<string, unknown>) => {
        console.log("Form Data:", data);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setStep('submitted');
        }, 2500);
    };



    return (
        <div className="min-h-screen bg-background text-foreground p-6 md:p-12 flex flex-col items-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
            </div>

            {/* Success Overlay Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/60 backdrop-blur-md px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-[40px] p-10 flex flex-col items-center gap-6 max-w-sm w-full shadow-[0_40px_80px_rgba(0,0,0,0.2)] relative overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-80" />

                            <div className="relative z-10 w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-2 animate-bounce">
                                <CheckCircle className="w-10 h-10 text-success" strokeWidth={3} />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-heading font-black text-foreground mb-3 uppercase tracking-tight">Step Completed</h3>
                                <div className="bg-gray-50 py-3 px-4 rounded-xl border border-gray-100">
                                    <div className="flex flex-col gap-1">
                                        <Mail className="w-5 h-5 text-primary mx-auto mb-1" />
                                        <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                                            You will get mail once loan approved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <header className="w-full max-w-2xl mb-12 flex items-center justify-between relative z-10">
                <Link href="/score" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-all group">
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Back to Score</span>
                </Link>
                <div className="text-center">
                    <h1 className="text-2xl font-heading font-black tracking-tight text-foreground">CREDIT PROVISION</h1>
                </div>
                <div className="w-20" /> {/* Spacer */}
            </header>

            <div className="w-full max-w-2xl space-y-10 relative z-10">
                <AnimatePresence mode="wait">
                    {step === 'calculator' && (
                        <motion.div
                            key="calculator"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            {/* Calculator Section */}
                            <div className="rounded-[40px] bg-white border border-primary/10 p-2 shadow-[0_20px_60px_rgba(0,102,255,0.08)]">
                                <div className="bg-white rounded-[38px] p-8 border border-primary/5">
                                    <LoanCalculator maxAmount={100000} rate={12} />
                                </div>
                            </div>

                            {/* Bank Selection */}
                            <div className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-4">Select Banking Partner</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {BANKS.map((bank) => (
                                        <button
                                            key={bank.id}
                                            onClick={() => setSelectedBank(bank.id)}
                                            className={cn(
                                                "p-4 rounded-2xl border flex flex-col items-center gap-3 transition-all relative overflow-hidden group",
                                                selectedBank === bank.id
                                                    ? "border-primary bg-primary/5 shadow-md scale-[1.02]"
                                                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                                            )}
                                        >
                                            <div className="h-10 w-full flex items-center justify-center">
                                                {/* Using text fallback for simplicity if images fail, but structure supports imgs */}
                                                {bank.logo ? (
                                                    <Image src={bank.logo} alt={bank.name} width={120} height={32} className="h-8 object-contain" unoptimized />
                                                ) : (
                                                    <Building2 className="w-6 h-6 text-gray-400" />
                                                )}
                                            </div>
                                            <span className={cn(
                                                "text-[10px] font-black uppercase text-center tracking-tight",
                                                selectedBank === bank.id ? "text-primary" : "text-gray-500"
                                            )}>{bank.name}</span>

                                            {selectedBank === bank.id && (
                                                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleCalculatorNext}
                                className="w-full bg-primary text-white py-6 rounded-3xl font-black text-lg shadow-[0_10px_40px_rgba(0,102,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 uppercase tracking-widest"
                            >
                                Continue Application <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    )}

                    {step === 'details' && (
                        <UserDetailsForm
                            key="details"
                            onSubmit={handleFormSubmit}
                            onBack={() => setStep('calculator')}
                        />
                    )}

                    {step === 'submitted' && (
                        <motion.div
                            key="submitted"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative rounded-[40px] bg-white border border-primary/10 p-10 overflow-hidden group shadow-sm w-full text-center"
                        >


                            <div className="relative py-8 bg-gray-50 rounded-[30px] border border-gray-100 mb-8">
                                <div className="absolute top-4 left-0 right-0 text-center">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Current Analysis Score</span>
                                </div>
                                <ScoreCircle score={821} max={900} grade="A+" />
                            </div>

                            <Link href="/score" className="block w-full">
                                <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(0,102,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest flex items-center justify-center gap-3">
                                    Return to Dashboard <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
