document.addEventListener("DOMContentLoaded", function () {
    const starContainers = document.querySelectorAll('.stars');
    const starImage = '<img src="/images/icon-star.svg" class="w-4 h-4" alt="Star">';
    starContainers.forEach(container => {
        container.innerHTML = starImage.repeat(5);
    });
});