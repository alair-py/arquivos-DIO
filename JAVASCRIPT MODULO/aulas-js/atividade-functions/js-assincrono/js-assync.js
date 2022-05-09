const BASE_URL = "https://thatcopy.pw/catapi/rest/";

const btn_click = document.getElementById("btnClick");


const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    }
    catch(error) {
        console.log(error.message);
    }
}


const loadImg = async () => {
    const img_cat = document.getElementById("imgCat");
    img_cat.src = await getCats();
}

btn_click.addEventListener('click', loadImg);

loadImg();