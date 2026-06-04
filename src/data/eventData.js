// Data file for NEHA EVENTS website

export const SERVICES = [
  {
    id: 'birthday',
    title: 'Birthday Event Planning',
    description: 'Transforming simple birthdays into grand theatrical celebrations. Custom cartoon themes, premium entry arches, and dazzling setups customized for all ages.',
    image: 'images/img_31c389b1d4d23bf9f28eb43023e61d0a.jpg',
    icon: 'Cake'
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower Decoration',
    description: 'Elegant setups celebrating new beginnings. Luxury traditional or modern theme backdrops, premium jhula setups, and floral structures.',
    image: 'images/img_5e2ef74d7000cfb10241a5aca2388902.jpg',
    icon: 'Baby'
  },
  {
    id: 'naming-ceremony',
    title: 'Naming Ceremony Setup',
    description: 'Traditional and premium custom naming ceremony decors. Beautifully styled cradles, personalized baby name signage, and ethnic floral backdrops.',
    image: 'images/img_6f1936137b1a105eb210f0a40fa10906.jpg',
    icon: 'Sparkles'
  },
  {
    id: 'balloon',
    title: 'Balloon Decoration',
    description: 'From elegant pastel ring balloon walls to grand welcoming entry balloon arches. High-end balloon architecture that adds magic to any venue.',
    image: 'images/img_f437ba272e566366e190de7d16f832b2.jpg',
    icon: 'PartyPopper'
  },
  {
    id: 'led-screen',
    title: 'LED Screen Setup',
    description: 'State-of-the-art high-definition P3/P4 LED screens. Perfect for corporate events, celebrity exhibitions, wedding backdrops, and live feeds.',
    image: 'images/img_30d22119cd56c904866a29a878b2c221.jpg',
    icon: 'Tv'
  },
  {
    id: 'sound-dj',
    title: 'Sound & DJ Setup',
    description: 'High-fidelity acoustic systems with wireless mics and dynamic lighting. Experience professional event audio managed by expert sound engineers.',
    image: 'images/img_644ced8acc759d83178a083d029f1a6b.jpg',
    icon: 'Music'
  },
  {
    id: 'photography',
    title: 'Photography & Videography',
    description: 'Capturing memories in cinematic high definition. Premium photography packages, short reels, drone shots, and full-coverage digital albums.',
    image: 'images/img_d9666649d5bb07158b7bd0a1f72dda06.jpg',
    icon: 'Camera'
  },
  {
    id: 'stage',
    title: 'Stage Decoration',
    description: 'Grand royal stage backdrops with custom structural elements, premium velvet carpeting, and theatrical profile lighting.',
    image: 'images/img_faae5897f623ae919c0a3632ac174616.jpg',
    icon: 'Crown'
  },
  {
    id: 'wedding',
    title: 'Wedding Decoration',
    description: 'Luxury destination wedding styling. Extravagant mandap setups, royal theme entries, floral aisles, and bespoke lighting arrangements.',
    image: 'images/img_43b4c8347f3ce431e38bfa45f6f2d7a9.jpg',
    icon: 'Heart'
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Polished seminars, annual general meetings, product launches, and networking meetups. Professional venue and crowd flow management.',
    image: 'images/img_eadb3b4f2e7bccb7541e95d8ccceee6a.jpg',
    icon: 'Briefcase'
  },
  {
    id: 'exhibition-stall',
    title: 'Exhibition Stall Management',
    description: 'Custom shell schemes, Octonorm installations, display stands, gold racks, and queue managers. Optimize your product displays for maximum footfall.',
    image: 'images/img_e6d429267f20e34a72157802fcf4e092.jpg',
    icon: 'Grid'
  },
  {
    id: 'celebrity-brand',
    title: 'Celebrity Brand Events',
    description: 'Exclusive influencer collaborations, launch parties, celebrity-endorsed expos, red carpets, VIP lounge coordination, and heavy public footfall.',
    image: 'images/img_8fef97f106025ebec1f4de38ccf11685.jpg',
    icon: 'Award'
  }
];

