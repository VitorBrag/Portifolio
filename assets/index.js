function openNav() {
    var x = document.getElementById("navgation");

    if(x.className === "navgation") {
        x.className += " menujs";
        document.getElementById("treeline-icon").innerHTML = "&Cross;";


    } else {
        x.className = "navgation";
        document.getElementById("treeline-icon").innerHTML = "&#9776;";

    }
}