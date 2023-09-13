(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  // Pressing the equal button
  equal.addEventListener("click", function () {
    try {
      let input = screen.value;
      if (input === "") {
        screen.value = "Please Enter";
      } else {
        let answer = eval("(" + input + ")"); // Wrap the input in parentheses
        if (isNaN(answer)) {
          screen.value = "Invalid Expression";
        } else {
          screen.value = answer;
        }
      }
    } catch (error) {
      screen.value = "Error";
    }
  });

  // Clear button functionality
  clear.addEventListener("click", function () {
    screen.value = "";
  });
})();
