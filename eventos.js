// opcion 1
/*document.getElementsByTagName('div')[0].addEventListener("click",  () => {
    alert ("Hola! Soy el div");
});*/

// opcion 2
document.querySelector('div').addEventListener("click", () => {
    alert ("Hola! Soy el div");
});

document.querySelector('button').addEventListener("click",  (e) => {
    e.stopPropagation();
});
