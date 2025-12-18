import type { PortfolioData } from '../types';

export function createResume(data: PortfolioData): HTMLElement {
  const section = document.createElement('section');
  section.id = 'resume';
  section.className = 'section resume-section';
  
  section.innerHTML = `
    <div class="container resume-content">
      <h2 class="section-title">About Me</h2>
      
      <p class="resume-bio">${data.bio}</p>
      
      <div class="resume-actions">
        <a href="${data.resumeUrl}" class="btn btn-primary" download>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Full Resume
        </a>
        
        <a href="${getSocialUrl(data.socials, 'LinkedIn')}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          View LinkedIn Profile
        </a>
      </div>
    </div>
  `;
  
  return section;
}

function getSocialUrl(socials: any[], platform: string): string {
  const social = socials.find(s => s.platform === platform);
  return social?.url || '#';
}
