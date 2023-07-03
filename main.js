  // Script 1 - Hello World!
  window.alert("Hello World!");

  // Script 2 - Soma
  var a = 5;
  var b = 3;
  var soma = a + b;
  document.write("O resultado da soma é: " + soma + "<br>");

  // Script 3 - Verificação de número
  var valor = 42;
  if (typeof valor === 'number') {
    document.write("É um número" + "<br>");
  } else {
    document.write("Não é um número" + "<br>");
  }

  // Script 4 - Verificação de string
  var valor = "Olá, mundo!";
  if (typeof valor === 'string') {
    document.write("É uma string" + "<br>");
  } else {
    document.write("Não é uma string" + "<br>");
  }

  // Script 5 - Verificação de booleano
  var valor = true;
  if (typeof valor === 'boolean') {
    document.write("É um booleano" + "<br>");
  } else {
    document.write("Não é um booleano" + "<br>");
  }

  // Script 6 - Subtração
  var a = 10;
  var b = 5;
  var subtracao = a - b;
  document.write("O resultado da subtração é: " + subtracao + "<br>");

  // Script 7 - Multiplicação
  var a = 7;
  var b = 4;
  var multiplicacao = a * b;
  document.write("O resultado da multiplicação é: " + multiplicacao + "<br>");

  // Script 8 - Divisão
  var a = 12;
  var b = 3;
  var divisao = a / b;
  document.write("O resultado da divisão é: " + divisao + "<br>");

  // Script 9 - Verificação de número par
  var valor = 8;
  if (typeof valor === 'number' && valor % 2 === 0) {
    document.write("É um número par" + "<br>");
  } else {
    document.write("Não é um número par" + "<br>");
  }

  // Script 10 - Verificação de número ímpar
  var valor = 7;
  if (typeof valor === 'number' && valor % 2 !== 0) {
    document.write("É um número ímpar" + "<br>");
  } else {
    document.write("Não é um número ímpar" + "<br>");
  }
