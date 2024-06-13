document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.t-deals');
    const dropdownContents = document.querySelectorAll('.dropdown-content');
    const backBtn = document.querySelector('.back-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navCheckbox = document.querySelector('.nav-checkbox');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            dropdownContents.forEach(content => content.style.display = 'none');
            this.nextElementSibling.style.display = 'block';
            backBtn.style.display = 'block';
        });
    });

    backBtn.addEventListener('click', function () {
        dropdownContents.forEach(content => content.style.display = 'none');
        backBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', function () {
        navCheckbox.checked = false;
        dropdownContents.forEach(content => content.style.display = 'none');
        backBtn.style.display = 'none';
    });
});

