import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  numero: number = 0
  resultado: string = ''

  verificarDivisibilidade() {
    if (this.numero % 10 === 0) {
      this.resultado = 'O número é divisível por 10';
    } else if (this.numero % 5 === 0) {
      this.resultado = 'O número é divisível por 5';
    } else if (this.numero % 2 === 0) {
      this.resultado = 'O número é divisível por 2';
    } else {
      this.resultado = 'O número não é divisível por 10, 5 ou 2';
    }
  }

  nome: string = '';
  anoConclusao: number = 2024;
  mensagem: string = '';

  exibirMensagem() {
    this.mensagem = `Técnico em Informática Integrado ao Ensino Médio - Senac São Bernardo, concluído por ${this.nome} no ano de ${this.anoConclusao}`;
  }

  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  resultado2: string = '';

  verificarComparacao() {
    const somaAC = this.a + this.c;
    const multiplicacaoBD = this.b * this.d;

    if (somaAC > multiplicacaoBD) {
      this.resultado = 'A + C é maior que B * D';
    } else if (somaAC < multiplicacaoBD) {
      this.resultado = 'A + C é menor que B * D';
    } else {
      this.resultado = 'A + C é igual a B * D';
    }
  }

  av1: number = 0;
  av2: number = 0;
  av3: number = 0;
  av4: number = 0;
  resultadoMedia: string = '';

  calcularMediaNota() {
    const media = (this.av1 + this.av2 + this.av3 + this.av4) / 4;

    if (media >= 7) {
      this.resultadoMedia = `Aprovado! Média: ${media}`;
    } else {
      this.resultadoMedia = `Reprovado! Média: ${media}`;
    }
  }

  valor1: number = 0;
  valor2: number = 0;
  valor3: number = 0;
  valor4: number = 0;
  valor5: number = 0;
  media: string = '';

  calcularMedia() {
    const soma = this.valor1 + this.valor2 + this.valor3 + this.valor4 + this.valor5;
    const mediaCalculada = soma / 5;
    this.media = `A média calculada é: ${mediaCalculada}`;
  }
}

