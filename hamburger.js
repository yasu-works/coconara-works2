var btn = document.getElementById("toggle_btn");
var menu = document.getElementById("menu");
var modal = document.getElementById("modal");

btn.addEventListener("click",function() {
    menu.classList.add("add-menu-sp");
    modal.classList.add("add-modal-sp");
})

// モーダルがクリックされたらclassを削除 ※3
modal.addEventListener("click",function(){
    menu.classList.remove("add-menu-sp");
    modal.classList.remove("add-modal-sp");
});
