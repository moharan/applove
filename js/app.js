/*
 * Archivo principal de funcionalidad de JS
 */
//alert("existe");
(function main() {
    /*Pregunta esto no de puede realizar con ById*/
    var boxes = Array.from(document.getElementsByClassName("box-modal"));
    console.log(boxes);
    var modal = document.getElementById("work-modal");
    var bodyModal, close, img;
    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            console.log(box);
            modal.innerHTML = "";
            bodyModal = document.createElement("div");
            bodyModal.classList.add("modal-body");
            bodyModal.innerHTML = box.innerHTML;
            /* creación de elementos */
            close = document.createElement("div");
            close.classList.add("close");
            close.innerHTML = "x";
            modal.appendChild(bodyModal);
            bodyModal.appendChild(close);
            modal.classList.remove("hide");
            /*img = document.createElement("img");
            img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
            close.appendChild(img);*/
            close.addEventListener("click", function() {
                modal.classList.add("hide");
            });
        });
    });
})();