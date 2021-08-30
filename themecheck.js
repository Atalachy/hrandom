let theme 
if(localStorage.getItem("theme") == null)
    theme = "device";
else
    theme = localStorage.getItem("theme");

localStorage.setItem("theme", theme);

//THEME CHANGE ON PAGE LOAD
if(theme == "device"){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
    }else{
        document.body.classList.add("light");
    }
}else{
    document.body.classList.add(theme);
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);