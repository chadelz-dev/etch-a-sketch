// ////////////////////////////////////////////////////////////////////////////
// Setting the Project Up

// global css settings
let allElements = document.getElementsByTagName("*");

// Iterate over all elements
for (var i = 0; i < allElements.length; i++) {
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
if (blocksDivEl) {
  blocksDivEl.style.height = "80vh";
  blocksDivEl.style.width = "80vw";
  blocksDivEl.style.position = "relative";
  blocksDivEl.style.border = "1px solid grey";
  blocksDivEl.style.borderRadius = "0";
  blocksDivEl.style.backgroundColor = "white";
  blocksDivEl.style.zIndex = "1"; // Place above borderEl
}

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

// game logic

// Function to generate the grid
function generateGrid(number) {
  const blocksDivEl = document.querySelector("#blocksDiv");
  if (!blocksDivEl) return;

  // Set up Flexbox container styles
  blocksDivEl.style.display = "flex";
  blocksDivEl.style.flexWrap = "wrap"; // Allow wrapping to create rows
  blocksDivEl.style.alignContent = "flex-start"; // Align rows at the top
  blocksDivEl.style.justifyContent = "flex-start"; // Align items from the left
  blocksDivEl.style.overflow = "hidden"; // Prevent content from overflowing
  blocksDivEl.style.position = "relative"; // Ensure child blocks are contained

  // Clear existing blocks if any
  blocksDivEl.innerHTML = "";

  // Set block dimensions dynamically using percentages
  const blockSize = 100 / number;

  for (let i = 0; i < number * number; i++) {
    const block = document.createElement("div");
    block.style.border = "1px solid lightgrey";
    block.style.boxSizing = "border-box";
    block.style.flex = `0 0 ${blockSize}%`; // Flex properties to control width
    block.style.height = `${blockSize}%`; // Height as a percentage of container height
    block.className = "block";
    block.addEventListener("mouseover", isHovered);
    blocksDivEl.appendChild(block);
  }
}

// Function to handle hover effect
function isHovered() {
  this.style.backgroundColor = "#89CFF0"; // Change color on hover
}

// Initial grid generation
generateGrid(16);

// Button event listeners

// Get the input and button from the DOM
const gridSizeInput = document.getElementById("gridSizeInput");
const generateButton = document.getElementById("generateButton");

// Event listener for generate button
generateButton.addEventListener("click", function () {
  let gridSize = parseInt(gridSizeInput.value);

  // Validate input (must be between 1 and 100)
  if (gridSize >= 1 && gridSize <= 100) {
    generateGrid(gridSize); // Generate grid with the entered size
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

// ////////////////////////////////////////////////////////////////////////////

// Positioning the buttonsContainer above the blocksDiv

const buttonsContainer = document.querySelector("#buttonsContainer");

if (buttonsContainer) {
  // Set position of the buttons container to absolute
  buttonsContainer.style.position = "absolute";
  buttonsContainer.style.top = "20px"; // Adjust the top offset as needed
  buttonsContainer.style.left = "50%";
  buttonsContainer.style.transform = "translateX(-50%)"; // Center horizontally
}
