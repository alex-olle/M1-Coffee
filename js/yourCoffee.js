const myApi = "http://coffe-app-ih-aor.herokuapp.com/pods"

let getSize = async () => {
    const size = await fetch (myApi);
    const sizejson = await size.json();
    const type = sizejson[0].type;
    const flavour = sizejson[0].flavor;
    console.log(type)
    console.log(flavour)
}

getSize();

window.addEventListener('load', getSize);