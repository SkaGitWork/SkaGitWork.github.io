/* ---------------------------------- Data ---------------------------------- */
const background_color = "--background-color";
const toggle_color = "--toggle-color";
const screen_color = "--screen-color";

const s_color = "--s-color";
const s_background_color = "--s-background-color";
const s_box_shadow = "--s-box-shadow";

const e_color = "--e-color";
const e_background_color = "--e-background-color";
const e_box_shadow = "--e-box-shadow";

const n_color = "--n-color";
const n_background_color = "--n-background-color";
const n_box_shadow = "--n-box-shadow";

// Css Variables
const properties = [
  "--text-color",
  "--background-color",
  "--toggle-color",
  "--screen-color",
  "--s-color",
  "--s-background-color",
  "--s-box-shadow",
  "--e-color",
  "--e-background-color",
  "--e-box-shadow",
  "--n-color",
  "--n-background-color",
  "--n-box-shadow",
];

// Dark Theme
const theme_1 = [
  "white",
  "hsl(222, 26%, 31%)",
  "hsl(223, 31%, 20%)",
  "hsl(224, 36%, 15%)",
  "white",
  "hsl(225, 21%, 49%)",
  "0 3px hsl(224, 28%, 35%)",
  "white",
  "hsl(6, 63%, 50%)",
  "0 3px hsl(6, 70%, 34%)",
  "hsl(221, 14%, 31%)",
  "hsl(45, 7%, 89%)",
  "0 3px hsl(35, 11%, 61%)",
];

// Light Theme
const theme_2 = [
  "hsl(198, 20%, 13%)",
  "hsl(0, 0%, 90%)",
  "hsl(0, 5%, 81%)",
  "hsl(0, 0%, 93%)",
  "white",
  "hsl(185, 42%, 37%)",
  "0 3px hsl(185, 58%, 25%)",
  "white",
  "hsl(25, 98%, 40%)",
  "0 3px hsl(25, 99%, 27%)",
  "hsl(221, 14%, 31%)",
  "hsl(45, 7%, 89%)",
  "0 3px hsl(35, 11%, 61%)",
];

// Yellow Theme
const theme_3 = [
  "hsl(52, 100%, 62%)",
  "hsl(268, 75%, 9%)",
  "hsl(268, 71%, 12%)",
  "hsl(268, 71%, 12%)",
  "white",
  "hsl(281, 89%, 26%)",
  "0 3px hsl(285, 91%, 52%)",
  "hsl(198, 20%, 13%)",
  "hsl(176, 100%, 44%)",
  "0 3px hsl(177, 92%, 70%)",
  "hsl(52, 100%, 62%)",
  "hsl(268, 47%, 21%)",
  "0 3px hsl(290, 70%, 36%)",
];

// All Themes
const all_themes = [theme_1, theme_2, theme_3];

/* ---------------------------------- Initilization ---------------------------------- */

// Changes theme
function change_theme(theme) {
  for (let i = 0; i < properties.length; i++) {
    document.documentElement.style.setProperty(properties[i], theme[i]);
  }
}

// Get localStorage
var circle_position;
if (localStorage.getItem("circle_position") != null) {
  circle_position = parseInt(localStorage.getItem("circle_position"));
} else {
  circle_position = 0;
}

// Set theme
change_theme(all_themes[circle_position]);

// Set circle position
var circle = document.getElementsByClassName("circle")[0];
circle.style.transform = "translateX(" + circle_position * 150 + "%)";


/* --------------------------------- Toggle --------------------------------- */
// Toggle Listen to click
document.getElementById("bar").addEventListener("click", toggle_position);
// Move the toggle and theme change
function toggle_position() {

  // Reset list
  if (circle_position == 2) {
    circle_position = -1;
  }
  
  circle_position++;

  // Move Circle
  circle.style.transform = "translateX(" + circle_position * 150 + "%)";

  // Change Theme and stores circle position
  change_theme(all_themes[circle_position]);
  localStorage.setItem("circle_position", circle_position);
}


/* --------------------------------- Numpad --------------------------------- */
// Getting display
const display = document.getElementById("js-display");

// Number button
var buttons = document.getElementsByClassName("number-color");

Object.keys(buttons).forEach(function (key) {
  buttons[key].addEventListener("click", (_) => {
    if (
      (display.textContent + buttons[key].innerHTML).length < 12 &&
      display.innerHTML != "Overflow"
    ) {
      display.textContent += buttons[key].innerHTML;
    }
  });
});

// Delete button
const delete_button = document.getElementById("js-delete");
delete_button.addEventListener("click", (_) => {
  if (display.innerHTML != "Overflow") {
    display.textContent = display.innerHTML.substr(
      0,
      display.innerHTML.length - 1
    );
  }
});

// Reset button
const reset_button = document.getElementById("js-reset");
reset_button.addEventListener("click", (_) => {
  display.textContent = "";
});

// Equal button
const equal_button = document.getElementById("js-equal");
equal_button.addEventListener("click", (_) => {
  var content = display.textContent.replace("x", "*");

  if (eval(content).toString().length < 12) {
    display.textContent = eval(content);
  } else {
    display.innerHTML = "Overflow";
  }
});
