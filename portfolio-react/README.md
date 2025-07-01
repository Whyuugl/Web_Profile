# Portfolio Wahyu Galang - React Version

Portfolio website yang dibangun menggunakan React, TypeScript, Tailwind CSS, dan Framer Motion.

## 🚀 Features

- **Modern Design**: Clean dan responsive design dengan Tailwind CSS
- **Smooth Animations**: Animasi yang menarik menggunakan Framer Motion
- **TypeScript**: Type safety untuk development yang lebih aman
- **Single Page Application**: Navigasi smooth scrolling antar section
- **Interactive Components**: Skills slider, dropdown sections, dan hover effects
- **Mobile Responsive**: Optimized untuk semua ukuran layar

## 🛠️ Tech Stack

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation (jika diperlukan)

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   └── Portfolio.tsx
│   ├── data/               # Data files
│   │   ├── skills.ts
│   │   ├── services.ts
│   │   ├── projects.ts
│   │   └── about.ts
│   ├── types/              # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # Entry point
│   └── index.css           # Tailwind directives
├── public/
│   ├── asset/img/          # Images
│   ├── favicon.ico
│   └── index.html
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json
```

## 🎯 Sections

1. **Home** - Hero section dengan typing effect
2. **About** - Informasi pribadi dengan dropdown sections
3. **Skills** - Interactive skills slider
4. **Services** - Layanan yang ditawarkan
5. **Portfolio** - Project showcase

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd portfolio-react
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

### Build for Production

```bash
npm run build
```

## 🎨 Customization

### Colors
Warna utama menggunakan cyan-400 dari Tailwind CSS. Anda bisa mengubahnya di:
- `tailwind.config.js` untuk custom colors
- Komponen individual untuk styling

### Content
Update konten di folder `src/data/`:
- `skills.ts` - Skills dan teknologi
- `services.ts` - Layanan yang ditawarkan
- `projects.ts` - Project portfolio
- `about.ts` - Informasi pribadi

### Images
Tambahkan gambar baru di `public/asset/img/` dan update path di file data.

## 📱 Responsive Design

Website sudah dioptimalkan untuk:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Wahyu Galang Ramadhan Rumampuk**
- Email: wahyugalang777@gmail.com
- Phone: +62 823-3405-2858
- Location: Banyuwangi, Indonesia

---

Made with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion
