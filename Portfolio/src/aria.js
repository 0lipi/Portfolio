function toggleForm() {
  const form = document.getElementById("form-container");
  form.classList.toggle("hidden");
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const requiredFields = form.querySelectorAll("[required]");
  let hasError = false;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      hasError = true;
      document.getElementById(`${field.id}-info`).innerText =
        "This field is required.";
    } else {
      document.getElementById(`${field.id}-info`).innerText = "";
    }
  });

  if (!hasError) {
    const formData = new FormData(form);
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    let content = "";

    for (const [name, value] of formData) {
      content += `<p><strong>${name}:</strong> ${value}</p>`;
    }

    popupContent.innerHTML = content;
    popup.style.display = "block";
  }
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
