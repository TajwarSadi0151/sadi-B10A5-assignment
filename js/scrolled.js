window.onscroll = function () {
  let boxButton = document.getElementById('ad-color');
  if (window.scrollY > 0) {
    boxButton.classList.add("bg-slate-300", "bg-opacity-50"); 
    } else {
    boxButton.classList.remove("bg-slate-300", "bg-opacity-50");
  }
};