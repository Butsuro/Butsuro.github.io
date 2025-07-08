function scrollCustomSlider(direction) {
  const slider = document.getElementById('customSlider');
  const scrollAmount = slider.clientWidth; // scroll by one full visible slide width

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}