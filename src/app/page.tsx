'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { MoveRight } from "@/components/icons/material";

export default function Home() {
    const [activeTab, setActiveTab] = useState(2);
    const [activeTeamTab, setActiveTeamTab] = useState(2);
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Trigger visibility for animations
        const timer = setTimeout(() => setIsVisible(true), 100);

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisibleSections(prev => new Set(prev).add(entry.target.id));
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="relative min-h-screen overflow-hidden">{
            /* Parallax Hero Background */}
            <section id="Hero" className="relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0 pointer-events-none transition-transform duration-300"
                    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                >
                    <Image
                        alt="Hero background"
                        src="/colors.jpeg"
                        fill
                        className="object-top object-cover pointer-events-none"
                        priority
                    />
                </div>
                <div className={`max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-30 text-foreground transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-5xl lg:text-7xl leading-[1.1] mb-8 tracking-tight text-foreground">
                            Cyber Mastery:<br />
                            <span className="text-muted">Community Inspired.</span><br />
                            <span className="text-foreground">Enterprise Trusted.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl leading-relaxed">
                            Hack The Box combines hands-on offensive and defensive labs, AI-enhanced intelligence, and the power of community to help individuals and teams master cybersecurity and accelerate operational readiness.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-accent-500 hover:bg-accent-hover text-black font-bold px-10 py-5 transition-all duration-300 text-base lg:text-lg flex items-center gap-3 hover:scale-105 hover:shadow-[0_0_30px_rgba(159,239,0,0.3)] active:scale-95"
                            >
                                Upgrade your team&apos;s readiness
                                <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10 hidden md:block">
                    <div className="flex items-center gap-4 text-muted text-sm font-semibold tracking-widest uppercase">
                        <div className="h-px w-12 bg-surface"></div>
                        Join 2.5m+ Platform Members
                    </div>
                </div>
            </section>
            <section id="card" className={`relative overflow-hidden pt-20 bg-primary transition-all duration-1000 ${visibleSections.has('card') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    {/* Tabs */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-3 mb-6">
                        <button
                            onClick={() => setActiveTab(0)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-24 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTab === 0
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Validate Your Readiness
                        </button>
                        <button
                            onClick={() => setActiveTab(1)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-24 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTab === 1
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Develop Your Workforce
                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-24 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTab === 2
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Achieve Cyber Resilience
                        </button>
                    </div>

                    {/* Content Card */}
                    <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Text Content */}
                            <div className="flex flex-col gap-2">
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        Make resilience measurable and strategic
                                    </h2>
                                    <p className="text-muted text-lg leading-relaxed">
                                        Stay ahead of risk with a continuously updated, real-world content library and exercises – ensuring your team is always prepared for what&apos;s next and actively reducing potential loss through strategic cyber resilience.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="p-3 rounded-lg border border-surface bg-transparent hover:border-accent-500/50 transition-colors group">
                                        <h3 className="text-white font-bold mb-2 group-hover:text-accent-500 transition-colors">Collaboration and cross-functional exercises</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            Purpose built assessments that lets cross-functional teams train together and measure outcomes.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-lg border border-surface bg-transparent hover:border-accent-500/50 transition-colors group">
                                        <h3 className="text-white font-bold mb-2 group-hover:text-accent-500 transition-colors">Advanced reporting and analytics</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            Live dashboards translate exercise scores into MITRE-mapped heatmaps, readiness indices, and skill progression overviews.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-lg border border-surface bg-transparent hover:border-accent-500/50 transition-colors group">
                                        <h3 className="text-white font-bold mb-2 group-hover:text-accent-500 transition-colors">The most complete cyber content library</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            The most comprehensive and challenging content library in terms of knowledge domains and technologies covered.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold px-8 py-4 rounded transition-all flex items-center justify-center w-full sm:w-auto">
                                        Achieve cyber resilience
                                    </button>
                                </div>
                            </div>

                            {/* Right Illustration */}
                            <div className="relative flex items-center justify-center">
                                {/* Green Bottom Glow Effect */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                                <div className="relative z-10 w-full max-w-sm aspect-3/4 flex items-center justify-center">
                                    {/* Placeholder for Character Illustration */}
                                    <div className="relative w-full h-full flex items-end justify-center">
                                        {/* Floating Cards Background Effect (CSS approximated) */}
                                        <div className="absolute top-10 right-0 w-40 h-28 bg-[#1e232b]/80 border border-white/5 rounded backdrop-blur-sm -rotate-6 transform translate-x-4"></div>
                                        <div className="absolute top-32 left-0 w-32 h-24 bg-[#1e232b]/80 border border-white/5 rounded backdrop-blur-sm rotate-12 transform -translate-x-8"></div>

                                        {/* Character Silhouette Placeholder */}
                                        <div className="w-64 h-80 bg-linear-to-b from-[#2a303b] to-[#11141a] rounded-t-[3rem] border-t border-x border-white/5 flex items-center justify-center relative shadow-2xl">
                                            {/* Mask Overlay */}
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#11141a] via-[#11141a]/80 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="logo" className="relative overflow-hidden py-10 bg-primary">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="relative w-full overflow-hidden mask-fade">
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-primary to-transparent"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-primary to-transparent"></div>

                        <div className="animate-scroll flex items-center gap-16 md:gap-24 py-8">
                            {[...Array(2)].map((_, setIndex) => (
                                <div key={setIndex} className="flex items-center gap-16 md:gap-24 shrink-0">
                                    <span className="text-muted/50 text-2xl font-black tracking-tighter hover:text-white transition-colors cursor-default select-none">PUMA</span>
                                    <span className="text-muted/50 text-2xl font-bold tracking-widest hover:text-white transition-colors cursor-default select-none">AUTODESK</span>
                                    <span className="text-muted/50 text-xl font-serif hover:text-white transition-colors cursor-default select-none">securitymetrics</span>
                                    <span className="text-muted/50 text-2xl font-bold flex items-center gap-1 hover:text-white transition-colors cursor-default select-none">
                                        <span className="border-2 border-current rounded p-0.5 text-xs">CMD</span> Check
                                    </span>
                                    <span className="text-muted/50 text-3xl font-bold lowercase tracking-tight hover:text-white transition-colors cursor-default select-none">nviso</span>
                                    <span className="text-muted/50 text-2xl font-bold hover:text-white transition-colors cursor-default select-none">bugcrowd</span>
                                    <span className="text-muted/50 text-xl font-bold uppercase tracking-widest hover:text-white transition-colors cursor-default select-none">TOYOTA</span>
                                    <span className="text-muted/50 text-2xl font-mono font-bold hover:text-white transition-colors cursor-default select-none">SIEMENS</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section id="additional" className={`relative overflow-hidden pb-5 bg-primary transition-all duration-1000 ${visibleSections.has('additional') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                            Security training for everyone and your team
                        </h2>
                        <p className="text-muted text-lg leading-relaxed">
                            New to cyber, seasoned pro, or leading a national program, get hands-on training and exercises that keep people sharp, teams ready, and missions resilient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group border border-surface rounded-2xl p-6 bg-[#0f141a] hover:border-accent-500/50 transition-all duration-500 flex flex-col h-full hover:scale-102  cursor-pointer">
                            <h3 className="text-3xl font-bold text-white mb-8">For Individuals</h3>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 bg-surface/50 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                                    alt="Individuals"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-all duration-500 z-10"></div>
                                <div className="absolute inset-0 bg-linear-to-t from-[#0f141a] to-transparent opacity-60"></div>
                            </div>
                            <p className="text-muted mb-8 text-lg grow">Learn, refine and master your cyber skills</p>
                            <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-4 px-8 rounded opacity-90 hover:opacity-100 transition-all duration-300 w-fit hover:scale-102 active:scale-100">
                                Begin your journey
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="group border border-surface rounded-2xl p-6 bg-[#0f141a] hover:border-accent-500/50 transition-all duration-500 flex flex-col h-full hover:scale-102  cursor-pointer">
                            <h3 className="text-3xl font-bold text-white mb-8">For Businesses</h3>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 bg-surface/50 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                                    alt="Businesses"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-all duration-500 z-10"></div>
                                <div className="absolute inset-0 bg-linear-to-t from-[#0f141a] to-transparent opacity-60"></div>
                            </div>
                            <p className="text-muted mb-8 text-lg grow">Build and scale threat-ready enterprise cyber teams</p>
                            <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-4 px-8 rounded opacity-90 hover:opacity-100 transition-all duration-300 w-fit hover:scale-102 active:scale-100">
                                Scale your team
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="group border border-surface rounded-2xl p-6 bg-[#0f141a] hover:border-accent-500/50 transition-all duration-500 flex flex-col h-full hover:scale-102 cursor-pointer">
                            <h3 className="text-3xl font-bold text-white mb-8">For Public Sector</h3>
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8 bg-surface/50 grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800&auto=format&fit=crop"
                                    alt="Public Sector"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 transition-all duration-500 z-10"></div>
                                <div className="absolute inset-0 bg-linear-to-t from-[#0f141a] to-transparent opacity-60"></div>
                            </div>
                            <p className="text-muted mb-8 text-lg grow">Cyber career development designed specifically for the public sector</p>
                            <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-4 px-8 rounded opacity-90 hover:opacity-100 transition-all duration-300 w-fit hover:scale-102  active:scale-100">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="testimonials" className={`relative overflow-hidden bg-primary transition-all duration-1000 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-surface-hover transition-colors">
                        {/* Top Gradient Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-500 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10">
                            <p className="text-muted font-bold text-sm tracking-widest uppercase mb-6">Latest Product News</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Hack The Box launches the world&apos;s first AI Range
                            </h2>
                            <p className="text-muted text-lg mb-8 leading-relaxed max-w-4xl">
                                The world’s first controlled AI cyber range built to test and benchmark the safety, limits and capabilities of autonomous AI security agents. HTB AI Range replicates live, high-stakes cyber battlegrounds, tailored for enterprise readiness, where AI agents and human operators are evaluated side-by-side. Every model and every human is tested, refined and retested until mastery is measurable.
                            </p>
                            <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded transition-all">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="leader" className={`relative overflow-hidden pt-5 bg-primary transition-all duration-1000 ${visibleSections.has('leader') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-surface-hover transition-colors">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Leader in The Forrester Wave™: Cybersecurity Skills And Training Platforms
                                </h2>
                                <p className="text-muted text-lg mb-8 leading-relaxed">
                                    Hack The Box has been recognized as a leader in The Forrester Wave™: Cybersecurity Skills And Training Platforms, Q4 2023.
                                </p>
                                <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded transition-all">
                                    Discover why we&apos;re named a leader
                                </button>
                            </div>
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="rounded-lg overflow-hidden bg-white p-2 max-w-md w-full shadow-2xl">
                                    {/* Placeholder for Chart */}
                                    <div className="aspect-4/3 relative bg-white">
                                        <div className="absolute inset-x-0 top-0 h-12 border-b flex items-center px-4">
                                            <div className="text-[10px] text-gray-500 font-bold uppercase">The Forrester Wave™</div>
                                        </div>
                                        <div className="absolute inset-0 pt-12 p-4 flex items-center justify-center">
                                            {/* Simplified Chart Graphic CSS */}
                                            <div className="w-full h-full relative border-l border-b border-gray-200">
                                                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent-500 rounded-full shadow-lg z-20"></div>
                                                <div className="absolute top-1/4 right-1/4 -mt-6 text-xs font-bold text-gray-800 text-center w-24 -ml-10">Hack The Box</div>

                                                {/* Wave Zones */}
                                                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-blue-50/50 rounded-bl-[100px]"></div>
                                                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/50 rounded-bl-[80px]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="box" className="relative overflow-hidden pt-5 pb-20 bg-primary">
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 1: Acquisition */}
                        <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12 flex flex-col justify-between group hover:border-surface-hover transition-colors relative overflow-hidden min-h-100">
                            <div className="relative z-10 flex flex-col h-full max-w-lg">
                                <h3 className="text-3xl md:text-3xl font-bold text-white mb-8 leading-tight">
                                    Hack The Box Acquires LetsDefend: Shaping the future of cyber readiness
                                </h3>
                                <div className="mt-auto pt-8">
                                    <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded transition-all duration-300 hover:scale-102 active:scale-100">
                                        Learn more
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Background Graphic - Left Card */}
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden md:block">
                                {/* Blue gradient blob */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[60px] rounded-full"></div>
                                {/* Graphic Composition */}
                                <div className="absolute top-1/2 right-12 -translate-y-1/2 flex flex-col items-center gap-6 transform rotate-[-5deg]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-accent-500 rounded flex items-center justify-center text-black font-bold text-xs">H</div>
                                        <span className="text-white font-bold tracking-wider text-sm">HACKTHEBOX</span>
                                    </div>
                                    <div className="text-muted text-xl">+</div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs">L</div>
                                        <span className="text-white font-bold tracking-wider text-sm">LetsDefend</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Google Partnership */}
                        <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12 flex flex-col justify-between group hover:border-accent-500/50 transition-all duration-500 relative overflow-hidden min-h-100 cursor-pointer">
                            <div className="relative z-10 flex flex-col h-full max-w-lg">
                                <h3 className="text-3xl md:text-3xl font-bold text-white mb-8 leading-tight">
                                    Hack The Box and Google partner to lead the future of AI security education
                                </h3>
                                <div className="mt-auto pt-8">
                                    <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded transition-all duration-300 hover:scale-102 active:scale-100">
                                        Learn more
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Background Graphic - Right Card */}
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full pointer-events-none hidden md:block">
                                {/* Red gradient blob */}
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-red-500/10 blur-[60px] rounded-full"></div>
                                {/* Graphic Composition */}
                                <div className="absolute top-1/2 right-8 -translate-y-1/2">
                                    <div className="relative w-48 h-32 bg-[#1a232e] border border-red-500/20 rounded-lg shadow-2xl transform rotate-6 flex flex-col items-center justify-center overflow-hidden">
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]"></div>
                                        <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/50 mb-2">
                                            <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                                        </div>
                                        <div className="text-[10px] text-muted text-center font-mono">AI SECURITY</div>
                                    </div>
                                    <div className="absolute -bottom-8 right-4 text-[10px] text-muted/60 bg-black/50 px-2 py-1 rounded backdrop-blur">In collaboration with Google</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team" className={`relative overflow-hidden pt-5 bg-primary transition-all duration-1000 ${visibleSections.has('team') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="w-full p-5 mb-12">
                        <div className="text-center max-w-4xl mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-white leading-tight">
                                Solutions for all cybersecurity domains
                            </h2>
                            <div className="htb-rte mb-8 mx-auto" style={{ maxWidth: 'min(100%, 50rem)' }}>
                                <p className="text-muted">
                                    Build a high-performing SOC with hands-on simulations, continuous measurement, and content mapped to MITRE &amp; NIST.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Tabs */}
                    <div className="flex flex-col md:flex-row items-stretch md:items-center md:justify-between gap-3 mb-6">
                        <button
                            onClick={() => setActiveTeamTab(0)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-36 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTeamTab === 0
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Blue Teams
                        </button>
                        <button
                            onClick={() => setActiveTeamTab(1)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-36 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTeamTab === 1
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Red Teams
                        </button>
                        <button
                            onClick={() => setActiveTeamTab(2)}
                            className={`w-full md:w-auto text-center px-4 sm:px-6 md:px-36 py-3 border rounded-md text-lg font-medium transition-all duration-300 ${activeTeamTab === 2
                                ? 'border-accent-500 text-white bg-surface-dark shadow-[0_0_15px_rgba(159,239,0,0.1)] scale-105'
                                : 'border-surface text-muted bg-surface-dark hover:text-white hover:border-accent-500/50'
                                }`}
                        >
                            Purple Teams
                        </button>
                    </div>

                    {/* Content Card */}
                    <div className="bg-surface-dark border border-surface rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left Text Content */}
                            <div className="flex flex-col gap-2">
                                <div className="space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                                        Make resilience measurable and strategic
                                    </h2>
                                    <p className="text-muted text-lg leading-relaxed">
                                        Stay ahead of risk with a continuously updated, real-world content library and exercises – ensuring your team is always prepared for what&apos;s next and actively reducing potential loss through strategic cyber resilience.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="p-3 rounded-lg">
                                        <p className="text-muted text-sm leading-relaxed">
                                            ✅ Purpose built assessments that lets cross-functional teams train together and measure outcomes.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-lg">
                                        <p className="text-muted text-sm leading-relaxed">
                                            ✅ Live dashboards translate exercise scores into MITRE-mapped heatmaps, readiness indices, and skill progression overviews.
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-lg">
                                        <p className="text-muted text-sm leading-relaxed">
                                            ✅ The most comprehensive and challenging content library in terms of knowledge domains and technologies covered.
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold px-8 py-4 rounded transition-all flex items-center justify-center w-full sm:w-auto">
                                        Live demo
                                    </button>
                                </div>
                            </div>

                            {/* Right Illustration */}
                            <div className="relative flex items-center justify-center">
                                {/* Green Bottom Glow Effect */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-500/20 blur-[80px] rounded-full pointer-events-none"></div>

                                <div className="relative z-10 w-full max-w-sm aspect-3/4 flex items-center justify-center">
                                    {/* Placeholder for Character Illustration */}
                                    <div className="relative w-full h-full flex items-end justify-center">
                                        {/* Floating Cards Background Effect (CSS approximated) */}
                                        <div className="absolute top-10 right-0 w-40 h-28 bg-[#1e232b]/80 border border-white/5 rounded backdrop-blur-sm -rotate-6 transform translate-x-4"></div>
                                        <div className="absolute top-32 left-0 w-32 h-24 bg-[#1e232b]/80 border border-white/5 rounded backdrop-blur-sm rotate-12 transform -translate-x-8"></div>

                                        {/* Character Silhouette Placeholder */}
                                        <div className="w-64 h-80 bg-linear-to-b from-[#2a303b] to-[#11141a] rounded-t-[3rem] border-t border-x border-white/5 flex items-center justify-center relative shadow-2xl">
                                            {/* Mask Overlay */}
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#11141a] via-[#11141a]/80 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section id="sponsors" className={`relative overflow-hidden py-20 bg-primary transition-all duration-1000 ${visibleSections.has('sponsors') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="bg-surface-dark border border-surface rounded-2xl p-12 md:p-24 text-center relative overflow-hidden group hover:border-surface-hover transition-colors">

                        {/* Background Shapes (CSS Recreated Pattern) */}
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                            {/* Concentric Circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border border-white/5 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 border border-white/5 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-white/5 rounded-full"></div>

                            {/* Floating Elements (Triangles, Circles, Squares) */}
                            {/* Top Left Triangle */}
                            <div className="absolute top-10 -left-5 md:left-20 w-0 h-0 border-l-30 border-l-transparent border-b-50 border-b-accent-500 border-r-30 border-r-transparent rotate-[-15deg] opacity-80 blur-[1px]"></div>

                            {/* Bottom Left Circle */}
                            <div className="absolute bottom-10 left-10 md:left-32 w-20 h-20 bg-accent-500 rounded-full blur-sm opacity-90"></div>

                            {/* Small Top Circle */}
                            <div className="absolute top-16 left-1/3 w-6 h-6 bg-accent-500 rounded-full blur-[2px] opacity-80"></div>

                            {/* Right Side Shapes */}
                            <div className="absolute top-10 right-20 w-8 h-8 bg-accent-500 rotate-45 blur-[1px]"></div>
                            <div className="absolute -right-5 md:right-10 top-1/2 w-16 h-16 bg-accent-500 rotate-12 opacity-90"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-5xl md:text-7xl font-bold text-accent-500 mb-6 font-mono tracking-tighter">
                                4.3m+ learners
                            </h2>
                            <p className="text-muted text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                                Chat about labs, share resources and jobs.<br className="hidden md:block" />
                                Connect with 200k+ hackers from all over the world.
                            </p>

                            <button className="bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-4 px-8 rounded-lg transition-all flex items-center gap-3 mb-12 shadow-[0_0_20px_rgba(88,101,242,0.3)]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.36981C18.798 3.66981 17.157 3.15981 15.438 3.02981C15.438 3.02981 15.176 3.50981 14.996 3.93981C13.064 3.65981 11.143 3.65981 9.23199 3.93981C9.05199 3.50981 8.78999 3.02981 8.78999 3.02981C7.06899 3.15981 5.42999 3.66981 3.91199 4.36981C0.849993 8.94981 0.0159932 13.4198 0.428993 17.8498C2.26499 19.1998 4.03299 20.0198 5.76599 20.5498C6.18599 19.9798 6.56699 19.3798 6.89799 18.7398C6.26599 18.4998 5.65999 18.2198 5.08099 17.8998C5.23599 17.7898 5.38599 17.6698 5.53199 17.5498C9.56399 19.3998 14.674 19.3998 18.665 17.5498C18.814 17.6698 18.964 17.7898 19.117 17.8998C18.536 18.2198 17.929 18.4998 17.295 18.7398C17.632 19.3798 18.007 19.9798 18.423 20.5498C20.16 20.0198 21.93 19.1998 23.77 17.8498C24.27 12.8398 22.992 8.44981 20.317 4.36981ZM8.02099 15.3298C6.84199 15.3298 5.86999 14.2498 5.86999 12.9198C5.86999 11.5898 6.82099 10.5098 8.02099 10.5098C9.23199 10.5098 10.194 11.5898 10.174 12.9198C10.174 14.2498 9.23199 15.3298 8.02099 15.3298ZM16.208 15.3298C15.029 15.3298 14.057 14.2498 14.057 12.9198C14.057 11.5898 15.008 10.5098 16.208 10.5098C17.419 10.5098 18.381 11.5898 18.361 12.9198C18.361 14.2498 17.419 15.3298 16.208 15.3298Z" fill="white" />
                                </svg>
                                Join Discord
                            </button>

                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <span className="text-white text-xl font-bold">G2</span>
                                <div className="flex flex-col items-start leading-none gap-1">
                                    <div className="flex items-center gap-1 text-white">
                                        <span className="font-bold">4.8</span>
                                        <span className="text-accent-500">★</span>
                                    </div>
                                    <span className="text-muted text-xs">Rating by G2 users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className={`relative overflow-hidden bg-primary pb-20 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-7xl mx-auto p-5 relative z-30 bg-surface border border-surface rounded-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left Column: Form */}
                        <div className="relative">
                            <div className="mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get a full demo with our team</h2>
                                <p className="text-muted">Fill the form to schedule a live product demo and Q&A about our cyber readiness solutions.</p>
                            </div>

                            <form className="space-y-4">
                                <input type="email" placeholder="Business email*" className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-white placeholder-gray-500 focus:border-accent-500 focus:outline-none transition-colors" />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="First name*" className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-white placeholder-gray-500 focus:border-accent-500 focus:outline-none transition-colors" />
                                    <input type="text" placeholder="Last name*" className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-white placeholder-gray-500 focus:border-accent-500 focus:outline-none transition-colors" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Company*" className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-white placeholder-gray-500 focus:border-accent-500 focus:outline-none transition-colors" />
                                    <div className="relative">
                                        <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                            <option>Security / IT team size*</option>
                                            <option>1-10</option>
                                            <option>11-50</option>
                                            <option>50+</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                        <option>Department*</option>
                                        <option>Engineering</option>
                                        <option>IT</option>
                                        <option>Security</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                        <option>Job Level*</option>
                                        <option>C-Level</option>
                                        <option>Manager</option>
                                        <option>Individual Contributor</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                        <option>What best describes your Organization?*</option>
                                        <option>Enterprise</option>
                                        <option>Government</option>
                                        <option>Education</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                        <option>Country*</option>
                                        <option>United States</option>
                                        <option>United Kingdom</option>
                                        <option>Germany</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <div className="relative">
                                    <select className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-gray-500 focus:border-accent-500 focus:outline-none appearance-none cursor-pointer">
                                        <option>I&apos;m looking for help with...*</option>
                                        <option>Team Training</option>
                                        <option>Recruiting</option>
                                        <option>Consulting</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                <textarea placeholder="Tell us more about your project, needs, and timeline." rows={4} className="w-full bg-[#161b22] border border-surface rounded-md p-3 text-white placeholder-gray-500 focus:border-accent-500 focus:outline-none resize-none transition-colors"></textarea>

                                <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded-md transition-all mt-4 w-fit">
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Info */}
                        <div className="pt-0 lg:pt-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                The #1 platform to build attack-ready teams and organizations
                            </h2>
                            <p className="text-muted text-lg leading-relaxed mb-10">
                                Maximum curriculum management flexibility, enhanced skills reporting, and engaging gamification features. Book a demo to get the business results.
                            </p>

                            <h4 className="text-white font-bold mb-6 text-lg">Your plan includes:</h4>
                            <ul className="space-y-4 mb-20">
                                {[
                                    "Unmatched content library",
                                    "Workforce development plans",
                                    "Centralized user management",
                                    "Advanced analytics & reporting",
                                    "Source, hire, and retain talent"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#9FEF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-90">
                                <span className="text-2xl font-bold text-white tracking-wide">Deloitte.</span>
                                <span className="text-2xl font-bold text-white tracking-widest">TOYOTA</span>
                                <span className="text-2xl font-bold text-cyan-300 tracking-wide">SIEMENS</span>
                                <span className="text-2xl font-bold text-white tracking-tighter">Google</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="footer" className="relative overflow-hidden bg-primary">
                <div className="max-w-7xl mx-auto px-6 relative z-30 border border-surface rounded-2xl p-12 bg-surface">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2 flex flex-col items-start">
                            <div className="flex items-center gap-2 mb-6">
                                {/* Cube Logo Icon */}
                                <div className="w-8 h-8 bg-accent-500 rounded relative flex items-center justify-center">
                                    <div className="w-4 h-4 border-2 border-black rotate-45"></div>
                                </div>
                                <span className="font-bold text-xl text-white tracking-widest">HACKTHEBOX</span>
                            </div>

                            <p className="text-white font-bold mb-8 max-w-xs leading-relaxed">
                                The #1 platform to build attack-ready teams and organizations.
                            </p>

                            <button className="bg-accent-500 hover:bg-accent-hover text-black font-bold py-3 px-8 rounded w-full sm:w-auto mb-12 transition-all">
                                Get a demo
                            </button>

                            <div className="space-y-4">
                                {/* Ratings */}
                                <div className="flex gap-6 text-white text-sm font-bold items-center">
                                    <span className="flex items-center gap-2 filter grayscale opacity-80"><span className="bg-orange-500 text-white p-0.5 rounded-sm text-[10px] w-5 h-5 flex items-center justify-center">G2</span> 4.8</span>
                                    <span className="flex items-center gap-1 filter grayscale opacity-80 box-decoration-slice">Capterra ★ 4.8</span>
                                </div>
                            </div>
                        </div>

                        {/* Links Columns */}
                        {/* Products */}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white font-bold text-lg">Products</h3>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-sm">Teams</h4>
                                <ul className="space-y-3 text-muted text-sm">
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Courses & Certifications</a></li>
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Cyber Ranges</a></li>
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Enterprise Attack Simulations</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Solutions */}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white font-bold text-lg">Solutions</h3>

                            <div className="flex flex-col gap-4">
                                <h4 className="text-white font-bold text-sm">Job Roles</h4>
                                <ul className="space-y-3 text-muted text-sm">
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Red Teams</a></li>
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Blue Teams</a></li>
                                    <li><a href="#" className="hover:text-accent-500 transition-colors">Purple Teams</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Resources & Programs */}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white font-bold text-lg">Resources</h3>

                            <ul className="space-y-3 text-muted text-sm">
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Industry Reports</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Webinars</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">AMAs</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Learn with HTB</a></li>
                            </ul>
                        </div>

                        {/* Company & Contact */}
                        <div className="flex flex-col gap-8">
                            <h3 className="text-white font-bold text-lg">Company</h3>

                            <ul className="space-y-3 text-muted text-sm">
                                <li><a href="#" className="hover:text-accent-500 transition-colors">About us</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Newsroom</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Brand Guidelines</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Certificate Validation</a></li>
                                <li><a href="#" className="hover:text-accent-500 transition-colors">Trust Center</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="copyright" className="relative overflow-hidden py-8">
                <div className="max-w-7xl mx-auto px-6 relative z-30">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
                        {/* Socials */}
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {[
                                <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>,
                                <rect key="ig" x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>,
                                <path key="x" d="M4 4l11.733 16h4.267l-11.733 -16z"></path>,
                                <path key="in" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>,
                                <path key="yt" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>,
                                <path key="git" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            ].map((icon, i) => (
                                <a key={i} href="#" className="text-muted hover:text-white transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        {icon}
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* Links and Copyright */}
                        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted">
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">User Agreement</a>
                            </div>
                            <span>© {new Date().getFullYear()} Yargai Tech</span>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
}
