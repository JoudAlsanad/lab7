document.getElementById("color-form").addEventListener("submit", function(event) {
    event.preventDefault();


    var colorValue = document.getElementById("colorInput").value;

    var header = document.getElementById("header");
    header.style.color = colorValue;

 
    document.getElementById("colorInput").value = "";
});