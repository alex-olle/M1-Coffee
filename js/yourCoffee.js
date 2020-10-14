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
    let sizeValue = document.querySelector('#size option').value
    let sizeFilterArr = arrData.filter( el => {
        return el.type === sizeValue;
    })

    return sizeFilterArr
}

// getSize();

let getFlavour = async () => {
    const sizeArr = await getSize();
    // console.log(sizeArr)
    let flavourValue = document.querySelector('#flavour option').value
    // console.log(flavourValue)
    let flavourFilterArr = sizeArr.filter( el => {
        return el.flavor === flavourValue;
    })

    let yourCoffee = flavourFilterArr[0]

    console.log(yourCoffee);
    return yourCoffee;
}

const resProm = async () => {
    try {
        await Promise.resolve(getFlavour)
        return getFlavour();
    } catch (err) {
        console.log(err)
    }
}


// window.addEventListener('load', getFlavour);

const findYourCoffeeBtn = document.getElementById('find-coffee-btn');
findYourCoffeeBtn.addEventListener("click", resProm)
