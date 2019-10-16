const audrey = document.getElementById("audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
*/

  audreyNewWidth = window.scrollY/2
   audrey.style.width = audreyNewWidth +"px";
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

   audreyNewHeight = window.scrollY/2
   audrey.style.height = audreyNewHeight +"px";

})