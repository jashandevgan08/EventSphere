document.querySelectorAll('.learn-more').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const card = btn.closest('.card');
    card.classList.toggle('expanded');
    btn.textContent = card.classList.contains('expanded') ? "Show Less" : "Learn More";
  });
});
