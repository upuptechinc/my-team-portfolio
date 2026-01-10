# UpUp&Up Tech Inc - Team Portfolio Website

A modern, responsive team portfolio website showcasing our services, projects, and team members. Built with React, TypeScript, and Tailwind CSS.

![Tech Stack](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?logo=tailwind-css)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Beautiful dark theme with gradient accents and smooth animations
- **Service Showcase**: Display of 6 service categories with skill proficiency bars
- **Project Portfolio**: Showcase of 8 completed projects with live links
- **Team Section**: Introduction to 9 team members with roles and photos
- **Contact Form**: Integrated contact form with backend email API
- **Smooth Animations**: Fade-in animations and hover effects throughout
- **SEO Friendly**: Semantic HTML structure and optimized performance

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type safety
- **Vite 5.4.2** - Build tool and dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Icon library

### Backend
- **Express.js** - Web server
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-team
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install server dependencies** (if not already installed)
   ```bash
   cd server
   npm install express cors nodemailer
   cd ..
   ```

## ⚙️ Configuration

### Frontend Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3001
```

### Backend Environment Variables

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=3001
CORS_ORIGIN=http://localhost:5173,http://localhost:3000

# SMTP Configuration (for email functionality)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Recipient Email
TO_EMAIL=recipient@example.com
```

> **Note**: For Gmail, you'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

## 🚀 Running the Application

### Development Mode

1. **Start the frontend dev server**
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

2. **Start the backend server** (in a separate terminal)
   ```bash
   cd server
   node index.js
   ```
   The backend API will be available at `http://localhost:3001`

### Production Build

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Preview the production build**
   ```bash
   npm run preview
   ```

3. **Deploy the `dist` folder** to your hosting provider

## 📁 Project Structure

```
my-team/
├── public/                 # Static assets (images, logos)
│   ├── *.png, *.jpg       # Team member photos & project screenshots
│   └── logo.png           # Company logo
├── server/                 # Backend server
│   └── index.js           # Express server with email API
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx     # Navigation bar with mobile menu
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Services.tsx   # Services showcase with skill bars
│   │   ├── Showcases.tsx  # Project portfolio
│   │   ├── Team.tsx       # Team members section
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Footer.tsx     # Footer component
│   │   └── Skills.tsx     # Skills component (currently commented out)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles and animations
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Updating Team Members

Edit `src/components/Team.tsx` to add, remove, or modify team members:

```typescript
const team = [
  {
    name: 'Your Name',
    role: 'Your Role',
    image: '/your-photo.jpg',
  },
  // ... more members
];
```

### Adding Projects

Edit `src/components/Showcases.tsx` to add new projects:

```typescript
const projects = [
  {
    title: 'Project Name',
    subtitle: 'Tech Stack',
    description: 'Project description',
    image: '/project-image.jpg',
    Link: 'https://project-url.com',
    githubLink: 'https://github.com/...',
  },
  // ... more projects
];
```

### Modifying Services

Edit `src/components/Services.tsx` to update service categories and skills:

```typescript
const services = [
  {
    title: 'Service Name',
    description: 'Service description',
    icon: IconComponent,
    skills: [
      { name: 'Skill Name', level: 95 },
      // ... more skills
    ],
  },
  // ... more services
];
```

### Styling

- **Colors**: Modify gradient colors in `tailwind.config.js` and component files
- **Animations**: Customize animations in `src/index.css`
- **Layout**: Adjust spacing and layout using Tailwind utility classes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Frontend Deployment

The frontend can be deployed to:
- **Vercel**: Connect your repository and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions or deploy manually
- **AWS S3 + CloudFront**: For scalable static hosting

### Backend Deployment

The backend server can be deployed to:
- **Heroku**: Add a `Procfile` with `web: node server/index.js`
- **Railway**: Connect your repository and set environment variables
- **AWS EC2/Elastic Beanstalk**: Deploy Node.js application
- **DigitalOcean App Platform**: Simple Node.js deployment

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use environment variables for sensitive data
- Consider using a service like SendGrid or AWS SES for production email
- Implement rate limiting for the contact form API
- Validate and sanitize all user inputs

## 📧 Contact Form Setup

The contact form requires:
1. Backend server running on the configured port
2. Valid SMTP credentials in environment variables
3. `VITE_API_BASE_URL` set in frontend `.env` file

If the backend is unavailable, the form will display an error message with a fallback email address.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to UpUp&Up Tech Inc.

## 👥 Team

- **Ohno Saburo** - Project Manager
- **Takeshi Kato** - Sr. Software Engineer
- **Mamoru Taniya** - Frontend & QA Engineer
- **Fumiaki Nagase** - Full stack & Web3 Developer
- **Satoshi Amanuma** - DevOps Engineer
- **Ken Suzuki** - Full stack & Android Developer
- **Mikiya Endo** - UX/UI Designer

## 📞 Contact

- **Address**: 3-3 Kioichō, Chiyoda City, Tokyo
- **Phone**: +1 913 309 7848
- **Email**: passionmuse16@gmail.com

---

Built with ❤️ by UpUp&Up Tech Inc

