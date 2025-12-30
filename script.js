let lines_counter = 0;
const lines_counter_reference = document.getElementById("lines-counter");
const version_number = "1.00.004"; // change x.y.z(s) to x.yy(.zzz)

function IncreaseMain() {
    lines_counter += 1;
    lines_counter_reference.innerHTML = "There are currently " + lines_counter + " lines of code in your project";
}