export const PACKAGES = {
  birthday: {
    title: "Birthday Event",
    normal: {
      name: "Birthday Normal Package",
      price: "12,000",
      description: "Elegant thematic setup suitable for premium residential and hall celebrations.",
      popular: false,
      features: [
        { name: "Balloon Decorations (200 Normal Balloons)", included: true },
        { name: "White Curtain Backdrop (8x8 ft)", included: true },
        { name: "Entry Balloon Arch (Standard)", included: true },
        { name: "Welcome Board with Easel Stand", included: true },
        { name: "Cake Table Decoration", included: true },
        { name: "Standard Party Poppers (2 Pcs)", included: true },
        { name: "Red Carpet Entry", included: false },
        { name: "Wireless Mic Sound System", included: false },
        { name: "Ring Balloon Decoration (Premium)", included: false },
        { name: "Neon Happy Birthday Light", included: false },
        { name: "Cartoon Cut-outs (Theme matching)", included: false }
      ]
    },
    ultra: {
      name: "Birthday Ultra Package",
      price: "20,000",
      description: "Extravagant, cinematic celebration setup with complete audio-visual systems.",
      popular: true,
      features: [
        { name: "Balloon Decorations (500+ Premium Chrome & Pastel)", included: true },
        { name: "Ring Balloon Decoration (8x8 ft)", included: true },
        { name: "White Curtain Backdrop with LED Screen Integration", included: true },
        { name: "Grand Entry Balloon Arch", included: true },
        { name: "Welcome Board with Custom LED Border", included: true },
        { name: "Cake Table Setup (Luxury Props)", included: true },
        { name: "Premium Party Poppers & Cold Fire (4 Pcs)", included: true },
        { name: "Red Carpet Entry (VIP)", included: true },
        { name: "Wireless Mic Sound System (2 Mics)", included: true },
        { name: "Neon Happy Birthday Light", included: true },
        { name: "Life-Size Cartoon Cut-outs", included: true },
        { name: "Premium Profile LED Spot Lighting", included: true }
      ]
    }
  },
  naming: {
    title: "Naming Ceremony",
    normal: {
      name: "Naming Ceremony Normal Plan",
      price: "12,000",
      description: "Beautiful traditional naming ceremony styling with standard cradle decor.",
      popular: false,
      features: [
        { name: "Traditional Cradle (Jhula) Setup", included: true },
        { name: "Flower Decoration (Standard Genda & Rose)", included: true },
        { name: "White/Yellow Curtain Backdrop", included: true },
        { name: "Baby Name Lettering (Standard Cardboard)", included: true },
        { name: "Welcome Easel Board", included: true },
        { name: "Jhula Props (Hindi/Marathi/English)", included: true },
        { name: "Entry Arch Decoration", included: false },
        { name: "LED Stage Spotlight Set", included: false },
        { name: "Red Carpet Walkway", included: false },
        { name: "Wireless Mic Sound System", included: false }
      ]
    },
    ultra: {
      name: "Naming Ceremony Ultra Plan",
      price: "20,000",
      description: "A royal setup with premium artificial floral canopies, customized cradles, and dynamic lights.",
      popular: true,
      features: [
        { name: "Luxury Premium Jhula (Carved Wooden/Metal)", included: true },
        { name: "Grand Artificial Flower & Floral Canopy Decoration", included: true },
        { name: "Multi-layered Curtain Setup with Neon Accents", included: true },
        { name: "Custom Golden Acrylic Baby Name Content", included: true },
        { name: "Welcome Board with Elegant Floral Border", included: true },
        { name: "Jhula Props Set (Exclusive Multilingual)", included: true },
        { name: "Grand Floral Entry Arch", included: true },
        { name: "LED Stage Spotlight Set (4 Profile Lights)", included: true },
        { name: "Red Carpet Walkway with Floral Pillars", included: true },
        { name: "Wireless Mic Sound System & Ambient Music", included: true }
      ]
    }
  },
  babyShower: {
    title: "Baby Shower",
    normal: {
      name: "Baby Shower Normal Plan",
      price: "12,000",
      description: "Delightful pastel-themed backdrop with sweet accents for private family functions.",
      popular: false,
      features: [
        { name: "Baby Shower Backdrop (Pink & Blue Theme)", included: true },
        { name: "Balloon Ring Decor (200 Balloons)", included: true },
        { name: "Jhula (Swingset) Setup for Mom-to-be", included: true },
        { name: "Welcome Easel Board ('Baby Shower')", included: true },
        { name: "Cardboard cutouts and photo props", included: true },
        { name: "Wireless Mic Sound System", included: false },
        { name: "Red Carpet Walkway", included: false },
        { name: "Neon 'Mom To Be' Light Sign", included: false }
      ]
    },
    ultra: {
      name: "Baby Shower Ultra Plan",
      price: "20,000",
      description: "Magnificent celebrity-style decoration with grand ring backdrops and luxury accessories.",
      popular: true,
      features: [
        { name: "Grand Baby Shower Backdrop (Premium Pastel & Chrome)", included: true },
        { name: "Floral & Balloon Ring Decor (8ft Double Ring)", included: true },
        { name: "Luxury Royal Jhula Setup with Velvet Seating", included: true },
        { name: "Premium Welcome Board with Floral/Glow Border", included: true },
        { name: "Custom Acrylic Props & Sparkle Cuts", included: true },
        { name: "Wireless Mic Sound System & DJ Background Music", included: true },
        { name: "Red Carpet Walkway with Golden Stands", included: true },
        { name: "Neon 'Mom To Be' & 'Dad To Be' Lights", included: true },
        { name: "Ambient Golden Warm Spot Lighting", included: true }
      ]
    }
  }
};

