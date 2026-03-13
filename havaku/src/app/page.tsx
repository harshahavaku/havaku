'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import TestimonialsSection from '@/components/TestimonialsSection';
import InstagramFeed from '@/components/InstagramFeed';

const services = [
  {
    icon: '✦',
    title: 'Beauty Studio',
    desc: 'Threading, waxing, facials, hair spa, manicure & pedicure — expert care for your everyday glow.',
    href: '/beauty-studio',
  },
  {
    icon: '♛',
    title: 'Bridal Services',
    desc: 'Complete bridal transformation — makeup, hair styling, saree draping, and trial packages.',
    href: '/bridal',
  },
  {
    icon: '◈',
    title: 'HAVAKU Jewelry',
    desc: 'Rolled gold bridal sets, earrings, bangles, necklaces — elegance for every occasion.',
    href: '/jewelry',
  },
  {
    icon: '❧',
    title: 'Handmade Products',
    desc: 'Handcrafted soaps, face packs, hair oils, skincare kits, and luxury gift hampers.',
    href: '/handmade',
  },
];

const beautyServices = [
  'Threading', 'Waxing', 'Cleanup', 'Facial', 'Hair Spa',
  'Haircut', 'Nail Art', 'Styling', 'Manicure', 'Pedicure',
];

const jewelryItems = [
  { name: 'Bridal Jewelry Sets', category: 'Bridal', price: 'Price on Request', image: '/images/jewelry-grand-set.png' },
  { name: 'Statement Earrings', category: 'Earrings', price: 'Price on Request', image: '/images/jewelry-pearl-earrings.png' },
  { name: 'Gold-Tone Bangles', category: 'Bangles', price: 'Price on Request', image: '/images/jewelry-kundan-bangles.png' },
  { name: 'Layered Necklaces', category: 'Necklaces', price: 'Price on Request', image: '/images/jewelry-layered-necklace.png' },
  { name: 'Occasion Jewelry Set', category: 'Occasion', price: 'Price on Request', image: '/images/jewelry-engagement-set.png' },
  { name: 'Bridal Choker Set', category: 'Bridal', price: 'Price on Request', image: '/images/jewelry-choker-necklace.png' },
];

const handmadeItems = [
  { name: 'Handmade Luxury Soaps', desc: 'Gentle, skin-loving soaps crafted from natural ingredients.', image: '/images/handmade-soap-hero.png' },
  { name: 'Glow Face Packs', desc: 'Brightening and nourishing face pack blends for radiant skin.', image: '/images/handmade-facepack-hero.png' },
  { name: 'Herbal Hair Oils', desc: 'Strengthen and condition with our nourishing herbal oil blend.', image: '/images/handmade-hairoil-hero.png' },
  { name: 'Skincare Kits', desc: 'Curated skincare essentials for every skin type.', image: '/images/handmade-skincare-hero.png' },
  { name: 'Gift Hampers', desc: 'Beautifully packaged luxury gift hampers for every occasion.', image: '/images/handmade-hamper-hero.png' },
  { name: 'Bridal Beauty Kit', desc: 'Complete pre-bridal skincare kit for your special days.', image: '/images/handmade-bridalkit-hero.png' },
];

const testimonials = [
  {
    quote: 'HAVAKU transformed me completely for my wedding day. The team understood exactly what I envisioned and exceeded every expectation. I felt like royalty!',
    name: 'Priya Sharma',
    service: 'Bridal Makeup',
    image: '/images/bridal-look-1.png',
  },
  {
    quote: 'The handmade skincare products are absolutely incredible. My skin has never felt this good. The gift hampers are so beautifully packaged too!',
    name: 'Anjali Mehta',
    service: 'Handmade Products',
    image: '/images/bridal-look-4.png',
  },
  {
    quote: 'The bridal jewelry collection is stunning. I found the perfect set for my reception and it was exactly the elegance I was looking for.',
    name: 'Shreya Kapoor',
    service: 'Bridal Jewelry',
    image: '/images/bridal-look-5.png',
  },
];

