'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const categories = ['All', 'Bridal Sets', 'Earrings', 'Bangles', 'Necklaces', 'Occasion'];

const products = [
    { name: 'Grand Bridal Set', category: 'Bridal Sets', note: 'Complete bridal jewelry including necklace, earrings & maang tikka', image: '/images/jewelry-grand-set.png' },
    { name: 'Pearl Chandelier Earrings', category: 'Earrings', note: 'Elegant drop earrings with pearl accents', image: '/images/jewelry-pearl-earrings.png' },
    { name: 'Kundan Bangle Set', category: 'Bangles', note: 'Intricate kundan work bangles — set of 6', image: '/images/jewelry-kundan-bangles.png' },
    { name: 'Layered Gold Necklace', category: 'Necklaces', note: 'Multi-strand layered statement necklace', image: '/images/jewelry-layered-necklace.png' },
    { name: 'Reception Jewelry Set', category: 'Bridal Sets', note: 'Glamorous set for reception evening wear', image: '/images/jewelry-reception-set.png' },
    { name: 'Floral Drop Earrings', category: 'Earrings', note: 'Delicate flower petal design earrings', image: '/images/jewelry-floral-earrings.png' },
    { name: 'Celebration Bangle Set', category: 'Bangles', note: 'Gold-tone bangles for festive occasions', image: '/images/jewelry-celebration-bangles.png' },
    { name: 'Choker Necklace', category: 'Necklaces', note: 'Classic fitted choker with stone detailing', image: '/images/jewelry-choker-necklace.png' },
    { name: 'Engagement Jewelry Set', category: 'Occasion', note: 'Elegant set for engagement ceremonies', image: '/images/jewelry-engagement-set.png' },
    { name: 'Hoop Earrings with Stones', category: 'Earrings', note: 'Premium stone-set hoop earrings', image: '/images/jewelry-hoop-earrings.png' },
    { name: 'Temple Jewelry Set', category: 'Bridal Sets', note: 'Traditional temple-design bridal set', image: '/images/jewelry-temple-set.png' },
    { name: 'Anniversary Gift Set', category: 'Occasion', note: 'Curated jewelry set perfect for gifting', image: '/images/jewelry-anniversary-set.png' },
];



export default function JewelryPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '65vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, #EFE8DE 50%, var(--champagne-gold-light, #E8D5A8) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '10%', right: '8%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem' }}>HAVAKU Jewelry</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            Elegance for<br />Every Occasion
                        </h1>
                        <div className="gold-divider" />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', maxWidth: '480px', margin: '1.5rem auto 0.75rem', lineHeight: 1.85 }}>
                            All jewelry is rolled gold — premium quality, elegantly crafted, made to last.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Collection</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Jewelry Collection
                            </h2>
                            <div className="gold-divider" />
                        </div>

                        {/* Category tabs */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
                            {categories.map((cat) => (
                                <span key={cat} onClick={() => setActiveCategory(cat)} className="filter-tab" style={{
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', fontWeight: 600,
                                    letterSpacing: '0.1em', textTransform: 'uppercase',
                                    padding: '0.5rem 1.25rem', border: '1.5px solid',
                                    borderRadius: '2px', cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    backgroundColor: activeCategory === cat ? 'rgba(201,169,110,0.1)' : 'transparent',
                                    color: activeCategory === cat ? 'var(--champagne-gold)' : 'var(--taupe)',
                                    borderColor: activeCategory === cat ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'
                                }}>
                                    {cat}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {filteredProducts.map((product) => (
                                <div key={product.name} className="havaku-card" style={{ overflow: 'hidden' }}>
                                    {/* Fixed image container */}
                                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#FAF7F2' }}>
                                        <ImagePlaceholder
                                            width={220} height={220}
                                            label={product.name}
                                            src={product.image}
                                            alt={product.name}
                                        />
                                    </div>
                                    <div style={{ padding: '1.25rem' }}>
                                        <div style={{ marginBottom: '0.35rem' }}>
                                            <span style={{
                                                fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                                color: 'var(--champagne-gold)',
                                            }}>{product.category}</span>
                                        </div>
                                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.4rem' }}>
                                            {product.name}
                                        </h3>
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', lineHeight: 1.7, marginBottom: '1rem' }}>
                                            {product.note}
                                        </p>
                                        <a
                                            href="https://wa.me/917386797648"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', fontWeight: 600,
                                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                                color: 'var(--champagne-gold)', textDecoration: 'none',
                                                border: '1.5px solid var(--champagne-gold)',
                                                padding: '0.45rem 1rem', borderRadius: '2px',
                                                display: 'inline-block', transition: 'all 0.25s ease',
                                            }}
                                        >
                                            Inquire
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Info Banner */}
                <section style={{ padding: '4rem 2rem', background: 'var(--soft-black)', textAlign: 'center' }}>
                    <div style={{ maxWidth: '650px', margin: '0 auto' }}>
                        <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '0 auto 1.5rem' }} />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--warm-white)', marginBottom: '0.75rem', lineHeight: 1.8 }}>
                            All HAVAKU jewelry is crafted in rolled gold — premium quality, tarnish-resistant, and elegantly finished.
                        </p>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'rgba(250,247,242,0.55)', marginBottom: '2rem' }}>
                            Inquire via WhatsApp for custom sizing, bridal sets, or bulk orders.
                        </p>
                        <a
                            href="https://wa.me/917386797648"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Inquire via WhatsApp
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
