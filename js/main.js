function myFunction() {
    var x = document.getElementById("my-nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
} 

function userCheck() {
  var linkCheck = document.getElementById('user-check').attributes[0];
  console.log(localStorage)
  if (localStorage.length === 0) {
    linkCheck.textContent = "./signup.html"
  } else {
    linkCheck.textContent = "./yourCoffee.html"
  }
}