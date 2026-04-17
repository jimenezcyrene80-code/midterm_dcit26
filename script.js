// DOWNLOAD CV
function downloadCV() {
  alert("Downloading CV...");
}

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields!");
  } else {
    alert("Message sent successfully!");
  }
});

// ACCORDION (FINAL WORKING)
const accordionItems = document.querySelectorAll(".accordion-header");

accordionItems.forEach(item => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    parent.classList.toggle("active");
  });
});