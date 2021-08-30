
let display = document.getElementById("display");
let lucky = document.getElementById("lucky");
let settings = document.getElementById("settings");
let dropmenu = document.getElementById("dropmenu");
let openMenu = false;


window.onload = () =>{
    //Make theme button active
    document.getElementById(theme).classList.add("active");

    //ADD WEBSITE BUTTONS WITH IMAGES
    for(let i = 0; i < Object.keys(websites).length; ++i){
        display.innerHTML += `<a class="button" href="${websites[Object.keys(websites)[i]].link}"> 
            <p>${Object.keys(websites)[i]}</p>
            <div id="photo-${i}" class="website-img"></div>
        </a>`

        let photo = document.getElementById(`photo-${i}`);
        if(websites[Object.keys(websites)[i]].image == null)
            photo.innerHTML = Object.keys(websites)[i]
        else
            photo.style.backgroundImage = `url('${websites[Object.keys(websites)[i]].image}')`
    }

    luckyButton();

    //Add body transition again
    document.body.style.cssText = `transition: background 0.5s cubic-bezier(0.05, 0, 0, 1), color 1s cubic-bezier(0.05, 0, 0, 1)`;
}

/*-----------Random Favicon---------*/
do{
    randomWebsite = Math.floor(Math.random() * Object.keys(websites).length)
}while(websites[Object.keys(websites)[randomWebsite]].image == null)

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = websites[Object.keys(websites)[randomWebsite]].image;
/*--------------------------------------*/

document.addEventListener('click', function(event) {
    var OnSetting = settings.contains(event.target);
    var OnDropmenu = dropmenu.contains(event.target);
    if (!OnSetting && !OnDropmenu) {
        openMenu = false
        dropmenu.style.display = "none";
    }
});

settings.onclick = () => {
    openMenu = !openMenu;

    if(openMenu)
        dropmenu.style.display = "flex";
    else
        dropmenu.style.display = "none";
}

/*-----------THEME FUNTIONS-------------*/
//Change theme with device
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? "dark" : "light";
    document.body.className = "";
    document.body.classList.add(newColorScheme);
});

//Using button to change theme
function changeTheme(selected){
    document.getElementById(theme).className = "";
    theme = selected;

    document.getElementById(theme).classList.add("active");
    document.body.className = "";
    if(theme == "device"){
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark");
        }else{
            document.body.classList.add("light");
        }
    }else{
        document.body.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
}
/*--------------------------------------*/

function luckyButton(){
    randomWebsite = Math.floor(Math.random() * Object.keys(websites).length)
    lucky.href = websites[Object.keys(websites)[randomWebsite]].link;
}

let header = document.getElementById('header');
const inViewport = (entries, observer) => {
    entries.forEach(entry => {
        header.classList.toggle("is-inViewport", entry.isIntersecting);
        console.log(entry.isIntersecting)
    });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {};

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
    console.log(obsOptions)
});