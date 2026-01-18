'use client';

import { ShieldCheck, TrendingUp, Zap, Users, Award, ChevronRight, Star, Sparkles, ArrowRight, Globe, Lock, Gauge, History, FileSearch, Wallet, Plus, Minus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Spotlight } from '@/components/ui/Spotlight';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const platforms = [
    { name: "Swiggy", icon: "🛵" },
    { name: "Zomato", icon: "🎒" },
    { name: "Uber", icon: "🚗" },
    { name: "Ola", icon: "🚕" },
    { name: "Rapido", icon: "🚲" },
    { name: "Dunzo", icon: "📦" },
    { name: "Porter", icon: "🚚" },
    { name: "Upwork", icon: "💻" },
    { name: "Fiverr", icon: "🎨" },
  ];

  const pillars = [
    { icon: Zap, title: "UPI Intelligence", status: "High Precision", color: "text-primary", border: "border-primary/30", description: "Deep analysis of transaction velocity and patterns." },
    { icon: Sparkles, title: "Bills & Utility", status: "Real-time Sync", color: "text-primary", border: "border-primary/30", description: "Consistency in recurring payment history." },
    { icon: Users, title: "Platform Trust", status: "Verified Data", color: "text-primary", border: "border-primary/30", description: "Verified performance data from gig platforms." },
    { icon: TrendingUp, title: "Social Graph", status: "Stable Signal", color: "text-primary", border: "border-primary/30", description: "Network stability and professional signals." },
    { icon: Award, title: "Capital Health", status: "Fiscal Grade", color: "text-primary", border: "border-primary/30", description: "Savings-to-expense ratios and fiscal discipline." },
    { icon: ShieldCheck, title: "Digital KYC", status: "Bank-Level", color: "text-primary", border: "border-primary/30", description: "AI-powered identity verification & fraud checks." },
  ];

  const stats = [
    { value: "50,000+", label: "Workers Empowered", icon: Users },
    { value: "₹10,00,00,000+", label: "Capital Unlocked", icon: TrendingUp },
    { value: "99.9%", label: "Accuracy Rate", icon: ShieldCheck },
  ];

  const faqs = [
    { question: "What is CIBIL Score?", answer: "Your CIBIL Score is a 3-digit numeric summary of your credit history that indicates your creditworthiness and demonstrates your ability to repay a loan. CIBIL score ranges from 300 to 900. The closer your score is to 900, the higher are the chances of you getting your loan /credit card." },
    { question: "What is CIBIL Report?", answer: "A CIBIL Report is a consolidated credit report that includes your CIBIL Score and a detailed summary of your credit history." },
    { question: "What do I get in my CIBIL Report?", answer: "Your CIBIL Report contains detailed information on your credit history, including loan repayment records, credit card payments, and recent credit enquiries." },
    { question: "What are the factors that impact my CIBIL Score & Report?", answer: "Key factors include repayment history, credit utilization ratio, multiple credit enquiries, and mix of secured and unsecured loans." },
    { question: "Why is it important to check my CIBIL Score & Report?", answer: "Checking your score helps you understand your credit health, detect inaccuracies early, and improve your chances of loan approval." },
    { question: "Can CIBIL delete or change my records?", answer: "CIBIL cannot change records on its own. It only updates information based on data provided by member banks and financial institutions." },
    { question: "What should I do if I spot an inaccuracy in my CIBIL Report?", answer: "You can raise a dispute on the official CIBIL website to rectify any errors in your personal or account information." },
    { question: "How often should I check my CIBIL score?", answer: "It is recommended to check your CIBIL score at least once a year or before applying for any new credit facility." },
    { question: "How can I improve my CIBIL score?", answer: "You can improve your score by paying dues on time, maintaining a low credit utilization ratio, and avoiding multiple loan applications in a short span." },
  ];

  const testimonials = [
    { name: "Rahul S.", role: "Delivery Partner, Swiggy", content: "I couldn't get a bike loan because I didn't have a salary slip. GigCredit AI looked at my Swiggy earnings and got me approved in 2 hours." },
    { name: "Priya M.", role: "Freelance Designer", content: "As a freelancer, my income fluctuates. Traditional credit scores hated me. GigCredit AI understood my business growth." },
    { name: "Arjun K.", role: "Rapido Captain", content: "The focus on UPI transactions is a game-changer. Finally, my daily hustle counts for something real." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans overflow-x-hidden">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-cyan/5 blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 border-b border-primary/10 backdrop-blur-xl sticky top-0 bg-background/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-accent to-cyan rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(0,102,255,0.3)] group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-heading font-black tracking-tight text-foreground">
              GigCredit<span className="text-primary italic">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#how-it-works" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">How it Works</a>
            <a href="#pillars" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">Intelligence</a>
            <a href="#impact" className="hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]">Impact</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden sm:block text-sm font-bold text-gray-600 hover:text-primary transition-colors">
              Log In
            </Link>
            <Link href="/sign-up">
              <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-black shadow-[0_4px_20px_rgba(0,102,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,102,255,0.5)] hover:-translate-y-0.5 transition-all active:scale-95 text-xs">
                Check My Score
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-black text-primary uppercase tracking-widest">Bridging the Credit Gap</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] mb-8 text-foreground">
                Capital for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-cyan animate-gradient">
                  Indian Hustle
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                India&apos;s first AI-driven credit score designed specifically for 500 million gig workers. Turning your daily hustle into financial power.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up" className="w-full sm:w-auto">
                  <button className="w-full bg-primary text-white px-10 py-5 rounded-2xl text-lg font-black shadow-[0_4px_30px_rgba(0,102,255,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Get Your Score FREE
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer shadow-lg">
                      <Image src={`/images/gig-${i}.${i === 1 || i === 3 ? 'jpg' : 'png'}`} alt="worker" width={48} height={48} className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium font-heading">
                  <span className="text-foreground font-black">50k+</span> workers already joined
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="grid grid-cols-2 gap-4 relative"
            >
              <div className="space-y-4 pt-8">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-[40px] border-4 border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] h-[350px] animate-float">
                  <Image src="/images/gig-1.jpg" alt="Swiggy Delivery Partner" width={400} height={500} className="object-cover h-full w-full" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-[40px] border-4 border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] h-[250px] animate-float" style={{ animationDelay: '2s' }}>
                  <Image src="/images/gig-3.jpg" alt="Multiple Gig Workers" width={400} height={500} className="object-cover h-full w-full" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-[40px] border-4 border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] h-[250px] animate-float" style={{ animationDelay: '1s' }}>
                  <Image src="/images/gig-2.png" alt="Bike Taxi" width={400} height={500} className="object-cover h-full w-full" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-[40px] border-4 border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] h-[350px] animate-float" style={{ animationDelay: '3s' }}>
                  <Image src="/images/gig-4.png" alt="Team" width={400} height={500} className="object-cover h-full w-full" />
                </motion.div>
              </div>

            </motion.div>
          </div>
        </section>

        {/* Platform Marquee */}
        <section className="py-12 border-y border-primary/10 overflow-hidden bg-white/50">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 font-heading">Direct Integration with 20+ Platforms</p>
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...platforms, ...platforms].map((p, i) => (
              <div key={i} className="flex items-center gap-4 opacity-40 hover:opacity-100 transition-all cursor-default group scale-90 hover:scale-100">
                <span className="text-3xl">{p.icon}</span>
                <span className="text-2xl font-heading font-black text-gray-400 group-hover:text-primary transition-colors">{p.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bento Grid Features */}
        <section id="how-it-works" className="px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="w-px h-12 bg-primary mx-auto mb-8" />
              <h2 className="text-4xl md:text-6xl font-heading font-black text-foreground mb-8 tracking-tight">
                Not a Credit Card. <br />
                <span className="text-primary italic">A Financial Identity.</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                We&apos;ve rebuilt credit assessment from the ground up for the modern worker, using the data that actually defines your hustle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {/* Feature 1: Large */}
              <div className="md:col-span-2 md:row-span-2">
                <Spotlight className="h-full bg-background border-primary/10 shadow-[0_10px_40px_rgba(0,102,255,0.05)]">
                  <div className="p-10 flex flex-col justify-center h-full relative z-10">
                    <h3 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-6 leading-tight">
                      Here&apos;s What You Get In Your <br />
                      <span className="text-primary">Free CIBIL Score & Report</span>
                    </h3>

                    <div className="space-y-5 mb-8">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 mt-1">
                          <Gauge className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          Your latest <span className="text-foreground font-bold">CIBIL Score</span>, a 3-digit numeric summary of your credit history (between 300 to 900).
                        </p>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center shrink-0 border border-warning/20 mt-1">
                          <History className="w-5 h-5 text-warning" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          A summary of your credit <span className="text-foreground font-bold">payment history</span>, gathered from information provided by lenders.
                        </p>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center shrink-0 border border-success/20 mt-1">
                          <Users className="w-5 h-5 text-success" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          <span className="text-foreground font-bold">Personal information</span> such as your name, date of birth and gender linked to your loan and credit cards.
                        </p>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 border border-cyan/20 mt-1">
                          <FileSearch className="w-5 h-5 text-cyan" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          A list of all <span className="text-foreground font-bold">enquiries</span> made by the lender for your loan and credit card applications for last 36 months.
                        </p>
                      </div>

                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20 mt-1">
                          <Wallet className="w-5 h-5 text-accent" />
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          Details of all your active and inactive <span className="text-foreground font-bold">loan and credit card accounts</span>.
                        </p>
                      </div>
                    </div>

                    <Link href="/sign-up">
                      <button className="bg-warning text-black px-8 py-3.5 rounded-xl font-black shadow-[0_4px_15px_rgba(255,187,51,0.4)] hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest flex items-center gap-2">
                        Get Started Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </Spotlight>
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-2">
                <Spotlight className="h-full bg-background border-primary/10 shadow-[0_10px_40px_rgba(0,102,255,0.05)]">
                  <div className="p-12 flex flex-col justify-between h-full relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                      <div className="flex-1">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 border border-accent/20">
                          <Globe className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-3xl font-heading font-black text-foreground mb-4">Multi-Platform Sync</h3>
                        <p className="text-gray-600 text-lg font-medium leading-relaxed">
                          Swiggy in the morning, Uber at night? We combine all your earnings into one powerful score.
                        </p>
                      </div>
                      <div className="w-full md:w-32 grid grid-cols-2 gap-3 opacity-20 group-hover:opacity-100 transition-all duration-700">
                        {[1, 2, 3, 4].map(i => <div key={i} className="aspect-square bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />)}
                      </div>
                    </div>
                  </div>
                </Spotlight>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-1">
                <Spotlight className="h-full bg-background border-primary/10 hover:border-primary/30 shadow-[0_10px_40px_rgba(0,102,255,0.05)]">
                  <div className="p-10 relative z-10">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-primary/10">
                      <Lock className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-black text-foreground mb-3">Steel Security</h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">AES-256 encrypted storage. Your privacy is non-negotiable.</p>
                  </div>
                </Spotlight>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-1">
                <div className="h-full p-10 rounded-[40px] bg-gradient-to-br from-primary via-blue-600 to-accent text-white shadow-[0_10px_30px_rgba(0,102,255,0.3)] hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 text-white">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-black mb-3">Instant Credit</h3>
                  <p className="text-white/90 text-sm font-bold leading-relaxed">Unlock pre-approved credit lines from 10+ NBFC partners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Pillars Section */}
        <section id="pillars" className="px-6 py-32 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 text-center md:text-left">
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6">Internal Engine</p>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-foreground tracking-tight leading-none">
                  Scoring Intelligence
                </h2>
              </div>
              <p className="text-gray-600 max-w-md text-lg font-bold leading-relaxed">
                Analyzing 500+ data points across 6 proprietary intelligence modules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  onHoverStart={() => { }}
                  onHoverEnd={() => { }}
                  className="group"
                >
                  <div className={`h-full p-1 rounded-[40px] bg-gradient-to-br from-white/60 to-white/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-500 shadow-sm hover:shadow-2xl relative`}>
                    <div className="bg-white/90 backdrop-blur-xl h-full rounded-[38px] p-8 relative overflow-hidden flex flex-col">

                      {/* Background Decor */}
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${pillar.color} bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                          <pillar.icon className="w-7 h-7" />
                        </div>
                        <div className="px-4 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm group-hover:border-primary/20 transition-colors">
                          <span className={`text-[9px] font-black tracking-[0.2em] uppercase ${pillar.color}`}>{pillar.status}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-heading font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors">{pillar.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-bold">{pillar.description}</p>

                      <div className="mt-auto pt-8 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-500 cursor-pointer">
                        <span className="text-[10px] font-black uppercase text-primary tracking-widest">Detail View</span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="px-6 py-32 bg-white relative overflow-hidden border-t border-primary/10">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group border-l border-primary/10 first:border-l-0 px-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-6xl md:text-8xl font-heading font-black text-primary mb-6 tabular-nums transition-all duration-500 hover:scale-105"
                >
                  {stat.value}
                </motion.p>
                <div className="w-16 h-1.5 bg-accent mx-auto mb-8 rounded-full scale-x-50 group-hover:scale-x-100 transition-all duration-700" />
                <p className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-32 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-block px-6 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-heading font-black text-foreground tracking-tight leading-none mt-4">Voices of the Hustle</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <div key={i} className="p-12 rounded-[56px] bg-white border border-primary/10 flex flex-col justify-between hover:-translate-y-6 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,102,255,0.1)] group shadow-sm">
                  <div className="mb-12">
                    <div className="flex gap-1.5 mb-8">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-warning text-warning" />)}
                    </div>
                    <p className="text-gray-600 italic font-bold leading-relaxed text-xl relative">
                      <span className="absolute -left-6 -top-4 text-6xl text-primary/10 font-black">&quot;</span>
                      {t.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-[24px] overflow-hidden border-2 border-white shadow-lg group-hover:border-primary/50 transition-colors">
                      <Image src={`/images/gig-${i + 1}.${i + 1 === 1 || i + 1 === 3 ? 'jpg' : 'png'}`} alt={t.name} width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-heading font-black text-foreground text-lg tracking-tight">{t.name}</p>
                      <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-32 bg-white border-t border-primary/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground tracking-tight leading-none mb-6">Frequently Asked Questions</h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-primary/10 rounded-3xl bg-background overflow-hidden hover:border-primary/30 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-heading font-black text-foreground text-lg tracking-tight">{faq.question}</span>
                    {openFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-gray-400" />}
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="px-8 pb-8 pt-2">
                      <p className="text-gray-600 font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="px-6 py-24 border-t border-primary/10 bg-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
            <div className="space-y-6 max-w-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-10 h-10 text-primary" />
                <span className="text-3xl font-heading font-black tracking-tighter text-foreground">
                  GigCredit<span className="text-primary italic">AI</span>
                </span>
              </div>
              <p className="text-gray-500 font-bold leading-relaxed">
                Redefining financial freedom for 500 million gig economy workers in India. Your hustle is your credit.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
              <div className="space-y-6 text-left">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Product</h4>
                <ul className="space-y-4 text-sm font-bold text-gray-500">
                  <li><a href="#" className="hover:text-primary transition-colors">Scoring</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">NBFC Sync</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                </ul>
              </div>
              <div className="space-y-6 text-left">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Company</h4>
                <ul className="space-y-4 text-sm font-bold text-gray-500">
                  <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                </ul>
              </div>
              <div className="space-y-6 text-left">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground">Connect</h4>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer text-gray-400 hover:text-primary border border-primary/10">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center hover:bg-primary/20 transition-all cursor-pointer text-gray-400 hover:text-primary border border-primary/10">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-500 font-bold">
              © 2026 GigCredit AI. All rights reserved. Registered trademark of HustleFintech India.
            </p>
            <div className="flex gap-6 text-xs font-black uppercase tracking-[0.1em] text-gray-400">
              <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-success animate-pulse" /> All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
