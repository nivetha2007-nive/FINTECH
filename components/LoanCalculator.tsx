'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface LoanCalculatorProps {
    maxAmount?: number;
    minAmount?: number;
    rate: number; // annual rate in %
}

export function LoanCalculator({ maxAmount = 100000, minAmount = 10000, rate = 12 }: LoanCalculatorProps) {
    const [amount, setAmount] = useState(50000);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);

    useEffect(() => {
        const r = rate / 12 / 100;
        const n = tenure;
        const emiValue = amount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
        const total = emiValue * n;

        setEmi(Math.round(emiValue));
        setTotalPayable(Math.round(total));
    }, [amount, tenure, rate]);

    return (
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-10 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-sm">⚡</span>
                Credit Provision Calculator
            </h3>

            {/* Amount Slider */}
            <div className="mb-12">
                <div className="flex justify-between items-end mb-6 px-2">
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">Capital Requirement</span>
                    <div className="flex items-baseline">
                        <span className="text-primary font-black text-xl mr-1">₹</span>
                        <span className="text-5xl font-heading font-black text-foreground tracking-tighter">
                            {amount.toLocaleString('en-IN')}
                        </span>
                    </div>
                </div>
                <div className="relative h-2 flex items-center">
                    <input
                        type="range"
                        min={minAmount}
                        max={maxAmount}
                        step={5000}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-primary hover:accent-cyan transition-all"
                    />
                </div>
                <div className="flex justify-between mt-4 text-[10px] font-black text-gray-500 uppercase tracking-widest px-2">
                    <span>{minAmount / 1000}K Protocol Min</span>
                    <span>{maxAmount / 1000}K Protocol Max</span>
                </div>
            </div>

            {/* Tenure Selection */}
            <div className="mb-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 px-2">
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest text-nowrap">Provision Window</span>
                    <div className="flex gap-3 w-full sm:w-auto">
                        {[6, 12, 24].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTenure(t)}
                                className={cn(
                                    "flex-1 sm:flex-none px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-tighter transition-all relative overflow-hidden",
                                    tenure === t
                                        ? "bg-primary text-white shadow-[0_4px_20px_rgba(0,102,255,0.3)] scale-105"
                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 border border-gray-200"
                                )}
                            >
                                {t} MONTHS
                            </button>
                        ))}
                    </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl flex items-center justify-between border border-blue-100">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Protocol Yield (APR)</span>
                    <span className="text-xs font-black text-primary tracking-widest">{rate}% FIXED</span>
                </div>
            </div>

            {/* Result Section */}
            <div className="bg-gray-900 rounded-[28px] p-8 border border-gray-800 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 p-4">
                    <div className="bg-success/20 text-success px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border border-success/30">
                        INSTANT_XFER
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-800">
                    <div>
                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Monthly IMPS Mandate</p>
                        <p className="text-4xl font-heading font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            ₹{emi.toLocaleString('en-IN')}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Total Protocol Return</span>
                    <span className="text-lg font-black text-white italic">₹{totalPayable.toLocaleString('en-IN')}</span>
                </div>
            </div>
        </div>
    );
}
