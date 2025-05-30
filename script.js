document.addEventListener('DOMContentLoaded', function() {
    const readPagesCheckbox = document.getElementById('read-pages');
    const watchMovieCheckbox = document.getElementById('watch-movie');
    const workContributionCheckbox = document.getElementById('work-contribution');
    const goToGymCheckbox = document.getElementById('go-to-gym');
    const readNewsCheckbox = document.getElementById('read-news');

    const movieDetails = watchMovieCheckbox.parentNode.querySelector('.details');
    const workDetails = workContributionCheckbox.parentNode.querySelector('.details');
    const newsDetails = readNewsCheckbox.parentNode.querySelector('.details');

    function toggleDetails(checkbox, details) {
        if (checkbox.checked) {
            details.style.display = 'block';
        } else {
            details.style.display = 'none';
        }
    }

    // Initially hide the details sections
    if (movieDetails) movieDetails.style.display = 'none';
    if (workDetails) workDetails.style.display = 'none';
    if (newsDetails) newsDetails.style.display = 'none';

    // Add event listeners to toggle the details sections
    if (watchMovieCheckbox && movieDetails) {
        watchMovieCheckbox.addEventListener('change', () => toggleDetails(watchMovieCheckbox, movieDetails));
    }

    if (workContributionCheckbox && workDetails) {
        workContributionCheckbox.addEventListener('change', () => toggleDetails(workContributionCheckbox, workDetails));
    }

    if (readNewsCheckbox && newsDetails) {
        readNewsCheckbox.addEventListener('change', () => toggleDetails(readNewsCheckbox, newsDetails));
    }
});