/// All Node Variables ///

let nwesltr_close=document.querySelector("#cross_newsltr");
let bg_newsltr=document.querySelector("#newsltr_bg");
let main_newsltr_div=document.querySelector("#newsltr_main");

nwesltr_close.addEventListener("click",()=>
{
    bg_newsltr.classList.add("hidden");
    main_newsltr_div.classList.remove("flex");
    main_newsltr_div.classList.add("hidden");
})