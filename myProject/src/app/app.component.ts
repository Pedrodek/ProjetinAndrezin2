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

  nome: string = '';
  anoConclusao: number = 2024;
  mensagem: string = '';

  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;
  resultado2: string = '';

  nota_1: number = 0;
  nota_2: number = 0;
  nota_3: number = 0;
  nota_4: number = 0;
  resultadoMedia: string = '';

  valor_1: number = 0;
  valor_2: number = 0;
  valor_3: number = 0;
  valor_4: number = 0;
  valor_5: number = 0;
  media: string = '';

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

  exibirMensagem() {
    this.mensagem = `Técnico em Informática Integrado ao Ensino Médio - Senac São Bernardo, concluído por ${this.nome} no ano de ${this.anoConclusao}`;
  }

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

  calcularMediaNota() {
    const media = (this.nota_1 + this.nota_2 + this.nota_3 + this.nota_4) / 4;

    if (media >= 7) {
      this.resultadoMedia = `Aprovado! Média: ${media}`;
    } else {
      this.resultadoMedia = `Reprovado! Média: ${media}`;
    }
  }

  calcularMedia() {
    const soma = this.valor_1 + this.valor_2 + this.valor_3 + this.valor_4 + this.valor_5;
    const mediaCalculada = soma / 5;
    this.media = `A média calculada é: ${mediaCalculada}`;
  }
}

