function yourCoffeeFunction() {
    let selection = document.getElementById('your-selection');
    if (selection.className === "your-selection") {
        selection.className += " reaction";
      } else {
        selection.className = "your-selection";
      }
}

const myApi = "http://coffe-app-ih-aor.herokuapp.com/pods"

let getSize = async () => {
    const data = await fetch (myApi);
    const arrData = await data.json();
    let sizeValue = document.querySelector('#size option:checked').value
    let sizeFilterArr = arrData.filter( el => {
        return el.type === sizeValue;
    })

    return sizeFilterArr
}

// getSize();

let getFlavour = async () => {
    const sizeArr = await getSize();
    // console.log(sizeArr)
    let flavourValue = document.querySelector('#flavour option:checked').value
    // console.log(flavourValue)
    let flavourFilterArr = sizeArr.filter( el => {
        return el.flavor === flavourValue;
    })

    let yourCoffee = flavourFilterArr[0]

    console.log(yourCoffee);
    return yourCoffee;
}

const findYourCoffeeBtn = document.getElementById('find-coffee-btn');
findYourCoffeeBtn.addEventListener("click", getFlavour)
