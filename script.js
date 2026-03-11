/**
 * Portfolio - Dynamic Content & Navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  loadProfile();
  loadPosts();
  loadAbout();
  loadProjects();
  loadExperience();
  initNavigation();
  initMobileMenu();
});

// ============================================
// Profile Loading
// ============================================
function loadProfile() {
  // Nav avatar
  const navAvatar = document.getElementById("nav-avatar");
  if (navAvatar && bio.avatar) navAvatar.textContent = bio.avatar;

  // Mobile sidebar
  const mobileAvatar = document.getElementById("mobile-avatar");
  const mobileName = document.getElementById("mobile-name");
  const mobileTagline = document.getElementById("mobile-tagline");
  const mobileBadges = document.getElementById("mobile-badges");

  if (mobileAvatar && bio.avatar) mobileAvatar.textContent = bio.avatar;
  if (mobileName) mobileName.innerHTML = `${bio.name}<span>_</span>`;
  if (mobileTagline) mobileTagline.textContent = bio.tagline;
  if (mobileBadges)
    mobileBadges.innerHTML = generateBadgesHTML(bio.badges, true);

  // Main profile header
  const profileAvatar = document.getElementById("profile-avatar");
  const profileName = document.getElementById("profile-name");
  const profileTagline = document.getElementById("profile-tagline");
  const profileBadges = document.getElementById("profile-badges");

  if (profileAvatar && bio.avatar) profileAvatar.textContent = bio.avatar;
  if (profileName) profileName.textContent = bio.name;
  if (profileTagline) profileTagline.textContent = bio.tagline;
  if (profileBadges) profileBadges.innerHTML = generateBadgesHTML(bio.badges);
}

function generateBadgesHTML(badges, inline = false) {
  return badges
    .map((badge) => {
      const colorStyle = badge.color ? `background:${badge.color}` : "";
      return `<span class="badge"><span class="dot" style="${colorStyle}"></span>${badge.name}</span>`;
    })
    .join("");
}

// ============================================
// Posts Loading
// ============================================
function loadPosts() {
  const latestContainer = document.getElementById("latest-post");
  const otherContainer = document.getElementById("other-stories");

  if (!latestContainer || !otherContainer || !posts) return;

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // First post is the latest
  const latestPost = sortedPosts[0];
  // Rest are other stories
  const otherPosts = sortedPosts.slice(1);

  // Render Latest Post (Featured) - Full content visible
  if (latestPost) {
    latestContainer.innerHTML = `
      <article class="featured-post">
        <div class="fp-header">
          <span class="fp-date">${latestPost.date}</span>
          <h2 class="fp-title">${latestPost.title}</h2>
          <div class="tags">
            ${latestPost.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="fp-content">
          <p>${latestPost.excerpt}</p>
          <p>${latestPost.content}</p>
        </div>
      </article>
    `;
  }

  // Render Other Stories (Horizontal Scroll Section)
  if (otherPosts.length > 0) {
    otherContainer.innerHTML = `
      <div class="other-stories-scroll">
        ${otherPosts
          .map(
            (post) => `
          <article class="os-card">
            <div class="os-header">
              <span class="os-date">${post.date}</span>
              <a href="feed/${post.slug}.html" class="os-title">${post.title}</a>
            </div>
            <div class="os-excerpt">
              <p>${post.excerpt}</p>
            </div>
            <div class="os-footer">
              <div class="tags">
                ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
              <a href="feed/${post.slug}.html" class="os-read-more">Read →</a>
            </div>
          </article>
        `,
          )
          .join("")}
      </div>
    `;
  }
}

// ============================================
// About Loading
// ============================================
function loadAbout() {
  const container = document.getElementById("about-content");
  if (!container || !bio) return;

  container.innerHTML = `
    <p>${bio.description}</p>
    <p>${bio.secondParagraph}</p>
  `;

  // Update resume section too
  const resumeName = document.getElementById("resume-name");
  const resumeTitle = document.getElementById("resume-title");
  if (resumeName) resumeName.textContent = bio.name;
  if (resumeTitle) resumeTitle.textContent = bio.tagline;
}

// ============================================
// Projects Loading
// ============================================
function loadProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !projects) return;

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="pc">
      <div style="font-size:26px;margin-bottom:10px">${project.icon}</div>
      <div style="font-weight:700;margin-bottom:8px">${project.title}</div>
      <div style="color:var(--muted);font-size:13px;line-height:1.6">${project.description}</div>
      <div style="margin-top:12px;display:flex;gap:6px">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

// ============================================
// Experience Loading
// ============================================
function loadExperience() {
  const container = document.getElementById("experience-container");
  if (!container || !experience) return;

  container.innerHTML = experience
    .map(
      (exp) => `
    <div class="ex">
      <div class="eico">${exp.icon}</div>
      <div>
        <div style="font-weight:700;font-size:14px">${exp.title}</div>
        <div style="color:var(--muted);font-size:12px;margin-top:2px">${exp.company} · ${exp.period}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item[data-tab]");
  const tabContents = document.querySelectorAll(".tab-content");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetTab = item.dataset.tab;
      updateActiveNavItem(targetTab);
      showTabContent(targetTab, tabContents);
      closeMobileMenu();
    });
  });
}

function updateActiveNavItem(targetTab) {
  const allNavItems = document.querySelectorAll(".nav-item[data-tab]");
  allNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.tab === targetTab);
  });
}

function showTabContent(targetTab, tabContents) {
  tabContents.forEach((content) => {
    content.style.display =
      content.id === `tab-${targetTab}` ? "block" : "none";
  });
}

// ============================================
// Mobile Menu
// ============================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const overlay = document.getElementById("overlay");

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  if (overlay) overlay.addEventListener("click", closeMobileMenu);
}

function toggleMobileMenu() {
  const mobileSidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");

  if (mobileSidebar) mobileSidebar.classList.toggle("open");
  if (overlay) overlay.classList.toggle("show");
  document.body.style.overflow = mobileSidebar?.classList.contains("open")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  const mobileSidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("overlay");

  if (mobileSidebar) mobileSidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("show");
  document.body.style.overflow = "";
}

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileMenu();
});

// Close menu on window resize to desktop
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 768) closeMobileMenu();
  }, 250);
});
