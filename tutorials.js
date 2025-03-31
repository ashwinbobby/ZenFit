document.addEventListener("DOMContentLoaded", function () {
    const watchTutorialsButton = document.getElementById("Tutorial");
    
    if (watchTutorialsButton) {
        watchTutorialsButton.addEventListener("click", function () {
            window.open("tutorials.html") ;
        });
    }
});
