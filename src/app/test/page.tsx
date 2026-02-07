"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestCard() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (typeof document !== "undefined") {
            if (dark) document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <main className="bg-primary dark:bg-background-dark min-h-screen flex items-center justify-center p-6 transition-colors duration-300 pt-50">
            <div className="max-w-6xl w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <button className="py-4 px-6 rounded-lg border-2 border-primary bg-card-dark text-white font-semibold text-center transition-all">
                        Validate Your Readiness
                    </button>
                    <button className="py-4 px-6 rounded-lg border border-slate-700 bg-tab-inactive text-slate-400 font-semibold text-center hover:border-slate-500 hover:text-white transition-all">
                        Develop Your Workforce
                    </button>
                    <button className="py-4 px-6 rounded-lg border border-slate-700 bg-tab-inactive text-slate-400 font-semibold text-center hover:border-slate-500 hover:text-white transition-all">
                        Achieve Cyber Resilience
                    </button>
                </div>

                <div className="bg-card-dark dark:bg-card-dark rounded-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                    Emulate Real Threats. Validate Readiness.
                                </h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                    Validate cybersecurity capabilities and operational readiness against real-world
                                    threats by replicating adversarial behaviors or attacks in threat emulation
                                    programs, so your teams are confident, capable, and prepared from day zero.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="pl-6 border-l-4 border-primary bg-slate-900/40 py-4">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Enterprise attack simulation training</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Real-word attack simulations and live-fire team exercises.</p>
                                </div>
                                <div className="pl-6 border-l-4 border-primary bg-slate-900/40 py-4">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Purple-minded scenarios</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Replicate complex multi-stage threats because modern breaches exploit entire networks.</p>
                                </div>
                                <div className="pl-6 border-l-4 border-primary bg-slate-900/40 py-4">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Break the mold of traditional training</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Real-time, hands-on, offensive &amp; defensive content releases on latest vectors and vulnerabilities.</p>
                                </div>
                            </div>

                            <div>
                                <button className="bg-primary hover:bg-primary/90 text-black font-extrabold py-4 px-10 rounded transition-colors shadow-lg shadow-primary/20 uppercase text-sm tracking-wider">
                                    Get hands-on readiness
                                </button>
                            </div>
                        </div>

                        <div className="hidden lg:flex justify-center items-center illustration-container relative h-[500px]">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-40">
                                <div className="w-64 h-80 bg-primary/20 rotate-12 rounded-lg absolute -right-4 top-10"></div>
                                <div className="w-48 h-60 bg-primary/10 -rotate-6 rounded-lg absolute -left-10 top-20"></div>
                            </div>
                            <div className="relative z-20">
                                <Image
                                    alt="Cybersecurity expert illustration"
                                    className="max-h-[500px] w-auto relative z-20"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR7DDLz8RTFgPLYa9dGXaFAjdvBUnoQSpVb2PabfwyshsKBnxUIvuDZHmHf_zfrQ7pUOQXJsTQIYkzH_0C9geT1gUlCoO3ePBnBI5w9bgxcnYqDqC6xm39dA_br1WE7D5W2xgFh4d2guFY6aTJ1HcgXdE5Rr-f7NRnvTW_hZVKtyWgGjgWBNYAgnb_oWrqHrA_2dLXjcPkb_iTjz34h-upnPkdDmtX4OoLc-DeSguiBO6Ed4GdOqcOGwOLZwowThcQ57x0qRJ2jAY"
                                    width={520}
                                    height={520}
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: -20,
                                        left: "50%",
                                        transform: "translateX(-50%) rotateX(75deg)",
                                        width: 300,
                                        height: 100,
                                        borderRadius: "50%",
                                        border: "2px dotted #a3e635",
                                        opacity: 0.4,
                                        perspective: 1000,
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2 hover:text-primary transition-colors"
                        onClick={() => setDark((v) => !v)}
                    >
                        <span className="dark:hidden">Switch to Dark Mode</span>
                        <span className="hidden dark:block">Switch to Light Mode</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </main>
    );
}