export const EXHIBITIONS = {
  public: {
    title: "Public Shopping Exhibitions",
    subtitle: "Inspired by flagship expos like 'Ghe Bharari Pune'",
    bgImage: "images/img_dac56172e17979444da688260445f10a.jpg",
    theme: "from-amber-500/10 via-amber-600/5 to-transparent",
    features: [
      { name: "Affordable Stall Booking", desc: "Pricing designed for small and medium scale home businesses." },
      { name: "Women Entrepreneur Focus", desc: "Dedicated pavilions and incubation slots to empower women makers." },
      { name: "Fashion & Lifestyle", desc: "Exclusive clothing, boutique fabrics, and seasonal wear stalls." },
      { name: "Food & Delicacies", desc: "Live food stalls, organic spices, and homemade bakery corners." },
      { name: "Handmade Products", desc: "Showcases for local artisans, pottery, handicrafts, and paintings." },
      { name: "Startup Booths", desc: "Compact setups for new tech, services, and digital products." },
      { name: "Family-Friendly Atmosphere", desc: "Live music, kids zones, and interactive workshops." },
      { name: "Massive Footfall", desc: "Strategic venue placement and massive local marketing campaigns." }
    ]
  },
  premium: {
    title: "Premium Celebrity & Luxury Expos",
    subtitle: "Dubai-style high-end luxury business & fashion networking hubs",
    bgImage: "images/img_91962b58aa541c1fd6ceae76a5520439.jpg",
    theme: "from-gold/20 via-black to-luxury-black",
    features: [
      { name: "Celebrity Brand Showcases", desc: "Stalls featuring products curated or owned by screen personalities." },
      { name: "Influencer Collaborations", desc: "Live meetups, interactive reels booths, and influencer networking." },
      { name: "Bespoke Jewelry Brands", desc: "High-security luxury diamond and gold design exhibits." },
      { name: "Premium Lifestyle & Decor", desc: "High-end imported home styling, smart items, and luxury rugs." },
      { name: "VIP Lounge Area", desc: "Comfortable networking lounge with gold aesthetics and complimentary service." },
      { name: "Red Carpet Aesthetics", desc: "Grand entrance with professional media walls, paparazzi flashes, and spotlights." },
      { name: "Corporate Networking Hubs", desc: "Private conference rooms for investor pitching and business matchings." },
      { name: "Sponsor Showcases", desc: "Dedicated high-visibility placements for corporate partners." }
    ]
  }
};

