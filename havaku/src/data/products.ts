export type Product = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number; // INR — update these placeholder prices before going live
    image: string;
    images?: string[];      // additional angle images for gallery (optional)
    variants?: string[];
    type: 'jewelry' | 'handmade';
};

export const jewelryProducts: Product[] = [
    {
        id: 'j-grand-bridal-set',
        name: 'Grand Bridal Set',
        category: 'Bridal Sets',
        description: 'Complete bridal jewelry including necklace, earrings & maang tikka',
        price: 4999,
        image: '/images/jewelry-grand-set.png',
        type: 'jewelry',
    },
    {
        id: 'j-pearl-earrings',
        name: 'Pearl Chandelier Earrings',
        category: 'Earrings',
        description: 'Elegant drop earrings with pearl accents',
        price: 799,
        image: '/images/jewelry-pearl-earrings.png',
        type: 'jewelry',
    },
    {
        id: 'j-kundan-bangles',
        name: 'Kundan Bangle Set',
        category: 'Bangles',
        description: 'Intricate kundan work bangles — set of 6',
        price: 1499,
        image: '/images/jewelry-kundan-bangles.png',
        type: 'jewelry',
    },
    {
        id: 'j-layered-necklace',
        name: 'Layered Gold Necklace',
        category: 'Necklaces',
        description: 'Multi-strand layered statement necklace',
        price: 1299,
        image: '/images/jewelry-layered-necklace.png',
        type: 'jewelry',
    },
    {
        id: 'j-reception-set',
        name: 'Reception Jewelry Set',
        category: 'Bridal Sets',
        description: 'Glamorous set for reception evening wear',
        price: 3999,
        image: '/images/jewelry-reception-set.png',
        type: 'jewelry',
    },
    {
        id: 'j-floral-earrings',
        name: 'Floral Drop Earrings',
        category: 'Earrings',
        description: 'Delicate flower petal design earrings',
        price: 649,
        image: '/images/jewelry-floral-earrings.png',
        type: 'jewelry',
    },
    {
        id: 'j-celebration-bangles',
        name: 'Celebration Bangle Set',
        category: 'Bangles',
        description: 'Gold-tone bangles for festive occasions',
        price: 1199,
        image: '/images/jewelry-celebration-bangles.png',
        type: 'jewelry',
    },
    {
        id: 'j-choker-necklace',
        name: 'Choker Necklace',
        category: 'Necklaces',
        description: 'Classic fitted choker with stone detailing',
        price: 999,
        image: '/images/jewelry-choker-necklace.png',
        type: 'jewelry',
    },
    {
        id: 'j-engagement-set',
        name: 'Engagement Jewelry Set',
        category: 'Occasion',
        description: 'Elegant set for engagement ceremonies',
        price: 3499,
        image: '/images/jewelry-engagement-set.png',
        type: 'jewelry',
    },
    {
        id: 'j-hoop-earrings',
        name: 'Hoop Earrings with Stones',
        category: 'Earrings',
        description: 'Premium stone-set hoop earrings',
        price: 549,
        image: '/images/jewelry-hoop-earrings.png',
        type: 'jewelry',
    },
    {
        id: 'j-temple-set',
        name: 'Temple Jewelry Set',
        category: 'Bridal Sets',
        description: 'Traditional temple-design bridal set',
        price: 4499,
        image: '/images/jewelry-temple-set.png',
        type: 'jewelry',
    },
    {
        id: 'j-anniversary-set',
        name: 'Anniversary Gift Set',
        category: 'Occasion',
        description: 'Curated jewelry set perfect for gifting',
        price: 2999,
        image: '/images/jewelry-anniversary-set.png',
        type: 'jewelry',
    },
];

export const handmadeProducts: Product[] = [
    {
        id: 'h-luxury-soap',
        name: 'Handmade Luxury Soap',
        category: 'Soaps',
        description: 'Gentle, skin-loving soaps crafted from natural botanical ingredients. Free from harsh chemicals.',
        price: 299,
        image: '/images/handmade-soap-hero.png',
        variants: ['Rose', 'Lavender', 'Turmeric', 'Charcoal', 'Sandalwood'],
        type: 'handmade',
    },
    {
        id: 'h-glow-facepack',
        name: 'Glow Face Pack',
        category: 'Face Care',
        description: 'Brightening and nourishing face pack blends for radiant, even-toned skin.',
        price: 449,
        image: '/images/handmade-facepack-hero.png',
        variants: ['Multani', 'Turmeric', 'Rose Clay', 'Neem & Honey'],
        type: 'handmade',
    },
    {
        id: 'h-herbal-hairoil',
        name: 'Herbal Hair Oil',
        category: 'Hair Care',
        description: 'Strengthen, nourish and condition hair with our time-tested herbal oil blend.',
        price: 399,
        image: '/images/handmade-hairoil-hero.png',
        variants: ['Bhringraj', 'Coconut & Hibiscus', 'Amla & Brahmi'],
        type: 'handmade',
    },
    {
        id: 'h-skincare-kit',
        name: 'Skincare Kit',
        category: 'Kits',
        description: 'Curated skincare essentials in a beautiful kit — cleanser, face pack, moisturizer, and more.',
        price: 1299,
        image: '/images/handmade-skincare-hero.png',
        variants: ['Glow Kit', 'Hydration Kit', 'Anti-aging Kit', 'Bridal Prep Kit'],
        type: 'handmade',
    },
    {
        id: 'h-gift-hamper',
        name: 'Luxury Gift Hamper',
        category: 'Hampers',
        description: 'Beautifully packaged gift hampers for birthdays, weddings, and festive occasions.',
        price: 1999,
        image: '/images/handmade-hamper-hero.png',
        variants: ['Mini', 'Classic', 'Premium', 'Bridal'],
        type: 'handmade',
    },
    {
        id: 'h-bridal-kit',
        name: 'Bridal Beauty Kit',
        category: 'Kits',
        description: 'Complete pre-bridal skincare kit designed for glowing skin from mehndi to reception.',
        price: 2499,
        image: '/images/handmade-bridalkit-hero.png',
        variants: ['15-Day Kit', '30-Day Kit'],
        type: 'handmade',
    },
];

export const allProducts: Product[] = [...jewelryProducts, ...handmadeProducts];
