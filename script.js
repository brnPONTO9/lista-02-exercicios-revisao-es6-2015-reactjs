
const container = document.getElementById('container');

function card(t,r){
 container.innerHTML += `<div class="card"><div class="titulo">${t}</div><div class="resultado">${r}</div></div>`;
}

// 11
class Animal{ emitirSom(){ return "Som genérico"; } }
class Cachorro extends Animal{ emitirSom(){ return "Latido"; } }
card("EXERCÍCIO 11","Som emitido: " + new Cachorro().emitirSom());

//12 e 13
class Funcionario{
 constructor(nome,salario){ this.nome=nome; this.salario=salario; }
}
class Gerente extends Funcionario{
 constructor(nome,salario,departamento){
   super(nome,salario);
   this.departamento=departamento;
 }
}
const gerente = new Gerente("Carlos",8000,"Financeiro");
card("EXERCÍCIO 12 e 13",
`Nome: ${gerente.nome}
Salário: R$ ${gerente.salario}
Departamento: ${gerente.departamento}`);

//14 e 16
class Conta{
 constructor(saldo){ this.saldo=saldo; }
 depositar(v){ this.saldo += v; }
 sacar(v){
   if(v <= this.saldo){ this.saldo -= v; }
 }
}
class ContaPoupanca extends Conta{
 aplicarJuros(){ this.saldo *= 1.05; }
}
const conta = new ContaPoupanca(1000);
conta.aplicarJuros();
card("EXERCÍCIO 14 e 16",`Saldo após juros: R$ ${conta.saldo.toFixed(2)}`);

//15
class Veiculo{ mover(){ return "Movendo"; } }
class Aviao extends Veiculo{ mover(){ return "Avião voando"; } }
class Carro extends Veiculo{ mover(){ return "Carro andando"; } }
card("EXERCÍCIO 15",`${new Aviao().mover()}
${new Carro().mover()}`);

//17
class Forma{ desenhar(){ return "Desenhando forma..."; } }
class Circulo extends Forma{ desenhar(){ return "Desenhando um círculo ◯"; } }
class Quadrado extends Forma{ desenhar(){ return "Desenhando um quadrado □"; } }
card("EXERCÍCIO 17",`${new Circulo().desenhar()}
${new Quadrado().desenhar()}`);

//18
class Usuario{ constructor(nome){ this.nome=nome; } }
class Professor extends Usuario{ lancarNota(){ return "Nota lançada no sistema"; } }
class Aluno extends Usuario{ entregarTrabalho(){ return "Trabalho entregue"; } }
card("EXERCÍCIO 18",
`${new Professor("Ana").lancarNota()}
${new Aluno("Pedro").entregarTrabalho()}`);

//19
class ItemPedido{
 constructor(qtd,preco){ this.quantidade=qtd; this.preco=preco; }
 total(){ return this.quantidade * this.preco; }
}
const item = new ItemPedido(3,50);
card("EXERCÍCIO 19",`Total do Item: R$ ${item.total().toFixed(2)}`);

//20
class CarroBase{
 constructor(marca){ this.marca=marca; }
}
class CarroEletrico extends CarroBase{
 constructor(marca,bateria){
  super(marca);
  this.bateria=bateria;
 }
}
const tesla = new CarroEletrico("Tesla","85 kWh");
card("EXERCÍCIO 20",
`Marca: ${tesla.marca}
Bateria: ${tesla.bateria}`);