export const UPCOMING_EXHIBITIONS = [
  {
    id: 1,
    name: "Ghe Bharari Pune Expo 2026",
    tagline: "Celebrate Local Business & Women Entrepreneurs",
    date: "2026-07-15T09:00:00", // Future date for countdown
    dateString: "July 15 - 17, 2026",
    venue: "Ganesh Kala Krida Manch, Swargate, Pune",
    image: "images/img_103d7fb4a115a9b60afed184174f5d64.jpg",
    stallPricing: "₹8,000 - ₹15,000",
    vipPass: "Free Registration (General Entry) / VIP Pass at ₹499",
    category: "Public Shopping"
  },
  {
    id: 2,
    name: "Dubai Luxury Fashion & Jewelry Expo",
    tagline: "Celebrity Brand Launch & Networking Event",
    date: "2026-09-02T10:00:00", // Future date for countdown
    dateString: "Sept 02 - 04, 2026",
    venue: "The Westin Pune Koregaon Park, Grand Ballroom",
    image: "images/img_a1e4b50a223610967c8ad139cde74f96.jpg",
    stallPricing: "₹25,000 - ₹50,000",
    vipPass: "VIP Access Pass at ₹1,999 (Includes Lounge Access & High Tea)",
    category: "Premium Luxury"
  }
];

export const GALLERY = [
  { src: "images/img_5e2ef74d7000cfb10241a5aca2388902.jpg", cat: "wedding", title: "Luxury Wedding Mandap", desc: "Opulent white floral mandap with gold lighting accents." },
  { src: "images/img_9a821368f69d831130edb04df1e59f8f.jpg", cat: "exhibitions", title: "Luxury Brand Stall", desc: "Gold rack layouts showing premium lifestyle and jewelry designs." },
  { src: "images/img_6f1936137b1a105eb210f0a40fa10906.jpg", cat: "baby-shower", title: "Traditional Cradle (Jhula)", desc: "Exquisite flower canopy above a golden cradle for a naming ceremony." },
  { src: "images/img_f437ba272e566366e190de7d16f832b2.jpg", cat: "balloon", title: "Ring Balloon Design", desc: "Pastel colored ring backdrop with neon birthday text." },
  { src: "images/img_09ed9694b51c9cc3bf2f4ff9855befb4.jpg", cat: "exhibitions", title: "VIP Fashion Runway Lounge", desc: "Black and gold corporate sponsor walls with red carpets and velvet dividers." },
  { src: "images/img_faae5897f623ae919c0a3632ac174616.jpg", cat: "stage", title: "Celebrity Stage Setup", desc: "Truss structure stage with professional LED wall integrations." },
  { src: "images/img_43b4c8347f3ce431e38bfa45f6f2d7a9.jpg", cat: "wedding", title: "Royal Entry Aisle", desc: "Walkway decorated with tall floral arches and lit candles." },
  { src: "images/img_31c389b1d4d23bf9f28eb43023e61d0a.jpg", cat: "birthday", title: "Thematic Birthday Entry", desc: "Jungle theme entrance arch crafted with customized cartoon figures." },
  { src: "images/img_eadb3b4f2e7bccb7541e95d8ccceee6a.jpg", cat: "exhibitions", title: "Pune Public Expo", desc: "Vibrant shopping exhibition crowds browsing artisan stalls." },
  { src: "images/img_30d22119cd56c904866a29a878b2c221.jpg", cat: "led-stage", title: "HD LED Backdrop", desc: "Crisp LED display screen presenting animated graphics behind a presenter." }
];

export const WHY_CHOOSE_US = [
  { title: "Professional Event Planning", desc: "From concept blueprinting to on-site implementation, we manage all details flawlessly." },
  { title: "Luxury Decoration Concepts", desc: "Stunning themes featuring glass, gold, champagne fabrics, and premium lighting." },
  { title: "Affordable Packages", desc: "No hidden fees. Premium features designed to maximize impact within normal (₹12k) and ultra (₹20k) budgets." },
  { title: "Premium Exhibition Management", desc: "Complete logistics, Octonorm partitions, golden stands, and high-footfall publicity." },
  { title: "Celebrity Brand Vision", desc: "Equipped to handle luxury red-carpets, celebrity appearances, and high-visibility sponsors." },
  { title: "Experienced Team", desc: "Dedicated creative designers, audio engineers, technicians, and floor managers." },
  { title: "Creative Custom Designs", desc: "Tailor-made items matching language, theme, style, and spatial needs." },
  { title: "Complete Event Solutions", desc: "LED displays, sound networks, professional photography, catering, and anchors." }
];

