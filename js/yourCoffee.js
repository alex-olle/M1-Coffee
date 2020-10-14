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
    console.log(sizeArr)
    let flavourValue = document.querySelector('#flavour option').value
    console.log(flavourValue)
    let flavourFilterArr = sizeArr.filter( el => {
        return el.flavor === flavourValue;
    })

    console.log(flavourFilterArr);
    return flavourFilterArr[0]
}



// window.addEventListener('load', getFlavour);

const findYourCoffeeBtn = document.getElementById('find-coffee-btn');
findYourCoffeeBtn.addEventListener("click", getFlavour)
