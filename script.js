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

    const saveProgressButton = document.getElementById('save-progress');

    saveProgressButton.addEventListener('click', function() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;

        const progress = {
            readPages: readPagesCheckbox.checked,
            watchMovie: watchMovieCheckbox.checked,
            movieTitle: document.getElementById('movie-title').value,
            workContribution: workContributionCheckbox.checked,
            workNote: document.getElementById('work-note').value,
            goToGym: goToGymCheckbox.checked,
            readNews: readNewsCheckbox.checked,
            newsSource: document.getElementById('news-source').value
        };

        localStorage.setItem(`progress-${currentDate}`, JSON.stringify(progress));
        alert('Progress saved!'); // A simple confirmation for now
    });

    // Function to load progress for the current day (to be added later)
    function loadProgress() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        const savedProgress = localStorage.getItem(`progress-${currentDate}`);

        if (savedProgress) {
            const progress = JSON.parse(savedProgress);
            readPagesCheckbox.checked = progress.readPages;
            watchMovieCheckbox.checked = progress.watchMovie;
            document.getElementById('movie-title').value = progress.movieTitle;
            workContributionCheckbox.checked = progress.workContribution;
            document.getElementById('work-note').value = progress.workNote;
            goToGymCheckbox.checked = progress.goToGym;
            readNewsCheckbox.checked = progress.readNews;
            document.getElementById('news-source').value = progress.newsSource;

            // Ensure details are visible if the checkbox is checked on load
            toggleDetails(watchMovieCheckbox, movieDetails);
            toggleDetails(workContributionCheckbox, workDetails);
            toggleDetails(readNewsCheckbox, newsDetails);
        }
    }

    // Load progress on page load
    loadProgress();
});