export const TESTIMONIALS = [
  {
    name: "Sneha Deshmukh",
    role: "Mother & Birthday Client",
    image: "images/img_sneha.jpg",
    rating: 5,
    quote: "The Birthday Ultra Package was phenomenal! The ring balloon design and LED welcome board made our daughter's birthday look like a dream. Highly professional team."
  },
  {
    name: "Vikram Rathi",
    role: "Founder, Rathi Lifestyle Jewellers",
    image: "images/img_vikram.jpg",
    rating: 5,
    quote: "Booked stalls with Neha Events for their Luxury Brand Expo. The Dubai style gold rack setups, VIP lounge, and red carpet entrance pulled in high-spending customers. Recommended!"
  },
  {
    name: "Pooja Kulkarni",
    role: "Founder, Ghe Bharari Pune Initiative",
    image: "images/img_pooja.jpg",
    rating: 5,
    quote: "Partnered for our public shopping expo. They managed 80+ stalls, sound systems, and welcoming LED gates flawlessly. Their support team worked around the clock."
  },
  {
    name: "Aditya & Nehal",
    role: "Wedding Clients",
    image: "images/img_aditya.jpg",
    rating: 5,
    quote: "Stunning stage decoration and mandap arrangement! The gold themes, artificial flowers, and profile lights created beautiful cinematic photos. Truly a premium experience."
  }
];

export const BRAND_STATS = [
  { number: 500, label: "Events Managed", suffix: "+" },
  { number: 100, label: "Happy Clients", suffix: "+" },
  { number: 50, label: "Exhibition Stalls", suffix: "+" },
  { number: 10000, label: "Expected Visitors", suffix: "+" },
  { number: 25, label: "Creative Specialists", suffix: "" }
];

export const RENTAL_EQUIPMENT = {
  display: {
    title: "Stall & Display Equipment",
    items: [
      { name: "Exhibition Stand", price: "400", unit: "Day", icon: "LayoutGrid" },
      { name: "Premium Golden Stand", price: "500", unit: "Day", icon: "Crown" },
      { name: "Display Racks", price: "500", unit: "Day", icon: "Columns" },
      { name: "Mirror", price: "500", unit: "Day", icon: "Tv" },
      { name: "Mannequin", price: "400", unit: "Day", icon: "UserCheck" },
      { name: "Hangers", price: "5", unit: "Pc / Day", icon: "Minimize2" },
      { name: "Jhali Only", price: "200", unit: "Day", icon: "Grid" },
      { name: "Jhali With Stand", price: "500", unit: "Day", icon: "TableProperties" }
    ]
  },
  digital: {
    title: "Digital & Branding Equipment",
    items: [
      { name: "65 Inch Digital Screen", price: "3,000", unit: "Day", icon: "Monitor" },
      { name: "Digital Marketing", price: "Custom Quote", unit: "", icon: "Globe" },
      { name: "Advertising Campaigns", price: "Custom Quote", unit: "", icon: "Megaphone" },
      { name: "Promotional Activities", price: "Custom Quote", unit: "", icon: "Sparkles" }
    ]
  }
};

export const RENTAL_UTILITIES = [
  { name: "Lights", image: "images/img_2a0a04c2e6e5e1790c8b66557cc35375.jpg", desc: "Professional spot lights, halogens, strip lights, and warm ambient profile stage illumination." },
  { name: "Fans", image: "images/img_fd07766dc840c60aba365b594e3c4cbd.jpg", desc: "High-power pedestal and industrial cooling fans to maintain comfortable stall temperatures." },
  { name: "Speakers", image: "images/img_b119fcba9d81f634ee3f02194b527ddf.jpg", desc: "Clear acoustic sound systems, perfect for stall announcements, ambient music, or product pitches." },
  { name: "Wireless Mics", image: "images/img_72f97b2ed609a97ea5063f946f139fea.jpg", desc: "High-fidelity wireless microphones for anchors, presentation stages, or audience engagements." },
  { name: "Tables & Chairs", image: "images/img_6b9437058c9d67986c9b4d253922a408.jpg", desc: "Premium plastic, wooden, or luxury velvet chairs and registration counters for stall hosts." },
  { name: "Octonorm Stall Structures", image: "images/img_0d4d6801bc23b7dd67f5b59da6d027f5.jpg", desc: "Standard aluminum partition walls and customizable configurations for indoor expos." },
  { name: "Canopy Setup", image: "images/img_405d57184c1e528fe5ae4a4ff07281b7.jpg", desc: "Waterproof canopy tents (10x10ft, 10x20ft) for outdoor public shopping bazaars." },
  { name: "Carpeting", image: "images/img_c1e3329f6e0b15a778b8987283f839f5.jpg", desc: "Velvet red, green, or black carpets to elevate stall aesthetics and walkway presentations." },
  { name: "Queue Managers", image: "images/img_08e7544f244a19708a3d20cba97594c1.jpg", desc: "Chrome stands with red velvet ropes to direct visitor flow and manage VIP entrances." }
];

