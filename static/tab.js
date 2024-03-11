function openCity(evt, cityName) {
  document.getElementById("kezd").style.display = "none";
  /*ez teszi láthatatlanná a kezdőlapot, ha más lapra kattintunk*/

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  /*ez teszi aktívvá az éppen betöltött menüoldalt*/

  document.getElementById(cityName).style.display = "block";
  /*ez teszi láthatóvá a kattintott menüoldalt, az id-je alapján*/

  evt.currentTarget.className += " active";
}