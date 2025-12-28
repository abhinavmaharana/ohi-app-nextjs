# Ohi App - Next.js Website

This is a Next.js TypeScript conversion of the Ohi website. All designs, responsiveness, and UI elements have been preserved.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Copy assets folder:**
   You need to copy the `assets` folder from the original website to the `public` directory:
   ```bash
   cp -r /Users/abhinavmaharana/Downloads/Ohi-website-2.0-main/assets ./public/
   ```
   
   The final structure should be:
   ```
   public/
     assets/
       img/
         logo.png
         herophone.png
         banner.png
         phone-pricing.png
         insta.png
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
ohi-app/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── terms/
│   │   └── page.tsx        # Terms & Conditions page
│   ├── privacy/
│   │   └── page.tsx        # Privacy Policy page
│   ├── contact/
│   │   └── page.tsx        # Contact Us page
│   └── count-me-in/
│       └── page.tsx        # Billboard submission page
├── components/
│   ├── FAQSection.tsx      # FAQ accordion component
│   └── Footer.tsx          # Footer component
├── public/
│   └── assets/             # Static assets (images)
└── package.json
```

## Features

- ✅ All original designs preserved
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ TypeScript for type safety
- ✅ Next.js App Router
- ✅ Optimized images with Next.js Image component
- ✅ FAQ accordion functionality
- ✅ Form handling with email links
- ✅ Smooth scrolling navigation

## Pages

- `/` - Homepage
- `/terms` - Terms & Conditions
- `/privacy` - Privacy Policy
- `/contact` - Contact Us form
- `/count-me-in` - Billboard submission form

## Build for Production

```bash
npm run build
npm start
```

