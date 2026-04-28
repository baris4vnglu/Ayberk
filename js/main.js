// Header scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('header')?.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger menu
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.getElementById('nav')?.classList.toggle('open');
});

// Hero search
function heroSearch() {
  const q = document.getElementById('heroSearch')?.value || '';
  const cat = document.getElementById('heroCategory')?.value || '';
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (cat) params.set('cat', cat);
  window.location.href = `pages/is-ilanlari.html?${params.toString()}`;
}

document.getElementById('heroSearch')?.addEventListener('keydown', e => {
  if (e.key === 'Enter') heroSearch();
});

// Render featured jobs on homepage
function renderFeaturedJobs() {
  const container = document.getElementById('featuredJobs');
  if (!container || typeof JOBS === 'undefined') return;

  const featured = JOBS.slice(0, 6);
  container.innerHTML = featured.map(job => jobCardHTML(job)).join('');
}

function jobCardHTML(job) {
  const badgeClass = job.panel === 'skilled' ? 'badge--skilled' : job.panel === 'investor' ? 'badge--investor' : 'badge--regular';
  const panelLabel = job.panel === 'skilled' ? 'Nitelikli' : job.panel === 'investor' ? 'Yatırım' : 'Genel';
  return `
    <div class="job-card" onclick="window.location.href='pages/is-ilanlari.html'">
      <div class="job-card__header">
        <div class="job-card__company">
          <div class="job-card__logo">${job.companyInitial}</div>
          <div>
            <div class="job-card__company-name">${job.company}</div>
            <div class="job-card__location">📍 ${job.location}</div>
          </div>
        </div>
        <span class="job-card__badge ${badgeClass}">${panelLabel}</span>
      </div>
      <div class="job-card__title">${job.title}</div>
      <div class="job-card__desc">${job.desc}</div>
      <div class="job-card__footer">
        <div class="job-card__meta">
          <span class="job-card__tag">🕐 ${job.type}</span>
          <span class="job-card__tag">📅 ${job.posted}</span>
        </div>
        <div class="job-card__salary">${job.salary}</div>
      </div>
    </div>`;
}

// Init homepage
renderFeaturedJobs();
