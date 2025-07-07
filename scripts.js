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
