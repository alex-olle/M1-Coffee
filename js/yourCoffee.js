const myApi = "http://coffe-app-ih-aor.herokuapp.com/pods"

let getSize = async () => {
    const data = await fetch (myApi);
    const arrData = await data.json();
    const selectElem = document.getElementsByClassName('size')
    const arrElem = [...selectElem]
    // console.log(arrElem[0].value)
    arrElem.forEach( el => {
        let filterName = el.value
        // console.log(filterName)
        let filteredArr = arrData.filter( fil => {
            return fil.type === filterName;
        })
        console.log(filteredArr)
    })
}

// getSize();

let getFlavour = async () => {
    await getSize();

}

getFlavour()

window.addEventListener('load', getSize);