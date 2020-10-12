function myFunction() {
    var x = document.getElementById("my-nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
} 