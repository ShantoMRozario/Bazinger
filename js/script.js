feather.replace()



let navbar = document.querySelector('#navbar');
let topbtn = document.querySelector (".top");

window.addEventListener('scroll',function(){
    var sticky = window.scrollY;

    if (sticky > 200) {
        navbar.classList.add("sticky_menu")
        topbtn.classList.add("top_btn")
        
    } else {
        navbar.classList.remove("sticky_menu")
        topbtn.classList.remove("top_btn")
    }
})

