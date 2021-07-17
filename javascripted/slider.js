//############# Setup stuff ###############

const SCROLL_PLANE_CLASS = "scrollPlane";
const INITAL_CONTAINER = 0;
const TRANSITION_TIME = 0.5;
const TRANSITION_TIMING_FUNCTION = "ease";

const buttons = [  
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4")
];

//############# Create transitions ###############

let transitionsStyleTag = document.createElement("style");
for(let i = 0;i < buttons.length;i++) {
    transitionsStyleTag.innerHTML += "." + SCROLL_PLANE_CLASS + ".c" + i + " { top: -" + (i * 100) + "%; transition: " + TRANSITION_TIME + "s; transition-timing-function: " + TRANSITION_TIMING_FUNCTION + "; }";
}
document.getElementsByTagName("head")[0].appendChild(transitionsStyleTag);

//############# Event handling ###############

let scrollPlane = document.getElementsByClassName(SCROLL_PLANE_CLASS)[0];
scrollPlane.classList.add("c" + INITAL_CONTAINER);

function buttonCallback(event) {
    for(let i = 0;i < buttons.length;i++) {
        if(event.srcElement == buttons[i]) {
            for(let j = 0;j < buttons.length;j++) {
                if(i == j) {
                    scrollPlane.classList.add("c" + j);
                } else {
                    scrollPlane.classList.remove("c" + j);
                }
            }
        }
    }
}

for(let i = 0;i < buttons.length;i++) {
    buttons[i].onclick = buttonCallback;
}
