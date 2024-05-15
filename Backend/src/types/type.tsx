
// Interface para uma pergunta
export interface Perguntas {
    texto: string;
    opcoes: string[];
    respostaCorreta: number;
  }
  
  // Interface para o estado do jogo
  export interface EstadoJogo {
    perguntas: Perguntas[];
    perguntaAtual: number;
    pontuacao: number;
  }
  
  // Tipo para a função de verificação de resposta
   export type VerificarResposta = (resposta: number) => void;
    