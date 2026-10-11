const mountainImage = document.querySelector(".hero-image-placeholder img");

function showMountain() {
  mountainImage.classList.add("is-loaded");
}

if (mountainImage) {
  if (mountainImage.complete && mountainImage.naturalWidth > 0) {
    showMountain();
  } else {
    mountainImage.addEventListener("load", showMountain);
  }
}