const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const bold = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

document.getElementById("news-list").innerHTML = NEWS.map(n =>
  `<p class="news-item"><strong>${n.date}:</strong> ${n.html}</p>`).join("");

document.getElementById("pub-list").innerHTML = PUBLICATIONS.map(p => `
  <article class="pub">
    <h3>${esc(p.title)}</h3>
    <p class="authors">${bold(p.authors)}</p>
    <p class="venue"><em>${esc(p.venue)}</em></p>
    <p class="pub-links">${p.links.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</p>
  </article>`).join("");

document.getElementById("project-list").innerHTML = PROJECTS.map(p => `
  <a class="project" href="${p.url}" target="_blank" rel="noopener">
    <div class="logo">${p.logoHtml || `<img src="${p.logo}" alt="${esc(p.name)} logo">`}</div>
    <p>${esc(p.desc)}</p>
  </a>`).join("");

document.getElementById("activity-list").innerHTML = ACTIVITIES.map(a =>
  `<p class="activity"><strong>${a.date}</strong>: I participated as a <span class="role-underline">${a.role}</span> at <a href="${a.url}" target="_blank" rel="noopener">${esc(a.name)}</a>.</p>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme
    ? root.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const next = dark ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});
