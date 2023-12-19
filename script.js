/// All Node Variables ///

let nwesltr_close = document.querySelector("#cross_newsltr");
let bg_newsltr = document.querySelector("#newsltr_bg");
let main_newsltr_div = document.querySelector("#newsltr_main");
let click_sm_nav = document.querySelector("#nav_sm");
let show_sm_nav = document.querySelector("#hidden_nav");
let cross_sm_nav = document.querySelector("#cross_nav");

// For Newsletter

nwesltr_close.addEventListener("click", () => {
  bg_newsltr.classList.add("hidden");
  main_newsltr_div.classList.remove("flex");
  main_newsltr_div.classList.add("hidden");
  document.body.classList.remove("overflow-y-hidden");
});

// For Sm NavBar
click_sm_nav.addEventListener("click", () => {
  show_sm_nav.classList.remove("-left-full");
  show_sm_nav.classList.add("left-0");
  document.body.classList.add("overflow-y-hidden");
});
cross_sm_nav.addEventListener("click", () => {
  show_sm_nav.classList.remove("left-0");
  show_sm_nav.classList.add("-left-full");
  document.body.classList.remove("overflow-y-hidden");
});
