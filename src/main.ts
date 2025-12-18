import './styles/main.css';
import { createHeader } from './components/Header';
import { createHero } from './components/Hero';
import { createProjects } from './components/Projects';
import { createResume } from './components/Resume';
import { createFooter } from './components/Footer';
import projectsData from './data/projects.json';
import portfolioData from './data/portfolio.json';
import type { Project } from './types';

// Get the app container
const app = document.querySelector<HTMLDivElement>('#app')!;

// Clear default content
app.innerHTML = '';

// Build the portfolio
function buildPortfolio() {
  // Create all sections
  const header = createHeader();
  const hero = createHero(portfolioData);
  const projects = createProjects(projectsData as Project[]);
  const resume = createResume(portfolioData);
  const footer = createFooter(portfolioData);
  
  // Append to app
  app.append(header, hero, projects, resume, footer);
  
  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href !== '#') {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all project cards
  document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize the portfolio
buildPortfolio();

console.log('🚀 Portfolio loaded successfully!');
console.log('Built with Vite + TypeScript');
