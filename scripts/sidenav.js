function openNav() {
  document.getElementById("sidenav").style.width = "20vw";
  document.getElementById("sidenavbackground").style.opacity = "1";
  document.getElementById("sidenavbackground").style.visibility = "visible";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenavbackground").style.opacity = "0";
  document.getElementById("sidenavbackground").style.visibility = "hidden";
}
