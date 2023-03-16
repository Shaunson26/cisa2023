function toggleResponsiveNavbar() {
    let navbar = document.getElementById("navbar-mobile");
    if (navbar.className.indexOf("w3-show") == -1) {
        navbar.className += " w3-show";
    } else {
        navbar.className = navbar.className.replace(" w3-show", "");
    }
}

function displayTab(tabID) {

    let i;
    let x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    document.getElementById(tabID).style.display = "block";
    window.scrollTo(0, 0);

    // toggle footer colour
    let footer = document.getElementsByTagName('footer')[0]
    let documentScrollHeight = document.body.scrollHeight
    let windowInnerHeight = window.innerHeight

    if (documentScrollHeight < windowInnerHeight) {
        footer.classList.add("w3-bottom");
    } else {
        footer.classList.remove("w3-bottom");
    }

    let isHome = tabID.includes('home')
    if (isHome) {
        footer.classList.remove("my-white");
        footer.classList.add("my-black");
    } else {
        footer.classList.add("my-white");
        footer.classList.remove("my-black");
    }
}

function toggleLanguage(lang) {

    // Do nothing for same language click
    if (lang.className == 'my-lang-selected') {
        return
    }

    // Else switch language
    let currentLang = document.documentElement.lang;
    let langChildren = document.getElementById("language").children;
    let i;

    for (i = 0; i < langChildren.length; i++) {
        langChildren[i].classList.remove('my-lang-selected')
    }

    lang.className = 'my-lang-selected'
    document.documentElement.lang = lang.innerText
    let newLang = document.documentElement.lang;
    let langElementsToHide = document.getElementsByClassName(`lang-${currentLang}`)

    for (i = 0; i < langElementsToHide.length; i++) {
        //langElementsToHide[i].style.display = 'none'
        langElementsToHide[i].classList.remove('lang-show')
        langElementsToHide[i].classList.add('lang-hidden')
    }

    let langElementsToShow = document.getElementsByClassName(`lang-${lang.innerText}`)

    for (i = 0; i < langElementsToShow.length; i++) {
        //langElementsToShow[i].style.display = 'unset'
        langElementsToShow[i].classList.add('lang-show')
    }
}