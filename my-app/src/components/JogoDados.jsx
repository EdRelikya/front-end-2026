"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [jogadorAtual, setJogadorAtual] = useState(1);

  const [dadosJogador1, setDadosJogador1] = useState([0, 0]);
  const [dadosJogador2, setDadosJogador2] = useState([0, 0]);

  const [resultadoRodada, setResultadoRodada] = useState("");

  const [vitorias1, setVitorias1] = useState(0);
  const [vitorias2, setVitorias2] = useState(0);

  const [fimDeJogo, setFimDeJogo] = useState(false);
  const [mensagemFinal, setMensagemFinal] = useState("");

  function gerarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogarJogador1() {
    const dado1 = gerarDado();
    const dado2 = gerarDado();

    setDadosJogador1([dado1, dado2]);
    setJogadorAtual(2);
  }

  function jogarJogador2() {
    const dado1 = gerarDado();
    const dado2 = gerarDado();

    const novosDadosJogador2 = [dado1, dado2];
    setDadosJogador2(novosDadosJogador2);

    const soma1 = dadosJogador1[0] + dadosJogador1[1];
    const soma2 = novosDadosJogador2[0] + novosDadosJogador2[1];

    if (soma1 > soma2) {
      setResultadoRodada("Jogador 1 ganhou a rodada");
      setVitorias1((v) => v + 1);
    } else if (soma2 > soma1) {
      setResultadoRodada("Jogador 2 ganhou a rodada");
      setVitorias2((v) => v + 1);
    } else {
      setResultadoRodada("Empatou");
    }

    if (rodada === 5) {
      const total1 = soma1 > soma2 ? vitorias1 + 1 : vitorias1;
      const total2 = soma2 > soma1 ? vitorias2 + 1 : vitorias2;

      if (total1 > total2) {
        setMensagemFinal("Jogador 1 venceu a partida!");
      } else if (total2 > total1) {
        setMensagemFinal("Jogador 2 venceu a partida!");
      } else {
        setMensagemFinal("A partida terminou empatada!");
      }

      setFimDeJogo(true);
    } else {
      setRodada((r) => r + 1);
      setJogadorAtual(1);
    }
  }

  function reiniciar() {
    setRodada(1);
    setJogadorAtual(1);

    setDadosJogador1([0, 0]);
    setDadosJogador2([0, 0]);

    setResultadoRodada("");

    setVitorias1(0);
    setVitorias2(0);

    setFimDeJogo(false);
    setMensagemFinal("");
  }

  return (
    <div className="container">
      <h1>Jogo de Dados</h1>

      <h2>Rodada {rodada} de 5</h2>

      <div className="jogadores">
        <div className="card">
          <h3>Jogador 1</h3>

          <div className="dados">
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>

          <button
            onClick={jogarJogador1}
            disabled={jogadorAtual !== 1 || fimDeJogo}
          >
            Jogar Jogador 1
          </button>
        </div>

        <div className="card">
          <h3>Jogador 2</h3>

          <div className="dados">
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>

          <button
            onClick={jogarJogador2}
            disabled={jogadorAtual !== 2 || fimDeJogo}
          >
            Jogar Jogador 2
          </button>
        </div>
      </div>

      <h3>{resultadoRodada}</h3>

      <p>Vitórias Jogador 1: {vitorias1}</p>
      <p>Vitórias Jogador 2: {vitorias2}</p>

      {fimDeJogo && (
        <div>
          <h2>{mensagemFinal}</h2>

          <button onClick={reiniciar}>
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}