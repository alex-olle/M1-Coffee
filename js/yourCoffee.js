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

    return yourCoffee;
}

let showSize = async () => {
    let obj = await getFlavour();
    // console.log(obj)
    let size = obj.type;
    // console.log(size)
    let divValue = document.getElementById(`${size}`)
    let hiddenForm = document.querySelector('.selection-wrapper')
    if (divValue.classList.length === 1) {
        divValue.classList.add('selected-size')
        hiddenForm.classList.add('hidden-form')
        // console.log(divValue)
    } else {
        divValue.classList.remove('selected-size')
        hiddenForm.classList.remove('hidden-form')
        // console.log(divValue)
    }
}

let showFlavour = async () => {
    let obj = await getFlavour();
    // console.log(obj)
    let flavour = obj.flavor;
    // console.log(flavour)
    let pValue = document.querySelector(`.selected-size .${flavour}`)
    // console.log(pValue)
    if (pValue.classList.length === 2) {
        pValue.classList.add('selected-flavour');
        console.log(pValue)
    } else {
        pValue.classList.remove('selected-flavour')
        console.log(pValue)
    }
}

let showCoffee = async () => {
    let size = await showSize();
    let flavour = await showFlavour();
}

const findYourCoffeeBtn = document.getElementById('find-coffee-btn');
findYourCoffeeBtn.addEventListener("click", showCoffee)