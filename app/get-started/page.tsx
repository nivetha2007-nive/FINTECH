'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Camera, User, Fingerprint, CreditCard, Briefcase, Rocket, Check, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FileUploadZone } from '@/components/FileUploadZone';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '@/lib/auth-store';
import Link from 'next/link';
import React from 'react';

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();

    const login = useAuthStore((state) => state.login);

    const handleStepComplete = (data?: { name?: string; mobile?: string }) => {
        if (currentStep === 1 && data?.name) {
            login(data.name, data.mobile || "");
        }
        setCompletedSteps(prev => [...prev, currentStep]);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
            if (currentStep < 5) {
                setCurrentStep(c => c + 1);
            } else {
                router.push('/score');
            }
        }, 1500);
    };

    const steps = [
        { id: 1, title: "Basic Information", icon: User, Content: Step1BasicInfo, summary: "Identity Created" },
        { id: 2, title: "Identity Verification", icon: Fingerprint, Content: Step2Identity, summary: "Documents Verified" },
        { id: 3, title: "Financial Intelligence", icon: CreditCard, Content: Step3Financial, summary: "Cash Flow Sync'd" },
        { id: 4, title: "Platform Trust", icon: Briefcase, Content: Step4Employment, summary: "Hustle Verified" },
        { id: 5, title: "Final Score Boost", icon: Rocket, Content: Step5Boosters, summary: "AI Ready" },
    ];

    const currentStepData = steps[currentStep - 1];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4 md:p-12 relative overflow-hidden">
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
            </div>

            {/* Success Overlay */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/40 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            className="bg-white rounded-[40px] p-12 flex flex-col items-center gap-6 max-w-sm mx-4 shadow-[0_40px_80px_rgba(0,0,0,0.2)] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-white opacity-80" />
                            <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse">
                                <Check className="w-12 h-12 text-white" strokeWidth={4} />
                            </div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl font-heading font-black text-[#020617] mb-2 tracking-tight">Step Complete!</h3>
                                <div className="px-4 py-1.5 bg-success/10 rounded-full border border-success/20 inline-block">
                                    <p className="text-success font-black uppercase tracking-[0.2em] text-[10px]">{currentStepData.summary}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full max-w-3xl relative z-10">
                <header className="mb-12 flex items-center justify-between">
                    <div>
                        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-4 group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Back to Home</span>
                        </Link>
                        <h1 className="font-heading font-black text-4xl text-foreground tracking-tight">Onboarding</h1>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-heading font-black text-foreground">{currentStep}<span className="text-gray-300 text-xl">/5</span></div>
                        <div className="flex gap-1.5 mt-2 justify-end">
                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className={cn(
                                        "h-1.5 rounded-full transition-all duration-500",
                                        completedSteps.includes(step.id) ? "bg-primary w-6" :
                                            step.id === currentStep ? "bg-primary w-10 shadow-sm border border-primary" :
                                                "bg-gray-200 w-4"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </header>

                {/* Current Step Display - No Scrolling */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-[32px] overflow-hidden border border-primary/10 bg-white shadow-[0_20px_60px_rgba(0,102,255,0.08)]"
                    >
                        {/* Step Header */}
                        <div className="p-8 flex items-center justify-between border-b border-gray-100">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-primary/5 text-primary shadow-sm border border-primary/10">
                                    {React.createElement(currentStepData.icon, { className: "w-8 h-8" })}
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-2xl tracking-tight uppercase text-foreground">
                                        {currentStepData.title}
                                    </h3>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">
                                        Step {currentStep} of {steps.length}
                                    </p>
                                </div>
                            </div>
                            <div className="text-[10px] font-black text-primary bg-primary/10 px-4 py-2 rounded-lg tracking-widest uppercase">
                                Syncing
                            </div>
                        </div>

                        {/* Step Content */}
                        <div className="p-8">
                            {React.createElement(currentStepData.Content, { onNext: handleStepComplete })}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

const step1Schema = z.object({
    name: z.string().min(1, "Name is required"),
    dob: z.string().min(1, "Date of Birth is required"),
    address: z.string().min(5, "Valid address is required"),
    workerType: z.string().min(1, "Worker type is required"),
    email: z.string().email("Valid email is required"),
    mobile: z.string().regex(/^[0-9]{10}$/, "Valid mobile number required"),
    altMobile: z.string().regex(/^[0-9]{10}$/, "Valid mobile number required").optional().or(z.literal('')),
});

function Step1BasicInfo({ onNext }: { onNext: (data: z.infer<typeof step1Schema>) => void }) {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(step1Schema) });

    return (
        <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-6 mt-4">
            {/* Row 1: Name & DOB */}
            {/* Row 1: Name & DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Legal Name</label>
                    <input
                        {...register('name')}
                        placeholder="e.g. John Doe"
                        className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                    />
                    {errors.name && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.name.message as string}</span>}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Date of Birth</label>
                    <input
                        {...register('dob')}
                        type="date"
                        className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                    />
                    {errors.dob && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.dob.message as string}</span>}
                </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Permanent Address</label>
                <textarea
                    {...register('address')}
                    placeholder="House No, Street, City, State, Pincode"
                    rows={2}
                    className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 resize-none shadow-sm"
                />
                {errors.address && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.address.message as string}</span>}
            </div>

            {/* Worker Type */}
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Primary Gig Platform</label>
                <select
                    {...register('workerType')}
                    className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                >
                    <option value="">Select Platform</option>
                    <option value="swiggy">Swiggy</option>
                    <option value="zomato">Zomato</option>
                    <option value="uber">Uber</option>
                    <option value="ola">Ola</option>
                    <option value="rapido">Rapido</option>
                    <option value="blinkit">Blinkit</option>
                    <option value="dunzo">Dunzo</option>
                    <option value="porter">Porter</option>
                    <option value="urban_company">Urban Company</option>
                    <option value="amazon_flex">Amazon Flex</option>
                    <option value="other">Other</option>
                </select>
                {errors.workerType && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.workerType.message as string}</span>}
            </div>

            {/* Row 2: Email & Mobiles */}
            <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full p-4 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                />
                {errors.email && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.email.message as string}</span>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Primary Mobile</label>
                    <div className="relative">
                        <span className="absolute left-5 top-4 text-primary font-black">+91</span>
                        <input
                            {...register('mobile')}
                            type="tel"
                            placeholder="98765 43210"
                            className="w-full p-4 pl-14 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                        />
                    </div>
                    {errors.mobile && <span className="text-error text-[10px] font-black uppercase ml-2">{errors.mobile.message as string}</span>}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Alternative Mobile (Optional)</label>
                    <div className="relative">
                        <span className="absolute left-5 top-4 text-gray-400 font-bold">+91</span>
                        <input
                            {...register('altMobile')}
                            type="tel"
                            placeholder="98765 43210"
                            className="w-full p-4 pl-14 rounded-2xl bg-white border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-bold text-foreground placeholder:text-gray-300 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-black shadow-[0_10px_30px_rgba(0,102,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest mt-4 hover:shadow-[0_15px_40px_rgba(0,102,255,0.4)]">
                VERIFY & CONTINUE
            </button>
        </form>
    )
}

function Step2Identity({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Aadhaar ID</label>
                    <div className="flex gap-4">
                        <input placeholder="1234 5678 9012" className="flex-1 p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary outline-none font-bold text-foreground placeholder:text-gray-300 shadow-sm" />
                        <button className="bg-gray-100 text-foreground px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-sm">Verify</button>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">PAN Registry</label>
                    <input placeholder="ABCDE1234F" className="w-full p-5 rounded-2xl bg-white border border-gray-300 focus:border-primary outline-none font-bold text-foreground uppercase placeholder:text-gray-300 shadow-sm" />
                </div>
                <button className="w-full h-32 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:border-primary/50 hover:bg-primary/5 transition-all bg-white">
                    <Camera className="w-8 h-8" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Biometric Selfie Capture</span>
                </button>
            </div>
            <button onClick={onNext} className="w-full bg-primary text-white py-6 rounded-2xl font-black shadow-[0_10px_30px_rgba(0,102,255,0.3)] uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98]">
                NEXT PROTOCOL
            </button>
        </div>
    )
}

function Step3Financial({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 text-center">
                    <p className="text-sm font-bold text-gray-500 mb-6">Securely sync your primary bank statement</p>
                    <FileUploadZone type="bank-statement" accept={{ 'application/pdf': ['.pdf'], 'text/csv': ['.csv'] }} cameraEnabled={true} />
                </div>
                <button className="w-full py-4 bg-white border border-gray-200 rounded-2xl text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
                    <Fingerprint className="w-4 h-4" /> Connect via Account Aggregator
                </button>
            </div>
            <button onClick={onNext} className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(0,102,255,0.2)] hover:scale-[1.02] active:scale-[0.98]">
                ANALYZE CASHFLOW
            </button>
        </div>
    )
}

function Step4Employment({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 border-l-4 border-l-primary shadow-sm">
                    <p className="text-[11px] font-bold text-gray-500 leading-relaxed uppercase">Upload recent dashboard screenshots from your gig platforms (Swiggy, Uber, etc.)</p>
                </div>
                <FileUploadZone type="gig-dashboard" accept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }} cameraEnabled={true} />
                <div className="flex items-center gap-6">
                    <div className="h-px bg-gray-200 flex-1" />
                    <span className="text-[10px] font-black text-gray-500 uppercase">Direct Link</span>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>
                <button className="w-full py-4 bg-white border border-gray-300 rounded-2xl text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors shadow-sm">
                    <Rocket className="w-4 h-4 text-primary" /> Rapid Connect API
                </button>
            </div>
            <button onClick={onNext} className="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(0,102,255,0.2)] hover:scale-[1.02] active:scale-[0.98]">
                VERIFY HUSTLE
            </button>
        </div>
    )
}

function Step5Boosters({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col gap-8 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { icon: "📧", title: "Email Sync", desc: "Auto-bills", pts: "+15" },
                    { icon: "🔗", title: "WhatsApp", desc: "VPA History", pts: "+12" },
                    { icon: "💼", title: "LinkedIn", desc: "Network Score", pts: "+10" },
                    { icon: "📍", title: "Location", desc: "Geo-verify", pts: "+8" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl group hover:border-primary hover:shadow-lg cursor-pointer transition-all shadow-sm">
                        <div className="flex items-center gap-4">
                            <span className="text-xl group-hover:scale-125 transition-transform text-foreground">{item.icon}</span>
                            <div>
                                <p className="font-black text-xs uppercase text-foreground">{item.title}</p>
                                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.desc}</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.pts}</span>
                    </div>
                ))}
            </div>
            <button onClick={onNext} className="w-full bg-gradient-to-r from-primary via-accent to-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] shadow-[0_10px_40px_rgba(0,102,255,0.4)] hover:scale-[1.02] flex items-center justify-center gap-4 active:scale-[0.98]">
                CALCULATE FINAL SCORE <Rocket className="w-5 h-5" />
            </button>
        </div>
    )
}
