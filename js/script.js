document.querySelector(".nav-active").onclick = function(){
    document.querySelector(".bul-list").classList.toggle("active");
    document.querySelector(".bul-list").classList.add("show");
}

const bulList = document.querySelector(".bul-list");

bulList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("bul")){
        // console.log(e.target);

        bulList.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
    }
})