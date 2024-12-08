window.onscroll = function () {
  let boxButton = document.getElementById('ad-color');
  boxButton.style.transition = "background-color 0.3s ease, background-opacity 0.3s ease";
  if (window.scrollY > 0) {
    boxButton.classList.add("bg-slate-300", "bg-opacity-50"); 
    } else {
    boxButton.classList.remove("bg-slate-300", "bg-opacity-50");
  }
};