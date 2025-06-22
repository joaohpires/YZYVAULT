const images = [
  "IMG/image1L.png",
  "IMG/image2R.png",
  "IMG/image3R.png",
  "IMG/image4.png"
];

const imgElement = document.getElementById("cycleImage");
let intervalId = null;
let currentIndex = 0;

imgElement.addEventListener("mouseenter", () => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }, 750); // change image every 500ms
});

imgElement.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
  currentIndex = 0;
  imgElement.src = images[currentIndex]; // reset to first image
});