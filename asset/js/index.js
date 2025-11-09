document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you ${name}! Your message has been sent.`);
    form.reset();
  });
});



