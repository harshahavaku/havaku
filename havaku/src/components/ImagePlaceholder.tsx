import React from 'react';

interface ImagePlaceholderProps {
    /** Width in pixels (used for display label and optional fixed sizing) */
    width?: number;
    /** Height in pixels (used for display label and optional fixed sizing) */
    height?: number;
    /** Optional label describing what this image should be (e.g. "Bridal Portrait") */
    label?: string;
    /** Custom inline styles — use for aspectRatio, borderRadius, etc. */
    style?: React.CSSProperties;
    children?: React.ReactNode;
    /** Optional image src — when provided, renders an <img> instead of a placeholder */
    src?: string;
    /** Alt text for the image, used when src is provided */
    alt?: string;
    /** Optional custom gradient background */
    gradient?: string;
}

/**
 * ImagePlaceholder
 * ─────────────────────────────────────────────────────────────────────────────
 * Shows a styled gradient box with the expected image dimensions clearly
 * displayed. When you're ready to add a real photo, pass `src` and `alt` props
 * and the placeholder automatically becomes an <img> element.
 *
 * All images should be placed in:  /public/images/   (see README.md there)
 * Reference them as:               <ImagePlaceholder src="/images/filename.jpg" ... />
 *
 * Example:
 *   <ImagePlaceholder width={600} height={600} label="Studio photo" style={{ borderRadius: 4 }} />
 *   <ImagePlaceholder src="/images/about-studio.jpg" alt="HAVAKU Studio" width={600} height={600} style={{ borderRadius: 4 }} />
 */
export default function ImagePlaceholder({
    width,
    height,
    label,
    style,
    children,
    src,
    alt = '',
    gradient = 'linear-gradient(135deg, #F2D6CF 0%, #E8D5A8 100%)',
}: ImagePlaceholderProps) {
    // If a real image src is provided, render it properly
    if (src) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    ...style,
                }}
            />
        );
    }

    const dimensionLabel = width && height ? `${width} × ${height} px` : null;

    return (
        <div
            style={{
                background: gradient,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                ...style,
            }}
        >
            {/* Subtle crosshatch pattern to indicate "image goes here" */}
            <svg
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.06,
                }}
            >
                <defs>
                    <pattern id="crosshatch" width="16" height="16" patternUnits="userSpaceOnUse">
                        <path d="M0 0 L16 16 M16 0 L0 16" stroke="#7D6B5E" strokeWidth="0.75" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#crosshatch)" />
            </svg>

            {/* Camera icon */}
            <svg
                aria-hidden="true"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A96E"
                strokeWidth="1.4"
                style={{ opacity: 0.55, marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}
            >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
            </svg>

            {/* Dimension label */}
            {dimensionLabel && (
                <span
                    style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        color: '#C9A96E',
                        opacity: 0.8,
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {dimensionLabel}
                </span>
            )}

            {/* Optional descriptive label */}
            {label && (
                <span
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.82rem',
                        fontStyle: 'italic',
                        color: '#7D6B5E',
                        opacity: 0.65,
                        marginTop: '0.25rem',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    {label}
                </span>
            )}

            {/* Optional children (e.g. overlaid category badges) */}
            {children}
        </div>
    );
}
