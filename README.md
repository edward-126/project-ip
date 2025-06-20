# 🌐 IP Checker

> **What's My Public IP Address?** - A simple, fast, and beautiful IP checker tool.  
> *Made for fun, no judging!* 😄

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🚀 **Instant IP Detection** - Get your public IP address in milliseconds
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, beautiful interface with smooth animations
- 📋 **One-Click Copy** - Copy your IP address to clipboard instantly
- 🔄 **Real-time Refresh** - Update your IP address on demand
- 🌙 **Lightweight** - Fast loading with minimal dependencies
- 🔒 **Privacy-First** - No data storage, no tracking

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```
   git clone https://github.com/edward-126/project-ip.git
   cd ip-checker
   ```

2. **Install dependencies**
   ```
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) and see your IP address!

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── get-ip/
│   │       └── route.ts          # API endpoint for IP detection
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page
├── components/
│   ├── IPChecker.tsx             # Main IP checker component
└── types/
    └── ip.ts                     # TypeScript type definitions
```

## 🔧 API Reference

### GET `/api/get-ip`

Returns the client's public IP address.

**Response:**
```
{
  "ip": "123.456.789.012",
  "timestamp": "2025-06-20T16:30:00.000Z"
}
```

**Headers Used for IP Detection:**
- `x-real-ip`
- `x-forwarded-for`
- `x-client-ip`
- `request.ip`

## 🎯 Usage

Simply visit the website and your public IP address will be automatically detected and displayed. You can:

- **Copy** your IP address with one click
- **Refresh** to get the most current IP
- **View details** (optional feature) like location and ISP info

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- And many more!

## 🤝 Contributing

Contributions are welcome! This project was made for fun, so feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Bug Reports

Found a bug? No judging here! Please open an issue with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Thilina Rathnayaka (Edward Hyde)**
- Portfolio: [thilina.dev](https://thilina.dev)
- GitHub: [@Edward-126](https://github.com/Edward-126)
- Email: rathnayaka3548@gmail.com

---


  Made with ❤️ for fun, no judging!
  If this helped you, consider giving it a ⭐
