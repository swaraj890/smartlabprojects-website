import { contactDetails } from './contact.js';
import { projects } from './projects.js';
import { formFields } from './formFields.js';

let prices = {};
fetch('./prices.json').then(r => r.json()).then(data => { prices = data; });

// --- CONTACT SECTION ---
function renderContactInfo() {
  const contactInfo = document.querySelector('.contact-info');
  if (!contactInfo) return;
  contactInfo.innerHTML = `
    <h3>Let's Talk About Your Project</h3>
    <div class="contact-details">
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <div class="contact-text"><h4>Email Us</h4><p>${contactDetails.email}</p></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-phone-alt"></i></div>
        <div class="contact-text"><h4>Call Us</h4><p>${contactDetails.phones.join(' / ')}</p></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
        <div class="contact-text"><h4>Based In</h4><p>${contactDetails.address}</p></div>
      </div>
    </div>
    <h3 style="margin-top: 30px;">Follow Us</h3>
    <div class="social-links">
      <a href="${contactDetails.social.linkedin}" class="social-link"><i class="fab fa-linkedin-in"></i></a>
      <a href="${contactDetails.social.twitter}" class="social-link"><i class="fab fa-twitter"></i></a>
      <a href="${contactDetails.social.github}" class="social-link"><i class="fab fa-github"></i></a>
      <a href="${contactDetails.social.instagram}" class="social-link"><i class="fab fa-instagram"></i></a>
    </div>
  `;
}

// ========================================
// PROJECTS SECTION - DOMAIN TILES & PROJECT CARDS
// ========================================

function renderDomainsWithProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  // Get unique domains from projects
  const domains = Array.from(new Set(projects.map(p => p.domain)));
  let selectedDomain = 'All';

  // Create Domain Tiles Container (Rectangular Box)
  const domainBox = document.createElement('div');
  domainBox.className = 'domain-tiles-container';

  const tilesWrapper = document.createElement('div');
  tilesWrapper.className = 'domain-tiles-wrapper';
  domainBox.appendChild(tilesWrapper);
  grid.appendChild(domainBox);

  // Create Projects Display Area
  const projectsArea = document.createElement('div');
  projectsArea.className = 'projects-display-area';
  grid.appendChild(projectsArea);

  // Render Domain Tiles
  function renderDomainTiles() {
    tilesWrapper.innerHTML = '';

    // "All" tile
    const allTile = document.createElement('div');
    allTile.className = `domain-tile ${selectedDomain === 'All' ? 'active' : ''}`;
    allTile.textContent = 'All Projects';
    allTile.onclick = () => {
      selectedDomain = 'All';
      renderDomainTiles();
      renderProjectCards();
    };
    tilesWrapper.appendChild(allTile);

    // Individual domain tiles
    domains.forEach(domain => {
      const tile = document.createElement('div');
      tile.className = `domain-tile ${selectedDomain === domain ? 'active' : ''}`;
      tile.textContent = domain;
      tile.onclick = () => {
        selectedDomain = domain;
        renderDomainTiles();
        renderProjectCards();
      };
      tilesWrapper.appendChild(tile);
    });
  }

  // Render Project Cards
  function renderProjectCards() {
    projectsArea.innerHTML = '';

    // Filter projects based on selected domain
    let filteredProjects = selectedDomain === 'All'
      ? projects
      : projects.filter(p => p.domain === selectedDomain);

    // Take only top 6 projects
    const displayProjects = filteredProjects.slice(0, 6);

    if (displayProjects.length === 0) {
      projectsArea.innerHTML = '<div style="text-align:center; padding: 60px 20px; color: #999; font-size: 1.1rem;">No projects found in this category.</div>';
      return;
    }

    // Create grid row
    const row = document.createElement('div');
    row.className = 'projects-row';

    // Create project cards
    displayProjects.forEach(project => {
      const card = createProjectCard(project);
      row.appendChild(card);
    });

    projectsArea.appendChild(row);

    // Show "Show More" button if there are more than 6 projects
    if (filteredProjects.length > 6) {
      const btnContainer = document.createElement('div');
      btnContainer.className = 'show-more-container';

      const moreBtn = document.createElement('button');
      moreBtn.className = 'btn btn-primary';
      moreBtn.textContent = `Show All ${filteredProjects.length} Projects`;
      moreBtn.onclick = () => {
        const domainParam = selectedDomain === 'All' ? '' : selectedDomain;
        window.location.href = `project-list.html?domain=${encodeURIComponent(domainParam)}`;
      };

      btnContainer.appendChild(moreBtn);
      projectsArea.appendChild(btnContainer);
    }
  }

  // Create individual project card
  function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    const projectIndex = projects.indexOf(project);
    const detailUrl = `project-details.html?id=${projectIndex}`;

    const price = prices[project.difficulty]
      ? `₹${prices[project.difficulty]}`
      : 'Contact for Price';

    const description = project.description
      ? (project.description.length > 120
        ? project.description.substring(0, 120) + '...'
        : project.description)
      : 'No description available';

    // Wrap in anchor for SEO
    card.innerHTML = `
      <a href="${detailUrl}" style="text-decoration:none; color:inherit; display:flex; flex-direction:column; height:100%;">
        <div class="project-image">
          <img src="${project.image || 'https://via.placeholder.com/400x200?text=Project'}" 
               alt="${project.title} - AI Project Guidance"
               onerror="this.src='https://via.placeholder.com/400x200?text=Project'">
          <span class="project-category">${project.domain}</span>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${description}</p>
          <div class="project-footer">
            <span class="project-price">${price}</span>
            <span class="details-btn">View Details</span>
          </div>
        </div>
      </a>
    `;

    return card;
  }

  // Initial render
  renderDomainTiles();
  renderProjectCards();
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderContactInfo();
  // populate domain select from projects and wire up form interactions
  const domainSelect = document.getElementById('domain');
  const projectTypeSelect = document.getElementById('project_type');
  const form = document.getElementById('projectForm');

  function populateDomainSelect() {
    if (!domainSelect) return;
    const unique = Array.from(new Set(projects.map(p => p.domain)));
    domainSelect.innerHTML = '<option value="">Select domain</option>';
    unique.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      domainSelect.appendChild(opt);
    });
    // option for custom/other domain
    const otherOpt = document.createElement('option');
    otherOpt.value = 'Other';
    otherOpt.textContent = 'Other (Custom domain)';
    domainSelect.appendChild(otherOpt);
  }

  function populateProjectTypesFor(domain) {
    if (!projectTypeSelect) return;
    projectTypeSelect.innerHTML = '<option value="">Select project</option>';
    // if domain is 'Other' we hide the project type select (handled by caller)
    if (!domain || domain === 'Other') return;
    const filtered = projects.filter(p => p.domain === domain);
    filtered.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p.title;
      opt.textContent = p.title;
      projectTypeSelect.appendChild(opt);
    });
  }

  if (domainSelect) {
    populateDomainSelect();
    domainSelect.addEventListener('change', (e) => {
      const domainVal = e.target.value;
      // show or hide project type group depending on whether domain is Other
      const projectTypeGroup = document.getElementById('projectTypeGroup');
      if (projectTypeGroup) projectTypeGroup.style.display = (domainVal === 'Other') ? 'none' : 'block';
      // handle custom domain input visibility
      const customGroup = document.getElementById('customDomainGroup');
      const customGroupDetails = document.getElementById('customDomainGroupDetails');
      if (domainVal === 'Other') {
        if (customGroup) customGroup.style.display = 'block';
        if (customGroupDetails) customGroupDetails.style.display = 'block';
      } else {
        if (customGroup) customGroup.style.display = 'none';
        if (customGroupDetails) customGroupDetails.style.display = 'none';
      }
      populateProjectTypesFor(domainVal);
    });
  }

  if (projectTypeSelect) {
    projectTypeSelect.addEventListener('change', (e) => {
      // No 'Other' option for project types anymore; nothing to do here.
    });
  }

  // form submit: set timestamp and handle safely (no-op if placeholder action)
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      // HTML5 validation
      if (!form.checkValidity()) { form.reportValidity(); return; }
      const ts = document.getElementById('timestamp');
      if (ts) ts.value = new Date().toISOString();
      const successEl = document.getElementById('formSuccess');

      const payload = {};
      new FormData(form).forEach((v, k) => { payload[k] = v; });

      // Send to local server endpoint (when running locally)
      try {
        const endpoint = '/send-local'; // Relative path works if served by server.js

        fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
          .then(async r => {
            const j = await r.json();
            if (!r.ok) throw new Error(j.error || 'Server error');
            console.log('send result', j);
            if (successEl) { successEl.style.display = 'block'; successEl.textContent = 'Message sent successfully!'; }
            form.reset();
            if (successEl) successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => { if (successEl) successEl.style.display = 'none'; }, 5000);
          })
          .catch(e => {
            console.warn('send failed', e);
            alert('Failed to send message: ' + e.message + '. \n\nEnsure the local server is running (npm run start-server).');
          });
      } catch (err) {
        console.warn('Send failed', err);
        alert('Unexpected error: ' + err.message);
      }
    });
  }
  // Wait for prices to load, then render
  if (Object.keys(prices).length > 0) {
    renderDomainsWithProjects();
  } else {
    fetch('./prices.json').then(r => r.json()).then(data => {
      prices = data;
      renderDomainsWithProjects();
    });
  }
});
