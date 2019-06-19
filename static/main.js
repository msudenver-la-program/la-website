function showNav() {
    var x = document.getElementById("navbar");
    if (x.className.indexOf("w3-show") == -1) {
        //x.className = x.className.replace(" w3-hide", "")
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        //x.className += " w3-hide";
  }
}