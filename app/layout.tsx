import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800", "900"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "GigCredit AI - Credit Scores for Gig Workers",
  description: "India's first credit scoring platform for gig workers. Rapido drivers, Swiggy/Zomato delivery, freelancers.",
  manifest: "/manifest.json",
};

import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className={cn(inter.className, "min-h-screen bg-bg-light dark:bg-bg-dark text-foreground antialiased font-sans")}>
        <ProtectedRoute>
          {children}
        </ProtectedRoute>
      </body>
    </html>
  );
}

