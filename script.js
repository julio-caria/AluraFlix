function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmes(filmeFavorito, nomeFilme);
  } else {
    console.error("Endereço de Filme inválido!");
  }
  filme = "";
  document.getElementById("nomeFilme").value = "";
  document.getElementById("filme").value = "";
}

function listarFilmes(linkFilme, nomeFilme) {
  var elementFavorito =
    "<div class='container-filme'><img src='" + linkFilme + "'>";
  var elementNomeFilme = "<p class='movieName'>" + nomeFilme + "</p></div>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementFavorito + elementNomeFilme;
  document.getElementsByClassName("movieName").classList.add("movieName");
}
