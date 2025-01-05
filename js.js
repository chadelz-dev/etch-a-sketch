// ////////////////////////////////////////////////////////////////////////////
// Setting the Project Up

// global css settings
let allElements = document.getElementsByTagName("*");

// Iterate over all elements
for (var i = 0; i < allElements.length; i++) {
  // Reset margin, padding, and font properties
  allElements[i].style.margin = "0";
  allElements[i].style.padding = "0";
  allElements[i].style.boxSizing = "border-box";
}

// ////////////////////////////////////////////////////////////////////////////

// setting up the body
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

// ////////////////////////////////////////////////////////////////////////////

// setting the blocksDiv

// Create the blocksDivEl
const blocksDivEl = document.querySelector("#blocksDiv");
blocksDivEl.style.height = "80vh";
blocksDivEl.style.width = "80vw";
blocksDivEl.style.position = "relative";
blocksDivEl.style.border = "1px solid grey";
blocksDivEl.style.borderRadius = "0";
blocksDivEl.style.backgroundColor = "white";
blocksDivEl.style.zIndex = "1"; // Place above borderEl

// Create borderEl and insert it before blocksDivEl
const borderEl = document.createElement("div");
borderEl.style.position = "absolute";
borderEl.style.top = "50%";
borderEl.style.left = "50%";
borderEl.style.transform = "translate(-50%, -50%)";
borderEl.style.height = "calc(80vh + 36px)"; // Add offset for the border
borderEl.style.width = "calc(80vw + 36px)";
borderEl.style.border = "1px solid #89CFF0";
borderEl.style.borderRadius = "15px";
borderEl.style.backgroundColor = "#89CFF0";
borderEl.style.zIndex = "0"; // Behind blocksDivEl

// Append borderEl to the body, but style them together
document.body.style.position = "relative"; // Ensure body can contain positioned elements
document.body.appendChild(borderEl);

// ////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////
