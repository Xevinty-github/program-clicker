let lines_counter = 0;
const lines_counter_reference = document.getElementById("lines-counter");

function IncreaseMain() {
    lines_counter += 1;
    lines_counter_reference.innerHTML = "There are currently " + lines_counter + " lines of code in your project";
}
