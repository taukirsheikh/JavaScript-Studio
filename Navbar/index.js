const mobile_nav=document.querySelector(".toggle_btn")
const nav_header=document.querySelector(".header")
const toggleNavbar=()=>{
    // alert("ok")
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener("click",()=>toggleNavbar())