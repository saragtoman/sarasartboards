// HERO STAR PARALLAX
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    const starTop = document.querySelector(".star-top");
    const starLeft = document.querySelector(".star-left");
    const starRight = document.querySelector(".star-right");
  
    if (starTop) {
      starTop.style.top = `${-350 + scrollY * 0.2}px`;
    }
  
    if (starLeft) {
      starLeft.style.bottom = `${50 - scrollY * 0.15}px`;
    }
  
    if (starRight) {
      starRight.style.bottom = `${100 - scrollY * 0.15}px`;
    }
  });
  
  // BRAND INFO MOVEMENT
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    document.querySelectorAll(".brand-info").forEach((info) => {
      info.style.transform = `translateY(${scrollY * 0.05}px)`;
    });
  });
  
  // STAR ROTATION
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    document.querySelectorAll(".star").forEach((star) => {
      let baseTransform = "";
  
      if (star.classList.contains("star-top")) {
        baseTransform = "translateX(-50%)";
      }
  
      star.style.transform = `${baseTransform} rotate(${scrollY * 0.05}deg)`;
    });
  });
  
  // HERO INTRO ANIMATION
  window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
  
    if (!hero) return;
  
    hero.classList.add("active");
  });
  
  // ALL DOM-DEPENDENT CODE
  document.addEventListener("DOMContentLoaded", () => {
    console.log("CONNECTED");
  
    // LIGHTBOX
    const galleryItems = document.querySelectorAll(".gallery-item, .brand-item");
    console.log("gallery items found:", galleryItems.length);
  
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        console.log("gallery item clicked");
  
        const img = item.querySelector("img");
        if (!img) return;
  
        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
  
        const lightboxImg = document.createElement("img");
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "";
  
        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);
  
        lightbox.addEventListener("click", () => {
          lightbox.remove();
        });
      });
    });
  
    // SUBPAGE HEADING ANIMATION
    const pageHeading = document.querySelector(".subpage h1");
  
    if (pageHeading) {
      setTimeout(() => {
        pageHeading.classList.add("show");
      }, 200);
    }
  
    // HOMEPAGE SLIDERS
    const sliders = document.querySelectorAll(".slider");
  
    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll(".slide");
      const next = slider.querySelector(".next");
      const prev = slider.querySelector(".prev");
  
      if (!slides.length || !next || !prev) return;
  
      let index = 0;
  
      function showSlide(i) {
        slides.forEach((s) => s.classList.remove("active"));
        slides[i].classList.add("active");
      }
  
      function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
      }
  
      function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      }
  
      next.addEventListener("click", (e) => {
        e.stopPropagation();
        nextSlide();
      });
  
      prev.addEventListener("click", (e) => {
        e.stopPropagation();
        prevSlide();
      });
  
      setInterval(nextSlide, 3000);
      showSlide(index);
    });
  });




  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
  
    if (!hero) return;
  
    hero.classList.add("active");
  });