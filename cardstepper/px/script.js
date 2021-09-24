var b=false;
var c=false;
var d=false;
var e=false;
var x=false;
var gray="#30363d";
var lightgray="#58a6f0";
var blue="#7D8B9B";
var background="#0d1117";
var red="#7d0000";
var green="#2d7d00";

function changeprogressleft(t, z, g, h){
    document.getElementById(t).style.display="none";
    document.getElementById(z).style.display="inline";
    document.getElementById("progress" + g).style.borderColor=gray;
    document.getElementById("progress" + g).style.backgroundColor=gray;
    document.getElementById("progress" + h).style.borderColor=lightgray;
    document.getElementById("progress" + h).style.backgroundColor=lightgray;
}

function changeprogressright(i, o, j, k){
    document.getElementById(i).style.display="none";
    document.getElementById(o).style.display="inline";
    document.getElementById("progress" + j).style.borderColor=blue;
    document.getElementById("progress" + j).style.backgroundColor=blue;
    document.getElementById("progress" + k).style.borderColor=lightgray;
    document.getElementById("progress" + k).style.backgroundColor=lightgray;
}


function right() {
    if(document.getElementById("display1").style.display == 'inline') {
        document.getElementById("left").style.borderColor=gray;
        changeprogressright("display1", "display2", "1", "2")
    } else if(document.getElementById("display2").style.display == 'inline') {
        changeprogressright("display2", "display3", "2", "3")
    } else if(document.getElementById("display3").style.display == 'inline' && b==true && c==true && d==true && e==true) {
        document.getElementById("right").style.borderColor=background;
        changeprogressright("display3", "display4", "3", "4")
    } else if(document.getElementById("csstag").style.display == 'inline') {
        document.getElementById("right").style.borderColor=background;
        changeprogressright("csstag", "end1", "5", "6")
    } else if(document.getElementById("cssfile").style.display == 'inline') {
        document.getElementById("right").style.borderColor=background;
        changeprogressright("cssfile", "end2", "5", "6")
    }
}

function left() {
    if(document.getElementById("display2").style.display == 'inline') {
        document.getElementById("left").style.borderColor=background;
        changeprogressleft("display2", "display1", "2", "1");
    } else if(document.getElementById("display3").style.display == 'inline') {
        changeprogressleft("display3", "display2", "3", "2");
    } else if(document.getElementById("display4").style.display == 'inline') {
        document.getElementById("right").style.borderColor=gray;
        changeprogressleft("display4", "display3", "4", "3");
    } else if(document.getElementById("csstag").style.display == 'inline') {
        document.getElementById("right").style.borderColor=background;
        changeprogressleft("csstag", "display4", "5", "4");
    } else if(document.getElementById("end1").style.display == 'inline') {
        document.getElementById("right").style.borderColor=gray;
        changeprogressleft("end1", "csstag", "6", "5");
    } else if(document.getElementById("end2").style.display == 'inline') {
        document.getElementById("right").style.borderColor=gray;
        changeprogressleft("end2", "cssfile", "6", "5");
    } else if(document.getElementById("cssfile").style.display == 'inline') {
        document.getElementById("right").style.borderColor=background;
        changeprogressleft("cssfile", "display4", "5", "4");
    }
}

function option1() {
    document.getElementById("right").style.borderColor=gray;
    changeprogressright("display4", "csstag", "4", "5")
}

function option2() {
    document.getElementById("right").style.borderColor=gray;
    changeprogressright("display4", "cssfile", "4", "5")
}

function trueforce1() {
    document.getElementById("force1").style.borderColor=green;
    return b=true
}

function trueforce2() {
    document.getElementById("force2").style.borderColor=green;
    return c=true
}

function trueforce3() {
    document.getElementById("force3").style.borderColor=green;
    return d=true
}

function trueforce4() {
    document.getElementById("force4").style.borderColor=green;
    return e=true
}

function falseforce1() {
    document.getElementById("force1").style.borderColor=red;
    return b=false
}

function falseforce2() {
    document.getElementById("force2").style.borderColor=red;
    return c=false
}

function falseforce3() {
    document.getElementById("force3").style.borderColor=red;
    return d=false
}

function falseforce4() {
    document.getElementById("force4").style.borderColor=red;
    return e=false
}