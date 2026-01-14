'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

const userDetailsSchema = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 18, "Age must be greater than 18"),
    dob: z.string().min(1, "Date of Birth is required"),
    membersInHome: z.string().refine((val) => !isNaN(Number(val)), "Must be a number"),
    address: z.string().min(5, "Current Address is required"),
    permanentAddress: z.string().min(5, "Permanent Address is required"),
    aadhaarNo: z.string().regex(/^\d{12}$/, "Invalid Aadhaar Number (12 digits)"),
    panCard: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN Card Number"),
    licenseNo: z.string().optional(),
    annualIncome: z.string().min(1, "Annual Income is required"),
    monthlySalary: z.string().min(1, "Monthly Salary is required"),
    bankName: z.string().min(1, "Bank Name is required"),
    accountNo: z.string().min(1, "Account Number is required"),
});

type UserDetailsFormData = z.infer<typeof userDetailsSchema>;

interface UserDetailsFormProps {
    onSubmit: (data: UserDetailsFormData) => void;
    onBack: () => void;
}

export function UserDetailsForm({ onSubmit, onBack }: UserDetailsFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<UserDetailsFormData>({
        resolver: zodResolver(userDetailsSchema),
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[40px] p-8 border border-primary/10 shadow-lg w-full max-w-2xl"
        >
            <h2 className="text-2xl font-heading font-black text-foreground mb-6 uppercase tracking-tight">
                Confirm Your Details
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                        <input {...register('fullName')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="John Doe" />
                        {errors.fullName && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.fullName.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Age</label>
                        <input {...register('age')} type="number" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="25" />
                        {errors.age && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.age.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Date of Birth</label>
                        <input {...register('dob')} type="date" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" />
                        {errors.dob && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.dob.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Members in Home</label>
                        <input {...register('membersInHome')} type="number" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="4" />
                        {errors.membersInHome && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.membersInHome.message}</p>}
                    </div>
                </div>

                {/* Addresses */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Current Address</label>
                    <textarea {...register('address')} rows={2} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground resize-none" placeholder="Flat No, Area, City..." />
                    {errors.address && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.address.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Permanent Address</label>
                    <textarea {...register('permanentAddress')} rows={2} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground resize-none" placeholder="House No, Village, City..." />
                    {errors.permanentAddress && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.permanentAddress.message}</p>}
                </div>

                {/* Identity & Income */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Aadhaar Number</label>
                        <input {...register('aadhaarNo')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="XXXX XXXX XXXX" />
                        {errors.aadhaarNo && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.aadhaarNo.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">PAN Card</label>
                        <input {...register('panCard')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground uppercase" placeholder="ABCDE1234F" />
                        {errors.panCard && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.panCard.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">License Number (Optional)</label>
                        <input {...register('licenseNo')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="DL-123..." />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Annual Income (₹)</label>
                        <input {...register('annualIncome')} type="number" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="500000" />
                        {errors.annualIncome && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.annualIncome.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Monthly Salary (₹)</label>
                        <input {...register('monthlySalary')} type="number" className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="40000" />
                        {errors.monthlySalary && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.monthlySalary.message}</p>}
                    </div>
                </div>

                {/* Bank Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Bank Name</label>
                        <input {...register('bankName')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="e.g. HDFC Bank" />
                        {errors.bankName && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.bankName.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Account Number</label>
                        <input {...register('accountNo')} className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-primary outline-none font-bold text-foreground" placeholder="1234567890" />
                        {errors.accountNo && <p className="text-red-500 text-[10px] ml-2 font-bold">{errors.accountNo.message}</p>}
                    </div>
                </div>

                <div className="flex gap-4 pt-4">
                    <button type="button" onClick={onBack} className="flex-1 py-4 rounded-2xl font-black uppercase tracking-widest text-gray-500 bg-gray-100 hover:bg-gray-200 transition-all">
                        Back
                    </button>
                    <button type="submit" className="flex-[2] py-4 rounded-2xl font-black uppercase tracking-widest text-white bg-primary shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        Submit & Verify
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
