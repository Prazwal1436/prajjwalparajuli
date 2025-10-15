# Prajjwal Parajuli - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases web development projects, digital marketing expertise, and professional services.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Interactive Components**: Engaging UI with hover effects and animations
- **Contact Form**: Functional contact form for inquiries
- **Project Showcase**: Filterable project gallery with case studies
- **Skills Visualization**: Interactive skills section with progress bars

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons, Heroicons
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/prajjwalparajuli/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Biography and stats
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links and contact details

### Projects
Edit `src/components/Projects.tsx` to add your projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/username/project',
    // ... other properties
  }
];
```

### Skills
Update `src/components/Skills.tsx` with your skills and experience:
```typescript
const skills = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90, description: 'Description' }
    ]
  }
];
```

### Services
Modify `src/components/Services.tsx` to reflect your services and pricing.

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create a `.env.local` file for any environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO Features

- Dynamic meta tags
- Open Graph tags
- Twitter Card tags
- Structured data
- Sitemap generation
- Robot.txt

## 📧 Contact Form

The contact form is ready for integration with:
- [Formspree](https://formspree.io/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [EmailJS](https://www.emailjs.com/)
- Custom API endpoints

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [https://prajjwalparajuli.vercel.app](https://prajjwalparajuli.vercel.app)
- **GitHub**: [https://github.com/prajjwalparajuli/portfolio](https://github.com/prajjwalparajuli/portfolio)
- **LinkedIn**: [https://linkedin.com/in/prajjwalparajuli](https://linkedin.com/in/prajjwalparajuli)

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out:

- Email: prajjwalparajuli@example.com
- LinkedIn: [Prajjwal Parajuli](https://linkedin.com/in/prajjwalparajuli)

---

**Built with ❤️ in Nepal by Prajjwal Parajuli**
# prajjwalparajuli
