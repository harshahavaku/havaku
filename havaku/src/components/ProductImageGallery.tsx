'use client';

import { useState, useEffect, useCallback } from 'react';

type Props = {
    image: string;
    images?: string[];
    alt: string;
    aspectRatio?: string; // e.g. '1 / 1' or '4 / 3'
};

export default function ProductImageGallery({ image, images, alt, aspectRatio = '1 / 1' }: Props) {
    const allImages = images && images.length > 0 ? images : [image];
    const hasMultiple = allImages.length > 1;

    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [cardHovered, setCardHovered] = useState(false);

    /* ── smooth image swap ── */
    function goTo(index: number) {
        if (index === current) return;
        setFading(true);
        setTimeout(() => {
            setCurrent(index);
            setFading(false);
        }, 180);
    }

    function prev(e?: React.MouseEvent) {
        e?.stopPropagation();
        goTo((current - 1 + allImages.length) % allImages.length);
    }

    function next(e?: React.MouseEvent) {
        e?.stopPropagation();
        goTo((current + 1) % allImages.length);
    }

    /* ── lightbox helpers ── */
    function openLightbox() {
        setLightboxIndex(current);
        setLightboxOpen(true);
    }

    function closeLightbox() {
        setLightboxOpen(false);
    }

    function lightboxPrev() {
        setLightboxIndex((i) => (i - 1 + allImages.length) % allImages.length);
    }

    function lightboxNext() {
        setLightboxIndex((i) => (i + 1) % allImages.length);
    }

    /* ── keyboard navigation in lightbox ── */
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') lightboxPrev();
            if (e.key === 'ArrowRight') lightboxNext();
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [lightboxOpen, allImages.length]
    );

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    /* ── lock body scroll when lightbox open ── */
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [lightboxOpen]);

    /* ── shared arrow button style ── */
    function arrowStyle(size: number): React.CSSProperties {
        return {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: size,
            height: size,
            borderRadius: '50%',
            background: 'rgba(255,253,249,0.92)',
            border: '1px solid rgba(201,169,110,0.35)',
            color: 'var(--soft-black)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
            zIndex: 2,
            fontSize: size > 36 ? '1.3rem' : '1rem',
            lineHeight: 1,
            transition: 'opacity 0.2s ease, background 0.2s ease',
            userSelect: 'none',
        };
    }

    return (
        <>
            {/* ── Card Gallery ── */}
            <div
                style={{ position: 'relative', width: '100%', aspectRatio, overflow: 'hidden', background: '#FAF7F2', cursor: 'zoom-in' }}
                onMouseEnter={() => setCardHovered(true)}
                onMouseLeave={() => setCardHovered(false)}
                onClick={openLightbox}
            >
                {/* Image */}
                <img
                    src={allImages[current]}
                    alt={`${alt} — view ${current + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        opacity: fading ? 0 : 1,
                        transition: 'opacity 0.18s ease',
                    }}
                    onError={(e) => {
                        // graceful fallback: hide broken image
                        (e.target as HTMLImageElement).style.display = 'none';
                    }}
                />

                {/* Left arrow */}
                {hasMultiple && (
                    <button
                        onClick={prev}
                        aria-label="Previous image"
                        style={{
                            ...arrowStyle(32),
                            left: 8,
                            opacity: cardHovered ? 1 : 0,
                        }}
                    >
                        ‹
                    </button>
                )}

                {/* Right arrow */}
                {hasMultiple && (
                    <button
                        onClick={next}
                        aria-label="Next image"
                        style={{
                            ...arrowStyle(32),
                            right: 8,
                            opacity: cardHovered ? 1 : 0,
                        }}
                    >
                        ›
                    </button>
                )}

                {/* Dot indicators */}
                {hasMultiple && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: 5,
                            zIndex: 2,
                        }}
                    >
                        {allImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); goTo(i); }}
                                aria-label={`Go to image ${i + 1}`}
                                style={{
                                    width: i === current ? 16 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    background: i === current ? 'var(--champagne-gold)' : 'rgba(255,253,249,0.7)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: 0,
                                    transition: 'width 0.2s ease, background 0.2s ease',
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Zoom hint icon — only on single image or when not hovered on multi */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: hasMultiple ? 20 : 8,
                        right: 8,
                        background: 'rgba(255,253,249,0.82)',
                        borderRadius: '50%',
                        width: 26,
                        height: 26,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: cardHovered ? 0.9 : 0,
                        transition: 'opacity 0.2s ease',
                        pointerEvents: 'none',
                        zIndex: 2,
                    }}
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--soft-black)" strokeWidth="2.2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                </div>
            </div>

            {/* ── Lightbox ── */}
            {lightboxOpen && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.92)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                        style={{
                            position: 'fixed',
                            top: 18,
                            right: 22,
                            background: 'rgba(255,253,249,0.12)',
                            border: '1px solid rgba(255,253,249,0.25)',
                            color: '#FAF7F2',
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            cursor: 'pointer',
                            fontSize: '1.4rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: 1,
                            zIndex: 10001,
                        }}
                    >
                        ×
                    </button>

                    {/* Image container — stop propagation so clicking image doesn't close */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={allImages[lightboxIndex]}
                            alt={`${alt} — view ${lightboxIndex + 1}`}
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '85vh',
                                objectFit: 'contain',
                                borderRadius: 4,
                                boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
                                display: 'block',
                            }}
                        />

                        {/* Left arrow */}
                        {hasMultiple && (
                            <button
                                onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
                                aria-label="Previous image"
                                style={{ ...arrowStyle(44), left: -56 }}
                            >
                                ‹
                            </button>
                        )}

                        {/* Right arrow */}
                        {hasMultiple && (
                            <button
                                onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
                                aria-label="Next image"
                                style={{ ...arrowStyle(44), right: -56 }}
                            >
                                ›
                            </button>
                        )}
                    </div>

                    {/* Dot indicators + counter */}
                    <div
                        style={{
                            position: 'fixed',
                            bottom: 28,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                            zIndex: 10001,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {hasMultiple && (
                            <div style={{ display: 'flex', gap: 7 }}>
                                {allImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setLightboxIndex(i)}
                                        aria-label={`Go to image ${i + 1}`}
                                        style={{
                                            width: i === lightboxIndex ? 20 : 7,
                                            height: 7,
                                            borderRadius: 4,
                                            background: i === lightboxIndex ? 'var(--champagne-gold)' : 'rgba(255,253,249,0.45)',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: 0,
                                            transition: 'width 0.2s ease, background 0.2s ease',
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,247,242,0.55)', letterSpacing: '0.08em' }}>
                            {lightboxIndex + 1} / {allImages.length}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
