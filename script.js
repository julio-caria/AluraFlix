function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmes(filmeFavorito);
  } else {
    console.error("Endereço de Filme inválido!");
  }
  document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
  var elementoFavorito = "<img src='" + filme + "'>";
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFavorito;
}
