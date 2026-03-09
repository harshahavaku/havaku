'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Bridal', href: '/bridal' },
    { label: 'Beauty Studio', href: '/beauty-studio' },
    { label: 'Jewelry', href: '/jewelry' },
    { label: 'Handmade', href: '/handmade' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
                style={{ transition: 'all 0.4s ease' }}
            >
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
                        {/* Logo */}
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <span
                                style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.8rem',
                                    fontWeight: 600,
                                    color: 'var(--champagne-gold)',
                                    letterSpacing: '0.12em',
                                }}
                            >
                                HAVAKU
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    style={{
                                        fontFamily: 'Manrope, sans-serif',
                                        fontSize: '0.78rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: scrolled ? 'var(--soft-black)' : 'var(--soft-black)',
                                        textDecoration: 'none',
                                        transition: 'color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--soft-black)')}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" className="btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.75rem' }}>
                                Book Now
                            </Link>
                        </nav>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="mobile-menu-btn"
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'var(--soft-black)',
                                display: 'none',
                            }}
                            aria-label="Open menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 100,
                        display: 'flex',
                    }}
                >
                    {/* Overlay */}
                    <div
                        style={{ flex: 1, background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(2px)' }}
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Drawer panel */}
                    <div
                        style={{
                            width: '280px',
                            background: 'var(--warm-white)',
                            height: '100vh',
                            padding: '2rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            animation: 'slideInRight 0.3s ease',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <span
                                style={{
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'var(--champagne-gold)',
                                    letterSpacing: '0.12em',
                                }}
                            >
                                HAVAKU
                            </span>
                            <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)' }}>
                                <X size={22} />
                            </button>
                        </div>

                        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        fontFamily: 'Manrope, sans-serif',
                                        fontSize: '0.85rem',
                                        fontWeight: 500,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: 'var(--soft-black)',
                                        textDecoration: 'none',
                                        padding: '0.85rem 0',
                                        borderBottom: '1px solid rgba(201,169,110,0.15)',
                                        transition: 'color 0.2s ease',
                                    }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="btn-primary"
                                style={{ textAlign: 'center', marginTop: '1.5rem' }}
                            >
                                Book Now
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </>
    );
}
