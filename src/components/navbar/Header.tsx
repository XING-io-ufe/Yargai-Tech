'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { label: 'Why HTB', href: '#' },
        { label: 'Platform', href: '#' },
        { label: 'Plans', href: '#' },
        { label: 'Resources', href: '#' },
        { label: 'Company', href: '#' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-transparent dark:border-white/5 glass-header">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between text-foreground">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-8 h-8 fill-accent-500" viewBox="0 0 40 40">
                            <path d="M20 0L2.68 10v20L20 40l17.32-10V10L20 0zm13.32 27.89L20 35.58l-13.32-7.69V12.11L20 4.42l13.32 7.69v15.78zM20 10.83L10.5 16.32v7.36L20 29.17l9.5-5.49v-7.36L20 10.83z"></path>
                        </svg>
                    </div>
                    <span className="text-xl font-extrabold tracking-tighter uppercase text-foreground">
                        Hack
                        <span className="text-muted font-medium">the</span>
                        box
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            className="text-sm font-medium transition-colors text-muted hover-text-accent-500"
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA Buttons */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link className="text-sm font-medium transition-colors text-muted hover-text-accent-500" href="#">Business</Link>
                    <Link className="text-sm font-medium transition-colors text-muted hover-text-accent-500" href="#">Sign in</Link>
                    <button className="bg-accent-500 hover-bg-accent-hover text-black font-bold px-6 py-2.5 transition-all text-sm uppercase tracking-wide">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X size={20} className="text-foreground" />
                    ) : (
                        <Menu size={20} className="text-foreground" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-surface border-t border-surface-hover">
                    <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                className="text-sm font-medium transition-colors text-muted hover-text-accent-500 py-2"
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="border-t border-surface-hover my-2"></div>
                        <Link className="text-sm font-medium transition-colors text-muted hover-text-accent-500 py-2" href="#">Business</Link>
                        <Link className="text-sm font-medium transition-colors text-muted hover-text-accent-500 py-2" href="#">Sign in</Link>
                        <button className="bg-accent-500 hover-bg-accent-hover text-background font-bold px-4 py-2.5 transition-all text-sm uppercase tracking-wide w-full rounded-md">
                            Get Started
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}