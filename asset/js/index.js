// document.addEventListener("DOMContentLoaded", () => {
//     const target = document.querySelector("#typing-text");

//     // Lazy-run when visible (saves main-thread time)
//     const observer = new IntersectionObserver((entries, obs) => {
//       if (entries[0].isIntersecting) {
//         new TypeIt("#typing-text", {
//           speed: 90,
//           waitUntilVisible: true, 
//           loop: false,
//           afterComplete: (instance) => instance.destroy()
//         }).go();
//         obs.disconnect();
//       }
//     });

//     observer.observe(target);
//   });



//    function animateCounter(el, target, duration = 2000) {
//             let start = 0;
//             const increment = target / (duration / 16);
//             let current = start;
            
//             const timer = setInterval(() => {
//                 current += increment;
//                 if (current >= target) {
//                     el.textContent = Math.floor(target);
//                     clearInterval(timer);
//                 } else {
//                     el.textContent = Math.floor(current);
//                 }
//             }, 16);
//         }

//         const observerOptions = {
//             threshold: 0.3,
//             rootMargin: '0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting && !entry.target.dataset.animated) {
//                     const counterEl = entry.target.querySelector('.counter');
//                     const target = parseInt(entry.target.dataset.target);
                    
//                     setTimeout(() => {
//                         animateCounter(counterEl, target);
//                     }, 200);
                    
//                     entry.target.dataset.animated = 'true';
//                 }
//             });
//         }, observerOptions);

//         document.querySelectorAll('.report-stat-card').forEach(card => {
//             observer.observe(card);
//         });


//         // FAQ toggle
// const faqItems = document.querySelectorAll('.faq-item');
// faqItems.forEach(item => {
//   item.querySelector('.faq-question').addEventListener('click', () => {
//     const isActive = item.classList.contains('active');
//     faqItems.forEach(i => i.classList.remove('active'));
//     if (!isActive) item.classList.add('active');
//   });
// });

// // Modal
// const faqModal = document.getElementById('faq-modal-overlay');
// const openBtn = document.getElementById('faq-open-modal');
// const closeBtn = document.getElementById('faq-close-modal');
// const form = document.getElementById('faq-contact-form');

// openBtn.addEventListener('click', () => {
//   faqModal.classList.add('show');
//   document.body.style.overflow = 'hidden';
// });

// closeBtn.addEventListener('click', () => {
//   faqModal.classList.remove('show');
//   document.body.style.overflow = 'auto';
// });

// faqModal.addEventListener('click', e => {
//   if (e.target === faqModal) {
//     faqModal.classList.remove('show');
//     document.body.style.overflow = 'auto';
//   }
// });

// // Form submission
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = {
//     name: document.getElementById('faq-fullname').value,
//     email: document.getElementById('faq-email').value,
//     message: document.getElementById('faq-message').value
//   };
//   console.log('Form Data:', data);
//   alert('Thank you! Your message has been sent successfully.');
//   form.reset();
//   faqModal.classList.remove('show');
//   document.body.style.overflow = 'auto';
// });


(() => {
  document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       Typing Effect
    --------------------------------*/
    const target = document.querySelector("#typing-text");
    if (target) {
      const typeObserver = new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) {
          new TypeIt("#typing-text", {
            speed: 90,
            waitUntilVisible: true,
            loop: false,
            afterComplete: (instance) => instance.destroy(),
          }).go();
          obs.disconnect();
        }
      });
      typeObserver.observe(target);
    }

    /* -------------------------------
       Counter Animation
    --------------------------------*/
    function animateCounter(el, target, duration = 2000) {
      let start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = Math.floor(target);
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(current);
        }
      }, 16);
    }

    const observerOptions = { threshold: 0.3, rootMargin: "0px" };
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const counterEl = entry.target.querySelector(".counter");
          const target = parseInt(entry.target.dataset.target);
          setTimeout(() => animateCounter(counterEl, target), 200);
          entry.target.dataset.animated = "true";
        }
      });
    }, observerOptions);

    document.querySelectorAll(".report-stat-card").forEach((card) => {
      statObserver.observe(card);
    });

    /* -------------------------------
       FAQ Toggle
    --------------------------------*/
    const faqItems = document.querySelectorAll(".faq-item");
    console.log(faqItems)
    if (faqItems.length > 0) {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        if (question) {
          question.addEventListener("click", () => {
            faqItems.forEach((i) => i.classList.remove("active"));
            const isActive = item.classList.contains("active");
            if (isActive) item.classList.add("active");
          });
        }
      });
    }

    /* -------------------------------
       Modal Handling
    --------------------------------*/
    const faqModal = document.getElementById("faq-modal-overlay");
    const openBtn = document.getElementById("faq-open-modal");
    const closeBtn = document.getElementById("faq-close-modal");
    const form = document.getElementById("faq-contact-form");

    if (faqModal && openBtn && closeBtn && form) {
      openBtn.addEventListener("click", () => {
        faqModal.classList.add("show");
        document.body.style.overflow = "hidden";
      });

      closeBtn.addEventListener("click", () => {
        faqModal.classList.remove("show");
        document.body.style.overflow = "auto";
      });

      faqModal.addEventListener("click", (e) => {
        if (e.target === faqModal) {
          faqModal.classList.remove("show");
          document.body.style.overflow = "auto";
        }
      });

      /* -------------------------------
         Form Submission
      --------------------------------*/
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          name: document.getElementById("faq-fullname").value,
          email: document.getElementById("faq-email").value,
          message: document.getElementById("faq-message").value,
        };
        console.log("Form Data:", data);
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
        faqModal.classList.remove("show");
        document.body.style.overflow = "auto";
      });
    }

  });
})();
