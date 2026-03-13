'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import { handmadeProducts, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

const packagingFeatures = [
    { title: 'Ivory Gift Box', desc: 'Premium matte-finish ivory box with the HAVAKU logo embossed in gold foil.' },
    { title: 'Gold Brand Sticker', desc: 'Signature gold sticker seal — a mark of premium craftsmanship.' },
    { title: 'Blush Tissue Wrap', desc: 'Soft blush tissue paper wrapping each product tenderly inside.' },
    { title: 'Satin Ribbon', desc: 'Tied elegantly with a champagne satin ribbon for the perfect finish.' },
    { title: 'Handwritten Thank-You Card', desc: 'Every order includes a personalized thank-you card from HAVAKU.' },
];

function ProductCard({ product }: { product: Product }) {
    const { addToCart } = useCart();
    const { toggle, isWishlisted } = useWishlist();
    const [selectedVariant, setSelectedVariant] = useState<string | undefined>(product.variants?.[0]);
    const [added, setAdded] = useState(false);

    function handleAddToCart() {
        addToCart(product, selectedVariant);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    }

    return (
        <div className="havaku-card" style={{ overflow: 'hidden' }}>
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden', background: '#FAF7F2' }}>
                <ImagePlaceholder
                    width={400} height={300}
                    label={product.name}
                    src={product.image}
                    alt={product.name}
                />
                {/* Wishlist */}
                <button
                    onClick={() => toggle(product)}
                    title={isWishlisted(product.id) ? 'Remove from wishlist' : 'Save to wishlist'}
                    style={{
                        position: 'absolute', top: 10, right: 10,
                        background: 'rgba(255,253,249,0.9)', border: 'none', borderRadius: '50%',
                        width: 34, height: 34, cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted(product.id) ? 'var(--rose-gold)' : 'none'} stroke="var(--rose-gold)" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>
            <div style={{ padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                    {product.name}
                </h3>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                    {product.description}
                </p>

                {/* Variant selector */}
                {product.variants && product.variants.length > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)', marginBottom: '0.5rem' }}>
                            Variant
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {product.variants.map((v) => (
                                <button
                                    key={v}
                                    onClick={() => setSelectedVariant(v)}
                                    style={{
                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', fontWeight: 500,
                                        padding: '0.3rem 0.75rem', borderRadius: '20px', cursor: 'pointer',
                                        border: '1.5px solid',
                                        borderColor: selectedVariant === v ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)',
                                        background: selectedVariant === v ? 'rgba(201,169,110,0.12)' : 'transparent',
                                        color: selectedVariant === v ? 'var(--champagne-gold)' : 'var(--taupe)',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    {v}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                    ₹{product.price.toLocaleString('en-IN')}
                </p>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={handleAddToCart}
                        className="btn-primary"
                        style={{
                            flex: 1, fontSize: '0.78rem', padding: '0.65rem 1rem',
                            background: added ? '#25a244' : undefined,
                            border: added ? '1.5px solid #25a244' : undefined,
                            transition: 'all 0.25s ease',
                        }}
                    >
                        {added ? '✓ Added to Cart' : 'Add to Cart'}
                    </button>
                    <a
                        href={`https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}${selectedVariant ? `%20(${encodeURIComponent(selectedVariant)})` : ''}%20(₹${product.price}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order via WhatsApp"
                        style={{
                            width: 40, height: 40, borderRadius: '2px', border: '1.5px solid rgba(37,211,102,0.5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#25D366', textDecoration: 'none', flexShrink: 0,
                        }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function HandmadePage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Hero */}
                <section style={{
                    minHeight: '65vh', paddingTop: '72px',
                    background: 'linear-gradient(135deg, var(--blush-pink) 0%, var(--ivory) 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '10%', left: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ padding: '4rem 2rem', position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '1rem', color: 'var(--rose-gold)' }}>Handcrafted With Love</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
                            Beauty, Crafted<br />with Care
                        </h1>
                        <div style={{ width: 50, height: 1.5, background: 'var(--rose-gold)', margin: '0 auto 1.5rem' }} />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.85 }}>
                            Thoughtfully crafted beauty essentials made from pure, natural ingredients — by hand, with love.
                        </p>
                    </div>
                </section>

                {/* Products Grid */}
                <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Our Products</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                                Handmade Beauty Essentials
                            </h2>
                            <div className="gold-divider" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem' }}>
                            {handmadeProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Packaging Section */}
                <section style={{ padding: '6rem 2rem', background: 'var(--soft-black)' }}>
                    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <div className="section-label" style={{ marginBottom: '0.75rem', color: 'rgba(201,169,110,0.7)' }}>Unboxing Experience</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--warm-white)' }}>
                                Premium Packaging
                            </h2>
                            <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', margin: '1rem auto' }} />
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,247,242,0.6)', maxWidth: '500px', margin: '0 auto' }}>
                                Every HAVAKU order is packaged with the same care that goes into crafting our products.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {packagingFeatures.map((feature) => (
                                <div key={feature.title} style={{
                                    background: 'rgba(255,253,249,0.05)', border: '1px solid rgba(201,169,110,0.2)',
                                    borderRadius: '4px', padding: '2rem 1.5rem', textAlign: 'center',
                                }}>
                                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', margin: '0 auto 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--champagne-gold)', fontSize: '1rem' }}>✦</span>
                                    </div>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--warm-white)', marginBottom: '0.5rem' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'rgba(250,247,242,0.55)', lineHeight: 1.75 }}>
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #A8853E 100%)', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                        Shop HAVAKU Handmade
                    </h2>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(26,26,26,0.7)', marginBottom: '2rem' }}>
                        Order via WhatsApp for fastest response and custom requests.
                    </p>
                    <a href="https://wa.me/917386797648" target="_blank" rel="noopener noreferrer"
                        style={{ background: 'var(--soft-black)', color: 'var(--warm-white)', fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', borderRadius: '2px', textDecoration: 'none', display: 'inline-block' }}>
                        Order via WhatsApp
                    </a>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
