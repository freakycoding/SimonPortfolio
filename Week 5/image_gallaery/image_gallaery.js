const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Create a data object Image
const images = [
  {
    filename: "pic1.jpg",
    alt: "Closeup of a human eye",
  },
  {
    filename: "pic2.jpg",
    alt: "Rock that looks like a wave",
  },
  {
    filename: "pic3.jpg",
    alt: "Purple and white pansies",
  },
  {
    filename: "pic4.jpg",
    alt: "Section of wall from a pharaoh's tomb",
  },
  {
    filename: "pic5.jpg",
    alt: "Large moth on a leaf",
  },
];

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
  /**
   * create a new <img> element each image
   * Set the <img> source to equal the URL of the image,
   * which should be a combination of the baseURL and the filename,
   * and the alt attribute equal to the alt text.
   */
  const img = document.createElement("img");
  img.src = baseURL + image.filename;
  img.alt = image.alt;

  // Append the <img> to the thumbBar
  thumbBar.appendChild(img);

  // Add another attribute to the <img> to make it focusable via the keyword
  img.tabIndex = '0';

  // Add a click event handler to the <img> so that when it is clicked,
  // a function called updateDisplayedImage()
  img.addEventListener("click", updateDisplayedImage);

  // Wire up the Darken/Lighten button
  btn.addEventListener("click", () => {
    if (!btn.classList.toggle("dark")) {
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
    } else {
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
    }
  });
}

  // Create the updateDisplayedImage() function
  function updateDisplayedImage(e) {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  }