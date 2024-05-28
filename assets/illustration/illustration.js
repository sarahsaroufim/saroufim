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
