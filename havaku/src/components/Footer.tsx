'use client';

import Link from 'next/link';
import { Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ background: '#1A1A1A', color: 'var(--ivory)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        marginBottom: '3rem',
                        paddingBottom: '3rem',
                        borderBottom: '1px solid rgba(201,169,110,0.2)',
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                fontFamily: 'Cormorant Garamond, serif',
                                fontSize: '2rem',
                                fontWeight: 600,
                                color: 'var(--champagne-gold)',
                                letterSpacing: '0.12em',
                                marginBottom: '0.75rem',
                            }}
                        >
                            HAVAKU
                        </div>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'rgba(250,247,242,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                            Where Beauty Meets Celebration
                        </p>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: 38, height: 38, borderRadius: '50%',
                                    border: '1.5px solid rgba(201,169,110,0.4)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--champagne-gold)',
                                    transition: 'all 0.25s ease',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--champagne-gold)';
                                    (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--champagne-gold)';
                                }}
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href="https://wa.me/919999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: 38, height: 38, borderRadius: '50%',
                                    border: '1.5px solid rgba(201,169,110,0.4)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--champagne-gold)',
                                    transition: 'all 0.25s ease',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--champagne-gold)';
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.25rem' }}>Services</h4>
                        {['Beauty Studio', 'Bridal Services', 'Bridal Makeup', 'Hair Styling', 'Saree Draping'].map((item) => (
                            <div key={item} style={{ marginBottom: '0.6rem' }}>
                                <Link href="/beauty-studio" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{item}</Link>
                            </div>
                        ))}
                    </div>

                    {/* Collections */}
                    <div>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.25rem' }}>Collections</h4>
                        {['Bridal Jewelry', 'Earrings', 'Bangles', 'Necklaces', 'Handmade Soaps', 'Skincare Kits'].map((item) => (
                            <div key={item} style={{ marginBottom: '0.6rem' }}>
                                <Link href="/jewelry" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{item}</Link>
                            </div>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.25rem' }}>Quick Links</h4>
                        {[['About Us', '/about'], ['Gallery', '/gallery'], ['Bridal Services', '/bridal'], ['Contact', '/contact'], ['Book Appointment', '/contact']].map(([label, href]) => (
                            <div key={label} style={{ marginBottom: '0.6rem' }}>
                                <Link href={href} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--champagne-gold)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(250,247,242,0.65)')}
                                >{label}</Link>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--champagne-gold)', marginBottom: '1.25rem' }}>Contact</h4>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.84rem', color: 'rgba(250,247,242,0.65)', lineHeight: 1.85 }}>
                            HAVAKU Beauty Studio<br />
                            Your City, India<br />
                            <a href="tel:+919999999999" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>+91 99999 99999</a><br />
                            <a href="mailto:hello@havaku.com" style={{ color: 'var(--champagne-gold)', textDecoration: 'none' }}>hello@havaku.com</a>
                        </p>
                        <div style={{ marginTop: '1rem' }}>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.5)' }}>
                                Mon – Sat: 9:00 AM – 8:00 PM<br />
                                Sunday: By Appointment
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.4)' }}>
                        © 2025 HAVAKU. All rights reserved.
                    </p>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,247,242,0.4)' }}>
                        Crafted with love for every woman
                    </p>
                </div>
            </div>
        </footer>
    );
}
