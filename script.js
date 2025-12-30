let lines_counter = 0;
const lines_counter_reference = document.getElementById("lines-counter");
const version_number = "1.00.006";
const version_number_reference = document.getElementById("version-number");

version_number_reference.innerHTML = String(version_number); // its already a string but im trying it anyway

function IncreaseMain() {
    lines_counter += 1;
    lines_counter_reference.innerHTML = "There are currently " + lines_counter + " lines of code in your project";
}