export const RENTAL_SERVICES = {
  eventMgmt: {
    title: "Event Management Services",
    items: [
      { name: "Corporate Events", desc: "Annual Meets, Product Launches, Award Functions, Conferences, Seminars" },
      { name: "Family Events", desc: "Birthday Celebrations, Naming Ceremony, Baby Shower, Anniversary Functions, Social Gatherings" }
    ]
  },
  venues: {
    title: "Venue Rental Services",
    items: [
      { name: "Exhibition Venues", desc: "Spacious halls structured for heavy public footfalls and partition stall spaces." },
      { name: "Corporate & Banquet Spaces", desc: "Grand ballrooms, meeting spaces, and convention centers with premium AV built-ins." },
      { name: "Open Grounds", desc: "Large lawn spaces and grounds mapped for outdoor shopping fairs and stages." }
    ]
  },
  marketing: {
    title: "Event Marketing Services",
    items: [
      { name: "Social Media Marketing", desc: "Targeted campaigns to direct Pune visitors to your stall or exhibition." },
      { name: "Digital Advertising", desc: "Google & Meta ads focused on relevant B2B trade buyers and sponsors." },
      { name: "Exhibition Promotions", desc: "Influencer marketing, lead generation systems, and custom database blasts." }
    ]
  }
};

export const RENTAL_PACKAGES = [
  {
    name: "Starter Stall Setup",
    subtitle: "Perfect for small home-based businesses",
    features: [
      "1x Standard Exhibition Stand",
      "1x Display Rack or Jhali",
      "Basic LED Spot Lighting Setup",
      "1x Standard Chair",
      "1x Standard Table (with White Cover)",
      "Daily Technical Maintenance Support"
    ],
    whatsappText: "Hi Neha Events, I am interested in the Starter Stall Setup package for my stall. Please send quotes and dates."
  },
  {
    name: "Business Stall Setup",
    subtitle: "Perfect for growing retail brands",
    features: [
      "1x Premium Golden Stand",
      "2x Display Racks or Jhali with Stands",
      "1x Mannequin or Custom Hanger Set",
      "Dedicated Stall Branding Space (Front Board)",
      "Premium Spotlight & Fan Configuration",
      "Velvet Walkway Carpeting",
      "Queue Manager Entry Support"
    ],
    whatsappText: "Hi Neha Events, I am interested in the Business Stall Setup package for my brand. Please share pricing details."
  },
  {
    name: "Premium Brand Showcase",
    subtitle: "Perfect for luxury & celebrity brands",
    features: [
      "Custom Octonorm Stall Architecture (Exclusives)",
      "1x 65 Inch Digital Screen (HD Media Loop)",
      "Premium Gold Spotlight & Ambient Glow Illumination",
      "Custom Product Display Tables & Velvet Chairs",
      "Front Fascia Branding Board with Neon Highlights",
      "Priority VIP Lounge Placement",
      "Social Media Spotlight Promo Post (@nehaevents22)"
    ],
    whatsappText: "Hi Neha Events, I want to book the Premium Brand Showcase package. Please send space layout options and pricing."
  }
];

export const RENTAL_WHY = [
  "100+ Exhibition Assets Available",
  "Complete Stall Setup Solutions",
  "Affordable Daily Rentals",
  "Event Infrastructure Support",
  "Exhibition Management Expertise",
  "On-Site Technical Assistance"
];
