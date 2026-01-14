'use client';

import { useDropzone } from 'react-dropzone';
import { Camera, FileText, Upload, X, CheckCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface FileUploadZoneProps {
    type: string;
    accept?: Record<string, string[]>;
    cameraEnabled?: boolean;
}

export function FileUploadZone({ type, accept, cameraEnabled }: FileUploadZoneProps) {
    const [file, setFile] = useState<File | null>(null);
    const [analyzing, setAnalyzing] = useState(false);


    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles?.[0]) {
            setFile(acceptedFiles[0]);
            setAnalyzing(true);
            // Simulate analysis
            setTimeout(() => {
                setAnalyzing(false);

            }, 2000);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        onDrop,
        accept,
        maxFiles: 1
    });

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setFile(null);

    }

    return (
        <div className="w-full group">
            <div
                {...getRootProps()}
                className={cn(
                    "relative border-2 border-dashed rounded-[32px] p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer min-h-[300px] overflow-hidden",
                    isDragActive ? "border-primary bg-primary/5 scale-[0.99]" : "border-white/10 hover:border-primary/50 hover:bg-white/[0.02]",
                    file ? "border-success/50 bg-success/5" : ""
                )}
            >
                <input {...getInputProps()} />

                {file ? (
                    <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300 w-full max-w-xs">
                        {analyzing ? (
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                                <p className="text-sm font-medium text-primary animate-pulse">Analyzing Statement...</p>
                                <p className="text-xs text-gray-400 mt-1">Extracting transactions via OCR</p>
                            </div>
                        ) : (
                            <>
                                <div className="relative">
                                    <div className="w-20 h-20 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-4">
                                        <FileText className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-success text-[#020617] p-1 rounded-full shadow-md">
                                        <CheckCircle className="w-4 h-4 fill-current stroke-white" />
                                    </div>
                                </div>

                                <p className="font-bold text-white truncate w-full text-center">{file.name}</p>
                                <p className="text-xs text-gray-500 mb-4">{(file.size / 1024).toFixed(1)} KB</p>

                                <div className="bg-white/5 rounded-xl p-4 w-full border border-white/10 text-left">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Bank</span>
                                        <span className="text-xs font-black text-white">HDFC Bank</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Transactions</span>
                                        <span className="text-xs font-black text-white">245 Detected</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Status</span>
                                        <span className="text-[10px] font-black text-success uppercase tracking-widest px-2 py-0.5 bg-success/10 rounded-md">Valid</span>
                                    </div>
                                </div>

                                <button
                                    onClick={removeFile}
                                    className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                            <Upload className="w-10 h-10 text-primary" />
                        </div>

                        <h3 className="text-xl font-heading font-black text-white mb-3 uppercase tracking-tight">
                            UPLOAD {type.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 max-w-[250px] leading-relaxed mb-8">
                            Drag & drop files here, or click to select from device
                        </p>

                        {cameraEnabled && (
                            <div className="flex gap-3 w-full justify-center">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        open();
                                    }}
                                    className="flex items-center gap-3 bg-primary text-[#020617] px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:scale-105 transition-all"
                                >
                                    <Camera className="w-4 h-4" />
                                    Open Camera
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
