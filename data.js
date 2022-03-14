function toggleAnswer(elementId) {
  let pToToggle = document.getElementById(elementId);
  if (pToToggle.style.display == "none") {
    pToToggle.style.display = "block";
  } else {
    pToToggle.style.display = "none";
  }
}
