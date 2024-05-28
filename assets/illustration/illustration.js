// top button appears on scroll + disappears at top/bottom of screen
let backToTopButton = document.getElementById("back-to-top");

window.onscroll = function() {
    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) &&
        (window.innerHeight + window.scrollY) < document.documentElement.scrollHeight - 20) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

backToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// project dividers appear/disappear on scroll
document.addEventListener("scroll", function() {
    const projectDividers = document.querySelectorAll('.project-divider');
    const windowHeight = window.innerHeight;
    const threshold = 300;

    projectDividers.forEach(divider => {
      const rect = divider.getBoundingClientRect();
      if (rect.top <= windowHeight - threshold && rect.bottom >= threshold) {
        divider.classList.add('visible');
        divider.classList.remove('hidden');
      } else {
        divider.classList.add('hidden');
        divider.classList.remove('visible');
      }
    });
  });
