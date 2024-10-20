import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'myProject';

  mainForm: FormGroup;


  resultado: string = ''

  anoConclusao: number = 2024;
  mensagem: string = '';

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

  constructor(){
    this.mainForm = new FormGroup({
      numero: new FormControl('', Validators.compose([Validators.required, Validators.nullValidator])),
      nome: new FormControl('', [Validators.required, Validators.nullValidator]),
      numberA: new FormControl('', Validators.required),
      numberB: new FormControl('', Validators.required),
      numberC: new FormControl('', Validators.required),
      numberD: new FormControl('', Validators.required),
    })

  }
// COLOCAR VALIDATORS PARA O FORMS, CONECTAR AO BANCO, MANDAR AO BANCO......
  ngOnInit(): void {

  }

  verificarDivisibilidade() {
    const numero = this.mainForm.get('numero')?.value;
    console.log(numero)

    if (typeof(numero) != 'number') {
      this.resultado = 'Insira um número';
    } else if (numero === 0) {
      this.resultado = 'Não insira 0';
    } else {
      if (numero % 10 === 0) {
        this.resultado = 'O número é divisível por 10';
      } else if (numero % 5 === 0) {
        this.resultado = 'O número é divisível por 5';
      } else if (numero % 2 === 0) {
        this.resultado = 'O número é divisível por 2';
      } else {
        this.resultado = 'O número não é divisível por 10, 5 ou 2';
      }
    }

  }

  exibirMensagem() {
    const nome = this.mainForm.get('nome')?.value || false
    if (nome) {
      this.mensagem = `Técnico em Informática Integrado ao Ensino Médio - Senac São Bernardo, concluído por ${this.mainForm.get('nome')?.value} no ano de ${this.anoConclusao}.`;
    } else {
      this.mensagem = `Insira seu nome, se deseja ver a mensagem.`
    }

  }

  verificarComparacao() {
    const numberA = this.mainForm.get('numberA')?.value || 0;
    const numberB = this.mainForm.get('numberB')?.value || 0;
    const numberC = this.mainForm.get('numberC')?.value || 0;
    const numberD = this.mainForm.get('numberD')?.value || 0;
    const somaAC = numberA + numberC;
    const multiplicacaoBD = numberB * numberD;

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

