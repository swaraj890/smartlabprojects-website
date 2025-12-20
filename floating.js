import { contactDetails } from './contact.js';

// Inject styles for floating widget
const style = document.createElement('style');
style.textContent = `
  .floating-contact { position: fixed; right: 20px; bottom: 24px; z-index: 1200; }
  .fc-btn { width:56px;height:56px;border-radius:50%;background:linear-gradient(90deg,#25D366,#128C7E);display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 8px 18px rgba(16,12,54,0.12);cursor:pointer;border:none }
  .fc-menu { position: absolute; right: 0; bottom: 74px; display:none; flex-direction:column; gap:10px }
  .fc-item { width:44px;height:44px;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(16,12,54,0.08);cursor:pointer }
  .fc-item svg{width:22px;height:22px}
`;
document.head.appendChild(style);

// Build widget
const container = document.createElement('div');
container.className = 'floating-contact';

const menu = document.createElement('div');
menu.className = 'fc-menu';

const createItem = (href, svgHtml, alt) => {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  a.rel = 'noreferrer noopener';
  const item = document.createElement('div');
  item.className = 'fc-item';
  item.innerHTML = svgHtml || `<span style="font-size:14px">${alt ? alt.charAt(0) : '?'}</span>`;
  a.appendChild(item);
  return a;
};

// WhatsApp primary button (use contactDetails.social.whatsapp)
const waHref = (contactDetails && contactDetails.social && contactDetails.social.whatsapp) || `https://wa.me/${(contactDetails && contactDetails.phones && contactDetails.phones[0]) || ''}`;
const waBtn = document.createElement('a');
waBtn.href = waHref;
waBtn.target = '_blank';
waBtn.rel = 'noreferrer noopener';
waBtn.className = 'fc-btn';
waBtn.title = 'Chat on WhatsApp';
waBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M20.52 3.48A11.83 11.83 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.86 1.48 5.55L.5 23.5l6.99-2.14A11.79 11.79 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.82-1.1-5.44-3-7.52z"/><path fill="#25D366" d="M17 14.5c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.18 0-.47.06-.72.33-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.15.18 1.94 3.1 4.7 4.33 2.76 1.24 2.76.83 3.26.78.5-.05 1.62-.65 1.85-1.28.23-.63.23-1.17.16-1.28-.07-.12-.27-.18-.57-.33z"/></svg>`;

// Other social icons (LinkedIn, YouTube, Email, Instagram)
const items = [];
if (contactDetails && contactDetails.social) {
  const s = contactDetails.social;
  if (s.linkedin) items.push({ href: s.linkedin, svg: `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#0A66C2" d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.78v2.2h.07c.66-1.25 2.28-2.57 4.7-2.57C22.83 7.63 24 10.07 24 14.2V24h-5v-8.2c0-2.08-.04-4.75-2.88-4.75-2.89 0-3.33 2.25-3.33 4.57V24H8V8z"/></svg>` });
  if (s.youtube) items.push({ href: s.youtube, svg: `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#FF0000" d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.9-1.7-.9-2.1-1-2.9-.2-7.25-.2-7.25-.2s-4.36 0-7.25.2c-.4.05-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S.3 8 .3 9.8v1.4C.3 13.9.5 15.6.5 15.6s.2 1.7.8 2.4c.8.9 1.8.9 2.3 1 1.7.12 7 .2 7 .2s4.36 0 7.25-.2c.4-.05 1.3-.1 2.1-1 .6-.7.8-2.4.8-2.4s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6z"/></svg>` });
  if (s.email) items.push({ href: s.email, svg: `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#444" d="M12 13.5L0 6V18a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6l-12 7.5zM12 11L24 4H0l12 7z"/></svg>` });
  if (s.instagram) items.push({ href: s.instagram, svg: `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#E4405F" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zM18.8 5.2a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1z"/></svg>` });
}

items.forEach(it => {
  const a = createItem(it.href, it.svg, 'S');
  menu.appendChild(a);
});

// toggle menu on click of main button
waBtn.addEventListener('click', (e) => {
  // allow normal navigation when clicking the anchor
});

// secondary button to expand (when clicked show other icons)
const expandBtn = document.createElement('button');
expandBtn.type = 'button';
expandBtn.className = 'fc-btn';
expandBtn.style.background = '#fff';
expandBtn.style.color = '#333';
expandBtn.style.marginTop = '10px';
expandBtn.title = 'More contact options';
expandBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16l-6-6h12l-6 6z" fill="#333"/></svg>';
expandBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

