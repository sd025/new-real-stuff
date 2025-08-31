# Modern Wellness Platform

A modern, mobile-first healthcare and wellness e-commerce platform built with Next.js 15, featuring premium supplements and wellness products.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **State Management**: Redux Toolkit
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis

## 🎨 Brand Identity

- **Primary Color**: Vibrant Red (#E53E3E) - Represents care, vitality, and healthcare
- **Secondary Color**: Trust Blue (#4299E1) - Builds confidence and reliability
- **Accent Color**: Wellness Green (#38A169) - Symbolizes health and natural wellness
- **Typography**: Inter (sans-serif) + Playfair Display (serif for headings)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with Redux Provider
│   ├── page.js            # Homepage
│   ├── providers.js       # Redux Provider wrapper
│   └── globals.css        # Global styles and Tailwind config
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── product/          # Product-related components
│   ├── hero/             # Hero section components
│   └── animations/       # Animation components
├── store/                # Redux store configuration
│   ├── index.js          # Store setup
│   └── slices/           # Redux slices
│       ├── authSlice.js  # Authentication state
│       ├── cartSlice.js  # Shopping cart state
│       ├── productSlice.js # Product management
│       └── uiSlice.js    # UI state (mobile menu, etc.)
├── hooks/                # Custom React hooks
│   └── useRedux.js       # Redux hooks
├── data/                 # Mock data and static content
│   └── products.js       # Product catalog
└── lib/                  # Utility functions
    └── utils.js          # shadcn/ui utilities
```

## 🛠️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aanav-healthcare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Features Implemented

### ✅ Foundation Setup
- Next.js 15 with App Router
- Tailwind CSS v4 with custom brand colors
- Redux Toolkit store with slices
- Mobile-first responsive design
- Performance optimizations
- SEO metadata configuration

### ✅ State Management
- **Authentication**: User login/logout state
- **Shopping Cart**: Add/remove items, quantity management
- **Products**: Product listing, filtering, search
- **UI State**: Mobile menu, cart sidebar, loading states

### ✅ Mock Data
- 8 premium healthcare products
- Product categories and filtering
- Featured products selection
- Detailed product information

## 🚧 Upcoming Features

### Phase 2: Core UI Components
- [ ] Header/Navigation component
- [ ] Footer component
- [ ] Product cards and grids
- [ ] Hero section variations
- [ ] Mobile menu implementation

### Phase 3: Key Pages
- [ ] Product catalog page
- [ ] Product detail pages
- [ ] Shopping cart page
- [ ] User authentication pages
- [ ] About/Wellness pages

### Phase 4: Advanced Features
- [ ] Smooth animations with Framer Motion
- [ ] Advanced filtering and search
- [ ] Performance optimizations
- [ ] PWA features

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-500: #e53e3e    /* Aanav Healthcare Red */
--secondary-500: #4299e1  /* Trust Blue */
--wellness-500: #38a169   /* Wellness Green */

/* Neutral Colors */
--neutral-50: #f8fafc
--neutral-900: #0f172a
```

### Typography
- **Sans-serif**: Inter (body text, UI elements)
- **Serif**: Playfair Display (headings, brand elements)

### Spacing & Layout
- Mobile-first responsive design
- Custom breakpoints: xs (475px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Consistent spacing scale

## 📱 Mobile-First Approach

The application is built with a mobile-first approach, ensuring optimal performance and user experience across all devices:

- Responsive design patterns
- Touch-friendly interactions
- Optimized loading times
- Progressive enhancement

## 🔧 Performance Optimizations

- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Font Loading**: Optimized Google Fonts loading
- **Reduced Motion**: Respects user preferences

## 🚀 Deployment

The application is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is proprietary to Aanav Healthcare.

---
