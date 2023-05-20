const fulImgBox = document.getElementById("fulImgBox"),
  fulImg = document.getElementById("fulImg");
function openFulImg(reference) {
  fulImgBox.style.display = "flex";
  fulImg.src = reference;
}
function closeImg() {
  fulImgBox.style.display = "none";
}
document
  .getElementById("productos-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("productos-submenu").classList.toggle("show");
  });
