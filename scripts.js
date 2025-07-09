let currentIndex = 0;

function scrollProjects(direction) {
  const container = document.getElementById("projects");
  const cards = container.querySelectorAll(".card");

  if (cards.length === 0) return;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= cards.length) currentIndex = cards.length - 1;

  const cardWidth = cards[0].offsetWidth;
  container.scrollTo({
    left: cardWidth * currentIndex,
    behavior: 'smooth'
  });
}


document.getElementById("contact-form").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mblyvkvk", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      document.getElementById("form-success").style.display = "block";
      form.reset();
    } else {
      alert("There was a problem submitting your form. Please try again.");
    }
  } catch (error) {
    alert("Something went wrong. Please check your connection and try again.");
  }
});