container.appendChild(menu);
container.appendChild(waBtn);
container.appendChild(expandBtn);
document.body.appendChild(container);
import { contactDetails } from './contact.js';

// Inject styles for floating widget
const style = document.createElement('style');
style.textContent = `
  .floating-contact { position: fixed; right: 20px; bottom: 24px; z-index: 1200; }
  .fc-btn { width:56px;height:56px;border-radius:50%;background:linear-gradient(90deg,#25D366,#128C7E);display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 8px 18px rgba(16,12,54,0.12);cursor:pointer;border:none }
  .fc-menu { position: absolute; right: 0; bottom: 74px; display:none; flex-direction:column; gap:10px }
  .fc-item { width:44px;height:44px;border-radius:8px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 14px rgba(16,12,54,0.08);cursor:pointer }
  .fc-item img{width:22px;height:22px}
`;
document.head.appendChild(style);

// Build widget
const container = document.createElement('div');
container.className = 'floating-contact';

const menu = document.createElement('div');
menu.className = 'fc-menu';

const createItem = (href, svgHtml, alt) => {
  const a = document.createElement('a');
  a.href = href;
  a.target = '_blank';
  a.rel = 'noreferrer noopener';
  const item = document.createElement('div');
  item.className = 'fc-item';
  item.innerHTML = svgHtml || `<span style="font-size:14px">${alt ? alt.charAt(0) : '?'}</span>`;
  a.appendChild(item);
  return a;
};

// WhatsApp primary button
const waHref = social.whatsappLink || `https://wa.me/${social.whatsappNumber}`;
const waBtn = document.createElement('a');
// WhatsApp primary button (use contactDetails.social.whatsapp)
const waHref = (contactDetails && contactDetails.social && contactDetails.social.whatsapp) || `https://wa.me/${(contactDetails && contactDetails.phones && contactDetails.phones[0]) || ''}`;
const waBtn = document.createElement('a');
waBtn.target = '_blank';
waBtn.rel = 'noreferrer noopener';
waBtn.className = 'fc-btn';
waBtn.title = 'Chat on WhatsApp';
waBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.83 11.83 0 0 0 12 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.51 3.86 1.48 5.55L.5 23.5l6.99-2.14A11.79 11.79 0 0 0 12 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.82-1.1-5.44-3-7.52z" fill="#fff"/><path d="M17 14.5c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.65-1.56-.89-2.15-.23-.56-.47-.48-.65-.49-.17-.01-.36-.01-.55-.01-.18 0-.47.06-.72.33-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.15.18 1.94 3.1 4.7 4.33 2.76 1.24 2.76.83 3.26.78.5-.05 1.62-.65 1.85-1.28.23-.63.23-1.17.16-1.28-.07-.12-.27-.18-.57-.33z" fill="#25D366"/></svg>`;

// Other social icons (LinkedIn, YouTube, Email, Instagram)
const items = [];
if (social.linkedin) items.push({ href: social.linkedin, alt: 'LinkedIn' });
if (social.youtube) items.push({ href: social.youtube, alt: 'YouTube' });
if (social.email) items.push({ href: `mailto:${social.email}`, alt: 'Email' });
if (social.instagram) items.push({ href: social.instagram, alt: 'Instagram' });

items.forEach(it => {
  const a = createItem(it.href, it.alt, it.alt);
  // lightweight label icon via emoji fallback
  a.querySelector('img').src = 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22'><rect width='22' height='22' rx='4' fill='#ffffff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='#333'>${it.alt.charAt(0)}</text></svg>`);
  menu.appendChild(a);
});

// toggle menu on click of main button
waBtn.addEventListener('click', (e) => {
  // allow normal navigation when clicking the anchor
});

// secondary button to expand (when clicked show other icons)
const expandBtn = document.createElement('button');
expandBtn.type = 'button';
expandBtn.className = 'fc-btn';
expandBtn.style.background = '#fff';
expandBtn.style.color = '#333';
expandBtn.style.marginTop = '10px';
expandBtn.title = 'More contact options';
expandBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16l-6-6h12l-6 6z" fill="#333"/></svg>';
expandBtn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

container.appendChild(menu);
container.appendChild(waBtn);
container.appendChild(expandBtn);
document.body.appendChild(container);
