(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();function v(){const e=document.createElement("header");e.className="header",e.innerHTML=`
    <div class="container header-container">
      <div class="header-logo">
        <img src="/images/LogoIcon.png" alt="EJGR Logo" />
        <span>EJGR</span>
      </div>
      
      <nav class="header-nav" id="headerNav">
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        
        <div class="header-socials">
          <a href="https://www.linkedin.com/in/ema-guillen/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          <a href="https://github.com/ejgdr" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="GitHub">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </nav>
      
      <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  `;const t=e.querySelector("#mobileMenuBtn"),r=e.querySelector("#headerNav");return t?.addEventListener("click",()=>{r?.classList.toggle("active")}),e.querySelectorAll(".header-nav a").forEach(n=>{n.addEventListener("click",()=>{r?.classList.remove("active")})}),e}function g(e){const t=document.createElement("section");return t.className="hero section",t.innerHTML=`
    <div class="container hero-content">
      <img src="/images/LogoProfile.png" alt="${e.name}" class="hero-logo" />
      
      <div>
        <h1 class="hero-title">${e.name}</h1>
        <p class="hero-subtitle">${e.title}</p>
        <p class="hero-tagline">${e.tagline}</p>
      </div>
      
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View Projects
        </a>
        
        <a href="${e.resumeUrl}" class="btn btn-secondary" download>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  `,t}function f(e){const t=document.createElement("section");return t.id="projects",t.className="section",t.innerHTML=`
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>
      <div class="grid grid-2 grid-3">
        ${e.map((r,o)=>y(r,o)).join("")}
      </div>
    </div>
    
    <div id="codeModal" class="code-modal">
      <div class="code-modal-content">
        <button class="code-modal-close" aria-label="Close">&times;</button>
        <h3 id="codeModalTitle" class="code-modal-title"></h3>
        <pre id="codeModalCode"><code></code></pre>
      </div>
    </div>
  `,setTimeout(()=>w(),0),t}function y(e,t){return`
    <div class="card project-card fade-in">
      <div class="project-video">
        <iframe 
          src="${e.videoUrl}" 
          title="${e.title} Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">${e.title}</h3>
        
        <div class="project-technologies">
          ${e.technologies.map(r=>`<span class="badge">${r}</span>`).join("")}
        </div>
        
        <p class="project-story">${e.story}</p>
        
        <div class="project-code">
          <h4>Code Snippet <span class="code-expand-hint">(click to expand)</span></h4>
          <pre class="code-preview" data-project-index="${t}" data-project-title="${d(e.title)}" data-project-code="${d(e.partialCode)}"><code>${d(e.partialCode)}</code></pre>
        </div>
        
        <div class="project-lessons">
          <h4>Key Learnings</h4>
          <ul>
            ${e.lessonsLearned.map(r=>`<li>${r}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `}function d(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,r=>t[r])}function w(){const e=document.getElementById("codeModal"),t=document.getElementById("codeModalTitle"),r=document.getElementById("codeModalCode")?.querySelector("code"),o=document.querySelector(".code-modal-close"),n=document.querySelectorAll(".code-preview");if(!e||!t||!r||!o)return;n.forEach(i=>{i.addEventListener("click",()=>{const l=i.getAttribute("data-project-title")||"",s=i.getAttribute("data-project-code")||"";t.textContent=l+" - Code Snippet",r.textContent=s,e.classList.add("active"),document.body.style.overflow="hidden"})});const a=()=>{e.classList.remove("active"),document.body.style.overflow=""};o.addEventListener("click",a),e.addEventListener("click",i=>{i.target===e&&a()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("active")&&a()})}function b(e){const t=document.createElement("section");return t.id="resume",t.className="section resume-section",t.innerHTML=`
    <div class="container resume-content">
      <h2 class="section-title">About Me</h2>
      
      <p class="resume-bio">${e.bio}</p>
      
      <div class="resume-actions">
        <a href="${e.resumeUrl}" class="btn btn-primary" download>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Full Resume
        </a>
        
        <a href="${S(e.socials,"LinkedIn")}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          View LinkedIn Profile
        </a>
      </div>
    </div>
  `,t}function S(e,t){return e.find(o=>o.platform===t)?.url||"#"}function C(e){const t=document.createElement("footer");return t.id="contact",t.className="footer",t.innerHTML=`
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Get In Touch</h3>
          <p>I'm currently seeking Summer 2026 internship opportunities in software engineering and quality assurance.</p>
          <p>
            <strong>Email:</strong><br />
            <a href="mailto:${e.email}">${e.email}</a>
          </p>
          
          <div class="footer-socials">
            ${e.socials.map(r=>`
              <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="${r.platform}">
                ${k(r.icon)}
              </a>
            `).join("")}
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="${e.resumeUrl}" download>Download Resume</a></li>
            <li><a href="${m(e.socials,"LinkedIn")}" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li><a href="${m(e.socials,"GitHub")}" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>About This Portfolio</h3>
          <p>This portfolio showcases selected projects demonstrating my skills in software development, quality assurance, and full-stack engineering.</p>
          <p>Built with modern web technologies and deployed on GitHub Pages for fast and reliable access.</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${e.name}. All rights reserved.</p>
        <p class="footer-tech">Built with <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> + TypeScript</p>
      </div>
    </div>
  `,t}function k(e){const t={linkedin:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',github:'<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',email:'<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'};return t[e]||t.email}function m(e,t){return e.find(o=>o.platform===t)?.url||"#"}const E=[{id:"pack-whisperer",title:"Pack Whisperer E-Commerce Platform",videoUrl:"https://www.youtube.com/embed/vw1OgtFQc9A",technologies:["Flutter","Dart","Firebase","Stripe","Cloudflare","Supabase"],story:"Developed a cross-platform e-commerce solution for outdoor gear enthusiasts. The application features a comprehensive product catalog, real-time inventory management, and secure payment processing. Built with Flutter to ensure consistent user experience across iOS, Android, and web platforms.",partialCode:`async function handleStripeWebhook(request, env, corsHeaders) {\r
  try {\r
    let rawBody = await request.text();\r
    // Verify webhook signature\r
    if (env.STRIPE_WEBHOOK_SECRET) {\r
      const signature = request.headers.get('stripe-signature');\r
      if (!signature) {\r
        throw new Error('Missing stripe-signature header');\r
      }\r
      const verified = await verifyStripeSignature(rawBody, signature, env.STRIPE_WEBHOOK_SECRET, 300);\r
      if (!verified.ok) {\r
        return new Response(\r
          JSON.stringify({ error: verified.error || 'Invalid Stripe signature' }),\r
          { status: 400, headers: corsHeaders }\r
        );\r
      }\r
    }\r
\r
    const event = JSON.parse(rawBody || '{}');\r
\r
    if (event.type === 'payment_intent.succeeded') {\r
      const pi = event.data.object;\r
      console.log('[Webhook] Payment intent succeeded');\r
      await maybeCreateOrderFromMetadata(pi, env);\r
    } else if (event.type === 'payment_intent.payment_failed') {\r
      console.log('[Webhook] Payment failed');\r
    } else {\r
      console.log('[Webhook] Unhandled event type:', event.type);\r
    }\r
    \r
    return new Response(\r
      JSON.stringify({ ok: true, received: true }),\r
      { headers: corsHeaders }\r
    );\r
  } catch (error) {\r
    return new Response(\r
      JSON.stringify({ error: error.message }), \r
      { status: 400, headers: corsHeaders }\r
    );\r
  }\r
}`,lessonsLearned:["Serverless Microservices Architecture: Cloudflare Workers for products, payments, orders + API gateway for routing and rate limiting","Cross-platform App: Single Flutter codebase supporting Android, iOS, and Web","Tech Stack Integration: Firebase + Cloudflare Workers + Stripe payments","Real-time Inventory Management: CRUD operations for products with immediate updates","Order Management Panel: Order status updates, tracking, admin oversight"]},{id:"crypto-idle-game",title:"Crypto Idle Mining Game with ApexCharts",videoUrl:"https://www.youtube.com/embed/AOtVhV-CdII",technologies:["HTML5","CSS","JavaScript","ApexCharts","LocalStorage"],story:"Built an idle mining game featuring tier-based progression and real-time data visualization. Implemented ApexCharts for displaying mining rates, currency accumulation, and tier progression. Demonstrated Software Development Life Cycle principles including requirements analysis, design, implementation, testing, and maintenance.",partialCode:`/**\r
 * Start live updates for charts and stats\r
 */\r
function startLiveUpdates() {\r
  liveUpdateInterval = setInterval(() => {\r
    // Update Hash Power chart\r
    if (hashPowerChart && gameState.history.hashRate.length > 0) {\r
      const latestData = gameState.history.hashRate.map(point => ({\r
        x: point.x,\r
        y: point.y\r
      }));\r
      hashPowerChart.updateSeries([{\r
        data: latestData\r
      }]);\r
    }\r
\r
    // Update Production Rate chart\r
    if (productionRateChart && gameState.history.cryptoRate.length > 0) {\r
      const latestCryptoData = gameState.history.cryptoRate.map(point => ({\r
        x: point.x,\r
        y: point.y\r
      }));\r
      productionRateChart.updateSeries([{\r
        data: latestCryptoData\r
      }]);\r
    }\r
\r
    // Update Crypto Balance chart\r
    if (cryptoBalanceChart && gameState.history.cryptoBalance.length > 0) {\r
      const latestBalanceData = gameState.history.cryptoBalance.map(point => ({\r
        x: point.x,\r
        y: point.y\r
      }));\r
      cryptoBalanceChart.updateSeries([{\r
        data: latestBalanceData\r
      }]);\r
    }\r
\r
    // Update live stats display\r
    const hashRate = calculateHashRate(gameState);\r
    const difficulty = calculateDifficulty(gameState);\r
    const cryptoPerSec = calculateCyptoPerSecond(hashRate, difficulty);\r
\r
    const liveBalanceEl = document.getElementById('liveBalance');\r
    const liveRateEl = document.getElementById('liveRate');\r
    const liveHashEl = document.getElementById('liveHash');\r
\r
    if (liveBalanceEl) liveBalanceEl.textContent = formatNumber(gameState.crypto);\r
    if (liveRateEl) liveRateEl.textContent = formatNumber(cryptoPerSec, 6);\r
    if (liveHashEl) liveHashEl.textContent = formatHashRate(hashRate);\r
  }, 1000); // Update every second\r
}\r
\r
/**\r
 * Stop live updates\r
 */\r
function stopLiveUpdates() {\r
  if (liveUpdateInterval) {\r
    clearInterval(liveUpdateInterval);\r
    liveUpdateInterval = null;\r
  }\r
}`,lessonsLearned:["Persistent Game State: Implemented localStorage save/load system to preserve player progress across sessions","Multi-view Architecture: Created separate views (Main, Upgrades, Live Stats) with smooth view switching","ApexCharts Integration: Implemented three live-updating charts (Hash Power, Production Rate, Balance) using a third-party library","Vanilla JavaScript: No frameworks, pure DOM manipulation and event handling for lightweight performance"]},{id:"crypto-idle-game",title:"Crypto Idle Mining Game with ApexCharts",videoUrl:"https://www.youtube.com/embed/AOtVhV-CdII",technologies:["JavaScript","ApexCharts","HTML5","CSS3","LocalStorage"],story:"Built an idle mining game featuring tier-based progression and real-time data visualization. Implemented ApexCharts for displaying mining rates, currency accumulation, and tier progression. Demonstrated Software Development Life Cycle principles including requirements analysis, design, implementation, and testing.",partialCode:`// ApexCharts Integration for Real-time Mining Data
const options = {
  chart: {
    type: 'area',
    animations: { enabled: true, dynamicAnimation: { speed: 1000 } }
  },
  series: [{
    name: 'Mining Rate',
    data: miningData
  }],
  xaxis: { type: 'datetime' },
  yaxis: { title: { text: 'Coins/Second' } }
};

const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();

// Update chart with new mining data
setInterval(() => {
  chart.updateSeries([{ data: getCurrentMiningData() }]);
}, 1000);`,lessonsLearned:["Real-time data visualization techniques using ApexCharts library","Game mechanic design for engaging idle gameplay experiences","LocalStorage management for persistent game state","Performance optimization for continuous chart updates"]}],L="Ema Guillen",M="Software Engineering Student",I="emajguillen@gmail.com",x="Building Quality Software | QA Enthusiast | Full-Stack Developer",B="Software Engineering student at BYU-Idaho. Passionate about software quality, testing automation, and building robust applications. Currently seeking Summer 2026 internship opportunities.",P=[{platform:"LinkedIn",url:"https://www.linkedin.com/in/ema-guillen/",icon:"linkedin"},{platform:"GitHub",url:"https://github.com/ejgdr",icon:"github"},{platform:"Email",url:"mailto:emajguillen@gmail.com",icon:"email"}],R="/resume/EmaGuillen_Resume.pdf",u={name:L,title:M,email:I,tagline:x,bio:B,socials:P,resumeUrl:R},h=document.querySelector("#app");h.innerHTML="";function H(){const e=v(),t=g(u),r=f(E),o=b(u),n=C(u);h.append(e,t,r,o,n),document.querySelectorAll('a[href^="#"]').forEach(l=>{l.addEventListener("click",function(s){s.preventDefault();const c=s.currentTarget.getAttribute("href");if(c&&c!=="#"){const p=document.querySelector(c);p&&p.scrollIntoView({behavior:"smooth",block:"start"})}})});const a={threshold:.1,rootMargin:"0px 0px -50px 0px"},i=new IntersectionObserver(l=>{l.forEach(s=>{s.isIntersecting&&(s.target.classList.add("fade-in"),i.unobserve(s.target))})},a);document.querySelectorAll(".card").forEach(l=>{i.observe(l)})}H();console.log("🚀 Portfolio loaded successfully!");console.log("Built with Vite + TypeScript");
