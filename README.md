# ProServices - Professional Business Landing Page

A modern, responsive business landing page built with React and Tailwind CSS.

## Features

- Responsive design (mobile, tablet, desktop)
- Modern UI with smooth animations
- Hero section with call-to-action
- Services showcase
- About section with statistics
- Contact form section
- Mobile-friendly navigation

## How to Edit This Site

### Changing Company Name
1. Open `src/App.jsx`
2. Find `<h1 className="text-2xl font-bold text-blue-600">ProServices</h1>`
3. Replace "ProServices" with your company name

### Changing Colors
- Blue color used: `text-blue-600` and `bg-blue-600`
- To change: Replace `blue-600` with another Tailwind color like `purple-600`, `green-600`, etc.

### Changing Services
1. Open `src/App.jsx`
2. Find the array that starts with `{ title: 'Consulting', desc: 'Expert advice...' }`
3. Update the title and description for each service

### Changing Contact Information
1. Find the Contact Section in `src/App.jsx`
2. Update phone number, email, and address

### Changing Text Content
Simply search for the text you want to change in `src/App.jsx` and replace it.

## Local Development

```bash
npm install
npm start
```

The site will open at http://localhost:3000

## Building for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Vercel will automatically build and deploy

## Customization Tips

- All styling uses Tailwind CSS utility classes
- Icons come from lucide-react
- Change fonts by modifying the CSS in `src/index.css`
- Add sections by copying existing sections and modifying them
