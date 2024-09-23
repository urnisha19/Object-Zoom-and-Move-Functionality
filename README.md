# Object Zoom and Move Functionality
This project implements functionality to zoom in/out and move an object within a window using sliders. The sliders allow users to change the object's size and position both horizontally (X-axis) and vertically (Y-axis).

## Zoom
* The object expands or shrinks according to the size slider.
* The slider has a minimum value of 0.25 (25%) and a maximum value of 2 (200%).
* By default, the zoom is set to 100%.

## Move X
* The Left-Right slider changes the object's position along the X-axis relative to the window.
* The slider has a minimum value of -0.9 (-90%) and a maximum value of 0.9 (90%).
* At 100% zoom:
  - If the slider is at the leftmost position, 10% of the object will be visible on the left.
  - If the slider is at the rightmost position, 10% of the object will be visible on the right.

## Move Y
* The Up-Down slider changes the object's position along the Y-axis relative to the window.
* The slider has a minimum value of -0.9 (-90%) and a maximum value of 0.9 (90%).
* At 100% zoom:
  - If the slider is at the uppermost position, 10% of the object will be visible at the top.
  - If the slider is at the lowermost position, 10% of the object will be visible at the bottom.

## Completed Tasks
* The percent values of individual sliders are updated dynamically as the slider thumb is moved.
* The Left-Right slider is fully functional, allowing horizontal movement of the object.
* The Up-Down slider is fully functional, allowing vertical movement of the object.
* The Zoom slider is fully functional, allowing zoom in/out between 25% and 200%.

# Testing
* To test the functionality:
  - Open the index.html file in a browser.
  - Use the sliders to adjust the zoom, X-axis, and Y-axis movement.
  - Observe the live updates of the object’s size and position according to slider changes.# Object-Zoom-and-Move-Functionality
