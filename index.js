// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

// ================= NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10,10,20,0.85)";
  } else {
    navbar.style.background = "rgba(10,10,20,0.6)";
  }
});
// ================= FAST COUNTER ANIMATION =================
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const speed = 60; // 🔥 smaller = faster (10–15 best)

  const update = () => {
    const increment = Math.ceil(target / speed);
    count += increment;

    if (count >= target) {
      counter.innerText = target;
      counter.classList.add("done");
    } else {
      counter.innerText = count;
      requestAnimationFrame(update);
    }
  };

  update();
};

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => counterObserver.observe(counter));

// ================= CONTACT FORM (FRONTEND ONLY) =================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

// ================= GLOBAL SCROLL ANIMATIONS =================
const revealSections = document.querySelectorAll(".reveal");
const revealItems = document.querySelectorAll(".reveal-item");

// Section reveal
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealSections.forEach(section => sectionObserver.observe(section));

// Staggered reveal
const itemObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, i * 90);
        itemObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  if (!menuToggle || !navMenu || !menuOverlay) {
    console.log("Hamburger elements missing");
    return;
  }

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  menuOverlay.addEventListener("click", closeMenu);

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  }

});




