// scripts for navigation bar to make scorlls smoother
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });
});

// scripts for service section for slideshow
document.addEventListener("DOMContentLoaded", function () {
  const services_img = document.querySelectorAll(".service-img");
  const services_text = document.querySelectorAll(".service-text");
  let currentServiceIndex = 0;

  function showService(index) {
    services_img[currentServiceIndex].classList.remove("active");
    services_img[index].classList.add("active");
    services_text[currentServiceIndex].classList.remove("active");
    services_text[index].classList.add("active");
    currentServiceIndex = index;
  }

  showService(currentServiceIndex);

  function nextService() {
    const nextServiceIndex = (currentServiceIndex + 1) % services_img.length;
    showService(nextServiceIndex);
  }

  setInterval(nextService, 5000);
});


// validation of call request form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function () {
    if (validateForm()) {
      alert("Thanks for filling the data"+"\n"+"   We will call you soon!    ");
    }
  });

  function validateForm() {
    let valid = true;

    // Validate name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      valid = false;
      alert("Please enter your name.");
    }

    // Validate contact number
    const contactNumber = document.getElementById("contact-number").value;
    if (!/^\d{10}$/.test(contactNumber)) {
      valid = false;
      alert("Please enter a valid 10-digit contact number.");
    }

    return valid;
  }
});
