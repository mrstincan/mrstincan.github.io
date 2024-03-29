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
        for(let j = 0;j < event.path.length;j++) {
            if(event.path[j] == buttons[i]) {
                for(let k = 0;k < buttons.length;k++) {
                    if(i == k) {
                        scrollPlane.classList.add("c" + k);
                    } else {
                        scrollPlane.classList.remove("c" + k);
                    }
                }
                break;
            }
        }
    }
}

for(let i = 0;i < buttons.length;i++) {
    buttons[i].onclick = buttonCallback;
}
