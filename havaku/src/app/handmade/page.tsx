import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const products = [
    { name: 'Handmade Luxury Soap', desc: 'Gentle, skin-loving soaps crafted from natural botanical ingredients. Free from harsh chemicals.', variants: 'Rose · Lavender · Turmeric · Charcoal · Sandalwood' },
    { name: 'Glow Face Pack', desc: 'Brightening and nourishing face pack blends for radiant, even-toned skin. Ready to mix and apply.', variants: 'Multani · Turmeric · Rose Clay · Neem & Honey' },
    { name: 'Herbal Hair Oil', desc: 'Strengthen, nourish and condition hair with our time-tested herbal oil blend. For all hair types.', variants: 'Bhringraj · Coconut & Hibiscus · Amla & Brahmi' },
    { name: 'Skincare Kit', desc: 'Curated skincare essentials in a beautiful kit — cleanser, face pack, moisturizer, and more.', variants: 'Glow Kit · Hydration Kit · Anti-aging Kit · Bridal Prep Kit' },
    { name: 'Luxury Gift Hamper', desc: 'Beautifully packaged gift hampers for birthdays, weddings, and festive occasions.', variants: 'Mini · Classic · Premium · Bridal' },
    { name: 'Bridal Beauty Kit', desc: 'Complete pre-bridal skincare kit designed for glowing skin from mehndi to reception.', variants: '15-Day Kit · 30-Day Kit' },
];

const packagingFeatures = [
    { title: 'Ivory Gift Box', desc: 'Premium matte-finish ivory box with the HAVAKU logo embossed in gold foil.' },
    { title: 'Gold Brand Sticker', desc: 'Signature gold sticker seal — a mark of premium craftsmanship.' },
    { title: 'Blush Tissue Wrap', desc: 'Soft blush tissue paper wrapping each product tenderly inside.' },
    { title: 'Satin Ribbon', desc: 'Tied elegantly with a champagne satin ribbon for the perfect finish.' },
    { title: 'Handwritten Thank-You Card', desc: 'Every order includes a personalized thank-you card from HAVAKU.' },
];



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
                            {products.map((product) => (
                                <div key={product.name} className="havaku-card" style={{ overflow: 'visible' }}>
                                    <ImagePlaceholder width={400} height={300} label={product.name} style={{ width: '100%', aspectRatio: '4/3', borderRadius: '4px 4px 0 0' }} />
                                    <div style={{ padding: '1.75rem' }}>
                                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.35rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.6rem' }}>
                                            {product.name}
                                        </h3>
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.83rem', color: 'var(--taupe)', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                                            {product.desc}
                                        </p>
                                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'var(--champagne-gold)', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                                            Variants: {product.variants}
                                        </p>
                                        <a
                                            href="https://wa.me/919999999999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                            style={{ fontSize: '0.78rem', padding: '0.65rem 1.5rem', display: 'inline-block' }}
                                        >
                                            Order via WhatsApp
                                        </a>
                                    </div>
                                </div>
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
                                    transition: 'background 0.3s ease',
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
                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
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
