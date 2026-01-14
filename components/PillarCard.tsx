import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
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

export function PillarCard({ icon, title, score, points, weight, boosts, color = "text-primary" }: PillarCardProps) {
    return (
        <div className="min-w-[280px] p-6 rounded-[32px] bg-white border border-gray-100 hover:border-primary/50 transition-all duration-500 group snap-center relative overflow-hidden shadow-sm hover:shadow-md">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6">{icon}</div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-black tracking-widest text-primary uppercase">{points}</div>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">{title}</h3>

                <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-accent to-primary shadow-[0_0_10px_rgba(0,102,255,0.3)]"
                    />
                </div>
            </div>

            <div className="space-y-3">
                {boosts.map((boost, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-gray-500 group-hover:text-gray-700 transition-colors">
                        <ArrowUp className="w-3 h-3 text-success" />
                        <span>{boost}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
