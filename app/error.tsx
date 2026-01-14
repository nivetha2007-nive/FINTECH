'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-4xl font-heading font-black mb-4">Something went wrong!</h2>
            <p className="text-gray-400 mb-8 max-w-md">{error.message || "An unexpected error occurred in the credit protocol."}</p>
            <button
                onClick={() => reset()}
                className="bg-primary text-[#020617] px-8 py-4 rounded-2xl font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,242,255,0.4)]"
            >
                Try again
            </button>
        </div>
    );
}
