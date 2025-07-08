// src/components/Choice.jsx

import { X, Check } from 'lucide-react';

const traditionalData = [
    "3-6 months delivery",
    "Multiple vendors to coordinate",
    "High costs, hidden fees",
    "Inconsistent quality",
    "Poor communication",
];

const monzedData = [
    "2-3 weeks delivery",
    "Single point of contact",
    "Transparent, affordable pricing",
    "Premium quality guaranteed",
    "Daily updates & communication",
];

function Choice() {

    return (
        <div className="bg-[#1A1A2E] py-8 mt-[-5rem]">
            <div className="mx-auto max-w-7xl px-6">
    
                <div className="rounded-3xl bg-[#24283b] p-8 sm:p-12 lg:p-16">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl mb-12">
                        The Choice is Simple
                    </h2>

                    <div className="grid grid-cols-2 gap-8">

                        <div className="rounded-2xl bg-[#392f46] p-8 ring-1 ring-inset ring-red-400/20">
                            <h3 className="text-2xl font-bold text-red-300 mb-6">
                                Traditional Agencies
                            </h3>
                            <ul className="space-y-4 text-base text-slate-300">
                                {traditionalData.map((index) => (
                                    <li key={index} className="flex gap-x-3">
                                        <X className="h-6 w-6 flex-none text-red-400" />
                                        <span>{index}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-[#2f4641] p-8 ring-1 ring-inset ring-green-400/20">
                            <h3 className="text-2xl font-bold text-green-300 mb-6">
                                Monzed
                            </h3>
                            <ul className="space-y-4 text-base text-slate-300">
                                {monzedData.map((index) => (
                                    <li key={index} className="flex gap-x-3">
                                        <Check className="h-6 w-6 flex-none text-green-400" />
                                        <span>{index}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choice;