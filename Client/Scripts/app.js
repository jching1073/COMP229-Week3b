"use strict";
(function () {
    let btn1 = document.getElementById("clickMe");
    let counter = 0;
    function Start() {
        console.log("app Started");
    }
    function ClickMe() {
        let firstP = document.getElementById("firstP");
        counter++;
        firstP.innerText = `Clicked ${counter}`;
    }
    window.addEventListener('load', Start);
    btn1.addEventListener("click", ClickMe);
})();
//# sourceMappingURL=app.js.map