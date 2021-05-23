var headercolor = "#20282e";

document.addEventListener('scroll', onScroll);

function onScroll () {
    var scrollPosition = window.scrollY,
        showHeaderPosition = 100;

    if (scrollPosition >= showHeaderPosition) {
        showHeader();
    } else {
        hideHeader();
    }
}

function showHeader() {
    document.getElementById("header").style.background = headercolor;
    document.getElementById("logoid").style.width = "100%";
    document.getElementById("main-nav").style.fontSize = "16px";
    document.getElementById("arrow").style.display = "none";
    document.getElementById("header").style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
}

function hideHeader() {
    document.getElementById("header").style.background = "none";
    document.getElementById("logoid").style.width = "150%";
    document.getElementById("main-nav").style.fontSize = "20px";
    document.getElementById("arrow").style.display = "inline";
    document.getElementById("header").style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
}

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    contextMenu.style.top = `${mouseY}px`;
     contextMenu.style.left = `${mouseX}px`;

    contextMenu.classList.add("visible");
});

scope.addEventListener("click", (e) => {
    contextMenu.classList.remove("visible");
});

function openurl(url) {
    window.open(url, '_blank').focus();
}
