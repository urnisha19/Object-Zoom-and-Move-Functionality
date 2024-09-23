document.addEventListener("DOMContentLoaded", () => {
  const object = document.getElementById("object");
  const zoomInput = document.getElementById("zoom");
  const moveXInput = document.getElementById("move_x");
  const moveYInput = document.getElementById("move_y");

  // Labels for showing the current values
  const zoomLabel = document.getElementById("zoomLabel");
  const moveXLabel = document.getElementById("moveXLabel");
  const moveYLabel = document.getElementById("moveYLabel");

  // Default state
  let scale = 1;
  let translateX = 0; //moves an element horizontally:A positive value moves the element to the right. A negative value moves the element to the left.
  let translateY = 0; // moves an element vertically: A positive value moves the element down. A negative value moves the element up.

  // Function to update the transform properties of the object
  const updateObjectTransform = () => {
    // Translate (to move the object) and scale (to resize or zoom in-out it).
    // The factor of 90% means that the object can move up to 90% for X(left-right) and 90% for Y(up-down) in either direction.
    // A scale value of 1 means the object is at 100% (default size).
    object.style.transform = `
    translate(${translateX * 90}%, ${translateY * 90}%) 
    scale(${scale})
    `;
  };

  // Handle zoom input
  // The addEventListener function listens for changes ("input") made by the user.
  zoomInput.addEventListener("input", (event) => {
    scale = parseFloat(event.target.value); // Get the new zoom value from the slider
    const zoomPercentage = (scale * 100).toFixed(0); // Convert the zoom value to percentage. For example, if scale = 1.5, this would result in 150%.
    zoomLabel.textContent = `${zoomPercentage}%`; // Update the label showing the zoom percentage
    updateObjectTransform(); // Apply the new zoom and update the object's transform
  });

  // Handle X-axis movement
  moveXInput.addEventListener("input", (event) => {
    translateX = parseFloat(event.target.value); // Get the new horizontal value from the slider
    const moveXPercentage = (translateX * 100).toFixed(0); // Convert the value to percentage
    moveXLabel.textContent = `${moveXPercentage}%`; // Update the label with the percentage
    updateObjectTransform(); // Apply the new X position and update the object's transform
  });

  // Handle Y-axis movement
  moveYInput.addEventListener("input", (event) => {
    translateY = parseFloat(event.target.value); // Get the new vertical value from the slider
    const moveYPercentage = (translateY * 100).toFixed(0); // Convert the value to percentage
    moveYLabel.textContent = `${moveYPercentage}%`; // Update the label with the percentage
    updateObjectTransform(); // Apply the new Y position and update the object's transform
  });

  // Initialize the object at default values
  updateObjectTransform();
});
