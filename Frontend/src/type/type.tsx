
  
// Tipo para a função de verificação de resposta
export type VerificarResposta = (resposta: number) => void;

interface IUsuario {
  email: string;
  senha: string;
  // cadastrar: () => Promise<void>;
  // login: () => Promise<void>;
}

export interface IMissao {
  texto: string;
  opcoes: string[];
  respostaCorreta: number;
}

// Interface para o estado do jogo
export interface EstadoJogo {
  perguntas: IMissao[];
  perguntaAtual: number;
  pontuacao: number;
}

class Usuario implements IUsuario {
  public id: number;
  public nome: string;
  public senha: string;
  public email: string;

constructor(id: number, nome: string, senha: string, email: string) {
  this.id = id;
  this.nome = nome;
  this.senha = senha;
  this.email = email;
}

  public getId(): number {
      return this.id;
  }

  public setId(id: number): void {
      this.id = id;
  }

  public getNome(): string {
      return this.nome;
  }

  public setNome(nome: string): void {
      this.nome = nome;
  }

  public getSenha(): string {
      return this.senha;
  }

  public setSenha(senha: string): void {
      this.senha = senha;
  }

  public getEmail(): string {
      return this.email;
  }

  public setEmail(email: string): void {
      this.email = email;
  }

  // async cadastrar(): Promise<void> {
  //   try {
  //     await auth().createUserWithEmailAndPassword(this.nome, this.email, this.senha);
  //     console.log('Usuário cadastrado com sucesso!');
  //   } catch (error: any) {
  //     console.error('Erro ao cadastrar usuário:', error.message);
  //     throw new Error(error.message);
  //   }
  // }

//   async login(): Promise<void> {
//     try {
//       await auth().signInWithEmailAndPassword(this.email, this.senha);
//       console.log('Usuário logado com sucesso!');
//     } catch (error: any) {
//       console.error('Erro ao logar usuário:', error.message);
//       throw new Error(error.message);
//     }
//   }
// }


// export default Usuario;
// function auth() {
//   throw new Error("Function not implemented.");
}

