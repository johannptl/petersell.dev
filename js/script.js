
/*--SetCoockie--------------------------------------------------------*/
var headercolor = "#20282e";
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*--GetCoockie--------------------------------------------------------*/

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

/*--ChangeHeaderOnScrolling-------------------------------------------*/

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
    document.getElementById("arrow").style.display = "none";
    document.getElementById("header").style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.3)";
}

function hideHeader() {
    document.getElementById("header").style.background = "none";
    document.getElementById("logoid").style.width = "150%";
    document.getElementById("arrow").style.display = "inline";
    document.getElementById("header").style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
}

/*--ContextMenu-------------------------------------------------------*/

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");
var a = 1;

scope.addEventListener("contextmenu", (event) => {

    if(a == 1) {
    event.preventDefault();

    const { clientX: mouseX, clientY: mouseY } = event;

    contextMenu.style.top = `${mouseY}px`;
     contextMenu.style.left = `${mouseX}px`;

    contextMenu.classList.add("visible");
    a += 1;
    } else if(a == 2) {
        a -= 1;
        contextMenu.classList.remove("visible");
    }
});

scope.addEventListener("click", (e) => {
    contextMenu.classList.remove("visible");
});

/*--Intro-------------------------------------------------------------*/



window.onload = function() {
    /*var watched = getCookie("watched");
    if (watched == "true") {*/
        document.getElementById("intro").style.display = "none";
        document.getElementById("site").style.display = "inline";
    /*} else {
        setCookie("watched", "true", 30);
        intro()
    }*/
}

function intro() {
    document.getElementById("intro").style.transition = "3s opacity";
    document.getElementById("site").style.display = "none";
    document.getElementById("intro").style.display = "inline";
    document.getElementById("intropage1").style.display = "inline";
    document.getElementById("html").style.background = "#000";
    document.getElementById('intropage2').style.opacity = '0';
    window.setTimeout(fadein1, 0500);

    function fadein1() {
        document.getElementById('intropage2').style.opacity = '0';
        document.getElementById('intropage1').style.opacity = '1';
        window.setTimeout(fadeout1, 6000);
    }

    function fadeout1() {
        document.getElementById('intropage1').style.opacity = '0';
        window.setTimeout(fadein2, 3000);
    }

    function fadein2() {
        document.getElementById("intropage1").style.display = "none"
        document.getElementById('intropage2').style.opacity = '1';
        window.setTimeout(fadeout2, 6000);
    }

    function fadeout2() {
        document.getElementById('intropage2').style.opacity = '0';
        window.setTimeout(showsite, 3000);
    }
    
    function showsite() {
        document.getElementById("site").style.display = "inline";
        document.getElementById("intro").style.display = "none";
    }
}

/*--URL Parameters----------------------------------------------------*/

const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);
