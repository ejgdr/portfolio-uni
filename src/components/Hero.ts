import type { PortfolioData } from '../types';

export function createHero(data: PortfolioData): HTMLElement {
  const hero = document.createElement('section');
  const baseUrl = import.meta.env.BASE_URL;
  hero.className = 'hero section';
  hero.innerHTML = `
    <div class="container hero-content">
      <img src="${baseUrl}/images/LogoProfile.png" alt="${data.name}" class="hero-logo" />
      
      <div>
        <h1 class="hero-title">${data.name}</h1>
        <p class="hero-subtitle">${data.title}</p>
        <p class="hero-tagline">${data.tagline}</p>
      </div>
      
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View Projects
        </a>
        
        <a href="${baseUrl}${data.resumeUrl}" class="btn btn-secondary" download>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  `;
  
  return hero;
}
