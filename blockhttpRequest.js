function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "", true);
  xhttp.send();
}

// Try commenting this
XMLHttpRequest.prototype.send = function() {
  return false;
}
