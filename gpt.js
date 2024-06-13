document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".t-deals");
  const dropdownContents = document.querySelectorAll(".dropdown-content");
  const backBtn = document.querySelector(".back-btn");
  const closeBtn = document.querySelector(".close-btn");
  // const navCheckbox = document.querySelector(".nav-checkbox");

  const sidebar = document.querySelector(".sidebar");

  function showSidebar() {
    // if (sidebar.classList.contains('open')) {
    //     sidebar.classList.remove('open');
    sidebar.style.display = "flex";
    // setTimeout(() => {
      sidebar.style.left ="0%";
    // }, 900)
    // sidebar.style.display = 'none';
    // } else {
    //     sidebar.classList.add('open');
    //     sidebar.style.display = 'flex';
    // }
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdownContents.forEach((content) => (content.style.display = "none"));
      this.nextElementSibling.style.display = "block";
      if (backBtn) backBtn.style.display = "block";
    });
  });

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      dropdownContents.forEach((content) => (content.style.display = "none"));
      backBtn.style.display = "none";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      // navCheckbox.checked = false;
      dropdownContents.forEach((content) => (content.style.display = "none"));
      if (backBtn) backBtn.style.display = "none";
    });
  }

  document
    .querySelector(".icon-tabler-menu-2")
    .parentElement.addEventListener("click", showSidebar);
  document
    .querySelector(".icon-tabler-x")
    .parentElement.addEventListener("click", hideSidebar);

});