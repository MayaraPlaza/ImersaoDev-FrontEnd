var jogadores = [];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;

  return pontos;
}

function exibirJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento +=
      "<td><button onClick='apagarJogador(" + i + ")'>Apagar</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibirJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadores(jogadores);
}

function adicionarJogador() {
  var novoJogador = {};

  novoJogador.nome = document.getElementById("nomeJogador").value;
  novoJogador.vitorias = 0;
  novoJogador.empates = 0;
  novoJogador.derrotas = 0;
  novoJogador.pontos = 0;

  if (novoJogador.nome == "") {
    alert("Por favor, preencha o campo.");
  } else {
    jogadores.push(novoJogador);
  }
  exibirJogadores(jogadores);
}

function apagarJogador(i) {
  jogadores.splice(i, 1);
  exibirJogadores(jogadores);
}
