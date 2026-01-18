import { ArrowUp } from 'lucide-react';

import { motion } from 'framer-motion';

interface PillarCardProps {
    icon: React.ReactNode;
    title: string;
    score: number;
    points: string;
    weight: string;
    boosts: string[];
    color?: string; // e.g., 'text-primary'
}

export function PillarCard({ icon, title, score, points, boosts }: PillarCardProps) {
    return (
        <div className="min-w-[280px] p-1 rounded-[32px] bg-gradient-to-br from-white/40 to-white/0 hover:from-primary/20 hover:to-accent/20 transition-all duration-500 group snap-center relative shadow-sm hover:shadow-xl hover:-translate-y-1">
            <div className="bg-white/90 backdrop-blur-xl h-full rounded-[30px] p-6 relative overflow-hidden">

                {/* Background Decor */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

                <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 flex items-center justify-center text-primary shadow-[0_4px_20px_rgba(0,0,0,0.03)] group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(0,102,255,0.15)] transition-all duration-500">
                        <div className="w-7 h-7">{icon}</div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-[20px] font-heading font-black text-foreground">{score}%</div>
                        <div className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Efficiency</div>
                    </div>
                </div>

                <div className="mb-6 relative z-10">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{points} Contribution</p>
                </div>

                <div className="relative h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_15px_rgba(0,102,255,0.5)]"
                    />
                </div>

                <div className="space-y-2 relative z-10">
                    {boosts.slice(0, 2).map((boost, i) => (
                        <div key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-500 bg-gray-50/50 p-2 rounded-lg border border-transparent group-hover:border-primary/10 group-hover:bg-primary/5 transition-all">
                            <div className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                                <ArrowUp className="w-2.5 h-2.5 text-success" />
                            </div>
                            <span className="truncate">{boost}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
