document.addEventListener("DOMContentLoaded", function() {

    let boton = document.getElementById("modoNen");
    let flash = document.getElementById("flash");
    let audio = document.getElementById("audioNen");
    let imagenes = document.querySelectorAll(".img-kurapika");

    boton.onclick = function() {

       
        document.body.classList.toggle("emperor");

        
        if (document.body.classList.contains("emperor")) {
            boton.textContent = "❌ Desactivar Emperor Time";
             
     
            audio.currentTime = 0;
            audio.play();
            imagenes.forEach(function(img) {
            img.src = img.dataset.emperor;
            });

        } else {
            boton.textContent = "⚡ Emperor Time";
            audio.pause();
            imagenes.forEach(function(img) {
    img.src = img.dataset.normal;
});
        }

       
        flash.classList.add("flash-activo");

        setTimeout(function() {
            flash.classList.remove("flash-activo");
        }, 400);

       
        document.body.classList.add("shake");

        setTimeout(function() {
            document.body.classList.remove("shake");
        }, 300);
    };

});