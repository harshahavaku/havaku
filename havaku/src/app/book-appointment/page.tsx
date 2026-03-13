'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Link from 'next/link';

const services = [
    { id: 'beauty-studio', label: 'Beauty Studio', icon: '✦', desc: 'Threading, Waxing, Facial, Hair, Manicure & Pedicure' },
    { id: 'bridal-makeup', label: 'Bridal Makeup', icon: '♛', desc: 'Complete bridal makeup for your wedding day' },
    { id: 'engagement-makeup', label: 'Engagement Makeup', icon: '◈', desc: 'Elegant, glowing makeup for your engagement' },
    { id: 'reception-makeup', label: 'Reception Makeup', icon: '❧', desc: 'Bold, glamorous look for reception night' },
    { id: 'bridal-trial', label: 'Bridal Trial', icon: '〰', desc: 'Rehearse your bridal look before the big day' },
    { id: 'saree-hair', label: 'Saree Draping & Hairstyling', icon: '∿', desc: 'Expert saree draping combined with bridal hairstyling' },
];

const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

// Simulated unavailable slots (in real app these come from a backend)
const unavailableSlots = ['12:00 PM', '3:00 PM'];

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
}

export default function BookAppointmentPage() {
    const today = new Date();
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [calYear, setCalYear] = useState(today.getFullYear());
    const [calMonth, setCalMonth] = useState(today.getMonth());
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);

    const prevMonth = () => {
        if (calMonth === 0) { setCalYear(y => y - 1); setCalMonth(11); }
        else setCalMonth(m => m - 1);
        setSelectedDate(null);
        setSelectedTime('');
    };
    const nextMonth = () => {
        if (calMonth === 11) { setCalYear(y => y + 1); setCalMonth(0); }
        else setCalMonth(m => m + 1);
        setSelectedDate(null);
        setSelectedTime('');
    };

    const isDateDisabled = (day: number) => {
        const d = new Date(calYear, calMonth, day);
        return d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                body: JSON.stringify({
                    service: selectedService,
                    date: `${MONTHS[calMonth]} ${selectedDate}, ${calYear}`,
                    time: selectedTime,
                    ...form,
                }),
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });
        } catch { /* gracefully ignore errors in demo */ }
        setLoading(false);
        setSubmitted(true);
    };

    // ── styles ──
    const inputStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem',
        width: '100%', padding: '0.85rem 1rem',
        border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '2px',
        background: 'var(--ivory)', color: 'var(--soft-black)',
        outline: 'none', transition: 'border-color 0.25s ease',
    };
    const labelStyle: React.CSSProperties = {
        fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem',
        fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const,
        color: 'var(--taupe)', display: 'block', marginBottom: '0.4rem',
    };

    return (
        <>
            <Navbar />
            <main style={{ minHeight: '100vh', background: 'var(--ivory)', paddingTop: '72px' }}>

                {/* ── Hero ── */}
                <section style={{
                    padding: '4rem 2rem 3rem',
                    background: 'linear-gradient(135deg, var(--ivory) 0%, var(--blush-pink) 100%)',
                    textAlign: 'center', position: 'relative', overflow: 'hidden',
                }}>
                    <div style={{ position: 'absolute', top: '0%', right: '5%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div className="section-label" style={{ marginBottom: '0.75rem' }}>HAVAKU Studio</div>
                        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 500, color: 'var(--soft-black)', lineHeight: 1.2, marginBottom: '0.75rem' }}>
                            Book Your Appointment
                        </h1>
                        <div className="gold-divider" />
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', maxWidth: '460px', margin: '1rem auto 0', lineHeight: 1.85 }}>
                            Choose your service, pick a date and time, and we&apos;ll confirm your booking via WhatsApp.
                        </p>
                    </div>
                </section>

                {/* ── Progress Bar ── */}
                <section style={{ padding: '2.5rem 2rem 0', maxWidth: '720px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '0.5rem' }}>
                        {[1, 2, 3].map((s, i) => (
                            <div key={s} style={{ display: 'flex', alignItems: 'center', flex: s < 3 ? 1 : undefined }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                                    background: step >= s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.15)',
                                    border: `2px solid ${step >= s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.3)'}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 700,
                                    color: step >= s ? 'var(--soft-black)' : 'var(--taupe)',
                                    transition: 'all 0.4s ease',
                                }}>
                                    {step > s ? '✓' : s}
                                </div>
                                {i < 2 && (
                                    <div style={{
                                        flex: 1, height: 2,
                                        background: step > s ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.2)',
                                        transition: 'background 0.4s ease',
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                        {['Select Service', 'Date & Time', 'Your Details'].map((label, i) => (
                            <span key={label} style={{
                                fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                color: step === i + 1 ? 'var(--champagne-gold)' : 'var(--taupe)',
                                opacity: step === i + 1 ? 1 : 0.6,
                                flex: i < 2 ? 1 : undefined, textAlign: i === 1 ? 'center' : i === 2 ? 'right' : 'left',
                            }}>
                                Step {i + 1} — {label}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ── Step Content ── */}
                <section style={{ padding: '2.5rem 2rem 6rem', maxWidth: '720px', margin: '0 auto' }}>

                    {/* STEP 1 — Select Service */}
                    {step === 1 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                What service are you interested in?
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '2rem', lineHeight: 1.7 }}>
                                Choose one service to get started with your booking.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
                                {services.map((svc) => (
                                    <button
                                        key={svc.id}
                                        onClick={() => setSelectedService(svc.label)}
                                        style={{
                                            textAlign: 'left', padding: '1.5rem',
                                            background: selectedService === svc.label ? 'rgba(201,169,110,0.1)' : 'var(--warm-white)',
                                            border: `1.5px solid ${selectedService === svc.label ? 'var(--champagne-gold)' : 'rgba(201,169,110,0.2)'}`,
                                            borderRadius: '4px', cursor: 'pointer',
                                            transition: 'all 0.25s ease',
                                            boxShadow: selectedService === svc.label ? '0 2px 16px rgba(201,169,110,0.18)' : '0 1px 8px rgba(26,26,26,0.04)',
                                        }}
                                    >
                                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: 'var(--champagne-gold)', marginBottom: '0.5rem' }}>{svc.icon}</div>
                                        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: 'var(--soft-black)', marginBottom: '0.35rem' }}>{svc.label}</div>
                                        <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'var(--taupe)', lineHeight: 1.6 }}>{svc.desc}</div>
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedService}
                                className="btn-primary"
                                style={{ border: 'none', cursor: selectedService ? 'pointer' : 'not-allowed', opacity: selectedService ? 1 : 0.5, fontSize: '0.85rem' }}
                            >
                                Continue →
                            </button>
                        </div>
                    )}

                    {/* STEP 2 — Date & Time */}
                    {step === 2 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                Pick a date and time
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: 'var(--taupe)', marginBottom: '2rem', lineHeight: 1.7 }}>
                                Service: <strong style={{ color: 'var(--champagne-gold)' }}>{selectedService}</strong>
                            </p>

                            {/* Calendar */}
                            <div style={{ background: 'var(--warm-white)', borderRadius: '4px', border: '1px solid rgba(201,169,110,0.2)', padding: '1.75rem', marginBottom: '1.75rem', boxShadow: '0 2px 20px rgba(26,26,26,0.05)' }}>
                                {/* Month nav */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1.1rem', padding: '0.25rem 0.5rem' }}>‹</button>
                                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 500, color: 'var(--soft-black)' }}>
                                        {MONTHS[calMonth]} {calYear}
                                    </span>
                                    <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--taupe)', fontSize: '1.1rem', padding: '0.25rem 0.5rem' }}>›</button>
                                </div>
                                {/* Day headers */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', marginBottom: '0.5rem' }}>
                                    {DAYS.map(d => (
                                        <div key={d} style={{ textAlign: 'center', fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--taupe)', padding: '0.35rem 0' }}>{d}</div>
                                    ))}
                                </div>
                                {/* Date grid */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                                    {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                                    {Array(daysInMonth).fill(null).map((_, i) => {
                                        const day = i + 1;
                                        const disabled = isDateDisabled(day);
                                        const selected = selectedDate === day;
                                        return (
                                            <button
                                                key={day}
                                                onClick={() => { if (!disabled) { setSelectedDate(day); setSelectedTime(''); } }}
                                                disabled={disabled}
                                                style={{
                                                    aspectRatio: '1', borderRadius: '50%',
                                                    background: selected ? 'var(--champagne-gold)' : 'transparent',
                                                    border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
                                                    fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem',
                                                    color: selected ? 'var(--soft-black)' : disabled ? 'rgba(125,107,94,0.3)' : 'var(--soft-black)',
                                                    fontWeight: selected ? 700 : 400,
                                                    transition: 'all 0.2s ease',
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                }}
                                                onMouseEnter={(e) => { if (!disabled && !selected) (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,169,110,0.15)'; }}
                                                onMouseLeave={(e) => { if (!selected) (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                                            >
                                                {day}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Time slots */}
                            {selectedDate && (
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={labelStyle}>Available Time Slots</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: '0.75rem' }}>
                                        {timeSlots.map(slot => {
                                            const unavailable = unavailableSlots.includes(slot);
                                            const chosen = selectedTime === slot;
                                            return (
                                                <button
                                                    key={slot}
                                                    onClick={() => { if (!unavailable) setSelectedTime(slot); }}
                                                    disabled={unavailable}
                                                    style={{
                                                        padding: '0.55rem 1.2rem',
                                                        borderRadius: '2px',
                                                        fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', fontWeight: 600,
                                                        border: `1.5px solid ${chosen ? 'var(--champagne-gold)' : unavailable ? 'rgba(201,169,110,0.15)' : 'rgba(201,169,110,0.35)'}`,
                                                        background: chosen ? 'var(--champagne-gold)' : 'transparent',
                                                        color: chosen ? 'var(--soft-black)' : unavailable ? 'rgba(125,107,94,0.35)' : 'var(--taupe)',
                                                        cursor: unavailable ? 'not-allowed' : 'pointer',
                                                        transition: 'all 0.2s ease',
                                                        textDecoration: unavailable ? 'line-through' : 'none',
                                                    }}
                                                >
                                                    {slot}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <button onClick={() => setStep(1)} style={{ background: 'none', border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '2px', padding: '0.8rem 2rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)', cursor: 'pointer' }}>
                                    ← Back
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedDate || !selectedTime}
                                    className="btn-primary"
                                    style={{ border: 'none', cursor: (selectedDate && selectedTime) ? 'pointer' : 'not-allowed', opacity: (selectedDate && selectedTime) ? 1 : 0.5, fontSize: '0.85rem' }}
                                >
                                    Continue →
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 — Details + Confirm */}
                    {step === 3 && !submitted && (
                        <div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.9rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '0.5rem' }}>
                                Almost there — your details
                            </h2>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '2px', padding: '0.3rem 0.8rem' }}>
                                    {selectedService}
                                </span>
                                <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: 'var(--taupe)', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '2px', padding: '0.3rem 0.8rem' }}>
                                    {MONTHS[calMonth]} {selectedDate}, {calYear} · {selectedTime}
                                </span>
                            </div>

                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-name">Full Name *</label>
                                    <input id="ba-name" type="text" required placeholder="Your full name" style={inputStyle}
                                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-phone">Phone Number *</label>
                                    <input id="ba-phone" type="tel" required placeholder="+91 XXXXX XXXXX" style={inputStyle}
                                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-email">Email Address (optional)</label>
                                    <input id="ba-email" type="email" placeholder="your@email.com" style={inputStyle}
                                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>
                                <div>
                                    <label style={labelStyle} htmlFor="ba-notes">Special Requests / Notes</label>
                                    <textarea id="ba-notes" rows={4} placeholder="Any specific requests, skin concerns, or notes for the artist..." style={{ ...inputStyle, resize: 'vertical', fontFamily: 'Manrope, sans-serif' }}
                                        value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
                                        onFocus={e => (e.target.style.borderColor = 'var(--champagne-gold)')}
                                        onBlur={e => (e.target.style.borderColor = 'rgba(201,169,110,0.3)')} />
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                    <button type="button" onClick={() => setStep(2)} style={{ background: 'none', border: '1.5px solid rgba(201,169,110,0.3)', borderRadius: '2px', padding: '0.8rem 2rem', fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--taupe)', cursor: 'pointer' }}>
                                        ← Back
                                    </button>
                                    <button type="submit" disabled={loading} className="btn-primary" style={{ border: 'none', cursor: 'pointer', fontSize: '0.85rem', opacity: loading ? 0.7 : 1 }}>
                                        {loading ? 'Confirming...' : 'Confirm Appointment ✦'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* CONFIRMATION */}
                    {submitted && (
                        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--warm-white)', borderRadius: '4px', border: '1px solid rgba(201,169,110,0.2)', boxShadow: '0 4px 30px rgba(26,26,26,0.06)' }}>
                            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', color: 'var(--champagne-gold)', marginBottom: '1rem', lineHeight: 1 }}>✦</div>
                            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', fontWeight: 500, color: 'var(--soft-black)', marginBottom: '1rem' }}>
                                Appointment Request Received!
                            </h2>
                            <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'var(--taupe)', lineHeight: 1.85, marginBottom: '1rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
                                Thank you, <strong>{form.name}</strong>! Your appointment request for <em>{selectedService}</em> on{' '}
                                <strong>{MONTHS[calMonth]} {selectedDate}</strong> at <strong>{selectedTime}</strong> has been received.
                                We will confirm your booking via WhatsApp shortly.
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a
                                    href={`https://wa.me/917386797648?text=Hi%20HAVAKU%2C%20I%20just%20booked%20a%20${encodeURIComponent(selectedService)}%20appointment%20for%20${encodeURIComponent(`${MONTHS[calMonth]} ${selectedDate}`)}%20at%20${encodeURIComponent(selectedTime)}.%20My%20name%20is%20${encodeURIComponent(form.name)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: '#25D366', color: 'white',
                                        fontFamily: 'Manrope, sans-serif', fontWeight: 600, fontSize: '0.85rem',
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        padding: '0.9rem 2rem', borderRadius: '2px', textDecoration: 'none',
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                    }}
                                >
                                    Chat with us to confirm
                                </a>
                                <Link href="/" className="btn-outline" style={{ padding: '0.9rem 2rem' }}>
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    )}
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
