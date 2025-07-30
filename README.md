# Karl Mabou - Portfolio Website

A modern, responsive portfolio website showcasing my expertise as a Full-Stack Developer with specialization in robotics, fintech, and distributed systems.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Vite for fast loading and optimal performance
- **Interactive Elements**: Engaging UI with Framer Motion animations
- **Professional Showcase**: Comprehensive display of skills, experience, and projects
- **Contact Integration**: Multiple ways to get in touch
- **Kubernetes Ready**: Production-ready deployment configuration

## 🛠 Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Web Server**: Nginx

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Docker (for containerization)
- kubectl (for Kubernetes deployment)

## 🏃‍♂️ Quick Start

### Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/karlmabs/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t karl-portfolio:latest .
```

### Run Container

```bash
docker run -p 3000:3000 karl-portfolio:latest
```

## ☸️ Kubernetes Deployment

### Prerequisites

- Kubernetes cluster (local or cloud)
- kubectl configured
- Nginx Ingress Controller
- cert-manager (for SSL certificates)

### Deploy to Kubernetes

1. **Quick deployment**

   ```bash
   ./deploy.sh
   ```

2. **Manual deployment**

   ```bash
   # Apply all manifests
   kubectl apply -f k8s/

   # Check deployment status
   kubectl get pods -n karl-portfolio
   kubectl get svc -n karl-portfolio
   kubectl get ingress -n karl-portfolio
   ```

### Kubernetes Resources

- **Namespace**: Isolated environment for the portfolio
- **Deployment**: 3 replicas with rolling updates
- **Service**: Internal load balancing
- **Ingress**: External access with SSL termination
- **HPA**: Auto-scaling based on CPU/memory usage
- **PDB**: Ensures availability during updates

### Monitoring and Scaling

```bash
# View pods
kubectl get pods -n karl-portfolio

# Scale manually
kubectl scale deployment karl-portfolio --replicas=5 -n karl-portfolio

# View logs
kubectl logs -f deployment/karl-portfolio -n karl-portfolio

# Delete deployment
kubectl delete -f k8s/
```

## 🎨 Customization

### Colors and Themes

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content Updates

- **Personal Info**: Update `src/components/Hero.tsx`
- **Skills**: Modify `src/components/Skills.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Projects**: Update `src/components/Projects.tsx`
- **Contact**: Modify `src/components/Contact.tsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/Header.tsx`

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configurations:

```bash
VITE_CONTACT_EMAIL=your.email@example.com
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_GITHUB_URL=https://github.com/yourusername
```

### Nginx Configuration

Customize `nginx.conf` for specific requirements:

- Cache settings
- Security headers
- Rate limiting
- Redirects

### Kubernetes Configuration

Update `k8s/` manifests for your environment:

- Change domain names in `ingress.yaml`
- Adjust resource limits in `deployment.yaml`
- Modify scaling parameters in `hpa.yaml`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Load Time**: < 2 seconds on 3G
- **SEO Optimized**: Meta tags and structured data

## 🔒 Security

- **Security Headers**: Implemented in Nginx configuration
- **Content Security Policy**: Configured for XSS protection
- **HTTPS Only**: Forced SSL redirect
- **Non-root Container**: Security-hardened Docker image

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Karl Mabou**

- Email: maboukarl2@gmail.com
- LinkedIn: [linkedin.com/in/karlmabs](https://linkedin.com/in/karlmabs)
- GitHub: [github.com/karlmabs](https://github.com/karlmabs)
- Location: Brussels, Belgium

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by the latest design trends
- Optimized for performance and accessibility
- Ready for production deployment

---

**Made with ❤️ and ☕ in Brussels**
