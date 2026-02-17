import type { Project } from '../types';

export function createProjects(projects: Project[]): HTMLElement {
  const section = document.createElement('section');
  section.id = 'projects';
  section.className = 'section';
  
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid grid-2 grid-3">
        ${projects.map((project, index) => createProjectCard(project, index)).join('')}
      </div>
    </div>
    
    <div id="codeModal" class="code-modal">
      <div class="code-modal-content">
        <button class="code-modal-close" aria-label="Close">&times;</button>
        <h3 id="codeModalTitle" class="code-modal-title"></h3>
        <pre id="codeModalCode"><code></code></pre>
      </div>
    </div>
  `;
  
  setTimeout(() => setupCodeModalHandlers(), 0);
  
  return section;
}

function createProjectCard(project: Project, index: number): string {
  return `
    <div class="card project-card fade-in">
      <div class="project-video">
        <iframe 
          src="${project.videoUrl}" 
          title="${project.title} Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="badge">${tech}</span>`).join('')}
        </div>
        
        <p class="project-story">${formatText(project.story)}</p>
        
        <div class="project-code">
          <h4>Code Snippet <span class="code-expand-hint">(click to expand)</span></h4>
          <pre class="code-preview" data-project-index="${index}" data-project-title="${escapeHtml(project.title)}" data-project-code="${escapeHtml(project.partialCode)}"><code>${escapeHtml(project.partialCode)}</code></pre>
        </div>
        
        <div class="project-lessons">
          <h4>Key Learnings</h4>
          <ul>
            ${project.lessonsLearned.map(lesson => `<li>${formatText(lesson)}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function formatText(text: string): string {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  let formatted = text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-link">${url}</a>`;
  });
  return formatted;
}

function setupCodeModalHandlers(): void {
  const modal = document.getElementById('codeModal');
  const modalTitle = document.getElementById('codeModalTitle');
  const modalCode = document.getElementById('codeModalCode')?.querySelector('code');
  const closeBtn = document.querySelector('.code-modal-close');
  const codePreviews = document.querySelectorAll('.code-preview');
  
  if (!modal || !modalTitle || !modalCode || !closeBtn) return;
  
  codePreviews.forEach(preview => {
    preview.addEventListener('click', () => {
      const title = preview.getAttribute('data-project-title') || '';
      const code = preview.getAttribute('data-project-code') || '';
      
      modalTitle.textContent = title + ' - Code Snippet';
      modalCode.textContent = code;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  closeBtn.addEventListener('click', closeModal);
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