const galleryImages = Array(8).fill(null).map((_, i) => ({
  id: i,
  colors: ['#F2D6CF', '#E8D5A8', '#D4B8C7', '#C9A96E40', '#F2D6CF', '#E8D5A8', '#D4B8C7', '#C9A96E30'][i],
}));



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── SECTION 1: HERO ── */}
        <section
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, var(--ivory) 0%, #EFE8DE 50%, var(--blush-pink) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '72px',
          }}
        >
          {/* Decorative background elements */}
          <div style={{
            position: 'absolute', top: '10%', right: '8%', width: 400, height: 400,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '10%', left: '5%', width: 300, height: 300,
            borderRadius: '50%', background: 'radial-gradient(circle, rgba(242,214,207,0.4) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ textAlign: 'center', padding: '4rem 2rem', maxWidth: '800px', zIndex: 1 }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Premium Beauty & Bridal</div>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                fontWeight: 600,
                color: 'var(--champagne-gold)',
                letterSpacing: '0.15em',
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              HAVAKU
            </h1>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: 400,
              color: 'var(--taupe)',
              marginBottom: '1.25rem',
              letterSpacing: '0.05em',
            }}>
              Where Beauty Meets Celebration
            </p>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.95rem',
              color: 'var(--taupe)',
              maxWidth: '540px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8,
            }}>
              Premium beauty studio for bridal transformations, curated jewelry, and handcrafted beauty essentials.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary">Book Appointment</Link>
              <Link href="/bridal" className="btn-outline">Explore Bridal Services</Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}>
            <div style={{ width: 1, height: 50, background: 'linear-gradient(to bottom, transparent, var(--champagne-gold))' }} />
          </div>
        </section>

        {/* ── SECTION 2: ABOUT INTRO ── */}
        <section style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1rem' }}>About HAVAKU</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                A Complete Beauty &<br />Bridal Experience
              </h2>
              <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.95rem', color: 'var(--taupe)', lineHeight: 1.9, marginBottom: '2rem' }}>
                HAVAKU is a premium beauty and bridal brand created to make every woman feel confident, elegant, and celebration-ready. From everyday beauty services to complete bridal transformations — everything you need, under one beautiful brand.
              </p>
              <Link href="/about" className="btn-outline">Our Story</Link>
            </div>
            <div>
              <ImagePlaceholder
                src="/images/about-studio.png"
                alt="HAVAKU Beauty Studio"
                width={600} height={600}
                style={{ width: '100%', aspectRatio: '1', borderRadius: '4px' }}
              />
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              section > div[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
              }
            }
          `}</style>
        </section>

        {/* ── SECTION 3: SERVICES OVERVIEW ── */}
        <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Everything Under One Brand</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                What We Offer
              </h2>
              <div className="gold-divider" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
              {services.map((service) => (
                <div
                  key={service.title}
                  className="havaku-card"
                  style={{
                    padding: '2.25rem 1.75rem',
                    borderTop: '3px solid var(--champagne-gold)',
                  }}
                >
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    color: 'var(--champagne-gold)',
                    marginBottom: '1rem',
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: 'var(--soft-black)',
                    marginBottom: '0.75rem',
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.84rem',
                    color: 'var(--taupe)',
                    lineHeight: 1.8,
                    marginBottom: '1.25rem',
                  }}>
                    {service.desc}
                  </p>
                  <Link
                    href={service.href}
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: 'var(--champagne-gold)',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '0.7rem')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.gap = '0.4rem')}
                  >
                    Explore →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: BRIDAL SPOTLIGHT ── */}
        <section
          style={{
            padding: '6rem 2rem',
            background: `linear-gradient(135deg, var(--soft-black) 0%, var(--taupe) 100%)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(ellipse at 70% 50%, rgba(201,169,110,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.25rem', color: 'var(--champagne-gold-light, #E8D5A8)' }}>Bridal Experience</div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                color: 'var(--warm-white)',
                lineHeight: 1.2,
                marginBottom: '1.5rem',
              }}>
                Your Dream Bridal<br />Look Awaits
              </h2>
              <div style={{ width: 50, height: 1.5, background: 'var(--champagne-gold)', marginBottom: '1.5rem' }} />
              <p style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.95rem',
                color: 'rgba(255,253,249,0.75)',
                lineHeight: 1.9,
                marginBottom: '2.5rem',
              }}>
                Complete bridal transformation for your most special day — makeup, hair, saree draping, and more. Every detail crafted to celebrate your beauty.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book Bridal Consultation</Link>
                <Link href="/bridal-consultation" className="btn-outline" style={{ borderColor: 'rgba(255,253,249,0.4)', color: 'rgba(255,253,249,0.85)' }}>
                  Consultation Form →
                </Link>
              </div>
            </div>
            <div>
              <ImagePlaceholder
                src="/images/bridal-portrait.jpg"
                alt="HAVAKU Bridal Portrait"
                width={480} height={600}
                style={{ width: '100%', aspectRatio: '4/5', borderRadius: '4px', border: '1px solid rgba(201,169,110,0.2)' }}
              />
            </div>
          </div>
        </section>

        {/* ── SECTION 5: BEAUTY SERVICES ── */}
        <section style={{ padding: '5rem 2rem', background: 'var(--blush-pink)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem', color: 'var(--rose-gold)' }}>Beauty Studio</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
              Everyday Beauty, Elevated
            </h2>
            <div style={{ width: 50, height: 1.5, background: 'var(--rose-gold)', margin: '1rem auto 3rem' }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {beautyServices.map((service) => (
                <span
                  key={service}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    padding: '0.6rem 1.5rem',
                    borderRadius: '2px',
                    border: '1.5px solid rgba(183,110,121,0.3)',
                    background: 'rgba(255,253,249,0.7)',
                    color: 'var(--taupe)',
                    backdropFilter: 'blur(4px)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem' }}>
              <Link href="/beauty-studio" className="btn-primary">View All Services</Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: JEWELRY TEASER ── */}
        <section style={{ padding: '6rem 2rem', background: 'var(--warm-white)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>HAVAKU Jewelry</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                Elegance for Every Occasion
              </h2>
              <div className="gold-divider" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {jewelryItems.map((item) => (
                <div key={item.name} className="havaku-card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#FAF7F2' }}>
                    <ImagePlaceholder
                      width={200} height={200}
                      label={item.category}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.35rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--champagne-gold)' }}>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/jewelry" className="btn-outline">View Full Collection</Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: HANDMADE PRODUCTS TEASER ── */}
        <section style={{ padding: '6rem 2rem', background: 'var(--ivory)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Handcrafted With Love</div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--soft-black)' }}>
                Beauty, Crafted with Care
              </h2>
              <div className="gold-divider" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              {handmadeItems.map((item) => (
                <div key={item.name} className="havaku-card" style={{ overflow: 'hidden' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', background: '#FAF7F2' }}>
                    <ImagePlaceholder
                      width={200} height={200}
                      label={item.name}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.35rem' }}>
                      {item.name}
                    </h3>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link href="/handmade" className="btn-outline">Discover Handmade Essentials</Link>
            </div>
          </div>
        </section>

        {/* ── SECTION 8: GALLERY STRIP ── */}
        <section style={{ padding: '5rem 0', background: 'var(--soft-black)', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem', padding: '0 2rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem', color: 'rgba(201,169,110,0.7)' }}>Captured Moments</div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500, color: 'var(--warm-white)' }}>
              The HAVAKU Experience
            </h2>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              className="scroll-strip"
              style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
            >
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <div
                  key={i}
                  style={{
                    width: 280,
                    height: 200,
                    flexShrink: 0,
                    borderRadius: '4px',
                    background: `linear-gradient(135deg, ${img.colors}, #E8D5A8)`,
                    overflow: 'hidden',
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 2rem' }}>
            <Link href="/gallery" className="btn-outline-white">View Full Gallery</Link>
          </div>
        </section>

        {/* ── SECTION 9: TESTIMONIALS ── */}
        <TestimonialsSection
          testimonials={testimonials.map((t, idx) => ({
            id: idx,
            name: t.name,
            role: t.service,
            text: t.quote,
            rating: 5,
            image: t.image
          }))}
          background="blush-pink"
        />

        {/* ── INSTAGRAM WIDGET ── */}
        <InstagramFeed />

        {/* ── SECTION 10: FINAL CTA ── */}
        <section
          style={{
            padding: '6rem 2rem',
            background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #A8853E 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: 400, height: 400, borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-30%', left: '-10%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
            <div className="section-label" style={{ marginBottom: '1rem', color: 'rgba(255,255,255,0.7)' }}>Get Started Today</div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 500,
              color: 'var(--soft-black)',
              lineHeight: 1.25,
              marginBottom: '1rem',
            }}>
              Book Your HAVAKU<br />Beauty Experience Today
            </h2>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.95rem',
              color: 'rgba(26,26,26,0.7)',
              marginBottom: '2.5rem',
              lineHeight: 1.8,
            }}>
              Available for bridal bookings, parlour appointments, and product inquiries.
            </p>
            <a
              href="https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%27d%20like%20to%20book%20an%20appointment!"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--soft-black)',
                color: 'var(--warm-white)',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 600,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                transition: 'all 0.3s ease',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 0C5.372 0 0 5.373 0 12.001c0 2.117.554 4.102 1.523 5.83L.057 23.998l6.304-1.654A11.946 11.946 0 0011.998 24C18.626 24 24 18.627 24 12.001 24 5.373 18.626 0 11.998 0zm.002 21.818a9.815 9.815 0 01-5.012-1.367l-.36-.213-3.736.979.998-3.642-.235-.374A9.817 9.817 0 012.181 12c0-5.42 4.401-9.818 9.819-9.818 5.42 0 9.819 4.397 9.819 9.818s-4.399 9.818-9.819 9.818z" />
              </svg>
              Book Now via WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
